import { notification } from "@/types/notification";
import { Check, TriangleAlert } from "lucide-react";

export default function Notification({ notification }: { notification: notification }) {
  const { title, resource, read, createdOn, success } = notification;

  return (
    <article className="flex gap-2 items-center">
      {success ? (
        <article className=" bg-secondaryLight rounded-full text-white p-2 flex flex-col items-center justify-center">
          <Check size={18} />
        </article>
      ) : (
        <article className=" bg-danger rounded-full text-white p-2 flex flex-col items-center justify-center">
          <TriangleAlert size={18} />
        </article>
      )}
      <article className="flex flex-col">
        <h2 className="font-medium">{title}</h2>
        <article className="flex gap-2">
          {/* Unread: Chip */}

          <p className="text-sm text-dullDark">{createdOn.toTimeString()}</p>
        </article>
      </article>
    </article>
  );
}
