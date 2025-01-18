"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { File, Mail, MessageSquare, UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { root } from "@/constants/rootUrl";
import ResumePreview from "@/components/dashboard/tools/resumes/Preview";
import { CoverLetter, Headshot, InterviewQuestion, Resume } from "@prisma/client";
import CoverLetterPreview from "@/components/dashboard/tools/cover-letters/Preview";
import InterviewQuestionPreview from "@/components/dashboard/tools/interview-question/Preview";
import HeadshotPreview from "@/components/dashboard/tools/headshots/Preview";

export default function Tools() {
  const [activeResourceTab, setActiveResourceTab] = useState("resumes");
  const [data, setData] = useState<null | any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${root}/api/data/all`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <section className="">
      {/* Tools cards */}
      <article className="my-4 grid my-4 my-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card
          onClick={() => setActiveResourceTab("resumes")}
          className={`${activeResourceTab === "resumes" && "border-4 border-sky-400"} hover:cursor-pointer bg-primaryDark text-white`}
        >
          <CardHeader>
            <File size={40} />

            <article className="grid gap-2">
              <CardTitle className="text-xl">Resume Builder</CardTitle>
              <CardDescription className="text-white">
                Modern, elegant and professional resumes in just 1 click
              </CardDescription>
            </article>
          </CardHeader>

          <CardFooter className="grid gap-2">
            <p>Resumes Built: {data?.resumes?.length}</p>
            <Button
              asChild
              className="hover:bg-purple-500 hover:text-primaryDark transition duration-300 bg-primaryLight text-primaryDark"
              color="primary"
            >
              <Link href="/dashboard/tools/resume-builder">New Resume</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card
          onClick={() => setActiveResourceTab("cover-letters")}
          className={`${activeResourceTab === "cover-letters" && "border-4 border-primaryDark"} hover:cursor-pointer bg-primaryLight text-primaryDark`}
        >
          <CardHeader>
            <Mail size={40} />

            <article className="grid gap-2">
              <CardTitle className="text-xl">Cover Letter Builder</CardTitle>
              <CardDescription className="text-white">
                Cover Letters tailored to your specific job application
              </CardDescription>
            </article>
          </CardHeader>

          <CardFooter className="grid gap-2">
            <p>Cover Letters Generated: {data?.coverLetters?.length}</p>
            <Button
              asChild
              className="hover:bg-purple-500 hover:text-primaryDark transition duration-300 bg-white text-primaryDark"
              color="primary"
            >
              <Link href="/dashboard/tools/cover-letter-builder">New Cover Letter</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card
          onClick={() => setActiveResourceTab("interview-questions")}
          className={`${activeResourceTab === "interview-questions" && "border-4 border-sky-400"} hover:cursor-pointer bg-primaryDark text-white`}
        >
          <CardHeader>
            <MessageSquare size={40} />

            <article className="grid gap-2">
              <CardTitle className="text-xl">Interview Preparation</CardTitle>
              <CardDescription className="text-white">
                All the tools you need to crush your job interview
              </CardDescription>
            </article>
          </CardHeader>

          <CardFooter className="grid gap-2">
            <p>Interview s: {data?.interviewQuestions?.length}</p>
            <Button
              asChild
              className="hover:bg-purple-500 hover:text-primaryDark transition duration-300 bg-primaryLight text-primaryDark"
              color="primary"
            >
              <Link href="/dashboard/tools/interview-question-generator">
                New Interview Prep Session
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card
          onClick={() => setActiveResourceTab("headshots")}
          className={`${activeResourceTab === "headshots" && "border-4 border-primaryDark"} hover:cursor-pointer bg-primaryLight text-primaryDark`}
        >
          <CardHeader>
            <UserRound size={40} />

            <article className="grid gap-2">
              <CardTitle className="text-xl">Headshots</CardTitle>
              <CardDescription className="text-white">
                Professional headshots at your fingertips
              </CardDescription>
            </article>
          </CardHeader>

          <CardFooter className="grid gap-2">
            <p>My headshots: {data?.headshots?.length}</p>
            <Button
              asChild
              className="hover:bg-purple-500 hover:text-primaryDark transition duration-300 bg-white text-primaryDark"
              color="primary"
            >
              <Link href="/dashboard/tools/headshot-generator">New Headshot</Link>
            </Button>
          </CardFooter>
        </Card>
      </article>

      {/* Show the active resource */}
      {activeResourceTab === "resumes" ? (
        <section>
          <h2 className="text-xl font-semibold">My Resumes</h2>
          <article className="grid my-4 sm:grid-cols-2 gap-4 lg:grid-cols-4">
            {data?.resumes?.length > 0 ? (
              data.resumes.map((resume: Resume) => (
                <ResumePreview key={resume.id} resume={resume} />
              ))
            ) : (
              <p className="text-dulldark">No resumes found</p>
            )}
          </article>
        </section>
      ) : activeResourceTab === "cover-letters" ? (
        <section>
          <h2 className="text-xl font-semibold">My Cover Letters</h2>
          <article className="grid my-4 sm:grid-cols-2 gap-4 lg:grid-cols-4">
            {data?.coverLetters?.length > 0 ? (
              data.coverLetters.map((coverLetter: CoverLetter) => (
                <CoverLetterPreview key={coverLetter.id} coverLetter={coverLetter} />
              ))
            ) : (
              <p className="text-dulldark">No cover letters found</p>
            )}
          </article>
        </section>
      ) : activeResourceTab === "interview-questions" ? (
        <section>
          <h2 className="text-xl font-semibold">My Interview Questions</h2>
          <article className="grid gap-4 my-4">
            {data?.interviewQuestions?.length > 0 ? (
              data.interviewQuestions.map((interviewQuestion: InterviewQuestion) => (
                <InterviewQuestionPreview
                  key={interviewQuestion.id}
                  interviewQuestion={interviewQuestion}
                />
              ))
            ) : (
              <p className="text-dulldark">No interview questions found</p>
            )}
          </article>
        </section>
      ) : activeResourceTab === "headshots" ? (
        <section className="my-4">
          <h2 className="text-xl font-semibold md:text-start text-center">My Headshots</h2>
          <article className="grid justify-center items-center sm:grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4">
            {data?.headshots?.length > 0 ? (
              data.headshots.map((headshot: Headshot) => (
                <HeadshotPreview key={headshot.id} headshot={headshot} />
              ))
            ) : (
              <p className="text-dulldark">No headshots found</p>
            )}
          </article>
        </section>
      ) : null}
    </section>
  );
}
