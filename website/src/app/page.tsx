import CTA from "@/components/page/CTA";
import FAQ from "@/components/page/faq";
import Features from "@/components/page/features";
import Header from "@/components/page/header";
import Pricing from "@/components/page/pricing";
import Steps from "@/components/page/steps";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reuh - Professional Tools for the Modern Job Seeker",
  description:
    "Reuh empowers modern job seekers with AI-powered tools for resume generation, cover letters, headshots, and LinkedIn images. Elevate your career with Reuh today!",
  keywords: [
    "Reuh",
    "career tools",
    "resume generator",
    "cover letter generator",
    "AI headshots",
    "LinkedIn image creator",
    "job search tools",
    "career growth",
    "job seeker platform",
    "professional development",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  themeColor: "#2C67FF", // Adjust based on your brand color
  twitter: {
    card: "summary_large_image",
    title: "Reuh - Professional Tools for the Modern Job Seeker",
    description:
      "Discover AI-powered tools to boost your career. Create resumes, cover letters, headshots, and more with Reuh.",
    site: "@Reuh", // Replace with your actual Twitter handle
  },
};


export default function Home() {
  return (
    <div>
      <Header />
      <article className="flex flex-col justify-center items-center w-full">
        <Image src="/images/features/Dashboard.png" alt="Reuh dashboard" width={1000} height={1000} />
      </article>
      <Features />
      <Steps />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}
