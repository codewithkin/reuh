import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DesktopNav() {
  return (
    <nav className="md:flex hidden justify-between items-center bg-primaryDark px-8 py-4 text-dullLight">
      {/* Logo */}
      <div className="text-2xl font-bold flex gap-2 items-center">
        {/* Logo Image */}
        <Image src="/Icon.png" alt="Reuh logo" width={40} height={40} />

        {/* Text */}
        <h1 className={`${poppins.className} text-2xl font-bold text-primaryLight`}>Reuh</h1>
      </div>

      {/* Nav Links */}
      <ul className="flex gap-4 font-semibold">
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/">Resume builder</Link>
        </li>
        <li>
            <Link href="/">Cover Letters</Link>
        </li>
        <li>
            <Link href="/">Headshots</Link>
        </li>
      </ul>

      <article className="flex items-center gap-4 font-semibold">
        <Link
        className="border-2 rounded-xl border-dullLight text-dullLight transition-all duration-300 hover:bg-dullLight hover:text-primaryDark px-4 py-2 rounded-md"
        href="/">
            Features
        </Link>

        <Link 
        className="rounded-xl bg-primaryLight text-white transition-all duration-500 hover:shadow-xl px-4 py-2"
        href="/">
            Pre-order for free
        </Link>
      </article>
    </nav>
  )
}
