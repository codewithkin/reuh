"use server";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "../../prisma";

export async function Logout () {
        // Sign out
        await signOut();

        // Redirect to auth page
        return redirect("/auth")
}

export async function getData(model: "notification" | "user" | "headshot" | "interviewQuestion" | "resume" | "coverLetter") {
    try {
        switch (model) {
            case "user":
                const { user } = await auth();
                
                const me = await prisma.user.findUnique({
                    where: {
                        email: user?.email
                    }
                })

                return me;
            case "notification":                
                return await prisma.notifications.findMany();
            case "headshot":
                return await prisma.headshot.findMany();
            case "interviewQuestion":
                return await prisma.interviewQuestion.findMany();
            case "resume":
                return await prisma.resume.findMany();
            case "coverLetter":
                return await prisma.coverLetter.findMany();
            default:
                throw new Error(`Unknown model: ${model}`);
        }
    } catch (e) {
        console.log(e);
    }
}

export async function updateUser(prevState: any, formData: FormData) {
    const { user } = await auth();

    await prisma.user.update({
        where: {
            email: user?.email
        },
        data: {
            name: formData.get("name") as string,
            occupation: formData.get("occupation") as string
        }
    })

    return {
        success: true,
        message: "User updated successfully"
    }
}

