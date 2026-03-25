import "./page.css";
import MucMarathonClient from "@/components/MucMarathonClient/MucMarathonClient";
import type { Metadata } from 'next'

export const metadata : Metadata = {
  title: "Run with Ionuț-Alexandru",
  description: "Ionuț-Alexandru in the MUC Marathon 2025"
}

export default function Page() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 lg:items-center">
        <MucMarathonClient />
      </main>
    </div>
  )
}
