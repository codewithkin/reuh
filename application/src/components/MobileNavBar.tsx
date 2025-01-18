"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { Button } from "./ui/button";
import { Check, User } from "lucide-react";
import { DrawerClose } from "./ui/drawer";
import ProfileForm from "./dashboard/ProfileForm";

export default function MobileNavBar() {
  const url: string = usePathname();

  // Get the user's email
  const email = "kinzinzombe07@gmail.com";

  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden w-fit my-2 fixed bottom-0 text-white flex items-center bg-primaryDark rounded-full">
      <Link
        className={`${url === `/dashboard` && "bg-primaryLight rounded-full"} flex gap-2 items-center py-4 px-4 text-md font-semibold`}
        href="/dashboard"
      >
        Home
      </Link>
      <Link
        className={`${url === `/dashboard/tools` && "bg-primaryLight rounded-full"} flex gap-2 items-center py-4 px-4 text-md font-semibold`}
        href="/dashboard/tools"
      >
        Tools
      </Link>

      <Link
        className={`${url === `/dashboard/settings` && "bg-primaryLight rounded-full"} flex gap-2 items-center py-4 px-4 text-md font-semibold`}
        href="/dashboard/settings"
      >
        Settings
      </Link>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-primaryLight transition duration-300 hover:bg-orange-500 hover:shadow-lg rounded-full"
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
    </nav>
  );
}
