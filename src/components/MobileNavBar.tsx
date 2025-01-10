"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavBar () {
    const url: string = usePathname();

    // Get the user's email
    const email = "kinzinzombe07@gmail.com"

    return (
        <nav className="md:hidden w-fit my-2 fixed bottom-0 text-white flex items-center bg-primaryDark rounded-full">
            <Link className={`${url === `/dashboard` && "bg-primaryLight rounded-full"} flex gap-2 items-center py-4 px-4 text-md font-semibold`} href="/dashboard">
                Home
            </Link>
            <Link className={`${url === `/dashboard/tools` && "bg-primaryLight rounded-full"} flex gap-2 items-center py-4 px-4 text-md font-semibold`} href="/dashboard/tools">
                Tools
            </Link>
            <Link className={`${url === `/dashboard/profile` && "bg-primaryLight rounded-full"} flex gap-2 items-center py-4 px-4 text-md font-semibold`} href="/dashboard/profile">
                Profile
            </Link>
            <Link className={`${url === `/dashboard/settings` && "bg-primaryLight rounded-full"} flex gap-2 items-center py-4 px-4 text-md font-semibold`} href="/dashboard/settings">
                Settings
            </Link>
        </nav>
    )
}