import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function NewWhat() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primaryLight hover:shadow-xl transition duration-300 shadow-md font-semibold text-white px-4 py-2 rounded-xl">
          New
          <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>What can I do for you ?</DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/dashboard/resume-builder">New Resume</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href="/dashboard/cover-letter-builder">New Cover Letter</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href="/dashboard/headshot-generator">New Headshot</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/dashboard/interview-question-generator">New Mock Interview</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
