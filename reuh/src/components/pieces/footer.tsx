import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
    return (
        <footer className="flex justify-between items-center py-4 px-8">
            <h2 className={`${poppins.className} font-semibold text-primaryLight text-2xl`}>Rehu</h2>

            <p className="text-dullDark">Built by <Link className="underline" href="https://groundupmvp.com">GroundUpMVP</Link></p>
        </footer>
    )
}