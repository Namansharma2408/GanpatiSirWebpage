import { NextResponse } from "next/server";
import { databases } from "@/utils/appwrite";
import { retryWithBackoff } from "@/utils/retryFetch";

export async function GET() {
  try {
    const res = await retryWithBackoff(
      () => databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        "facilities"
      ),
      3,
      500
    );

    return NextResponse.json(res.documents);
  } catch (error) {
    console.error("Error fetching facilities:", error.message || error);
    return NextResponse.json(
      { error: "Failed to fetch data", message: error.message },
      { status: 500 }
    );
  }
}
