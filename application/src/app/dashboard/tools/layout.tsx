import ToolsHeader from "@/components/dashboard/tools/Header";

export default function ToolLayout({children}: {children: React.ReactNode}) {
    return (
        <section className="py-4 md:py-0 md:pb-8 px-4 w-full">
            <ToolsHeader />
            {children}
        </section>
    )
}