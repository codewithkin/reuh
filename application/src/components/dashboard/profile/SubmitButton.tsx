import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ somethingChanged }: { somethingChanged: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={!somethingChanged || pending}
      className="flex bg-primaryLight items-center gap-2"
    >
      {pending ? <Loader2 size={25} className="animate-spin" /> : <Check size={25} />}
      Save
    </Button>
  );
}
