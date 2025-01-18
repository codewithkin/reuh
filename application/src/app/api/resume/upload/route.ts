import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { improveResume } from "@/lib/ai/improveResume";
import { prisma } from "../../../../../prisma";
import fs from "fs";
import pdfParse from "pdf-parse";

function parseDate(dateStr: string | undefined): Date | undefined {
  if (!dateStr) return undefined;
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? undefined : date;
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      console.log("Not authenticated");
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      console.log("User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Parse form data and get the uploaded file
    const formData = await request.formData();
    const file = formData.get("file") as File;

    // Check if the file is a PDF, DOCX, TXT, or RTF
    if (file?.type !== "application/pdf" && file?.type !== "application/msword" && file?.type !== "text/plain" && file?.type !== "application/rtf") {
      console.log("Invalid file type");
      return NextResponse.json(
        { error: "Invalid file type. Please upload a PDF, DOCX, TXT, or RTF." },
        { status: 400 }
      );
    }

    // Read the file content
    const fileBuffer = await file.arrayBuffer();
    const pdfText = await pdfParse(Buffer.from(fileBuffer)).then((data: any) => data.text);

    console.log("PDF text:", pdfText);

    // Pass the extracted text to the improveResume function
    const improvedResume = await improveResume(pdfText);

    // Save the resume data to the database
    const newResume = await prisma.resume.create({
      data: {
        userId: user.id,
        title: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension
        personalInfo: {
          create: improvedResume.personalInfo || {
            fullName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            country: "",
            summary: "",
          },
        },
        education: improvedResume.education
          ? {
              createMany: {
                data: improvedResume.education.map((edu) => ({
                  institution: edu.institution,
                  degree: edu.degree,
                  fieldOfStudy: edu.fieldOfStudy,
                  startDate: parseDate(edu.startDate?.toString()),
                  endDate: parseDate(edu.endDate?.toString()),
                  location: edu.location,
                  description: edu.description,
                })),
              },
            }
          : undefined,
        experience: improvedResume.experience
          ? {
              createMany: {
                data: improvedResume.experience.map((exp) => ({
                  company: exp.company,
                  position: exp.position,
                  startDate: parseDate(exp.startDate?.toString()),
                  endDate: parseDate(exp.endDate?.toString()),
                  location: exp.location,
                  description: exp.description,
                  technologies: exp.technologies,
                })),
              },
            }
          : undefined,
        skills: improvedResume.skills
          ? {
              createMany: {
                data: improvedResume.skills,
              },
            }
          : undefined,
        certifications: improvedResume.certifications
          ? {
              createMany: {
                data: improvedResume.certifications.map((cert) => ({
                  name: cert.name,
                  issuingBody: cert.issuingBody,
                  issueDate: parseDate(cert.issueDate?.toString()),
                  expiryDate: parseDate(cert.expiryDate?.toString()),
                  credentialId: cert.credentialId,
                  url: cert.url,
                })),
              },
            }
          : undefined,
      },
    });

    return NextResponse.json({
      success: true,
      resumeId: newResume.id,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        error: "Upload failed",
      },
      {
        status: 500,
      }
    );
  }
}
