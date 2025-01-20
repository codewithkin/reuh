"use client";
import { notification } from "@/types/notification";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function RecentActivity({ notifications }: { notifications: notification[] }) {
  return (
    <section className="my-4 px-4 flex flex-col gap-2">
      <h2 className="font-semibold text-xl md:text-2xl">Recent Activity</h2>

      <article className="flex flex-col gap-2">
        {notifications.length > 0 ? (
          notifications.map((notification: notification) => {
            const { createdAt, message, read, description } = notification;

            return (
              <motion.article
                key={createdAt.toDateString()}
                initial={{
                  x: -100,
                }}
                animate={{
                  x: 1,
                }}
                className="flex justify-between items-center"
              >
                <article className="flex gap-2 items-center">
                  <article className="w-4 h-4 rounded-full bg-secondaryLight"></article>
                  <article className="flex flex-col">
                    <p className="text-dullDark text-sm">{message}</p>
                  </article>
                </article>

                <p className="text-dulldark">{createdAt.toDateString()}</p>

                <Button color="secondary" size="icon">
                  <MoreHorizontal />
                </Button>
              </motion.article>
            );
          })
        ) : (
          <p className="text-dullDark">No recent activity</p>
        )}
      </article>
    </section>
  );
}
