import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Settings"
}


export default function Settings() {
    return (
        <section className="py-4 overflow-y-scroll h-screen md:py-0 md:pb-8 px-4 w-full">
          <h2 className="font-semibold text-2xl">Settings</h2>
        </section>
    )
}