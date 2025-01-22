import { Metadata } from "next";

const metadata: Metadata = {
    title: "Interview Question Generator",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}