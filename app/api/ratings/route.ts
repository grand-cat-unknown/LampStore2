import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const ratingsPath = path.join(process.cwd(), 'public', 'lamp_ratings.json')

// GET /api/ratings
export async function GET() {
  try {
    const ratingsData = await fs.readFile(ratingsPath, 'utf-8')
    return NextResponse.json(JSON.parse(ratingsData))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch ratings' }, { status: 500 })
  }
}

// POST /api/ratings
export async function POST(request: Request) {
  try {
    const { lampId, rating } = await request.json()
    
    const ratingsData = await fs.readFile(ratingsPath, 'utf-8')
    const data = JSON.parse(ratingsData)
    
    data.ratings[lampId] = rating
    
    await fs.writeFile(ratingsPath, JSON.stringify(data, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update rating' }, { status: 500 })
  }
} 