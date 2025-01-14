import { getData } from "@/lib/actions";
import { Metadata } from "next";
import SettingsContent from "@/components/dashboard/settings/SettingsContent";
import { root } from "@/constants/rootUrl";

export const metadata: Metadata = {
  title: "Your Settings"
}

export default async function Settings() {
  const user = await getData("user");
  
  if(!user) throw new Error('User not found in Settings page');

  return <SettingsContent user={user} />;
}