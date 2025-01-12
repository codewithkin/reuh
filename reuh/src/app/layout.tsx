import DesktopNav from "@/components/pieces/DesktopNav";
import "./globals.css";
import MobileNav from "@/components/pieces/MobileNav";
import Footer from "@/components/pieces/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DesktopNav />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
