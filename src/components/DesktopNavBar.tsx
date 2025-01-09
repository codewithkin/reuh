import Image from "next/image";
import Link from "next/link";

export default function NavBar () {
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
                <ul className="text-dullLight flex md:flex-col justify-center items-center">
                    <li>
                        <Link href="/">H</Link>
                    </li>
                    <li>
                        <Link href="/">H</Link>
                    </li>
                    <li>
                        <Link href="/">H</Link>
                    </li>
                    <li>
                        <Link href="/">H</Link>
                    </li>
                </ul>
            </article>

            {/* Logout */}
            <p className="md:flex hidden flex-col items-center justify-center text-dullLight">T</p>
        </nav>
    )
}