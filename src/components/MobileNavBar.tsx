import Link from "next/link";

export default function MobileNavBar () {
    const url: string = "/"
    
    return (
        <nav className="md:hidden w-fit my-2 fixed bottom-0 text-white flex items-center bg-primaryDark rounded-full">
            <Link className={`${url === "/" && "bg-primaryLight rounded-full"} py-4 px-8 text-md font-semibold`} href="/">
                Home
            </Link>
            <Link className={`${url === "/tools" && "bg-primaryLight rounded-full"} py-4 px-8 text-md font-semibold`} href="/tools">
                Tools
            </Link>
            <Link className={`${url === "/profile" && "bg-primaryLight rounded-full"} py-4 px-8 text-md font-semibold`} href="/profile">
                Profile
            </Link>
            <Link className={`${url === "/settings" && "bg-primaryLight rounded-full"} py-4 px-8 text-md font-semibold`} href="/settings">
                Settings
            </Link>
        </nav>
    )
}