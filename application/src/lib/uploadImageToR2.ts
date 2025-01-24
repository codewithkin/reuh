import AWS from "aws-sdk";
import axios from "axios";
import { Readable } from "stream";

// Define the function's parameters and return type
interface UploadImageToR2Params {
  imageUrl: string; // The URL of the image to download
  bucketName: string; // The name of your Cloudflare R2 bucket
  key: string; // The path and filename in the bucket (e.g., 'images/image.png')
}

// Configure AWS SDK for Cloudflare R2
const s3 = new AWS.S3({
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`, // Replace with your Cloudflare account ID
  accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID, // Replace with your R2 access key
  secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY, // Replace with your R2 secret key
  signatureVersion: "v4",
  region: "auto", // Cloudflare R2 uses 'auto' as the region
});

/**
 * Uploads an image to Cloudflare R2.
 * @param params - The parameters for uploading the image.
 * @returns The public URL of the uploaded image.
 */
export async function uploadImageToR2(params: UploadImageToR2Params): Promise<string> {
  const { imageUrl, bucketName, key } = params;

  try {
    // Step 1: Download the image from the OpenAI URL
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

    // Step 2: Upload the image to Cloudflare R2
    const uploadParams: AWS.S3.PutObjectRequest = {
      Bucket: bucketName,
      Key: key, // The name of the file in the bucket (e.g., 'images/image.png')
      Body: response.data,
      ContentType: "image/png", // Adjust based on the image type
    };

    const data = await s3.upload(uploadParams).promise();
    console.log(`Image uploaded to R2: ${data.Location}`);
    return data.Location; // Returns the public URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image to R2:", error);
    throw error;
  }
}
