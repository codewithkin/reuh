import { Label } from "@radix-ui/react-label";
import { ArrowUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function CurrentPlan({ plan }: { plan: string }) {
  return (
    <article className="rounded-2xl mx-2 my-4 md:mx-0 w-full md:w-1/4 p-4 bg-gradient-to-t text-white font-semibold from-primaryLight to-primaryDark">
      {/* Metadata */}
      <article className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Current Plan</h2>

        <p className="text-dullLight">{plan}</p>
      </article>

      {/* more Data */}
      <article className="flex w-full flex-col gap-2 my-4">
        <article className="rounded-full hover:cursor-pointer p-4 md:px-12 bg-primaryLight text-white flex justify-between items-center">
          Billing history
          <ArrowUp size={20} />
        </article>
        <article className="rounded-full hover:cursor-pointer p-4 md:px-12 bg-secondaryLight text-primaryDark flex justify-between items-center">
          Upgrade Plan
          <ArrowUp size={20} />
        </article>
      </article>

      {/* Usage progress bar */}
      <article className="flex flex-col gap-2">
        <Label>Usage</Label>

        <Progress value={50} />
      </article>
    </article>
  );
}
