import { LangProvider } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { Stage } from "@/components/stage";
import { Footer } from "@/components/footer";
import { TubesCursor } from "@/components/ui/tube-cursor";
import { Ticker, StatsSection, ProcessSection, PricingSection, CtaSection } from "@/components/sections";

export default function Home() {
  return (
    <LangProvider>
      <TubesCursor opacity={0.55} />
      <Nav />
      <main className="relative z-[2]">
        <Stage />
        <Ticker />
        <StatsSection />
        <ProcessSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </LangProvider>
  );
}
