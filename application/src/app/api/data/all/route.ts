import type { NextRequest } from "next/server";
import {NextResponse} from "next/server";
import { prisma } from "../../../../../prisma";
import { getData } from "@/lib/actions";

export async function GET(request: NextRequest) {
    const userData = await getData("user");
    const user = Array.isArray(userData) ? userData[0] : userData;
    const id = user?.id;

    if(!id) {
        return NextResponse.json({error: "User not found"}, {status: 404});
    }

    const resumes = await prisma.resume.findMany({
        where: {
            userId: id
        }
    });
    const coverLetters = await prisma.coverLetter.findMany({
        where: {
            userId: id
        }
    });
    const interviewQuestions = await prisma.interviewQuestion.findMany({
        where: {
            userId: id
        }
    });
    const headshots = await prisma.headshot.findMany({
        where: {
            userId: id
        }
    });

    return NextResponse.json({resumes, coverLetters, interviewQuestions, headshots});
}