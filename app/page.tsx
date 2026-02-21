import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlight } from "@/components/sections/Highlight";
import { PathPreview } from "@/components/sections/PathPreview";
import { Philosophy } from "@/components/sections/Philosophy";
import { HowItWorks } from "@/components/sections/HowItWorks";

import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Navbar session={session} />
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

