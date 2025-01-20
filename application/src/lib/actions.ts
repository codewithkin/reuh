"use server";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "../../prisma";
import { improveResume } from "./ai/improveResume";

export async function Logout() {
  // Sign out
  await signOut();

  // Redirect to auth page
  return redirect("/auth");
}

export async function getData(
  model: "notification" | "user" | "headshot" | "interviewQuestion" | "resume" | "coverLetter"
) {
  try {
    switch (model) {
      case "user":
        const session = await auth();
        if (!session?.user?.email) throw new Error("Not authenticated");

        const me = await prisma.user.findUnique({
          where: {
            email: session.user.email,
          },
        });

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
      email: session.user.email,
    },
    data: {
      name: formData.get("name") as string,
      occupation: formData.get("occupation") as string,
    },
  });

  return {
    success: true,
    message: "User updated successfully",
  };
}

export async function updatePlan(formData: FormData) {
  const selectedPlan = formData.get("plan") as string;

  if (selectedPlan === "Free") {
    // Update user's plan to Free
    const session = await auth();
    if (!session?.user?.email) throw new Error("Not authenticated");

    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        plan: "Free",
      },
    });

    return { success: true, message: "Plan updated to Free" };
  }

  // Redirect to payment page based on plan
  const paymentUrl =
    selectedPlan === "Premium"
      ? "/payments/premium"
      : selectedPlan === "Ultimate"
        ? "/payments/ultimate"
        : "/payments/starter";

  redirect(paymentUrl);
}

export async function createNewResumeWithDetails(formData: FormData) {
  const template = formData.get("template") as string;

  console.log("Form data", formData);

  // Get the user's id
  const session = await auth();
  if (!session?.user?.email) throw new Error("Not authenticated");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user?.id) throw new Error("User not found");

  // Prepare the create data
  const createData: any = {
    template: formData.get("template") as string,
    userId: user.id,
    title: `Resume ${Math.floor(Math.random() * 1000000)}`,
    personalInfo: {
      create: {
        fullName: (formData.get("fullName_1") as string) || "",
        email: (formData.get("email_1") as string) || "",
        phone: (formData.get("phone_1") as string) || "",
        address: (formData.get("address_1") as string) || "",
        country: (formData.get("country_1") as string) || "",
        city: (formData.get("city_1") as string) || "",
        summary: (formData.get("summary_1") as string) || "",
        linkedin: (formData.get("linkedin_1") as string) || "",
        website: (formData.get("website_1") as string) || "",
      },
    },
  };

  // Education
  const educationEntries = Array.from(formData.entries()).filter(
    ([key]) => key.includes("_1") && (key.startsWith("degree_") || key.startsWith("institution_"))
  );

  if (educationEntries.length > 0) {
    createData.education = {
      createMany: {
        data: [
          {
            degree: formData.get("degree_1") as string,
            institution: formData.get("institution_1") as string,
            startDate: new Date(`${formData.get("startDate_1")}T00:00:00.000Z`).toISOString(),
            endDate: new Date(`${formData.get("endDate_1")}T00:00:00.000Z`).toISOString(),
            location: formData.get("location_1") as string,
            description: formData.get("description_1") as string,
          },
        ],
      },
    };
  }

  // Work Experience
  const experienceEntries = Array.from(formData.entries()).filter(
    ([key]) => key.includes("_1") && (key.startsWith("company_") || key.startsWith("position_"))
  );

  if (experienceEntries.length > 0) {
    createData.experience = {
      createMany: {
        data: [
          {
            company: formData.get("company_1") as string,
            position: formData.get("position_1") as string,
            startDate: new Date(`${formData.get("startDate_1")}T00:00:00.000Z`).toISOString(),
            endDate: new Date(`${formData.get("endDate_1")}T00:00:00.000Z`).toISOString(),
            location: formData.get("location_1") as string,
            description: formData.get("description_1") as string,
            technologies: (formData.get("technologies_1") as string)?.split(",") || [],
          },
        ],
      },
    };
  }

  console.log("Final createData before create:", createData);

  try {
    const newResume = await prisma.resume.create({
      data: createData,
      include: {
        personalInfo: true,
        education: true,
        experience: true,
        skills: true,
        certifications: true,
        references: true,
      },
    });
    console.log("Created resume:", newResume);

    // Create a new notification
    await prisma.notifications.create({
      data: {
        message: "New resume created",
        description: "Your resume has been created successfully",
        userId: user.id,
      },
    });

    return {
      success: true,
      message: "New resume created successfully",
      newResume,
    };
  } catch (error) {
    console.error("Error creating resume:", error);
    return {
      success: false,
      message: "Error creating resume: " + (error as Error).message,
      newResume: null,
    };
  }
}

export async function getResumeById(id: string | null) {
  if (!id) throw new Error("No id provided");

  return await prisma.resume.findUnique({
    where: { id },
    include: {
      personalInfo: true,
      education: true,
      experience: true,
      skills: true,
      certifications: true,
      references: true,
    },
  });
}

export async function getImprovedResume(resumeData: any) {
  try {
    const improvedResume = await improveResume(resumeData);
    return improvedResume;
  } catch (error) {
    console.error("Error improving resume:", error);
    return resumeData; // Fallback to original data if AI fails
  }
}
