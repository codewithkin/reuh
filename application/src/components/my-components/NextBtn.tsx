"use client";
import { ChevronRight, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export default function NextBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="default"
      className="bg-gradient-to-tr text-white hover:from-primaryLight hover:to-orange-500 from-primaryLight to-purple-500 transition duration-300"
    >
      {pending ? "Processing..." : "Next"}
      {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : <ChevronRight size={20} />}
    </Button>
  );
}
