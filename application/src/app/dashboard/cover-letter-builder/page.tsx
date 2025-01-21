"use client";
import CreateCoverLetterButton from "@/components/dashboard/cover-letter-builder/CreateCoverLetterBtn";
import Accordion from "@/components/my-components/Accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createCoverLetter } from "@/lib/actions";
import { CoverLetter } from "@prisma/client";
import { Building, Check, CheckCheck, Clipboard as ClipboardIcon, User2 } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function CreateCoverLetter() {
  const [loading, setLoading] = useState<boolean>(false);
  const [coverLetter, setCoverLetter] = useState<CoverLetter | null>();

  const [copied, setCopied] = useState<boolean>(false);

  const handleCreateNewCoverLetter = async (e: FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);

      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const { success, newCoverLetter, message } = await createCoverLetter(formData);

      if (success && newCoverLetter) {
        setCoverLetter(newCoverLetter);
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleCreateNewCoverLetter}
      className="py-4 md:py-12 overflow-y-scroll h-screen md:pb-8 md:px-4"
    >
      {!coverLetter ? (
        <article className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold">Let's create your Cover Letter</h2>
          <article className="flex flex-col gap-2 mt-4">
            {/* Personal Information */}
            <Accordion className="min-w-[400px]" icon={<User2 />} title="Personal Information">
              <div className="mt-4 flex flex-col gap-1">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="md:min-w-[400px]"
                />
              </div>

              <div className="mt-4 flex flex-col gap-1">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="example@example.com"
                  className="md:min-w-[400px]"
                />
              </div>

              <div className="mt-4 flex flex-col gap-1">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(123) 456-7890"
                  className="md:min-w-[400px]"
                />
              </div>
            </Accordion>

            {/* Company Information */}
            <Accordion className="min-w-[400px]" icon={<Building />} title="Company Information">
              <div className="mt-4 flex flex-col gap-1">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  type="text"
                  name="companyName"
                  required
                  placeholder="Deel"
                  className="md:min-w-[400px]"
                />
              </div>

              <div className="mt-4 flex flex-col gap-1">
                <Label htmlFor="companyAddress">Company Address</Label>
                <Input
                  type="text"
                  name="companyAddress"
                  required
                  placeholder="123 Company St"
                  className="md:min-w-[400px]"
                />
              </div>

              <div className="mt-4 flex flex-col gap-1">
                <Label htmlFor="position">Position Applied For</Label>
                <Input
                  type="text"
                  name="position"
                  required
                  placeholder="Software Engineer"
                  className="md:min-w-[400px]"
                />
              </div>
            </Accordion>

            <div className="mt-2 flex flex-col gap-1">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                name="description"
                required
                placeholder="We need a frontend developer..."
                className="md:min-w-[400px] min-h-[100px]"
              />
            </div>
          </article>

          <CreateCoverLetterButton pending={loading} />
        </article>
      ) : (
        <article className="flex flex-col justify-center items-center">
          <article className="my-4">
            <h2 className="text-2xl font-semibold text-center">Here it is</h2>
            <p className="text-dullDark text-center">
              You can copy your cover letter or view it later
            </p>
          </article>

          <Card className="rounded-none flex flex-col justify-center text-primaryDark">
            <CardHeader>
              <CardTitle className="text-primaryDark text-2xl">{coverLetter.company}</CardTitle>
              <p className="textDullDark">{coverLetter.position}</p>
            </CardHeader>

            <CardDescription className="flex flex-col text-primaryDark mb-4 whitespace-pre-wrap px-4">
              {coverLetter.content}
            </CardDescription>

            <CardFooter className="flex gap-2">
              {copied ? (
                <Button
                  className="border-primaryLight text-primaryLight flex gap-2 items-center"
                  variant="outline"
                  onClick={() => {
                    // Copy / Uncopy the cover letter content
                    navigator.clipboard.writeText("");

                    // Show a toast
                    toast("Cover Letter successfully removed from clipboard");

                    // Update the copied state
                    setCopied(!copied);
                  }}
                >
                  <CheckCheck size={20} />
                  Copied
                </Button>
              ) : (
                <Button
                  className="bg-primaryLight text-white flex gap-2 items-center"
                  onClick={() => {
                    // Copy / Uncopy the cover letter content
                    navigator.clipboard.writeText(coverLetter.content);

                    // Show a toast
                    toast.success("Cover Letter successfully copied to clipboard");

                    // Update the copied state
                    setCopied(!copied);
                  }}
                >
                  <ClipboardIcon size={20} />
                  Copy
                </Button>
              )}
              <Button
                variant="outline"
                className="bg-secondaryLight hover:bg-green-800 transition duration-300"
              >
                <Link className="flex gap-2 items-center" href="/dashboard">
                  <Check size={20} />
                  Done
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </article>
      )}
    </form>
  );
}
