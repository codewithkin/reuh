import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InterviewQuestion } from "@prisma/client";
import { MessageSquareQuoteIcon } from "lucide-react";

export default function InterviewQuestionPreview({ interviewQuestion }: { interviewQuestion: InterviewQuestion }) {
    return (
        <Card className="hover:cursor-pointer even:text-white even:bg-gradient-to-tr from-purple-500 to-blue-600 transition md:flex grid w-full md:justify-between items-center duration-300 hover:shadow-xl">
            <CardHeader className="flex items-center justify-center">
                <MessageSquareQuoteIcon className="w-12 h-12 md:w-4 md:h-4" />
            </CardHeader>

            <CardContent className="flex items-center justify-center">
                <CardTitle>{interviewQuestion.question}</CardTitle>
            </CardContent>

            <CardFooter className="flex items-center justify-center">
                <p className="text-dullLight">Created on {interviewQuestion.createdAt.toLocaleDateString()}</p>
            </CardFooter>
        </Card>
    )
}