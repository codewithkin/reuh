"use client";
import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Bell, CheckCheck, Loader2 } from "lucide-react";
import { notification } from "@/types/notification";
import Notification from "./Notification";
import { markNotificationsAsReadAction } from "@/lib/actions";

export function Notifications({ notifications }: { notifications: notification[] }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [pendingNotificationSetRead, setPending] = React.useState<boolean>(false);

  const markNotificationsAsRead = async () => {
    try {
      setPending(true);
      // Mark all notifications as read
      await markNotificationsAsReadAction();
    } catch (e) {
      console.log(e);
    } finally {
      setPending(false);
    }
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="icon" color="primary">
            <Bell size={25} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] h-full">
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>Let's see what you've been up to</DialogDescription>
          </DialogHeader>
          <article className="my-2 flex flex-col gap-2 overflow-y-scroll h-full">
            {notifications.length > 0 ? (
              notifications.map((notification: notification) => {
                const { title, createdOn, success, resource, read } = notification;

                return <Notification notification={notification} />;
              })
            ) : (
              <h2 className="text-dullLight">No new notifications</h2>
            )}
          </article>
          <DialogFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
            <Button
              type="button"
              onClick={markNotificationsAsRead}
              disabled={notifications.length === 0 || pendingNotificationSetRead}
              className="flex items-center gap-2"
            >
              {pendingNotificationSetRead ? (
                <Loader2 className="animate-spin 2-4 h-4" />
              ) : (
                <CheckCheck size={20} />
              )}
              Mark all as read
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size="icon" color="primary">
          <Bell size={25} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>Let's see what you've been up to</DrawerDescription>
        </DrawerHeader>
        <article className="m-2 flex flex-col gap-2">
          {notifications.length > 0 ? (
            notifications.map((notification: notification) => {
              const { title, createdOn, success, resource, read } = notification;

              return <Notification notification={notification} />;
            })
          ) : (
            <h2 className="text-dullLight">No new notifications</h2>
          )}
        </article>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
          <Button className="flex items-center gap-2">
            <CheckCheck size={20} />
            Mark all as read
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
