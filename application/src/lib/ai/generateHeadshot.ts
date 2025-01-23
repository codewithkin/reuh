import OpenAI from "openai";
import sharp from "sharp";

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
      prompt: "Given a headshot of a person, capture their facial features, body type and skin color and use this information to create a professional headshot of them in professional clothing (a suit) with a beautiful smart and confident posture.",
      size: "1024x1024",
      image: file,
      n: 1, // Generate 1 image
    });

    console.log("Generated Headshot URL: ", response.data[0].url);
    return response.data[0].url;
  } catch (error) {
    console.error("Error generating headshot: ", error);
    throw error; // Rethrow the error for further handling
  }
};