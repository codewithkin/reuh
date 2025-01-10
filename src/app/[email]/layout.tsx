import NavBar from "@/components/DesktopNavBar";
import MobileNavBar from "@/components/MobileNavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="md:px-2 items-center md:items-start w-screen md:py-4 md:h-screen flex-col-reverse flex md:flex-row"
      >
        <NavBar />
        <MobileNavBar />
        {children}
      </body>
    </html>
  );
}
