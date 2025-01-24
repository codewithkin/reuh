"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CloudDownload, ImageIcon, Loader } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

export default function HeadshotGenerator() {
  const [loading, setLoading] = useState(false);
  const [headshot, setHeadshot] = useState<string | null>(null);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      toast.error("No file selected. Please upload an image.");
      return;
    }

    try {
      setLoading(true);

      // Create FormData
      const formData = new FormData();
      formData.append("headshot", file);

      // Make a request to the API route
      const response = await fetch("/api/headshot/generate", {
        method: "POST",
        body: formData,
      });

      const data: { headshotUrl?: string } = await response.json();

      if (response.status === 200 && data.headshotUrl) {
        setHeadshot(data.headshotUrl); // Set the returned headshot URL
      } else {
        toast.error("An error occurred, please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <article className="flex flex-col gap-2 justify-center items-center text-center h-full w-full">
      <Loader size={50} className="animate-spin text-primaryLight" />
      <article>
        <h2 className="text-xl font-semibold">Generating your headshot...</h2>
        <p className="text-dullDark">Sit back and relax, this may take a few seconds...</p>
      </article>
    </article>
  ) : headshot ? (
    <article className="flex flex-col justify-center items-center gap-2 text-center h-full w-full">
      <Image src={headshot} alt="Your headshot" width={300} height={300} className="rounded-full" />
      <article>
        <h2 className="text-xl font-semibold">Your headshot is ready</h2>
        <p className="text-sm text-dullDark">You can download it now or download it later</p>
      </article>
      <Button asChild>
        <Link
          href={`${headshot}`}
          className="bg-primaryLight hover:bg-primaryDark text-white font-semibold rounded-full px-4 py-2 transition duration-300"
          download="headshot.jpg"
        >
          Download
          <CloudDownload size={20} />
        </Link>
      </Button>
    </article>
  ) : (
    <div className="py-4 md:py-12 overflow-y-scroll h-screen md:pb-8 md:px-4 md:grid-cols-2 grid items-center align-center justify-center">
      <article className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Let's create an awesome headshot</h2>

        <article className="flex gap-2 items-center">
          <Image
            src="/images/headshots/selfie.jpg"
            alt="Sample headshot"
            className="rounded-xl"
            width={160}
            height={160}
          />
          <Image
            src="/images/headshots/person2.jpg"
            alt="Sample headshot"
            className="rounded-xl"
            width={200}
            height={200}
          />
        </article>

        <Image
          src="/images/headshots/person3.jpg"
          alt="Sample headshot"
          className="rounded-xl"
          width={400}
          height={100}
        />
      </article>

      <article className="flex flex-col gap-2 justify-center items-center">
        <Card className="w-fit h-fit p-4 flex flex-col justify-center items-center text-center">
          <CardHeader>
            <ImageIcon size={70} />
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold">Upload your picture</h2>
            <p className="text-dullDark text-sm">
              Please upload one or more clear images of yourself
            </p>
          </CardContent>
          <CardFooter>
            <Input
              onChange={handleChange}
              name="headshot"
              disabled={loading}
              accept=".jpg, .jpeg, .png"
              type="file"
              className="bg-primaryLight text-white"
            />
          </CardFooter>
        </Card>

        <article className="flex flex-col gap-4 text-center justify-center items-center p-4 bg-secondaryLight rounded-xl">
          <h2 className="text-2xl font-semibold text-primaryDark">TIPS</h2>

          <article className="flex gap-2 items-center justify-around">
            <article className="flex flex-col ga2 justify-center items-center">
              <Image
                alt="Selfie"
                src="/images/headshots/person1.jpg"
                width={100}
                height={100}
                objectFit="fill"
                className="rounded-lg"
              />

              <p className="text-sm text-primaryDark">
                Upload a clear selfie showing your face and features. No sunglasses or hats
              </p>
            </article>


            <article className="flex flex-col gap-2 justify-center items-center">
              <Image
                alt="Selfie"
                src="/images/headshots/suit.jpg"
                width={100}
                height={100}
                className="rounded-lg"
              />

              <p className="text-sm text-primaryDark">
                Upload files in different outifts. I recommend professional outfits such as suits
              </p>
            </article>

            <article className="flex flex-col gap-2 justify-center items-center">
              <Image
                alt="Selfie"
                src="/images/headshots/clear_face.jpg"
                width={100}
                height={100}
                className="rounded-lg"
              />

              <p className="text-sm text-primaryDark">
              Choose a photo taken at a good distance. Ideally 1m away, from the waist up showing your chest and face clearly
              </p>
            </article>
          </article>
        </article>
      </article>
    </div>
  );
}
