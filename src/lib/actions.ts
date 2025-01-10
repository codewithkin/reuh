"use server";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function signInWithEmail(formData: FormData) {
        await signIn("resend", formData);
}

export async function Logout () {
        // Sign out
        await signOut();

        // Redirect to auth page
        redirect("/auth")
}