"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SaveBtn() {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type="submit" className="bg-primaryLight hover:bg-primaryDark transition duration-300">
            {pending ? "Updating..." : "Save Changes"}
        </Button>
    )
}