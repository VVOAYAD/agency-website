"use client";
import { useLang } from "./lang-provider";

const meta = {
  en: "© 2026 — Oman · Built around how you actually work.",
  ar: "© 2026 — سلطنة عُمان · مبنية حول طريقة عملكم الفعلية",
} as const;

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="px-7 pt-12 pb-9 border-t border-border-soft mt-16 text-center">
      <div className="inline-flex items-center gap-[10px] text-bone font-[var(--font-display)] text-[18px] font-medium tracking-[-0.012em]">
        <span className="foot-dot relative w-3 h-3 rounded-full shrink-0" />
        alvvoayad.ai
      </div>
      <div
        className={[
          "mt-3 text-[11px] text-bone-faint tracking-[0.08em] font-[var(--font-mono)]",
          lang === "ar" ? "font-[var(--font-arabic)]" : "",
        ].join(" ")}
      >
        {meta[lang]}
      </div>
      <style jsx>{`
        .foot-dot {
          background: radial-gradient(circle at 30% 30%, #ffffff 0%, #e8ecef 25%, #9da3ab 55%, #3f2a1a 85%, #0a0808 100%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.15), inset 0 0 4px rgba(0, 0, 0, 0.4);
        }
        .foot-dot::after {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          width: 4px;
          height: 2px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          transform: rotate(-20deg);
        }
      `}</style>
    </footer>
  );
}
