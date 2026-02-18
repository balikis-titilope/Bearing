import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlight } from "@/components/sections/Highlight";
import { PathPreview } from "@/components/sections/PathPreview";
import { Philosophy } from "@/components/sections/Philosophy";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Highlight />
        <Philosophy />
        <HowItWorks />
        <PathPreview />
      </main>
      <Footer />
    </>
  );
}

