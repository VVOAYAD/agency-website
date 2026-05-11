"use client";
import { motion } from "motion/react";
import { Zap, ArrowUpRight } from "lucide-react";
import { useLang } from "./lang-provider";
import { ChromeOrb } from "./chrome-orb";

const copy = {
  en: {
    badge: "Available for new clients",
    h1a: "We build the systems",
    h1b: "your business is",
    h1c: "missing.",
    sub: "Dashboards, automation, websites and apps — built around how you actually work.",
    pills: ["Dashboards", "Automation", "Websites", "Apps"],
    cta: "Start a conversation",
  },
  ar: {
    badge: "نستقبل عملاء جدد",
    h1a: "نبني الأنظمة",
    h1b: "التي تنقص",
    h1c: "أعمالكم.",
    sub: "لوحات تحكّم، أتمتة، مواقع، تطبيقات — مصمَّمة حول طريقة عملكم الفعلية.",
    pills: ["لوحات تحكّم", "أتمتة", "مواقع", "تطبيقات"],
    cta: "ابدأ المحادثة",
  },
} as const;

const waLinks = {
  en: "https://wa.me/96877056051?text=Hi%2C%20I%27m%20interested%20in%20working%20with%20you",
  ar: "https://wa.me/96877056051?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1",
} as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  const { lang } = useLang();
  const t = copy[lang];
  const isAr = lang === "ar";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-7 pt-32 pb-24 text-center">
      <motion.div {...fade(0.05)} className="inline-flex items-center gap-[10px] text-bone bg-midnight/65 backdrop-blur-md border border-border-strong rounded-full px-4 py-[7px] mb-7 text-[12px] font-medium font-[var(--font-mono)]">
        <span className="w-6 h-6 rounded-[7px] bg-gradient-to-br from-ember-halo to-ember flex items-center justify-center shadow-[0_0_12px_rgba(255,106,46,0.5)]">
          <Zap className="w-[13px] h-[13px] text-midnight" strokeWidth={2.5} />
        </span>
        {t.badge}
      </motion.div>

      <motion.h1
        {...fade(0.15)}
        className={[
          "max-w-[1100px] mx-auto mb-6 text-bone",
          isAr ? "font-[var(--font-arabic)] font-black leading-[1.16] tracking-[-0.02em]" : "font-[var(--font-display)] font-bold leading-[0.97] tracking-[-0.045em]",
          "text-[clamp(44px,8vw,108px)]",
        ].join(" ")}
      >
        {t.h1a}
        <br />
        {t.h1b} <span className="ember-shimmer">{t.h1c}</span>
      </motion.h1>

      <motion.p
        {...fade(0.25)}
        className={[
          "max-w-[580px] mx-auto mb-7 text-bone-dim text-[17px] leading-[1.55]",
          isAr ? "font-[var(--font-arabic)] leading-[1.8]" : "",
        ].join(" ")}
      >
        {t.sub}
      </motion.p>

      <motion.div {...fade(0.35)} className="flex flex-wrap gap-2 justify-center mb-7">
        {t.pills.map((p) => (
          <span
            key={p}
            className="font-[var(--font-mono)] text-[10.5px] font-semibold uppercase tracking-[0.16em] text-bone-dim px-[14px] py-[7px] border border-border-strong rounded-full bg-midnight/50 backdrop-blur-sm"
          >
            {p}
          </span>
        ))}
      </motion.div>

      <motion.div {...fade(0.45)}>
        <ChromeOrb size={360} />
      </motion.div>

      <motion.a
        {...fade(0.6)}
        href={waLinks[lang]}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-2 inline-flex items-center gap-[14px] bg-bone text-midnight font-[var(--font-display)] text-[14.5px] font-semibold pl-[22px] pr-[7px] py-[7px] rounded-full no-underline shadow-[0_16px_50px_rgba(255,106,46,0.25),0_0_0_1px_rgba(245,233,216,0.6)] hover:shadow-[0_24px_70px_rgba(255,106,46,0.45),0_0_0_1px_var(--color-ember)] hover:-translate-y-[2px] transition-all duration-300"
      >
        {t.cta}
        <span className="w-[34px] h-[34px] rounded-full bg-ember flex items-center justify-center text-midnight transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-[14px] h-[14px]" strokeWidth={2.5} />
        </span>
      </motion.a>
    </section>
  );
}
