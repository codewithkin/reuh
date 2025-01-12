import { ArrowRight, Sparkle } from "lucide-react";
import {Poppins} from "next/font/google"
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "900"
})

export default function Header () {
    return (
        <header className="md:flex justify-center items-center align-center md:justify-between grid gap-8 md:gap-4 py-20 px-4 md:px-10">
            {/* Left */}
            <article className="grid gap-2 md:w-1/2">
                {/* Chip */}
                <Link href="/" className="rounded-full transition-all duration-300 hover:gap-8 h-fit w-fit border-2 font-bold flex gap-4 px-8 py-4 items-center border-primaryLight text-primaryLight hover:bg-primaryLight hover:text-white">
                    Get expert inteview feedback with Reuh

                    <ArrowRight />
                </Link>

                {/* Copy */}
                <article className="grid gap-1 mt-4">
                    <h2 className={`${poppins.className} text-6xl `}>
                        All the tools you need to end <span className="text-secondary">your job search.</span>
                    </h2>
                    <p className="text-dullLight">
                        Unlock professional tools to craft perfect resumes, cover letters, headshots and LinkedIn images - everything you need
                        to land your dream job. Don't believe us ? Try it out and see for yourself
                    </p>
                </article>

                {/* CTAs */}
                <article className="md:flex gap-2 grid items-center">
                    <Link 
                    className="rounded-xl text-center font-semibold bg-secondary text-white transition-all duration-500 hover:shadow-xl hover:bg-primaryDark px-4 md:py-2 py-4"
                    href="/">
                        Pre-order for free
                    </Link>
                    <Link
                    className="border-2 text-center font-semibold rounded-xl border-dullLight text-dullLight transition-all duration-300 hover:bg-dullLight hover:text-primaryDark px-4 md:py-2 py-4 rounded-md"
                    href="/">
                        Features
                    </Link>
                </article>
            </article>

            <article className="flex flex-col justify-center items-center gap-4">
                <article className="grid gap-4 md:flex justify-center items-center">
                    <Image src="/images/content/resume.png" alt="Resume Showcase" width={250} height={250} />
                    <Image src="/images/content/cv.png" alt="Resume Showcase" width={250} height={250} />
                </article>

                {/* User headshot */}
                <Image className="rounded-full p-4" src="/images/content/user2.jpg" alt="Image by wayhomestudio on freepik" width={300} height={300} />
            </article>
        </header>
    )
}