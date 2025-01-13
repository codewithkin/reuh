"use client";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export type QAProps = {
    question: string;
    answer: string;
}

export default function QA ({ question, answer }: QAProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className="flex flex-col gap-2 py-2 w-full border-b border-dullDark text-dullDark">
                    {/* Question */}
                    <motion.article
                        className="w-full font-semibold flex items-center justify-between text-lg"
                    >
                        {question}
                        {
                            isOpen ? <ChevronUp onClick={() => { setIsOpen(!isOpen)} } size={20} /> : <ChevronDown onClick={() => { setIsOpen(!isOpen)} } size={20} />
                        }
                    </motion.article>


                    {/* Answer */}
                    {
                        isOpen && (
                            <motion.article
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            className={`px-4 text-dullDark`}
                        >
                            {answer}
                        </motion.article>
                        )
                    }
                </article>
    )
}
