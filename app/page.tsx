import { LangProvider } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { TubesCursor } from "@/components/ui/tube-cursor";

export default function Home() {
  return (
    <LangProvider>
      <TubesCursor opacity={0.55} />
      <Nav />
      <main className="relative z-[2]">
        <Hero />
      </main>
      <Footer />
    </LangProvider>
  );
}
