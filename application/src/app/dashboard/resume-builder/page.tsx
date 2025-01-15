import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function ResumeBuilder () {

    return (
        <section className="px-4 sm:px-8 md:px-10 py-10 md:py-20 flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-start text-center font-semibold mb-8">How would you like to proceed ?</h2>
            <article className="flex gap-4 items-center md:flex-row flex-col-reverse">
                <Card className="border-2 border-gray-200 hover:cursor-pointer transition duration-300 hover:shadow-xl">
                    <CardHeader>
                        <CardTitle>Upload existing resume</CardTitle>
                        <CardDescription>Our AI will improve your resume with proper formatting and language</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button variant="outline" color="secondary" asChild>
                            <Link href="/dashboard/resume-builder/upload">
                                Upload resume
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="bg-primaryLight hover:text-white hover:bg-primaryDark border-gray-200 hover:cursor-pointer transition duration-300 hover:shadow-xl">
                    <CardHeader>
                        <article className="rounded-full hover:shadow-lg transition duration-300 text-xs font-semibold w-fit px-2 py-1 bg-secondaryLight test-primaryDark flex gap-1 items-center">
                            <Heart fill="red" className="border-0" size={10} />
                            Community Favorite
                        </article>

                        <CardTitle>Build a new resume from scratch</CardTitle>
                        <CardDescription className="text-dullLight">Select a template, add your information and voila ! Your new resume is ready</CardDescription>
                    </CardHeader>

                    <CardFooter>
                        <Button variant="outline" color="secondary" asChild>
                            <Link href="/dashboard/resume-builder/build">
                                Build my new resume
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </article>
        </section>
    )
}