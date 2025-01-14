import NavBar from "@/components/DesktopNavBar";
import MobileNavBar from "@/components/MobileNavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section
        className="md:px-2 overflow-hidden items-center md:items-start w-screen md:py-4 md:h-screen flex-col-reverse flex md:flex-row"
      >
        <NavBar />
        <MobileNavBar />
        <article className="overflow-y-scroll h-screen">
          {children}
        </article>
      </section>
  );
}
