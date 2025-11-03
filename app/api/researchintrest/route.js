import { NextResponse } from "next/server";
import { databases } from "@/utils/appwrite";
import { retryWithBackoff } from "@/utils/retryFetch";

export async function GET() {
  try {
    const res = await retryWithBackoff(
      () => databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        "researchintrest"
      ),
      3, // 3 retries
      500 // Start with 500ms delay
    );

    return NextResponse.json(res.documents);
  } catch (error) {
    console.error("Error fetching research data:", error.message || error);
    return NextResponse.json(
      { error: "Failed to fetch data", message: error.message },
      { status: 500 }
    );
  }
}
