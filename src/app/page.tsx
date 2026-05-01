import Navbar from "@/components/Navbar";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import WeArePassionate from "../components/WeArePassionateSection";
import PrestigelessSection from "@/components/PrestigelessSection";
import ResultOrientedSection from "@/components/ResultOrientedSection";
import WeAreDoersSection from "@/components/WeAreDoersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <Navbar />
      <WelcomeSection />
      <WeArePassionate />
      <PrestigelessSection />
      <ResultOrientedSection />
      <WeAreDoersSection />
      <Footer />
    </main>
  );
}
