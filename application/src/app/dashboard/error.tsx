"use client";
import { Button } from "@/components/ui/button";
import { FileWarning } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  reset,
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
      <FileWarning className="text-red-500" size={70} />
      <article className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold text-red-500">An error occured</h2>
        <p className="text-dullDark">Please try again later or reload the page</p>
      </article>

      <Button color="primary" onClick={reset}>
        Reload
      </Button>
    </section>
  );
}
