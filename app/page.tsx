import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlight } from "@/components/sections/Highlight";
import { PathPreview } from "@/components/sections/PathPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlight />
        <HowItWorks />
        <PathPreview />
      </main>
      <Footer />
    </>
  );
}

