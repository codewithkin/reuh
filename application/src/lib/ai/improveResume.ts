import OpenAI from "openai";

const openai = new OpenAI();

interface ResumeImprovement {
  title: string;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    summary: string;
    linkedin?: string;
    website?: string;
  };
  education?: Array<{
    institution: string;
    degree: string;
    fieldOfStudy?: string;
    startDate: string;
    endDate?: string;
    gpa?: number;
    description?: string;
    location?: string;
  }>;
  experience?: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    location?: string;
    description: string;
    technologies?: string[];
  }>;
  skills?: Array<{
    name: string;
    category?: string;
    proficiency?: number;
  }>;
  certifications?: Array<{
    name: string;
    issuingBody: string;
    issueDate?: string;
    expiryDate?: string;
    credentialId?: string;
    url?: string;
  }>;
  references?: Array<{
    name: string;
    position: string;
    company: string;
    email?: string;
    phone?: string;
    relationship?: string;
  }>;
}

export async function improveResume(currentResume: any): Promise<ResumeImprovement> {
  const prompt = `
        Given this resume data, please improve the language used, do not add anything that is not in the current resume, just improve it.
        Do not provide example fields, just improve the resume. If you can't, return the field as it is.

        Current Resume:
        ${JSON.stringify(currentResume, null, 2)}

        Please return a JSON object with the improved resume data following this structure:
        ${JSON.stringify(
          {
            personalInfo: {
              fullName: "string",
              email: "string",
              phone: "string",
              address: "string",
              city: "string",
              country: "string",
              summary: "string",
              linkedin: "string",
              website: "string",
            },
            // ONLY ADD THESE FIELDS IF THEY ARE IN THE CURRENT RESUME
            education: [
              {
                institution: "string",
                degree: "string",
                fieldOfStudy: "string",
                startDate: "string",
                endDate: "string",
                gpa: "number",
                description: "string",
                location: "string",
              },
            ],
            // ONLY ADD THESE FIELDS IF THEY ARE IN THE CURRENT RESUME
            experience: [
              {
                company: "string",
                position: "string",
                startDate: "string",
                endDate: "string",
                location: "string",
                description: "string",
                technologies: "string[]",
              },
            ],
            // ONLY ADD THESE FIELDS IF THEY ARE IN THE CURRENT RESUME
            skills: [
              {
                name: "string",
                category: "string",
                proficiency: "number",
              },
            ],
            // ONLY ADD THESE FIELDS IF THEY ARE IN THE CURRENT RESUME
            certifications: [
              {
                name: "string",
                issuingBody: "string",
                issueDate: "string",
                expiryDate: "string",
                credentialId: "string",
                url: "string",
              },
            ],
            // ONLY ADD THESE FIELDS IF THEY ARE IN THE CURRENT RESUME
            references: [
              {
                name: "string",
                position: "string",
                company: "string",
                email: "string",
                phone: "string",
                relationship: "string",
              },
            ],
          },
          null,
          2
        )}
    `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "You are a professional resume writer with expertise in creating impactful resumes. Do not add anything, just improve the resume provided to you. If you cannot improve a field, return it as it is.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: { type: "json_object" },
  });

  const content = response.choices[0].message.content;
  console.log("Resume provided to AI: ", currentResume);
  console.log("Response from AI: ", content);

  if (!content) throw new Error("No response from AI");
  return JSON.parse(content) as ResumeImprovement;
}
