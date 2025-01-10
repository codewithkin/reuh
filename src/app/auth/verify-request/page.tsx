"use client";
import { MailCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function VerifyRequest() {
    return (
        <motion.section 
        initial={{
            x: -100
        }}

        animate={{
            x: 0
        }}
        className="w-screen h-screen flex flex-col justify-center items-center"
        style={{
            backgroundImage: "url(/images/design/suit.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <form
            className="bg-white rounded-3xl p-8 w-fit flex flex-col justify-center items-center text-center"
            >
                <MailCheck size={75} className="text-primaryDark" />
                <h2 className="text-3xl font-bold">Success !</h2>
                <p className="text-dullDark">Check your email for a login link</p>
            </form>
        </motion.section>
    )
}