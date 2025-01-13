import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "../../../../../prisma";
import { auth } from "@/auth";

export async function GET(request: NextRequest) {
    try {
        // Get the user's email
        const session = await auth();

    const user = session?.user;
    console.log("User: ", session);

    const id = user?.id;

    const resumes = await prisma.resume.findMany({
        where: {
            userId: user?.id
        }
    });

    return NextResponse.json({ resumes });
} catch (error) {
    console.error("Error: ", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
}
