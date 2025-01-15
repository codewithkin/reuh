"use client";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plan, plans } from "@/constants/plans";
import { useEffect, useState } from "react";
import { root } from "@/constants/rootUrl";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { updatePlan } from "@/lib/actions";
import SaveBtn from "./SaveBtn";

interface SettingsContentProps {
  user: any;
}

export default function SettingsContent({ user }: SettingsContentProps) {
  const [resources, setResources] = useState<any>(null);
  const myPlan: string = user?.plan;
  const planData = plans.find((plan: Plan) => plan.name === myPlan);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(`${root}/api/data/all`);
        const data = await response.json();
        setResources(data);
      } catch (error) {
        console.error('Failed to fetch resources:', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <section className="py-4 overflow-y-scroll h-screen md:py-0 md:pb-8 px-4 w-full">
      <h2 className="font-semibold text-2xl">Settings</h2>

      <Tabs defaultValue="appearance">
        <TabsList className="my-4">
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="plan">My Plan</TabsTrigger>
        </TabsList>

        <TabsContent className="flex flex-col md:gap-8 gap-4" value="appearance">
          {/* Appearance content */}
          <article className="flex flex-col border-b border-gray-300 pb-4">
            <h2 className="text-xl font-semibold">Appearance</h2>
            <p className="text-dullDark">Customize the site's appearance</p>
          </article>

          <article className="flex justify-between items-center">
            <article className="flex flex-col">
              <h2 className="text-lg font-semibold">Brand Color</h2>
              <p className="text-dullDark">Change the site's color</p>
            </article>

            <article className="flex items-center gap-2">
              <article className="w-6 h-6 rounded-sm bg-primaryLight"></article>
              <Input
                name="color"
                color="secondary"
                prefix="#"
                defaultValue="#008BF8"
              />
            </article>
          </article>
        </TabsContent>

        <TabsContent className="flex flex-col md:gap-8 gap-4" value="plan">
          {/* Plan content */}
          <article className="flex flex-col border-b border-gray-300 pb-4">
            <h2 className="text-xl font-semibold">My Plan</h2>
            <p className="text-dullDark">Edit your plan and payment settings</p>
          </article>

          <form action={updatePlan}>
            <article className="flex justify-between my-4 border-b border-gray-200 py-4 items-center">
              <article className="flex flex-col">
                <h2 className="text-lg font-semibold">Current Plan</h2>
                <p className="text-dullDark">You are currently on the {myPlan} plan</p>
              </article>

              <article className="flex items-center gap-2">
                <Select name="plan" defaultValue={myPlan}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a new plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Plans</SelectLabel>
                      <SelectItem value="Free">Free</SelectItem>
                      <SelectItem value="Starter">Starter ($9.99/mo)</SelectItem>
                      <SelectItem value="Premium">Premium ($19.99/mo)</SelectItem>
                      <SelectItem value="Ultimate">Ultimate ($29.99/mo)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </article>
            </article>

            <article className="flex w-full mt-4 justify-end">
              <SaveBtn />  
            </article>
          </form>

          <article className="flex justify-between mb-4 border-b border-gray-200 pt-4 items-center">
            <article className="flex flex-col">
              <h2 className="text-lg font-semibold">Cost</h2>
              <p className="text-dullDark">How much you pay for the plan</p>
            </article>

            <article className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">${planData?.price}</h3>
            </article>
          </article>

          <article className="flex justify-between mb-4 border-b border-gray-200 pb-4 items-center">
            <article className="flex flex-col">
              <h2 className="text-lg font-semibold">Resume builder usage</h2>
              <p className="text-dullDark">How many resumes builds you have left</p>
            </article>

            <article className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{ (planData?.resumesGenerationsPerMonth || 0) - (resources?.resumes?.length || 0)}</h3>
            </article>
          </article>

          <article className="flex justify-between mb-4 border-b border-gray-200 pb-4 items-center">
            <article className="flex flex-col">
              <h2 className="text-lg font-semibold">Cover Letter builder usage</h2>
              <p className="text-dullDark">How many cover letter builds you have left</p>
            </article>

            <article className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{ (planData?.coverLettersGenerationsPerMonth || 0) - (resources?.coverLetters?.length || 0)}</h3>
            </article>
          </article>

          <article className="flex justify-between mb-4 border-b border-gray-200 pb-4 items-center">
            <article className="flex flex-col">
              <h2 className="text-lg font-semibold">Mock Interview Questions usage</h2>
              <p className="text-dullDark">How many more mock interviews can you generate ?</p>
            </article>

            <article className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{ (planData?.interviewQuestionsGenerationsPerMonth || 0) - (resources?.interviewQuestions?.length || 0)}</h3>
            </article>
          </article>

          <article className="flex justify-between mb-4 border-b border-gray-200 pb-4 items-center">
            <article className="flex flex-col">
              <h2 className="text-lg font-semibold">Headshot generator usage</h2>
              <p className="text-dullDark">How many more headshots can you generate ?</p>
            </article>

            <article className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{ (planData?.headshotsGenerationsPerMonth || 0) - (resources?.headshots?.length || 0)}</h3>
            </article>
          </article>
        </TabsContent>
      </Tabs>
    </section>
  );
} 