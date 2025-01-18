import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { plans, plan } from "@/data/plans";
import { CircleCheck, Unlock } from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Pricing() {
  return (
    <section className="md:p-10 py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Get more with our paid plans</h2>

      <article className="grid md:flex items-center justify-center gap-4 my-4">
        {plans.map((plan: plan, index: number) => {
          const { title, description, price, features, buttonText, actionUrl } = plan;

          return (
            <Card key={index} className="grid gap-2 bg-white rounded-xl p-4 text-start">
              {/* Copy */}
              <article>
                <article className="w-full flex justify-between">
                  <h3 className={`${montserrat.className} text-2xl font-semibold`}>{title}</h3>

                  {title === "Premium" && (
                    <article className="rounded-full bg-primaryLight text-center font-semibold flex justify-center items-center text-white px-8">
                      Best Value
                    </article>
                  )}
                </article>
                <p className="text-dullDark">{description}</p>
              </article>

              {/* Price */}
              <h3 className="my-4 text-5xl font-semibold text-primaryDark">
                <span className="text-lg">$</span>
                {price}
                <span className="text-dullLight text-lg">/month</span>
              </h3>

              {/* CTA */}
              <Link
                className={`${title === "Premium" ? "bg-primaryDark" : "bg-primaryLight"} hover:bg-secondaryLight rounded-xl text-white font-semibold py-4 shadow-md transition duration-500 hover:shadow-xl text-center`}
                href={actionUrl}
              >
                {buttonText}
              </Link>

              {/* features */}
              <article className="grid gap-2 text-dullDark font-semibold">
                {features.map((feature: string, index: number) => (
                  <article key={index} className="flex gap-2 items-center">
                    <CircleCheck fill={title === "Premium" ? "#011936" : "#008BF8"} color="white" />
                    {feature}
                  </article>
                ))}
              </article>
            </Card>
          );
        })}
      </article>

      <article className="w-full flex justify-end">
        <Button
          className="bg-orange-600 transition duration-300 hover:bg-white hover:border-2 hover:border-orange-600 hover:text-orange-600 text-white"
          asChild
        >
          <Link className="flex gap-2 items-center" href="/dashboard">
            Dashboard
          </Link>
        </Button>
      </article>
    </section>
  );
}
