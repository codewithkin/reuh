"use server";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "../../prisma";
import { stringify } from "querystring";

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
        where: {
            email: session.user.email
        }
    })

    const userId = user?.id;

    // Create a new template
    const newTemplate = await prisma.resume.create({
        data: {
            template: template,
            user: {
                connect: {
                    id: userId
                }
            },
            title: `Resume ${Math.floor(Math.random() * 1000000)}`,
            personalInfo: {
                create: {
                    fullName: formData.get("fullName") as string,
                    email: formData.get("email") as string,
                    phone: formData.get("phone") as string,
                    address: formData.get("address") as string,
                    country: formData.get("country") as string,
                    city: formData.get("city") as string,
                    summary: formData.get("summary") as string,
                    linkedin: formData.get("linkedin") as string,
                    website: formData.get("website") as string
                }
            },
            education: {
                createMany: {
                    data: Object.keys(formData)
                        .filter(key => key.startsWith('degree_'))
                        .map(key => {
                            const index = key.split('_')[1];
                            return {
                                degree: formData.get(`degree_${index}`) as string,
                                institution: formData.get(`institution_${index}`) as string,
                                startDate: formData.get(`startDate_${index}`) as string,
                                endDate: formData.get(`endDate_${index}`) as string,
                            }
                        })
                }
            },
            experience: {
                createMany: {
                    data: Object.keys(formData)
                        .filter(key => key.startsWith('company_'))
                        .map(key => {
                            const index = key.split('_')[1];
                            return {
                                company: formData.get(`company_${index}`) as string,
                                position: formData.get(`position_${index}`) as string,
                                startDate: formData.get(`startDate_${index}`) as string,
                                endDate: formData.get(`endDate_${index}`) as string,
                            }
                        })
                }
            },
            skills: {
                createMany: {
                    data: Object.keys(formData)
                        .filter(key => key.startsWith('skill_'))
                        .map(key => ({
                            name: formData.get(key) as string
                        }))
                }
            },
            certifications: {
                createMany: {
                    data: Object.keys(formData)
                        .filter(key => key.startsWith('certification_'))
                        .map(key => ({
                            name: formData.get(key) as string
                        }))
                }
            },
            references: {
                createMany: {
                    data: Object.keys(formData)
                        .filter(key => key.startsWith('reference_'))
                        .map(key => ({
                            name: formData.get(key) as string
                        }))
                }
            }
        }
    })

    console.log(newTemplate);

    if (newTemplate) {
        return {
            success: true,
            message: "New resume created successfully",
            newTemplate
        }
    } else {
        return {
            success: false,
            message: "An error occured",
            newTemplate
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