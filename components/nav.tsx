"use client";
import { useEffect, useState } from "react";
import { useLang } from "./lang-provider";

const links = {
  en: { process: "Process", guide: "30-Day Guide", contact: "Contact" },
  ar: { process: "مراحل العمل", guide: "دليل الـ 30 يوم", contact: "تواصل" },
} as const;

export function Nav() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const t = links[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-[100] px-7 py-[18px]",
        "flex items-center justify-between",
        "bg-midnight/75 backdrop-blur-xl",
        "border-b transition-colors duration-300",
        scrolled ? "border-border-soft" : "border-transparent",
      ].join(" ")}
    >
      <a href="#" className="flex items-center gap-3 no-underline text-bone">
        <span className="brand-dot block w-[14px] h-[14px] rounded-full relative shrink-0" />
        <span className="font-[var(--font-display)] text-[22px] font-medium tracking-[-0.018em] text-bone leading-none">
          alvvoayad.ai
        </span>
      </a>

      <div className="flex items-center gap-7">
        <a href="#process" className="hidden md:inline text-[13px] text-bone-dim hover:text-bone font-medium transition-colors">
          {t.process}
        </a>
        <a href="/guide" className="hidden md:inline text-[13px] text-bone-dim hover:text-bone font-medium transition-colors">
          {t.guide}
        </a>
        <a href="#contact" className="hidden md:inline text-[13px] text-bone-dim hover:text-bone font-medium transition-colors">
          {t.contact}
        </a>
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="text-[12px] text-bone-dim hover:text-bone bg-transparent border border-border-strong px-[14px] py-[6px] rounded-full font-[var(--font-mono)] font-medium hover:border-ember transition-all"
        >
          {lang === "en" ? "عربي" : "EN"}
        </button>
      </div>

      <style jsx>{`
        .brand-dot {
          background: radial-gradient(circle at 30% 30%, #ffffff 0%, #e8ecef 25%, #9da3ab 55%, #3f2a1a 85%, #0a0808 100%);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.15), inset 0 0 4px rgba(0, 0, 0, 0.4);
        }
        .brand-dot::after {
          content: "";
          position: absolute;
          top: 2px;
          left: 3px;
          width: 5px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          transform: rotate(-20deg);
        }
      `}</style>
    </nav>
  );
}
