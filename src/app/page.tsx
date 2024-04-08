//src/app/page.tsx
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import WeArePassionate from "../components/WeArePassionateSection";
import PrestigelessSection from "@/components/PrestigelessSection";
import ResultOrientedSection from "@/components/ResultOrientedSection";
import WeAreDoersSection from "@/components/WeAreDoersSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div style={{ cursor: "none" }}>
      {" "}
      {/* Inline style för att dölja cursor */}
      <CustomCursor />
      <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <WelcomeSection />
        <WeArePassionate />
        <PrestigelessSection />
        <ResultOrientedSection />
        <WeAreDoersSection />
        <Footer />
      </main>
    </div>
  );
}
