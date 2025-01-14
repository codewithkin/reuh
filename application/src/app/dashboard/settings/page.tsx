import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Settings"
}

export default function Settings() {
    return (
        <section className="py-4 overflow-y-scroll h-screen md:py-0 md:pb-8 px-4 w-full">
          <h2 className="font-semibold text-2xl">Settings</h2>

          {/* Settings tabs */}
          <Tabs defaultValue="appearance">
            <TabsList className="my-4">
              <TabsTrigger value="appearance">
                Appearance
              </TabsTrigger>
            </TabsList>

            <TabsContent className="flex flex-col md:gap-8 gap-4" value="appearance">
              <article className="flex flex-col border-b border-gray-300 pb-4">
                <h2 className="text-xl font-semibold">Appearance</h2>
                <p className="text-dullDark">Customize the site's appearance</p>
              </article>

              <article className="flex justify-between items-center">
                <article className="flex flex-col">
                  <h2 className="text-lg font-semibold">Brand Color</h2>
                  <p className="text-dullDark">Change the site's color</p>
                </article>

                <article className="flex items-center gap-2">
                  <article className="w-6 h-6 rounded-sm bg-primaryLight"></article>

                  {/* Update primaryColor input */}
                  <Input
                    name="color"
                    color="secondary"
                    prefix="#"
                    defaultValue="#008BF8"
                  />
                </article>
              </article>
            </TabsContent>
          </Tabs>
        </section>
    )
}