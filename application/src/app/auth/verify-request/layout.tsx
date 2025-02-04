import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify your email",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
