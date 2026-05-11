"use client";
import { useLang } from "../lang-provider";

const t = {
  en: {
    url: "alvvoayad.ai",
    brand: "brand.ai",
    menu: ["Work", "About", "Contact"],
    h1a: "Premium sites,",
    h1b: "shipped fast.",
    sub: "Brand-grade design and modern stacks for businesses that take themselves seriously.",
    cta: "Start now →",
    feats: [
      { v: "48h", l: "turnaround" },
      { v: "100/100", l: "page speed" },
      { v: "2 lang", l: "EN · AR" },
    ],
  },
  ar: {
    url: "alvvoayad.ai",
    brand: "brand.ai",
    menu: ["أعمال", "حول", "تواصل"],
    h1a: "مواقع احترافية،",
    h1b: "سرعة في التسليم.",
    sub: "تصميم بمستوى العلامات التجارية وأكواد حديثة للأعمال التي تأخذ نفسها على محمل الجد.",
    cta: "ابدأ ←",
    feats: [
      { v: "48س", l: "تسليم" },
      { v: "100/100", l: "سرعة" },
      { v: "لغتان", l: "عربي · إنجليزي" },
    ],
  },
} as const;

export function WebsiteDemo() {
  const { lang } = useLang();
  const c = t[lang];
  const isAr = lang === "ar";
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-[18px] py-[13px] bg-[#F7F7F9] border-b border-[#E5E5EA]">
        <span className="w-[11px] h-[11px] rounded-full bg-ember" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#D1D1D6]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#D1D1D6]" />
        <div className="ml-[14px] flex-1 h-[26px] rounded-md bg-white border border-[#E5E5EA] flex items-center gap-2 px-[14px] font-[var(--font-mono)] text-[11px] text-[#0F0F14] font-medium">
          <span className="w-[9px] h-[9px] rounded-full bg-ember shadow-[0_0_4px_rgba(255,106,46,0.4)]" />
          {c.url}
        </div>
      </div>

      {/* Page */}
      <div className="flex-1 overflow-hidden relative px-8 py-7 flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(180deg,#FFFFFF 0%, #FFF7F2 100%)" }}>
        <div className="absolute top-[18px] left-5 right-5 flex justify-between items-center">
          <div className="flex items-center gap-[7px] font-[var(--font-display)] text-[12px] font-semibold text-[#0F0F14]">
            <span className="w-[9px] h-[9px] rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #fff, #9DA3AB 50%, #1F2227)" }} />
            {c.brand}
          </div>
          <div className={`flex gap-[14px] font-[var(--font-mono)] text-[10px] text-[#5A5A6A] font-medium ${isAr ? "font-[var(--font-arabic)]" : ""}`}>
            {c.menu.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="w-[78px] h-[78px] mb-[14px] flex items-center justify-center">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[orbFloat_5s_ease-in-out_infinite]">
            <defs>
              <radialGradient id="wOrbBase" cx="38%" cy="32%" r="78%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="35%" stopColor="#9DA3AB" />
                <stop offset="70%" stopColor="#3F2A1A" />
                <stop offset="100%" stopColor="#0A0808" />
              </radialGradient>
              <linearGradient id="wOrbIrid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3FE5FF" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#D63FFF" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FF6A2E" stopOpacity="0.65" />
              </linearGradient>
            </defs>
            <circle cx={40} cy={40} r={30} fill="url(#wOrbBase)" />
            <circle cx={40} cy={40} r={30} fill="url(#wOrbIrid)" opacity={0.6} />
            <ellipse cx={30} cy={28} rx={9} ry={4} fill="rgba(255,255,255,0.7)" transform="rotate(-25 30 28)" />
            <ellipse cx={40} cy={60} rx={28} ry={6} fill="#FF6A2E" opacity={0.5} />
          </svg>
        </div>

        <div className={`font-[var(--font-display)] text-[30px] font-bold tracking-[-0.028em] leading-[1.05] text-[#0F0F14] mb-3 max-w-[380px] ${isAr ? "font-[var(--font-arabic)]" : ""}`}>
          {c.h1a}
          <br />
          <span style={{ background: "linear-gradient(110deg, var(--color-ember-halo), var(--color-ember), var(--color-magenta))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{c.h1b}</span>
        </div>
        <div className={`text-[12px] text-[#5A5A6A] max-w-[340px] leading-[1.55] mb-[18px] font-[var(--font-mono)] ${isAr ? "font-[var(--font-arabic)] leading-[1.8]" : ""}`}>{c.sub}</div>
        <div className="bg-ember text-white font-[var(--font-display)] text-[12px] font-semibold px-5 py-[10px] rounded-full inline-flex items-center gap-2 shadow-[0_12px_28px_rgba(255,106,46,0.4)]">{c.cta}</div>

        <div className="grid grid-cols-3 gap-[10px] mt-[22px] max-w-[460px] w-full">
          {c.feats.map((f) => (
            <div key={f.l} className="border border-[#E5E5EA] rounded-[10px] p-[10px_12px] bg-white font-[var(--font-mono)] text-[9.5px] text-[#5A5A6A] tracking-[0.06em] font-medium">
              <strong className="block font-[var(--font-display)] text-[13px] font-bold text-ember mb-[3px]">{f.v}</strong>
              {f.l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
