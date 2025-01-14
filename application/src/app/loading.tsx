import { Loader } from "lucide-react";

export default function Loading () {
    return (
        <section className="flex flex-col items-center w-full h-full justify-center">
           <Loader size={50} className="animate-spin text-primaryDark" />
        </section>
    )
}