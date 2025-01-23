"use client";
import { MailCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function VerifyRequest() {
  return (
    <motion.section
      initial={{
        x: -100,
      }}
      animate={{
        x: 0,
      }}
      className="w-screen bg-gradient-to-tr from-purple-600 to-primaryLight h-screen flex flex-col justify-center items-center"
    >
      <form className="bg-white shadow-xl rounded-3xl p-8 w-fit flex flex-col justify-center items-center text-center">
        <MailCheck size={75} className="text-primaryDark" />
        <h2 className="text-3xl font-bold">Success !</h2>
        <p className="text-dullDark">Check your email for a login link</p>
      </form>
    </motion.section>
  );
}

export const dynamic = "force-dynamic";
