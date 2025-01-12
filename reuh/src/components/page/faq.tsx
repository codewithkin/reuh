import { QandA } from "@/data/qanda"
import { FileQuestion } from "lucide-react"
import QA from "../pieces/qa"

const imageUrl = "/images/support.jpg"

export default function FAQ () {
    return (
        <article className="grid gap-2 md:flex">
            <article className="md:w-1/2" style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
            </article>

            <article className="flex flex-col gap-2 px-4 py-8 justify-center md:w-1/2">
                <h2 className="heading">Frequently Asked Questions</h2>

                <article className="grid gap-2">
                    {
                        QandA.map((tuple: {question: string, answer: string}, index: number) => (
                            <QA key={index} question={tuple.question} answer={tuple.answer} />
                        ))
                    }
                </article>
            </article>
        </article>
    )
}