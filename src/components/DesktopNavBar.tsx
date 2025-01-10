"use client";
import { ChartBar, DoorOpen, PencilRuler, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function NavBar () {
    // Get the current url
    const url: string = usePathname();

    // Get the user's email
    const email = "kinzinzombe07@gmail.com"

    return (
        <nav className="hidden py-4 md:flex flex-col justify-between items-center md:h-full px-2 md:py-8 bg-primaryDark rounded-full md:rounded-2xl">
            <article className="flex flex-col gap-8">
                {/* Logo */}
                <Image
                    className="hidden md:flex"
                    src="/images/design/logo.png"
                    alt="Reuh logo"
                    width={50}
                    height={50}
                />

                {/* Links */}
                <ul className="text-dullLight flex md:flex-col gap-4 justify-center items-center">
                    <li>
                        <Link className={`${url === `/dashboard` && "text-primaryLight"} hover:text-primaryLight transition duration-300`} href="/dashboard">
                            <ChartBar />
                        </Link>
                    </li>
                    <li>
                        <Link className={`${url === `/dashboard/tools`} hover:text-primaryLight transition duration-300`} href="/">
                            <PencilRuler />
                        </Link>
                    </li>
                    <li>
                        <Link className={`${url === `/dashboard/profile`} hover:text-primaryLight transition duration-300`} href="/">
                            <User />
                        </Link>
                    </li>
                    <li>
                        <Link className={`${url === `/dashboard/settings`} hover:text-primaryLight transition duration-300`} href="/">
                            <Settings />
                        </Link>
                    </li>
                </ul>
            </article>

            {/* Logout */}
            <Button color="secondary" className="text-dullLight">
                <DoorOpen />
            </Button>
        </nav>
    )
}