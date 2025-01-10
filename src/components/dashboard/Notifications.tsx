"use client";
import * as React from "react"
 
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Bell, CheckCheck } from "lucide-react";
import { notification } from "@/types/notification";
import Notification from "./Notification";

export function Notifications() {
  const dummyNotifications: notification[] = [
    {
      title: "Your resume has been updated",
      read: false,
      createdOn: new Date(),
      success: true,
      resource: "Resume"
    },
    {
      title: "Your cover letter has been updated",
      read: false,
      createdOn: new Date(),
      success: true,
      resource: "Cover Letter"
    },
    {
      title: "Your headshot has been updated",
      read: false,
      createdOn: new Date(),
      success: true,
      resource: "Headshot"
    },
    {
      title: "Your resume has been updated",
      read: false,
      createdOn: new Date(),
      success: true,
      resource: "Resume"
    },
    {
      title: "Your resume has been updated",
      read: false,
      createdOn: new Date(),
      success: true,
      resource: "Resume"
    },
    {
      title: "Your headshot has been updated",
      read: false,
      createdOn: new Date(),
      success: true,
      resource: "Headshot"
    },
  ];

  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
 
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="icon" color="primary">
            <Bell size={25} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>
              Let's see what you've been up to
            </DialogDescription>
          </DialogHeader>
          <article className="my-2 flex flex-col gap-2">
            {
              dummyNotifications.length > 0 ? dummyNotifications.map((notification: notification) => {
                const { title, createdOn, success, resource, read } = notification

                return (
                  <Notification notification={notification} />
                )
              }) :
              <h2 className="text-dullLight">No new notifications</h2>
            }
          </article>
          <DialogFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
            <Button className="flex items-center gap-2">
              <CheckCheck size={20} />
              Mark all as read
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
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
          <DrawerDescription>
            Let's see what you've been up to
          </DrawerDescription>
        </DrawerHeader>
        <article className="m-2 flex flex-col gap-2">
            {
              dummyNotifications.length > 0 ? dummyNotifications.map((notification: notification) => {
                const { title, createdOn, success, resource, read } = notification

                return (
                  <Notification notification={notification} />
                )
              }) :
              <h2 className="text-dullLight">No new notifications</h2>
            }
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
  )
}