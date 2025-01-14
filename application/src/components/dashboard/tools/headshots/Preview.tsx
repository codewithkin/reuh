import { Headshot } from "@prisma/client";

export default function HeadshotPreview({ headshot }: { headshot: Headshot }) {

    return (
        <article className="flex flex-col gap-4">
            <img src={headshot.imageUrl} alt="headshot" className="rounded-full w-60 h-60 border-4 hover:cursor-pointer transition duration-300 hover:shadow-xl border-purple-500" />
            <article className="flex flex-col gap-2">
            </article>
        </article>
    )
}