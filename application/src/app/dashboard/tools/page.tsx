import ToolsHeader from "@/components/dashboard/tools/Header"
import ToolCards from "@/components/dashboard/tools/ToolCards"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Career Tools"
}

export default function Tools() {
    return (
        <section className="py-4 md:py-0 md:pb-8 px-4 w-full">
          {/* Tool cards */}
          <ToolCards />
        </section>
    )
}