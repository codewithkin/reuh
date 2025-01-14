import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { root } from "@/constants/rootUrl";
import { File, Mail, MessageSquare, User, UserRound } from "lucide-react";
import Link from "next/link";

export default async function ToolCards() {
    const response = await fetch(`${root}/api/data/resumes`);
    const resumes = await response.json();
    const resumesBuilt = resumes.resumes.length;

    return (
        <article className="my-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-primaryDark text-white">
            <CardHeader>
                <File size={40} />

                <article className="grid gap-2">
                    <CardTitle className="text-xl">
                        Resume Builder
                    </CardTitle>
                    <CardDescription className="text-white">
                        Modern, elegant and professional resumes in just 1 click
                    </CardDescription>
                </article>
            </CardHeader>

            <CardFooter className="grid gap-2">
                <p>Resumes Built: {resumesBuilt}</p>
                    <Button asChild className="hover:bg-purple-500 hover:text-primaryDark transition duration-300 bg-primaryLight text-primaryDark" color="primary">
                        <Link href="/dashboard/tools/resume-builder">
                            New Resume
                        </Link>
                    </Button>
            </CardFooter>
          </Card>

          <Card className="bg-primaryLight text-primaryDark">
            <CardHeader>
                <Mail size={40} />

                <article className="grid gap-2">
                    <CardTitle className="text-xl">
                        Cover Letter Builder    
                    </CardTitle>
                    <CardDescription className="text-white">
                        Cover Letters tailored to your specific job application
                    </CardDescription>
                </article>
            </CardHeader>

            <CardFooter className="grid gap-2">
                <p>Cover Letters Generated: {resumesBuilt}</p>
                    <Button asChild className="hover:bg-purple-500 hover:text-primaryDark transition duration-300 bg-white text-primaryDark" color="primary">
                        <Link href="/dashboard/tools/cover-letter-builder">
                            New Cover Letter
                        </Link>
                    </Button>
            </CardFooter>
          </Card>

          <Card className="bg-primaryDark text-white">
            <CardHeader>
                <MessageSquare size={40} />

                <article className="grid gap-2">
                    <CardTitle className="text-xl">
                        Interview Preparation
                    </CardTitle>
                    <CardDescription className="text-white">
                        All the tools you need to crush your job interview
                    </CardDescription>
                </article>
            </CardHeader>

            <CardFooter className="grid gap-2">
                <p>Interview s: {resumesBuilt}</p>
                    <Button asChild className="hover:bg-purple-500 hover:text-primaryDark transition duration-300 bg-primaryLight text-primaryDark" color="primary">
                        <Link href="/dashboard/tools/resume-builder">
                            New Interview Prep Session
                        </Link>
                    </Button>
            </CardFooter>
          </Card>

          <Card className="bg-primaryLight text-primaryDark">
            <CardHeader>
                <UserRound size={40} />

                <article className="grid gap-2">
                    <CardTitle className="text-xl">
                        Headshots
                    </CardTitle>
                    <CardDescription className="text-white">
                        Professional headshots at your fingertips
                    </CardDescription>
                </article>
            </CardHeader>

            <CardFooter className="grid gap-2">
                <p>My headshots: {resumesBuilt}</p>
                    <Button asChild className="hover:bg-purple-500 hover:text-primaryDark transition duration-300 bg-white text-primaryDark" color="primary">
                        <Link href="/dashboard/tools/resume-builder">
                            New Headshot
                        </Link>
                    </Button>
            </CardFooter>
          </Card>
        </article>
    )
}