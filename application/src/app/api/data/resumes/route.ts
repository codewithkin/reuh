import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "../../../../../prisma";
import { auth } from "@/auth";
import { getData } from "@/lib/actions";

export async function GET(request: NextRequest) {
  try {
    const user = await getData("user");

    if (!user) throw new Error("User is not defined inside /api/data/resumes/route.ts");

    const id = user?.id;

    const resumes = await prisma.resume.findMany({
      where: {
        userId: user?.id,
      },
    });

    return NextResponse.json({ resumes });
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
