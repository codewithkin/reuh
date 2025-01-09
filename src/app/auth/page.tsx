import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Sign in"
}

export default function Auth() {
    return (
        <section
        className="w-screen h-screen flex flex-col justify-center items-center"
            style={{
                backgroundImage: "url(/images/design/suit.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <form
            action={
                async (formData: FormData) => {
                    "use server";

                    await signIn("resend", formData);
                }
            }
            className="bg-white rounded-3xl p-8 w-fit"
            >
                {/* Branding */}
                <article className="flex flex-col justify-center items-center mb-4 text-center">
                    <Image
                        src="/images/design/logo.png"
                        alt="Reuh logo"
                        width={50}
                        height={50}
                    />
                    <article>
                        <h2 className="text-4xl font-bold">
                            Reuh
                        </h2>
                        <p className="text-dullDark">Your all in one toolkit for <br />professional growth</p>
                    </article>
                </article>

                <article className="flex flex-col mb-2">
                    {/* Fields */}
                    <article className="flex flex-col gap-1 my-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            name="email"
                            aria-label="Your email"
                            placeholder="johndoe@gmail.com"
                        />
                    </article>

                    {/* Sign in with email btn */}
                    <Button type="submit" className="text-white font-medium flex justify-center items-center bg-gradient-to-r from-purple-600 to-primaryLight rounded-xl  py-2 px-16">
                        Sign in with email
                    </Button>
                </article>
            </form>
        </section>
    )
}