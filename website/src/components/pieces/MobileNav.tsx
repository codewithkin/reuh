"use client";
import { Menu, X } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import {motion} from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function MobileNav () {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="grid md:hidden gap-2 bg-primaryDark p-4">
            {/* Heading and show / hide icon */}
            <article className="flex gap-2 items-center text-white">
                {
                    isOpen ?
                    <X onClick={() => setIsOpen(!isOpen)} size={28} /> :
                    <Menu onClick={() => setIsOpen(!isOpen)} size={25} />
                }

                <h1 className={`${poppins.className} text-2xl text-white font-bold`}>Reuh</h1>
            </article>

            {/* Links */}
            {
                isOpen &&
                <motion.ul animate className="text-xl font-semibold text-white grid gap-4 py-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="https://app.reuh.pro/dashboard/tools/resume-builder">Resume Builder</Link>
                    </li>

                    <li>
                        <Link href="https://app.reuh.pro/dashboard/tools/cover-letter-builder">Cover Letters</Link>
                    </li>

                    <li>
                        <Link href="https://app.reuh.pro/dashboard/tools/headshot-generator">Headshots</Link>
                    </li>

                    <article className="grid gap-2 mt-4">
                        <Link className="w-full py-4 rounded-xl border-2 border-dullLight text-dullLight text-center flex justify-center items-center" href="#features">
                            Features
                        </Link>
                        <Link className="w-full shadow-md py-4 rounded-xl bg-primaryLight text-white text-center" href="https://app.reuh.pro/auth">
                            Get started for free
                        </Link>
                    </article>
                </motion.ul>
            }
        </nav>
    )
}