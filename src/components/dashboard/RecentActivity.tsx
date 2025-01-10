"use client";
import { notification } from "@/types/notification";
import { dummyNotifications } from "./Notifications";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function RecentActivity () {
    return (
        <section className="my-4 px-4 flex flex-col gap-2">
            <h2 className="font-semibold text-xl md:text-2xl">Recent Activity</h2>

            <article className="flex flex-col gap-2">
                {
                    dummyNotifications.map((notification: notification) => {
                        const {title, success, createdOn, read, resource } = notification;

                        return (
                            <motion.article 
                            key={createdOn.toDateString()}
                            initial={{
                                x: -100
                            }}
                            animate={{
                                x: 1
                            }} className="flex justify-between items-center">
                                <article className="flex gap-2 items-center">
                                    <article className="w-4 h-4 rounded-full bg-secondaryLight"></article>
                                    <article className="flex flex-col">
                                        <h2 className="font-semibold">{title}</h2>
                                        <p className="text-dullDark text-sm">Resource: {resource}</p>
                                    </article>
                                </article>

                                <p className="text-dulldark">
                                    {createdOn.toDateString()}
                                </p>

                                <Button color="secondary" size="icon">
                                    <MoreHorizontal />
                                </Button>
                            </motion.article>
                        )
                    })
                }
            </article>
        </section>
    )
}