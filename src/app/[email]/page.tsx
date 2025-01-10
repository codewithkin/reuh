import NewWhat from "@/components/dashboard/NewWhat";
import { Button } from "@/components/ui/button";
import { ArrowUpFromDotIcon, Bell } from "lucide-react";
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
            <Button size="icon" color="primary">
              <Bell size={25} />
            </Button>
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
      
    </section>
  )
}