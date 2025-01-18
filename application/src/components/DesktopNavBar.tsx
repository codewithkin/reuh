"use client";
import { ChartBar, Check, CheckCheck, DoorOpen, PencilRuler, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Logout } from "@/lib/actions";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { DrawerClose } from "./ui/drawer";
import ProfileForm from "./dashboard/ProfileForm";

export default function NavBar() {
  // Get the current url
  const url: string = usePathname();

  // Get the user's email
  const email = "kinzinzombe07@gmail.com";

  const [open, setOpen] = useState(false);

  return (
    <nav className="hidden py-4 md:flex flex-col justify-between items-center md:h-full px-2 md:py-8 bg-primaryDark rounded-full md:rounded-2xl">
      <article className="flex flex-col gap-8">
        {/* Logo */}
        <Image
          className="hidden md:flex"
          src="/images/design/logo.png"
          alt="Reuh logo"
          width={50}
          height={50}
        />

        {/* Links */}
        <ul className="text-dullLight flex md:flex-col gap-4 justify-center items-center">
          <li>
            <Link
              className={`${url === `/dashboard` && "text-primaryLight"} hover:text-primaryLight transition duration-300`}
              href="/dashboard"
            >
              <ChartBar />
            </Link>
          </li>
          <li>
            <Link
              className={`${url === `/dashboard/tools` && "text-primaryLight"} hover:text-primaryLight transition duration-300`}
              href="/dashboard/tools"
            >
              <PencilRuler />
            </Link>
          </li>
          <li></li>
          <li>
            <Link
              className={`${url === `/dashboard/settings` && "text-primaryLight"} hover:text-primaryLight transition duration-300`}
              href="/dashboard/settings"
            >
              <Settings />
            </Link>
          </li>

          {/* Prevent the form from closing when user clciks outside the dialog */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-primaryLight transition duration-300 hover:bg-orange-500 hover:shadow-lg"
                size="icon"
                color="primary"
              >
                <User size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Your Profile</DialogTitle>
                <DialogDescription>Your information stored in Reuh</DialogDescription>
              </DialogHeader>
              <ProfileForm />
            </DialogContent>
          </Dialog>
        </ul>
      </article>

      {/* Logout */}
      <Button
        onClick={() => Logout()}
        color="secondary"
        className="text-white transition duration-300 bg-red-500 hover:bg-red-700"
      >
        <DoorOpen />
      </Button>
    </nav>
  );
}
