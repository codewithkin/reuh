import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

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
        Given this resume data, please improve it by:
        1. Enhancing the summary to be more impactful
        2. Making experience descriptions more achievement-focused
        3. Suggesting relevant skills based on experience
        4. Improving formatting and clarity
        5. Adding any missing important sections

        Current Resume:
        ${JSON.stringify(currentResume, null, 2)}

        Please return a JSON object with the improved resume data following this structure:
        ${JSON.stringify({
            personalInfo: {
                fullName: "string",
                email: "string",
                phone: "string",
                // ... other fields
            },
            education: [{
                institution: "string",
                degree: "string",
                // ... other fields
            }],
            // ... other sections
        }, null, 2)}
    `;

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: "You are a professional resume writer with expertise in creating impactful resumes."
            },
            {
                role: "user",
                content: prompt
            }
        ],
        response_format: { type: "json_object" }
    });

    const content = response.choices[0].message.content;
    
    if (!content) throw new Error("No response from AI");
    return JSON.parse(content) as ResumeImprovement;
}
