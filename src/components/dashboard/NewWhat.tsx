import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { ChevronDown } from "lucide-react"

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
                        New Resume
                    </DropdownMenuItem>
                    
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        New Cover Letter
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        New Headshot
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}