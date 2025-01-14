import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@prisma/client";
import Image from "next/image";

export default function ResumePreview({ resume }: { resume: Resume }) {
    // Destructure resumes data
    const { imageUrl, title, content, userId, createdAt } = resume;

    // Limit the content to the first 100 characters
    const splittedContent = content.split(" ").slice(0, 10).join(" ").concat("...");
  return (
    <Card className="hover:cursor-pointer trandition duration-300 hover:shadow-xl">
        <CardHeader>
            <Image src={imageUrl || "/images/content/CV.png"} alt={title} width={1000} height={500} />
        </CardHeader>

        <CardContent>
            <p className="text-dullDark">
                {splittedContent}
            </p>
        </CardContent>

        <CardFooter className="grid">
            <CardTitle>{title}</CardTitle>
            <p className="text-sm text-dullDark">{createdAt.toDateString()}</p>
        </CardFooter>
    </Card>
  )
}
