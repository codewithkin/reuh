"use client";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

export default function CreateCoverLetterButton({ pending }: { pending: boolean }) {
  return (
    <Button className="mt-2 bg-orange-500 transition duration-300 hover:bg-orange-700 min-w-[400px]">
      {pending && <Loader className="animate-spin w-4 h-4" />}
      {pending ? "Creating your cover letter..." : "Create my cover letter"}
    </Button>
  );
}
