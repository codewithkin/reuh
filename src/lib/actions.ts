"use server";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function Logout () {
        // Sign out
        await signOut();

        // Redirect to auth page
        return redirect("/auth")
}