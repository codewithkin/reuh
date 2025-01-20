import CreateCoverLetterButton from "@/components/dashboard/cover-letter-builder/CreateCoverLetterBtn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createCoverLetter } from "@/lib/actions";
import { Loader, PersonStanding } from "lucide-react";

export default function CreateCoverLetter() {
  return (
    <form
      action={async (formData: FormData) => {
        "use server";

        await createCoverLetter(formData);
      }}
      className="py-4 md:py-12 overflow-y-scroll h-screen md:pb-8 md:px-4"
    >
      <h2 className="text-2xl font-semibold">Let's create your Cover Letter</h2>
      <div className="mt-4 flex flex-col gap-1">
        <Label htmlFor="name">Your Name</Label>
        <Input
          type="text"
          name="name"
          required
          placeholder="John Doe"
          className="md:max-w-[400px]"
        />
      </div>
    
      <div className="mt-4 flex flex-col gap-1">
        <Label htmlFor="skills">Your Skills (fit for this job)</Label>
        <Input
          type="text"
          required
          name="skills"
          placeholder="JavaScript, ReactJS, PHP"
          className="md:max-w-[400px]"
        />
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <Label htmlFor="position">Position</Label>
        <Input
          type="text"
          required
          name="position"
          placeholder="Frontend Developer"
          className="md:max-w-[400px]"
        />
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <Label htmlFor="company">Company Name</Label>
        <Input
          type="text"
          name="company"
          required
          placeholder="Microsoft Corporation"
          className="md:max-w-[400px]"
        />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <Label htmlFor="description">Job Description</Label>
        <Textarea
          name="description"
          required
          placeholder="We need a developer who can Develop and implement new user-facing features for products with significant daily page views.
Write client-side code to create fast, intuitive web-based applications for both desktop and mobile browsers, including hybrid in-app pages.
Optimize web applications to ensure high performance and scalability.
"
          className="min-h-[100px] md:max-w-[400px]"
        />
      </div>

      <CreateCoverLetterButton />
    </form>
  );
}
