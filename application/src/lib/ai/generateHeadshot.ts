import OpenAI from "openai";
import sharp from "sharp";
import { uploadImageToR2 } from "../uploadImageToR2";
import { v4 } from "uuid";
import { prisma } from "../../../prisma";
import { auth } from "@/auth";
import { getData } from "../actions";
import { User } from "@prisma/client";
import { r2_dev_url } from "@/constants/r2_dev_url";

export const generateHeadshot = async (imageBuffer: Buffer) => {
  try {
    const openai = new OpenAI();

    // Process the image to ensure it meets OpenAI's requirements
    const compressedImageBuffer = await sharp(imageBuffer)
      .ensureAlpha() // Add alpha channel to convert to RGBA
      .resize({ width: 1024, height: 1024, fit: "cover" }) // Resize to 1024x1024
      .png() // Convert to PNG (RGBA by default with `ensureAlpha`)
      .toBuffer();

    // Validate that the compressed image is within the size limit (4 MB)
    if (compressedImageBuffer.length > 4 * 1024 * 1024) {
      throw new Error("Compressed image exceeds the 4 MB limit.");
    }

    // Convert to a File object
    const file = new File([compressedImageBuffer], "headshot.png", { type: "image/png" });

    // Send the image to the DALL-E edit API
    const response = await openai.images.edit({
      prompt:
        "Edit the given image into a professional picture of the person in a smart business suit radiating confidence with a beautiful smile.",
      size: "1024x1024",
      image: file,
      n: 1, // Generate 1 image
    });

    if (!response.data[0].url) return null;

    // Upload the image to R2
    const headshotUrl = await uploadImageToR2({
      imageUrl: response.data[0].url,
      bucketName: "headshots",
      key: `headshot-${v4()}.jpg`,
    });

    // Get the current user session
    const session = await auth();

    // Extract the user's id from the session
    const email = session?.user?.email;
    const user = await getData("user");

    const userId = user?.id;

    // Create a new headshot entry in the prisma database
    await prisma.headshot.create({
      data: {
        imageUrl: headshotUrl,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    const fullUrl = `${r2_dev_url}${headshotUrl}`;

    // Step 1: Split the URL into parts
    const parts = fullUrl.split("https://");

    // Step 2: Extract the base domain
    const baseDomain = `https://${parts[1].split("/")[0]}`; // "https://pub-e9ce95d8c54a46e5a38f36fe58069937.r2.dev"

    // Step 3: Extract the filename from the second part
    const filename = parts[2].split("/").pop(); // "headshot-06410dcd-f3cf-4cbd-a959-45b2c08c5bdd.jpg"

    // Step 4: Combine the base domain and the filename
    const finalUrl = `${baseDomain}/${filename}`;

    console.log(`R2 url: ${finalUrl}`);
    return `${finalUrl}`;
  } catch (error) {
    console.error("Error generating headshot: ", error);
    throw error; // Rethrow the error for further handling
  }
};
