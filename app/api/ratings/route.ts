import { NextResponse } from "next/server"
import { Low } from "lowdb"
import { JSONFile } from "lowdb/node"
import path from "path"

// Force the route to run server-side at runtime, so it doesn't fail at build time.
export const dynamic = "force-dynamic"

// We'll store a single instance of the DB in memory here.
let db: Low<{ ratings: Record<string, number> }> | null = null

async function initDB() {
  if (!db) {
    // This file is ephemeral on Vercel. For local dev only:
    const file = path.join(process.cwd(), "data.json")
    const adapter = new JSONFile<{ ratings: Record<string, number> }>(file)
    db = new Low(adapter)
    await db.read()
    db.data ||= { ratings: {} }
  }
  return db
}

// GET /api/ratings
export async function GET() {
  const myDB = await initDB()
  return NextResponse.json({ ratings: myDB.data!.ratings })
}

// POST /api/ratings
export async function POST(request: Request) {
  try {
    const { lampId, rating } = await request.json()
    if (!lampId) {
      return NextResponse.json({ error: "lampId is required" }, { status: 400 })
    }

    const myDB = await initDB()
    myDB.data!.ratings[lampId] = rating
    await myDB.write()

    return NextResponse.json({
      success: true,
      ratings: myDB.data!.ratings,
    })
  } catch (error: any) {
    console.error("POST ratings error:", error)
    return NextResponse.json(
      { error: "Failed to update rating", details: error.message },
      { status: 500 }
    )
  }
} 