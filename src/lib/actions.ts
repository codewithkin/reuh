"use server";

import { signIn } from "@/auth";

export async function signInWithEmail(formData: FormData) {
        const data = await signIn("resend", formData);
        console.log("Data: ", data);
}
