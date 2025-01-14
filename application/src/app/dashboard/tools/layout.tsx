import ToolsHeader from "@/components/dashboard/tools/Header";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Career Tools"
}

export default function ToolLayout({children}: {children: React.ReactNode}) {
    return (
        <section className="py-4 md:py-0 md:pb-8 px-4 w-full overflow-y-scroll h-screen">
            <ToolsHeader />
            {children}
        </section>
    )
}