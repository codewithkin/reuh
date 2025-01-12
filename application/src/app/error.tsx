"use client";
import { Button } from "@/components/ui/button";
import { FileWarning } from "lucide-react";

export default function Error({retry}: {retry: () => void}) {
    return (
        <section className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
            <FileWarning className="text-red-500" size={70} />
            

            <Button color="primary" onClick={retry}>Reload</Button>
        </section>
    )
}