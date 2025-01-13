import { step, steps } from "@/data/steps";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Steps () {
    return (
        <section className="section">
            <article className="mb-4">
                <h2 className="heading">
                    You + AI  = Success
                </h2>
                <p className="text-dullDark">Combine the power of AI with your creativity to create professional content to charge your success</p>
            </article>

            <article className="md:flex gap-4 items-center grid">
                {
                    steps.map((step: step, index: number) => {
                        const {title, description, actionText, url} = step;

                        return (
                            <article key={index} className="rounded-xl p-4 flex flex-col gap-2">
                                <article>
                                    <article className="h-12 w-12 bg-gradient-to-tr rounded-full font-bold text-white text-2xl from-primaryLight to-primaryDark flex items-center justify-center">
                                        {index+1}
                                    </article>

                                    <h2 className="text-2xl text-primaryDark font-bold text-start">{title}</h2>
                                </article>

                                <p className="text-dullDark text-start">{description}</p>

                                <Link 
                                className="text-primaryLight bg-primaryLight text-white rounded-full py-2 px-4 w-fit font-semibold flex gap-1 items-center transition-all duration-500 hover:gap-4"
                                href={url}>
                                    {actionText}
                                    <ArrowRight size={18} />
                                </Link>
                            </article>
                        )
                    })
                }
            </article>
        </section>
    )
}