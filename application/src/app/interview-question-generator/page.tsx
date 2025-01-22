"use client";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { root } from "@/constants/rootUrl";
import { Bot, Copy, DoorOpen, Loader } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

type Conversation = {
    role: string;
    content: string;
}

export default function CoverLetterGenerator() {
  const name = "Kin";

  const [inputFocused, setInputFocused] = useState<boolean>(false);

  // Track the loading state
  const [loading, setLoading] = useState<boolean>(false);

  // Track the conversation data
  const [conversationData, setConversationData] = useState<Array<Conversation>>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
  
      const formData = new FormData(e.currentTarget);
      const interviewData = formData.get("interviewData") as string;
  
      setLoading(true);
  
      // Add the user's message to the conversationData
      setConversationData((prevData) => [
        ...prevData,
        { role: "user", content: interviewData },
      ]);
  
      // Send a request to the AI
      const res = await fetch(
        `${root}/api/interview-question-generator/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ interviewData }),
        }
      );
  
      const data: { success: boolean; message: string; response?: string } = await res.json();
      const { success, message, response } = data;
  
      if (success && response) {
        // Add the AI's response to the conversationData
        setConversationData((prevData) => [
          ...prevData,
          { role: "ai", content: response },
        ]);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error("Error during conversation update:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="overflow-y-scroll h-screen bg-gradient-to-tr from-orange-200 to-purple-200 py-4">
      {/* Metadata */}
      <article className="text-center flex flex-col gap-2 justify-center items-center">
        {/* AI icon */}
        <article className="flex transition duration-500 hover:shadow-xl hover:from-blue-600 hover:to-purple-300 flex-col justify-between items-center rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 text-white w-fit h-fit p-2">
          <Bot size={40} />
        </article>

        <article>
          <p className="text-md text-dullDark font-semibold">Hi there, {name}</p>
          <h2 className="text-primaryDark text-2xl font-semibold">
            Let's get this interview started !
          </h2>
          <p className="text-sm text-dullDark">
            Please provide the job's details, tone of questioning and any other details that are
            relevant
          </p>
        </article>
      </article>

      {/* User and AI messages */}
      <article className="flex flex-col gap-2 p-4">
        {
            conversationData.length > 0 &&
            conversationData.map((entry: {role: string, content: string}) => {
                const {role, content} = entry;

                return (
                    <article className={` ${role === "ai" && "items-end"} flex flex-col gap-1`}>
                        <article className={`rounded-xl hover:cursor-pointer whitespace-pre-wrap transition duration-300 shadow-sm hover:shadow-lg py-2 px-4 w-fit md:max-w-[400px] lg:max-w-[600px] text-sm ${role === "user" ? "bg-white text-primaryDark self-start" : "bg-primaryLight self-end text-white"}`}>
                            {content}
                        </article>

                        {/* Copy btn */}
                        <Button className="w-fit h-fit p-0 bg-transparent text-dullDark hover:bg-transparent" onClick={() => navigator.clipboard.writeText(content)} size="icon">
                            <Copy size={10} />
                        </Button>
                    </article>
                )
            })
        }
      </article>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 absolute bottom-1 md:bottom-4 w-full justify-center items-center"
      >
        <Button type="button" asChild className="shadow-xl rounded-full w-fit h-fit">
          <Link href="/dashboard">
            <DoorOpen size={25} />
          </Link>
        </Button>

        <article
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          className={` ${inputFocused && "ring-1 ring-primaryLight"} flex items-center bg-white rounded-full py-1`}
        >
          <Input
            name="interviewData"
            id="interviewData"
            placeholder="Interview: Software Engineer at Microsoft..."
            className="rounded-full min-w-[300px] md:min-w-[400px] bg-white placeholder:text-dullDark focus-visible:ring-0 border-none"
          />

          <Button className="bg-primaryLight hover:bg-primaryDark transition duration-300 rounded-full" type="submit">
            {
                loading &&
                <Loader className="animate-spin" size={20} />
            }
            { loading ? "Sending..." : "Send" }
          </Button>
        </article>
      </form>
    </section>
  );
}
