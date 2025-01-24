import { generateHeadshot } from "@/lib/ai/generateHeadshot";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Extract the uploaded file from the FormData
    const formData = await req.formData();
    const file = formData.get("headshot") as Blob;

    if (!file) {
      return NextResponse.json({ message: "No file uploaded." }, { status: 400 });
    }

    // Convert the Blob to a Buffer for further processing
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Placeholder for sending to OpenAI DALL·E
    const headshotUrl = await generateHeadshot(buffer);

    // For now, return the uploaded headshotUrl
    return NextResponse.json({
      headshotUrl,
    });
  } catch (error) {
    console.error("Error processing headshot upload:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the image." },
      { status: 500 }
    );
  }
}
