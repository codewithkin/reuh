import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { DrawerClose } from "../ui/drawer";
import { DialogFooter } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function ProfileForm () {
    const email = "kinzinzombe07@gmail.com";
    const occupation = "Software Engineer";
    const joinedOn = "5 January 2025";
    const name = "Kin Leon Zinzombe";

    return (
        <form className="my-2 flex flex-col gap-2">
            <article className="flex gap-2 items-center">
                <img src="/images/design/suit.jpg" className="w-20 h-20 rounded-full" alt="me" />
                <Button className="bg-primaryDark">Change Picture</Button>
            </article>

            {/* Field */}
            <article className="flex my-2 gap-1 flex-col">
                <Label htmlFor="name">Your name</Label>
                <Input
                defaultValue={name}
                            required
                            name="name"
                            aria-label="Your name"
                            placeholder="John Doe"
                        />
            </article>

            <article className="flex my-2 gap-1 flex-col">
                <Label htmlFor="email">Email</Label>
                <Input
                defaultValue={email}
                            required
                            name="email"
                            aria-label="Your email"
                            placeholder="johndoe@gmail.com"
                        />
            </article>

            <article className="flex my-2 gap-1 flex-col">
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                defaultValue={occupation || ""}
                            required
                            name="occupation"
                            aria-label="Your Occupation"
                            placeholder="johndoe@gmail.com"
                        />
            </article>

          <DialogFooter className="pt-2">
                <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                </DrawerClose>
                    <Button className="flex bg-primaryLight items-center gap-2">
                        <Check size={25} />
                        Save
                    </Button>
                </DialogFooter>
          </form>
    )
}