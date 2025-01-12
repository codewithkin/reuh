import { plans, plan } from "@/data/plans";
import { CircleCheck } from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ["700"]
})

export default function Pricing () {
    return (
        <section id="pricing" className="section bg-primaryDark">
            <h2 className="heading text-white">Plans that fit your career goals</h2>

            <article className="grid md:flex items-center justify-center gap-4 my-4">
                {
                    plans.map((plan: plan, index: number) => {
                        const { title, description, price, features, buttonText, actionUrl } = plan;

                        return (
                            <article key={index} className="grid gap-2 bg-white rounded-xl p-4 text-start">
                                {/* Copy */}
                                <article>
                                    <article className="w-full flex justify-between">
                                        <h3 className={`${montserrat.className} text-2xl font-semibold`}>{title}</h3>

                                        {
                                            title === "Premium" &&
                                            <article className="rounded-full bg-primaryLight text-center font-semibold flex justify-center items-center text-white px-8">
                                                Best Value
                                            </article>
                                        }
                                    </article>
                                    <p className="text-dullDark">{description}</p>
                                </article>

                                {/* Price */}
                                <h3 className="my-4 text-5xl font-semibold text-primaryDark"><span className="text-lg">$</span>{price}<span className="text-dullLight text-lg">/month</span></h3>
                            
                                {/* CTA */}
                                <Link 
                                    className={`${title === "Premium" ? "bg-primaryDark" : "bg-primaryLight"} hover:bg-secondary rounded-xl text-white font-semibold py-4 shadow-md transition duration-500 hover:shadow-xl text-center`}
                                    href={actionUrl}>
                                    {buttonText}
                                </Link>

                                {/* features */}
                                <article className="grid gap-2 text-dullDark font-semibold">
                                    {
                                        features.map((feature: string, index: number) => (
                                            <article key={index} className="flex gap-2 items-center">
                                                <CircleCheck fill={ title === "Premium" ? "#011936" : "#008BF8" } color="white" />
                                                {feature}
                                            </article>
                                        ))
                                    }
                                </article>
                            </article>
                        )
                    })
                }
            </article>
        </section>
    )
}