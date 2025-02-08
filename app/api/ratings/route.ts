import { NextResponse } from "next/server"
import path from "path"
import { LowSync } from "lowdb"
import { JSONFileSync } from "lowdb/node"

// NOTE: This only works for local dev or environments that preserve disk writes.
// In typical Vercel serverless, these writes are lost on subsequent deploy/refresh.
const file = path.join(process.cwd(), "data.json")
const adapter = new JSONFileSync<{ ratings: Record<string, number> }>(file)
const db = new LowSync(adapter)
db.read()
db.data ||= { ratings: {} }

export async function GET() {
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
    console.error("POST ratings error:", error)
    return NextResponse.json(
      { error: "Failed to update rating", details: error.message },
      { status: 500 }
    )
  }
} 