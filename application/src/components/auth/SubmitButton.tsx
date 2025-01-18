"use client";
import { MailOpen, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className="text-white font-medium flex justify-center items-center bg-gradient-to-r from-purple-600 to-primaryLight rounded-xl  py-2 px-16"
    >
      {pending ? <Loader2 size={20} className="animate-spin" /> : <MailOpen size={20} />}
      {pending ? "Signing you in..." : "Sign in with email"}
    </Button>
  );
}
