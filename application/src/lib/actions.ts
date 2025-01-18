"use server";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "../../prisma";

export async function Logout () {
        // Sign out
        await signOut();

        // Redirect to auth page
        return redirect("/auth")
}

export async function getData(model: "notification" | "user" | "headshot" | "interviewQuestion" | "resume" | "coverLetter") {
    try {
        switch (model) {
            case "user":
                const session = await auth();
                if (!session?.user?.email) throw new Error("Not authenticated");
                
                const me = await prisma.user.findUnique({
                    where: {
                        email: session.user.email
                    }
                })

                return me;
            case "notification":                
                return await prisma.notifications.findMany();
            case "headshot":
                return await prisma.headshot.findMany();
            case "interviewQuestion":
                return await prisma.interviewQuestion.findMany();
            case "resume":
                return await prisma.resume.findMany();
            case "coverLetter":
                return await prisma.coverLetter.findMany();
            default:
                throw new Error(`Unknown model: ${model}`);
        }
    } catch (e) {
        console.log(e);
    }
}

export async function updateUser(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.email) throw new Error("Not authenticated");

    await prisma.user.update({
        where: {
            email: session.user.email
        },
        data: {
            name: formData.get("name") as string,
            occupation: formData.get("occupation") as string
        }
    })

    return {
        success: true,
        message: "User updated successfully"
    }
}

export async function updatePlan(formData: FormData) {
  const selectedPlan = formData.get("plan") as string;
  
  if (selectedPlan === "Free") {
    // Update user's plan to Free
    const session = await auth();
    if (!session?.user?.email) throw new Error("Not authenticated");

    await prisma.user.update({
      where: {
        email: session.user.email
      },
      data: {
        plan: "Free"
      }
    });
    
    return { success: true, message: "Plan updated to Free" };
  }

  // Redirect to payment page based on plan
  const paymentUrl = selectedPlan === "Premium" 
    ? "/payments/premium"
    : selectedPlan === "Ultimate"
    ? "/payments/ultimate"
    : "/payments/starter";
    
  redirect(paymentUrl);
}

export async function createNewResumeWithDetails(formData: FormData) {
    const template = formData.get("template") as string;

    // Get the user's id
    const session = await auth();
    if (!session?.user?.email) throw new Error("Not authenticated");

    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    });

    if (!user?.id) throw new Error("User not found");

    // Prepare the create data
    const createData: any = {
        template: template,
        userId: user.id,
        title: `Resume ${Math.floor(Math.random() * 1000000)}`,
        personalInfo: {
            create: {
                fullName: formData.get("personalInfo_fullName") as string || "",
                email: formData.get("personalInfo_email") as string || "",
                phone: formData.get("personalInfo_phone") as string || "",
                address: formData.get("personalInfo_address") as string || "",
                country: formData.get("personalInfo_country") as string || "",
                city: formData.get("personalInfo_city") as string || "",
                summary: formData.get("personalInfo_summary") as string || "",
                linkedin: formData.get("personalInfo_linkedin") as string || "",
                website: formData.get("personalInfo_website") as string || ""
            }
        }
    };

    // Check and add education if provided
    const educationData = Object.keys(formData)
        .filter(key => key.startsWith('education_'))
        .map(key => {
            const index = key.split('_')[1];
            return {
                degree: formData.get(`degree_${index}`) as string,
                institution: formData.get(`institution_${index}`) as string,
                startDate: formData.get(`startDate_${index}`) as string,
                endDate: formData.get(`endDate_${index}`) as string,
            }
        });

    if (educationData.length > 0) {
        createData.education = { createMany: { data: educationData } };
    }

    // Check and add experience if provided
    const experienceData = Object.keys(formData)
        .filter(key => key.startsWith('company_'))
        .map(key => {
            const index = key.split('_')[1];
            return {
                company: formData.get(`company_${index}`) as string,
                position: formData.get(`position_${index}`) as string,
                startDate: formData.get(`startDate_${index}`) as string,
                endDate: formData.get(`endDate_${index}`) as string,
            }
        });

    if (experienceData.length > 0) {
        createData.experience = { createMany: { data: experienceData } };
    }

    // Check and add skills if provided
    const skillsData = Object.keys(formData)
        .filter(key => key.startsWith('skill_'))
        .map(key => ({
            name: formData.get(key) as string
        }));

    if (skillsData.length > 0) {
        createData.skills = { createMany: { data: skillsData } };
    }

    // Check and add certifications if provided
    const certificationsData = Object.keys(formData)
        .filter(key => key.startsWith('certification_'))
        .map(key => ({
            name: formData.get(key) as string
        }));

    if (certificationsData.length > 0) {
        createData.certifications = { createMany: { data: certificationsData } };
    }

    // Check and add references if provided
    const referencesData = Object.keys(formData)
        .filter(key => key.startsWith('reference_'))
        .map(key => ({
            name: formData.get(key) as string
        }));

    if (referencesData.length > 0) {
        createData.references = { createMany: { data: referencesData } };
    }

    // Create the resume with all provided data
    const newResume = await prisma.resume.create({
        data: createData
    });

    if (newResume) {
        return {
            success: true,
            message: "New resume created successfully",
            newResume
        }
    } else {
        return {
            success: false,
            message: "An error occurred",
            newResume: null
        }
    }
}

export async function getResumeById(id: string | null) {
    if(!id) throw new Error("No id provided");

    return await prisma.resume.findUnique({
        where: {
            id
        }
    })
}