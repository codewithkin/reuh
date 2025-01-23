import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headshot Generator",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
