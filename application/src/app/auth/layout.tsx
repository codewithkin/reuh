import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
