import { notification } from "@/types/notification";
import { Check, InfoIcon, TriangleAlert } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Notification({ notification }: { notification: notification }) {
  const { message, read, description, createdAt } = notification;

  return (
    <article className="flex gap-2 items-center">
      <InfoIcon size={18} />
      <article className="flex flex-col">
        <h2 className="font-medium">{message}</h2>
        <article className="flex gap-2">
          {/* Unread: Chip */}
          <Badge className={`${!read && "bg-primaryLight"}`} variant={read ? "outline" : "default"}>
            {read ? "read" : "unread"}
          </Badge>

          <p className="text-sm text-dullDark">{createdAt.toTimeString()}</p>
        </article>
      </article>
    </article>
  );
}
