import ResumePreview from "@/components/dashboard/tools/resumes/Preview";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Career Tools"
}

export default function Tools() {
  const activeResourceTab: string = "resumes";
  
  const demoResumes = [
  {
    id: "1",
    title: "Software Engineer",
    content: "I am a software engineer with 5 years of experience.",
    userId: "1",
    imageUrl: "/images/content/CV.png",
    createdAt: new Date()
  },
  {
    id: "2",
    title: "Software Engineer",
    content: "I am a software engineer with 5 years of experience.",
    userId: "1",
    imageUrl: "/images/content/CV.png",
    createdAt: new Date()
  }, {
    id: "3",
    title: "Software Engineer",
    content: "I am a software engineer with 5 years of experience.",
    userId: "1",
    imageUrl: "/images/content/CV.png",
    createdAt: new Date()
  },
  {
    id: "4",
    title: "Software Engineer",
    content: "I am a software engineer with 5 years of experience.",
    userId: "1",
    imageUrl: "/images/content/CV.png",
    createdAt: new Date()
  },
  {
    id: "5",
    title: "Software Engineer",
    content: "I am a software uovheuekrj wecowcwjk cfowjk engineer with 5 years of experience.",
    userId: "1",
    imageUrl: "/images/content/CV.png",
    createdAt: new Date()
  },
  {
    id: "6",
    title: "Software Engineer",
    content: "I am a software engineer with 5 years of experience.",
    userId: "1",
    imageUrl: "/images/content/CV.png",
    createdAt: new Date()
  },
  {
    id: "7",
    title: "Software Engineer",
    content: "I am a software engineer with 5 years of experience.",
    userId: "1",
    imageUrl: "/images/content/CV.png",
    createdAt: new Date()
  },
  ]
  switch (activeResourceTab) {
    case "resumes":
      return (
        <section>
          <h2 className="text-xl font-semibold">Your Resumes</h2>

          <article className="grid my-4 sm:grid-cols-2 gap-4 lg:grid-cols-4">
            {demoResumes.map((resume) => (
              <ResumePreview key={resume.id} resume={resume} />
            ))}
          </article>
        </section>
      )
  }
}