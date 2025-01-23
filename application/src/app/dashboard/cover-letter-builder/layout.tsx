import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cover Letter Generator",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
