import NewWhat from "@/components/dashboard/NewWhat";
import { Notifications } from "@/components/dashboard/Notifications";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowUpFromDotIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard"
}

export default function Dashboard () {

  return (
    <section className="px-2 py-4 md:py-8 md:px-4 w-full">
      {/* Top Bar */}
      <article className="flex flex-col w-full md:flex-row gap-2 md:justify-between md:items-center">
        <article className="flex gap-2 items-center">
          <img src="/images/design/suit.jpg" className="w-8 h-8 rounded-full flex md:hidden" alt="me" />
          <h2 className="font-semibold text-xl md:text-2xl">Welcome back, Kin Leon !</h2>
        </article>

        {/* Buttons and Avatar */}
        <article className="flex gap-4 items-center">
          <article className="flex gap-2 items-center">
            <Notifications />
            <Button className="flex hover:bg-secondary items-center gap-2 bg-secondaryLight hover:shadow-xl transition duration-300 shadow-md font-semibold text-primaryDark px-4 py-2 rounded-xl">
              Upgrade Plan
              <ArrowUpFromDotIcon size={18} />
            </Button>
            <NewWhat />
          </article>

          <img src="/images/design/suit.jpg" className="w-12 h-12 rounded-full hidden md:flex" alt="me" />
        </article>
      </article>

      {/* Cards */}
      <article className="flex px-4 my-4 flex-col md:flex-row gap-4 items-center">
        <article className="mx-8 py-4 w-full even:bg-primaryLight rounded-2xl p-4 text-white font-semibold bg-dullDark flex flex-col gap-4">
            <h2 className="text-xl">Resumes Generated</h2>

            <h3 className="text-4xl">
              0
            </h3>

            <article className="hover:cursor-pointer transition duration-400 hover:bg-primaryDark flex shadow shadow-xl items-center gap-2 bg-secondaryLight px-8 py-2 rounded-full text-center justify-center items-center">40% <ArrowUp /></article>
        </article>

        <article className="mx-8 py-4 w-full even:bg-primaryLight rounded-2xl p-4 text-white font-semibold bg-dullDark flex flex-col gap-4">
            <h2 className="text-xl">Cover Letters</h2>

            <h3 className="text-4xl">
              0
            </h3>

            <article className="hover:cursor-pointer transition duration-400 hover:bg-primaryDark flex shadow shadow-xl items-center gap-2 bg-tertiary px-8 py-2 rounded-full text-center justify-center items-center">40% <ArrowUp /></article>
        </article>

        <article className="mx-8 py-4 w-full even:bg-primaryLight rounded-2xl p-4 text-white font-semibold bg-dullDark flex flex-col gap-4">
            <h2 className="text-xl">Headshots</h2>

            <h3 className="text-4xl">
              0
            </h3>

            <article className="hover:cursor-pointer transition duration-400 hover:bg-primaryDark flex shadow shadow-xl items-center gap-2 bg-secondaryLight px-8 py-2 rounded-full text-center justify-center items-center">40% <ArrowUp /></article>
        </article>
        <article className="mx-8 py-4 w-full even:bg-primaryLight rounded-2xl p-4 text-white font-semibold bg-dullDark flex flex-col gap-4">
            <h2 className="text-xl">Test Interviews</h2>

            <h3 className="text-4xl">
              0
            </h3>

            <article className="hover:cursor-pointer transition duration-400 hover:bg-primaryDark flex shadow shadow-xl items-center gap-2 bg-danger px-8 py-2 rounded-full text-center justify-center items-center">40% <ArrowUp /></article>
        </article>
      </article>
    </section>
  )
}