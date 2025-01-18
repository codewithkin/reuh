import UploadResume from "@/components/dashboard/resume-builder/upload/UploadResume";

export default function BuildNewResume() {
  return (
    <section className="px-4 sm:px-8 md:px-10 py-10 md:py-20 flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-start text-center font-semibold mb-8">
        Please upload your existing resume
      </h2>
      <UploadResume />
    </section>
  );
}
