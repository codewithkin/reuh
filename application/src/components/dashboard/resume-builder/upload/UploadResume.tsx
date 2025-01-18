"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function UploadResume() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUpload = async () => {
    if (!file) return;
    setIsLoading(true);

    try {
      // Create FormData with the file
      const formData = new FormData();
      formData.append("file", file);

      // Upload and process the resume
      const response = await fetch("/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success && data.resumeId) {
        // Redirect to edit page with the new resume ID
        router.push(`/dashboard/resume-builder/build/data/edit?resume=${data.resumeId}`);
      } else {
        toast.error("Upload failed, please try again later");
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="flex flex-col gap-4 items-center justify-center min-h-[300px] border-2 border-dashed border-gray-300 rounded-lg p-6">
      <Input
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setFile(file);
        }}
        type="file"
        accept=".pdf, .docx, .doc, .txt"
        className="max-w-md"
      />

      {file && (
        <Button
          onClick={handleUpload}
          disabled={isLoading}
          className="bg-orange-500 hover:bg-orange-600"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 mr-2" />
              Upload Resume
            </>
          )}
        </Button>
      )}
    </article>
  );
}
