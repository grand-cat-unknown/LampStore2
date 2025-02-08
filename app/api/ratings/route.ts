import { NextResponse } from 'next/server'
import { JSONFileSync, LowSync } from 'lowdb'
import path from 'path'

// This is only an example for local dev. In production hosting on serverless (Vercel),
// you need a real DB or external store for persistence.

const file = path.join(process.cwd(), 'data.json') // you can pick a different file path
const adapter = new JSONFileSync<{ ratings: Record<string, number> }>(file)
const db = new LowSync(adapter)
// Initialize
db.read()
db.data ||= { ratings: {} }

export async function GET() {
  // In local dev, this will read from data.json.
  // On serverless, data.json is ephemeral.
  db.read()
  return NextResponse.json({ ratings: db.data.ratings })
}

export async function POST(request: Request) {
  try {
    const { lampId, rating } = await request.json()
    
    if (!lampId) {
      return NextResponse.json({ error: 'lampId is required' }, { status: 400 })
    }
    
    db.read()
    db.data.ratings[lampId] = rating
    db.write()
    
    return NextResponse.json({ success: true, ratings: db.data.ratings })
  } catch (error: any) {
    console.error('POST ratings error:', error)
    return NextResponse.json({ error: 'Failed to update rating', details: error.message }, { status: 500 })
  }
} 