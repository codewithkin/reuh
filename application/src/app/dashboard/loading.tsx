import { Loader } from "lucide-react";

export default function Loading () {
    return (
        <section className="flex flex-col items-center w-screen h-screen justify-center">
           <Loader size={50} className="animate-spin text-primaryDark" />
        </section>
    )
}