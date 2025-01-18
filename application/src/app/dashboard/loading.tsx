import { LoaderCircle } from "lucide-react";

export default function Loading () {
    return (
        <section className="flex flex-col items-center w-screen h-screen justify-center">
           <LoaderCircle size={50} className="animate-spin text-orange-500" />
        </section>
    )
}