import Link from "next/link";

export default function CTA () {
    return (
        <section className="section bg-primaryDark text-white">
            <h2 className="heading">Ready to get started ?</h2>
            <p className="text-dullLight">Take the first step towards your professional success !</p>
            <article className="flex gap-2">
                <Link className="font-semibold rounded-xl bg-primaryLight py-2 px-4 text-white transition duration-300 hover:shadow-xl" href="/">
                    Pre-order now
                </Link>
                <Link className="rounded-xl border-2 border-secondary py-2 px-4 transition duration-00 hover:bg-secondary hover:text-primaryDark text-secondary font-semibold" href="/">
                    Explore pricing plans
                </Link>
            </article>
        </section>
    )
}