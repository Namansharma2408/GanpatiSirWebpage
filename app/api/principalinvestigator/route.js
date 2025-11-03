import { NextResponse } from "next/server";
import { databases } from "@/utils/appwrite";
import { retryWithBackoff } from "@/utils/retryFetch";
import { APPWRITE_DATABASE_ID } from "@/utils/constants";

export async function GET() {
  try {
    const res = await retryWithBackoff(
      () => databases.listDocuments(
        APPWRITE_DATABASE_ID,
        "principalinvestigator"
      ),
      3, // 3 retries
      500 // Start with 500ms delay
    );

    return NextResponse.json(res.documents);
  } catch (error) {
    console.error("Error fetching PI data:", error.message || error);
    return NextResponse.json(
      { error: "Failed to fetch data", message: error.message },
      { status: 500 }
    );
  }
}
