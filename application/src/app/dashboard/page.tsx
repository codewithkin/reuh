import { signOut } from "@/auth";
import CurrentPlan from "@/components/dashboard/CurrentPlan";
import NewWhat from "@/components/dashboard/NewWhat";
import { Notifications } from "@/components/dashboard/Notifications";
import RecentActivity from "@/components/dashboard/RecentActivity";
import StatCards from "@/components/dashboard/StatCards";
import { Button } from "@/components/ui/button";
import { getData } from "@/lib/actions";
import { ArrowUpFromDotIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const resources = [];

  // Get the user's data
  const notifications: any = (await getData("notification")) || [];
  const coverLetters: any = (await getData("coverLetter")) || [];
  const headshots: any = (await getData("headshot")) || [];
  const interviewQuestions: any = (await getData("interviewQuestion")) || [];
  const resumes: any = (await getData("resume")) || [];
  const userData = await getData("user");
  const user = Array.isArray(userData) ? userData[0] : userData;
  if (!user) throw new Error("User not found");

  const { plan } = user;

  resources.push(
    {
      title: "Cover Letters",
      count: coverLetters.length,
      percentage: 0,
      color: "bg-secondaryLight",
      link: "/dashboard/cover-letter-builder",
    },
    {
      title: "Headshots",
      count: headshots.length,
      percentage: 0,
      color: "bg-secondaryLight",
      link: "/dashboard/headshot-generator",
    },
    {
      title: "Interview Questions",
      count: interviewQuestions.length,
      percentage: 0,
      color: "bg-secondaryLight",
      link: "interview-question-generator",
    },
    {
      title: "Resumes",
      count: resumes.length,
      percentage: 0,
      color: "bg-secondaryLight",
      link: "/dashboard/resume-builder",
    }
  );

  if (!user) {
    throw new Error("You're not signed in");

    return signOut();
  }

  return (
    <section className="py-4 overflow-y-scroll h-screen md:py-0 md:pb-8 md:px-4">
      {/* Top Bar */}
      <article className="flex flex-col w-full md:flex-row gap-2 md:justify-between md:items-center">
        <article className="flex gap-2 items-center">
          <img
            src="/images/design/suit.jpg"
            className="w-8 h-8 rounded-full flex md:hidden"
            alt="me"
          />
          <h2 className="font-semibold text-2xl">Welcome back, {user.name}</h2>
        </article>

        {/* Buttons and Avatar */}
        <article className="flex gap-4 items-center">
          <article className="flex gap-2 items-center">
            <Notifications notifications={notifications} />
            <Button className="flex hover:bg-secondary items-center gap-2 bg-secondaryLight hover:shadow-xl transition duration-300 shadow-md font-semibold text-primaryDark px-4 py-2 rounded-xl">
              Upgrade Plan
              <ArrowUpFromDotIcon size={18} />
            </Button>
            <NewWhat />
          </article>

          <img
            src="/images/design/suit.jpg"
            className="w-12 h-12 rounded-full hidden md:flex"
            alt="me"
          />
        </article>
      </article>

      <StatCards resources={resources} />

      {/* Current plan data */}
      <CurrentPlan plan={plan} />

      {/* Recent activivity */}
      <RecentActivity notifications={notifications} />
    </section>
  );
}

export const dynamic = "force-dynamic";
