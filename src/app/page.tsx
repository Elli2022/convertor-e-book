//src/app/page.tsx
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import WeArePassionate from "../components/WeArePassionateSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <WelcomeSection />
      <WeArePassionate />
    </main>
  );
}
