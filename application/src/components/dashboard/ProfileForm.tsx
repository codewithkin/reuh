import { Button } from "../ui/button";
import { DrawerClose } from "../ui/drawer";
import { DialogFooter } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState, useEffect, Suspense } from "react";
import { getData, updateUser } from "@/lib/actions";
import SubmitButton from "./profile/SubmitButton";
import { useFormState } from "react-dom";
import { toast } from "sonner";

export default function ProfileForm () {
    const email = "kinzinzombe07@gmail.com";
    const occupation = "Software Engineer";
    const joinedOn = "5 January 2025";
    const name = "Kin Leon Zinzombe";
    
    const [me, setMe] = useState<any>(null);
    const [somethingChanged, setSomethingChanged] = useState(false);

    const defaultState = {
        success: false,
        message: ""
    }

    const [state, changeUser] = useFormState(updateUser, defaultState);

    useEffect(() => {
        const getUserData = async () => {
            const me = await getData("user");
            setMe(me);
        }

        getUserData();
    }, []);

    return (
        <Suspense fallback={<h2>Loading</h2>}>
            <form action={changeUser} className="my-2 flex flex-col gap-2">
                <article className="flex gap-2 items-center">
                    <img src="/images/design/suit.jpg" className="w-20 h-20 rounded-full" alt="me" />
                    <Button className="bg-primaryDark">Change Picture</Button>
                </article>

                {/* Field */}
                <article className="flex my-2 gap-1 flex-col">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                    defaultValue={me?.name}
                                onChange={() => setSomethingChanged(true)}
                                name="name"
                                aria-label="Your name"
                                placeholder="John Doe"
                            />
                </article>

                <article className="flex my-2 gap-1 flex-col">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input
                    defaultValue={me?.occupation}
                                onChange={() => setSomethingChanged(true)}
                                name="occupation"
                                aria-label="Your Occupation"
                                placeholder="Software Engineer"
                            />
                </article>

            <DialogFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                        {
                            state.success && state.message.length > 0 &&
                            <article className="rounded-xl bg-green-400 text-white font-semibold text-md">
                                {state.message}
                            </article>
                        }
                        <SubmitButton somethingChanged={somethingChanged} />
                    </DialogFooter>
            </form>
          </Suspense>
    )
}