import { File, FileQuestion, Image, Mail } from "lucide-react";

export type feature = {
    icon: typeof File,
    title: string,
    description: string,
    url: string,
    actionText: string,
    imageUrl: string
}

const features: feature[] = [
    {
        icon: File,
        title: "Resume Builder",
        description: "Our AI assistant can generate a high quality, consice resume for free. Each resume is tailored for a specific job when your provide the job description",
        url: "/",
        actionText: "Generate my Resume",
        imageUrl: "/images/features/New resume.png"
    },
    {
        icon: Mail,
        title: "Cover Letter Generator",
        description: "With Reuh, you no longer have to spend hours writing the perfect cover letter. Worse still, you'll need to do so for multiple jobs everyday. Our cover letter generator can easily generate a cover letter for you with 1 click !",
        url: "/",
        actionText: "Generate my cover letter",
        imageUrl: "/images/features/New Cover Letter Page.png"
    },
    {
        icon: Image,
        title: "Headshot Generate",
        description: "Our headshot generator uses AI to creater professional heashots suitable for LinkedIn, Indeed or job applications. We automatically make adjustments for lighting, background and photo quality to make your headshot high quality",
        url: "/",
        actionText: "Optimize my headshot",
        imageUrl: "/images/features/Upload Headshot.png"
    },
    {
        icon: FileQuestion,
        title: "Interview Preparation",
        description: "Automated practise interview questions to make sure you nail those Q & A sections. Our AI can also create mock interviews, grade your replies and help you improve your skills",
        url: "/",
        actionText: "Let's prepare",
        imageUrl: "/images/features/Interview prep.png"
    },
    {
        icon: File,
        title: "ATS Optimization",
        description: "The Reuh ATS Optimizer automatically optimize your Cover Letter and Resume to be compliant with ATS and AAA standards",
        url: "/",
        actionText: "Optimize now",
        imageUrl: "/images/features/Generating headshot loading page.png"
    },
    {
        icon: File,
        title: "Flexible Pricing Plans",
        description: "Reuh has very inclusive pricing tiers which offer the most basic functionality, advanced functionality and ultimate functionality. You can choose only what you need.",
        url: "#pricing",
        actionText: "View our plans",
        imageUrl: "/images/features/Pricing.png"
    }
]

export default features;