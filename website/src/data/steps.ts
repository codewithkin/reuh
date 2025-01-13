export type step = {
    title: string,
    description: string,
    url: string,
    actionText: string
}

export const steps: step[] = [
    {
        title: "Provide your details",
        description: "Give our AI your details, for example past job experience, degrees and certifications as well as any other qualifications that are relevant. Our vuided prompts ensure you include the right details employers want to see",
        url: "https://app.reuh.pro/dashboard/resume-builder",
        actionText: "Prepare my resume"
    },
    {
        title: "Tweak the options",
        description: "You can customize the AI's tone, tally it to a specific job, increase the size of the document and so much more ! All that power...at your fingertips",
        url: "https://app.reuh.pro/dashboard/resume-builder",
        actionText: "Customize my CV"
    },
    {
        title: "Download your document",
        description: "Just like that, you're done ! You can download your file as a pdf, docx or even an image ! Whatever you need, we've got it. Own your resume with professional content",
        url: "https://app.reuh.pro/dashboard/resume-builder",
        actionText: "Download your content"
    },
]