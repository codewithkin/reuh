import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await auth()

  if(!session) {
    return redirect("/auth")
  }

  if(!session?.user?.email) {
    return redirect("/auth")
  }

  if (session) {
    return redirect(`/dashboard`)
  }
  return redirect("/auth")
}
