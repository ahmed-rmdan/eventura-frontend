import Image from "next/image";
import Hero from "../components/home/hero";
import { Dual } from "../components/home/dual";
import Features from "../components/home/features";
import Popular from "@/components/home/popular";
import CTA from "@/components/home/cta";
export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Dual />
      <Features />
      <Popular />
      <CTA />
    </div>
  );
}
