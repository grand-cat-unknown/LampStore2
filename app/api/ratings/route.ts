import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

// GET /api/ratings
export async function GET() {
  try {
    // Fetch all rows from the "ratings" table
    const { data, error } = await supabase
      .from("ratings")
      .select("*");

    if (error) {
      console.error("GET ratings error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Convert Supabase rows into the shape { ratingKey: ratingValue }
    const ratings: Record<string, number> = {};
    data?.forEach((row) => {
      ratings[row.lampId] = row.rating;
    });

    return NextResponse.json({ ratings });
  } catch (error: any) {
    console.error("GET ratings exception:", error);
    return NextResponse.json(
      { error: "Failed to fetch ratings", details: error.message },
      { status: 500 }
    );
  }
}

// POST /api/ratings
export async function POST(request: Request) {
  try {
    const { lampId, rating } = await request.json();
    if (!lampId) {
      return NextResponse.json(
        { error: "lampId is required" },
        { status: 400 }
      );
    }

    // Upsert (insert or update) rating in Supabase "ratings" table
    const { error } = await supabase
      .from("ratings")
      .upsert({ lampId, rating });

    if (error) {
      console.error("POST ratings error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // Refetch the entire table for returning updated data
    const { data, error: fetchError } = await supabase
      .from("ratings")
      .select("*");

    if (fetchError) {
      return NextResponse.json(
        { error: fetchError.message },
        { status: 500 }
      );
    }

    // Convert rows into { ratingKey: ratingValue }
    const updatedRatings: Record<string, number> = {};
    data?.forEach((row) => {
      updatedRatings[row.lampId] = row.rating;
    });

    return NextResponse.json({
      success: true,
      ratings: updatedRatings,
    });
  } catch (error: any) {
    console.error("POST ratings exception:", error);
    return NextResponse.json(
      { error: "Failed to update rating", details: error.message },
      { status: 500 }
    );
  }
} 