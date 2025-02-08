import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

// Store the ratings file in the app directory instead of public
const ratingsPath = path.join(process.cwd(), 'data', 'lamp_ratings.json')

// Ensure the data directory and file exist
async function ensureRatingsFile() {
  try {
    const dir = path.dirname(ratingsPath)
    await fs.mkdir(dir, { recursive: true })
    try {
      await fs.access(ratingsPath)
    } catch {
      await fs.writeFile(ratingsPath, JSON.stringify({ ratings: {} }, null, 2))
    }
  } catch (error: any) {
    console.error('Failed to ensure ratings file:', error)
  }
}

// GET /api/ratings
export async function GET() {
  try {
    await ensureRatingsFile()
    const ratingsData = await fs.readFile(ratingsPath, 'utf-8')
    return NextResponse.json(JSON.parse(ratingsData))
  } catch (error: any) {
    console.error('GET ratings error:', error)
    return NextResponse.json({ error: 'Failed to fetch ratings', details: error.message }, { status: 500 })
  }
}

// POST /api/ratings
export async function POST(request: Request) {
  try {
    await ensureRatingsFile()
    const { lampId, rating } = await request.json()
    
    if (!lampId) {
      return NextResponse.json({ error: 'lampId is required' }, { status: 400 })
    }
    
    const ratingsData = await fs.readFile(ratingsPath, 'utf-8')
    const data = JSON.parse(ratingsData)
    
    data.ratings[lampId] = rating
    
    await fs.writeFile(ratingsPath, JSON.stringify(data, null, 2))
    
    return NextResponse.json({ success: true, ratings: data.ratings })
  } catch (error: any) {
    console.error('POST ratings error:', error)
    return NextResponse.json({ error: 'Failed to update rating', details: error.message }, { status: 500 })
  }
} 