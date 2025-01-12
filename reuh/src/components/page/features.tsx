import features, { feature } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function Features () {
    return (
        <section className="section bg-primaryDark text-white">
            <h2 className="heading">What you get</h2>

            <article className="grid mt-4 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 md:gap16">
                {
                    features.map((feature: feature, index) => {
                        const {actionText, title, description, url, imageUrl} = feature;

                        return (
                            <article key={index} className="rounded-3xl flex flex-col justify-center h-fit bg-white text-primaryDark shadow-xl p-4">
                                <Image className="my-4" src={imageUrl} alt={title} width={1000} height={500} />
                                <article className="flex gap-1 items-center">
                                    <article className="flex rounded-full font-bold text-xl text-white w-10 h-10 bg-primaryLight justify-center items-center">
                                        {index+1}
                                    </article>

                                    <h2 className="font-bold text-xl">{title}</h2>
                                </article>

                                <p className="text-dullDark my-2 text-start">{description}</p>

                                <Link href={url} className="rounded-full bg-primaryLight py-2 text-white font-semibold">
                                    {actionText}
                                </Link>
                            </article>
                        )
                    })
                }
            </article>
        </section>
    )
}