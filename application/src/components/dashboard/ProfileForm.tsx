import { Button } from "../ui/button";
import { DrawerClose } from "../ui/drawer";
import { DialogFooter } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState, useEffect, Suspense } from "react";
import { getData, updateUser } from "@/lib/actions";
import SubmitButton from "./profile/SubmitButton";
import { useFormState } from "react-dom";
import { motion } from "framer-motion";
import * as filestack from "filestack-js";
const client = filestack.init(process.env.FILE_PICKER_API_KEY || "ApYSRl2kLQvWaJMR0n6ngz");

export default function ProfileForm() {
  // Track the user's data
  const [me, setMe] = useState<any>(null);

  // Track the uploaded image
  const [uploadedImage, setUploadedImage] = useState<any>(null);

  const onFileUploaded = (res: any) => {
    console.log(res);
  };

  // Open the File picker API
  const picker = client.picker();

  // Track if the user has made changes to the form
  const [somethingChanged, setSomethingChanged] = useState(false);

  // Create a default state for the form
  const defaultState = {
    success: false,
    message: "",
  };

  // Create a state for the form
  const [state, changeUser] = useFormState(updateUser, defaultState);

  // Get the user's data on initial load / render
  useEffect(() => {
    const getUserData = async () => {
      const me = await getData("user");
      setMe(me);
    };

    getUserData();
  }, []);

  return (
    <Suspense fallback={<h2>Loading</h2>}>
      <form action={changeUser} className="my-2 flex flex-col gap-2">
        <article className="flex gap-2 items-center">
          <img src="/images/design/suit.jpg" className="w-20 h-20 rounded-full" alt="me" />
          <Button onClick={() => picker.open()} className="bg-primaryDark">
            Change Picture
          </Button>
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

        {state.success && state.message.length > 0 && (
          <motion.article
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="rounded-xl my-2 py-2 px-4 flex justify-center items-center bg-secondaryLight text-primaryDark font-semibold text-md"
          >
            {state.message}
          </motion.article>
        )}
        <DialogFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
          <SubmitButton somethingChanged={somethingChanged} />
        </DialogFooter>
      </form>
    </Suspense>
  );
}
