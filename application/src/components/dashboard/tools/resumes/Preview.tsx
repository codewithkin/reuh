import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Reference, Certification, Skill, Resume } from "@prisma/client";
import { Eye, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResumePreview({
  resume,
}: {
  resume: Resume & {
    certifications: Certification[];
    references: Reference[];
    skills: Skill[];
    experience: Experience[];
  };
}) {
  // Destructure resumes data
  const { title, createdAt, template } = resume;

  return (
    <Card className="hover:cursor-pointer trandition duration-300 hover:shadow-xl">
      <CardHeader className="flex flex-col gap-2 py-4">
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-dullDark">Created on: {createdAt}</p>
      </CardHeader>

      <CardContent className="grid">
        <h3 className="text-lg font-semibold">Metrics</h3>
        <article>
          <article className="flex items-center gap-2">
            <p className="text-dullDark">Certifications: </p>
            <p className="text-dullDark"> {resume?.certifications.length || 0}</p>
          </article>
          <article className="flex items-center gap-2">
            <p className="text-dullDark">References: </p>
            <p className="text-dullDark"> {resume?.references.length || 0}</p>
          </article>
          <article className="flex items-center gap-2">
            <p className="text-dullDark">Skills: </p>
            <p className="text-dullDark"> {resume?.skills.length || 0}</p>
          </article>
          <article className="flex items-center gap-2">
            <p className="text-dullDark">Experience: </p>
            <p className="text-dullDark"> {resume?.experience.length || 0}</p>
          </article>
        </article>
      </CardContent>

      <CardFooter className="flex flex-col gap-1">
        <Button type="button" className="bg-primaryLight w-full hover:bg-slate-500">
          <Link className="flex items-center gap-2" href={`/dashboard/tools/resumes/${resume.id}`}>
            <Eye className="w-4 h-4" />
            View Details
          </Link>
        </Button>
        <Button type="button" className="bg-danger w-full hover:bg-orange-700">
          <Link className="flex items-center gap-2" href={`/dashboard/tools/resumes/${resume.id}`}>
            <Trash className="w-4 h-4" />
            Delete
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
