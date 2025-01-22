"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CoverLetter } from "@prisma/client";
import { CheckCheck, Clipboard, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CoverLetterPreview({ coverLetter }: { coverLetter: CoverLetter }) {
  const [copied, setCopiedToClipboard] = useState(false);

  const splittedContent = coverLetter.content.split(" ").slice(0, 10).join(" ").concat("...");

  return (
    <Card className="hover:cursor-pointer trandition duration-300 hover:shadow-xl">
      <CardHeader>
        <Mail size={50} />
      </CardHeader>

      <CardContent>
        <article>
          <CardTitle className="text-xl">{coverLetter.companyName}</CardTitle>
          <p className="text-dullDark text-sm">{coverLetter.position}</p>
        </article>
        <CardDescription>{splittedContent}</CardDescription>
      </CardContent>

      <CardFooter className="grid gap-2">
        <p className="text-dullDark">Created on {coverLetter.createdAt.toString()}</p>
        {copied ? (
          <Button
            variant="secondary"
            className="bg-green-600 text-white hover:border hover:border-gray-400 hover:text-gray-400"
            onClick={() => {
              navigator.clipboard.writeText("");
              toast.success("Removed cover letter from clipboard");
              setCopiedToClipboard(false);
            }}
          >
            <CheckCheck size={16} />
            Copied to clipboard
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(coverLetter.content);
              toast.success("Copied to clipboard");
              setCopiedToClipboard(true);
            }}
          >
            <Clipboard size={16} />
            Copy to clipboard
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
