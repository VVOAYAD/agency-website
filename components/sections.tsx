"use client";
import { motion } from "motion/react";
import { useLang } from "./lang-provider";

const t = {
  en: {
    stats: [
      { v: "10h+", l: "Saved weekly per client" },
      { v: "24/7", l: "Systems run non-stop" },
      { v: "48h", l: "From first call to proposal" },
    ],
    processLabel: "How we work",
    processH: "Simple. Fast. Done.",
    steps: [
      { n: "01 — TALK", h: "Tell us the problem", p: "Send a WhatsApp message about what's slowing you down. Plain language. No jargon." },
      { n: "02 — DESIGN", h: "We propose the solution", p: "Within 48 hours: clear scope, timeline, price. You decide what to ship." },
      { n: "03 — RUN", h: "It runs while you sleep", p: "We build, test, deploy, and stay to make sure it keeps running." },
    ],
    priceLabel: "Pricing",
    priceH: "Transparent. Custom-scoped.",
    setup: { l: "Setup", d: "One-time fee to design, build, and deploy your system. Scope and pricing tailored to what you need.", a: "Get a quote" },
    monthly: { l: "Monthly partnership", d: "Ongoing maintenance, monitoring, updates, priority support. Systems stay running and keep improving.", a: "From 50 OMR / month" },
    most: "Most chosen",
    ctaH: "Ready to stop doing it manually?",
    ctaP: "Tell us your most time-consuming task. We'll tell you if it can be automated — free.",
    ctaBtn: "Message on WhatsApp",
    ctaNote: "Free consultation · No commitment · Reply within 24 hours",
  },
  ar: {
    stats: [
      { v: "+10h", l: "توفير أسبوعي لكل عميل" },
      { v: "24/7", l: "أنظمة تعمل دون توقف" },
      { v: "48h", l: "من التواصل إلى العرض" },
    ],
    processLabel: "آلية العمل",
    processH: "بسيط. سريع. منجَز.",
    steps: [
      { n: "01 — تواصل", h: "أخبرونا بالمشكلة", p: "أرسلوا رسالة عبر واتساب عن ما يبطئ أعمالكم. بلغة بسيطة." },
      { n: "02 — تصميم", h: "نقترح الحل", p: "خلال 48 ساعة: نطاق واضح، جدول زمني، سعر. أنتم تقرّرون." },
      { n: "03 — تشغيل", h: "يعمل بينما تنامون", p: "نبني، نختبر، ننشر، ونستمرّ في المتابعة." },
    ],
    priceLabel: "نموذج العمل",
    priceH: "أسعار واضحة. مخصّصة لكل مشروع.",
    setup: { l: "التأسيس", d: "رسوم لمرة واحدة لتصميم النظام وبنائه ونشره.", a: "احصلوا على عرض سعر" },
    monthly: { l: "شراكة شهرية", d: "صيانة مستمرة، ومراقبة، وتحديثات، ودعم بأولوية.", a: "ابتداءً من 50 ر.ع / شهرياً" },
    most: "الأكثر اختياراً",
    ctaH: "جاهزون للتخلّي عن العمل اليدوي؟",
    ctaP: "شاركونا أكثر المهام استهلاكاً لوقتكم. وسنخبركم إن كانت قابلة للأتمتة — مجاناً.",
    ctaBtn: "تواصلوا عبر واتساب",
    ctaNote: "استشارة مجانية · بدون التزام · ردّ خلال 24 ساعة",
  },
} as const;

const waLinks = {
  en: "https://wa.me/96877056051?text=Hi%2C%20I%27m%20interested%20in%20working%20with%20you",
  ar: "https://wa.me/96877056051?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1",
} as const;

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-block font-[var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.22em] text-ember mb-[18px]">{children}</div>
);

const SectionHead = ({ children, isAr }: { children: React.ReactNode; isAr?: boolean }) => (
  <h2 className={`text-[clamp(28px,4.2vw,46px)] font-bold tracking-[-0.028em] leading-[1.1] text-bone mb-[18px] max-w-[780px] ${isAr ? "font-[var(--font-arabic)] font-extrabold leading-[1.2]" : "font-[var(--font-display)]"}`}>{children}</h2>
);

export function Ticker() {
  const { lang } = useLang();
  const items = lang === "en"
    ? ["Dashboards", "Automation", "Websites", "Mobile Apps", "n8n · Make · Zapier", "Supabase · Vercel · Next.js", "Claude · GPT · Gemini", "WhatsApp Business API", "Oman-Based"]
    : ["لوحات تحكّم", "أنظمة أتمتة", "مواقع إلكترونية", "تطبيقات", "n8n · Make · Zapier", "واتساب أعمال", "Claude · GPT · Gemini", "من سلطنة عُمان"];
  const doubled = [...items, ...items];
  return (
    <div
      className="border-y border-border-soft py-5 bg-surface/50 overflow-hidden relative"
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}
    >
      <div className="flex gap-14 w-max" style={{ animation: "scrollTicker 50s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-[var(--font-mono)] text-[13px] font-medium text-bone-dim tracking-[0.04em] whitespace-nowrap flex items-center gap-14">
            {item}
            <span className="w-[4px] h-[4px] rounded-full bg-ember opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function StatsSection() {
  const { lang } = useLang();
  const c = t[lang];
  return (
    <section className="relative py-[90px] z-[2]">
      <div className="max-w-[1280px] mx-auto px-7">
        <motion.div {...reveal} className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {c.stats.map((s) => (
            <div key={s.l} className="border border-border-soft rounded-[18px] p-7" style={{ background: "linear-gradient(160deg, var(--color-surface), var(--color-midnight-2))" }}>
              <div className="font-[var(--font-display)] text-[44px] font-extrabold tracking-[-0.04em] leading-none ember-shimmer">{s.v}</div>
              <div className={`font-[var(--font-mono)] text-[12px] uppercase tracking-[0.16em] text-bone-dim mt-[14px] ${lang === "ar" ? "font-[var(--font-arabic)]" : ""}`}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { lang } = useLang();
  const c = t[lang];
  const isAr = lang === "ar";
  return (
    <section id="process" className="relative py-[90px] z-[2]">
      <div className="max-w-[1280px] mx-auto px-7">
        <motion.div {...reveal}>
          <SectionLabel>{c.processLabel}</SectionLabel>
          <SectionHead isAr={isAr}>{c.processH}</SectionHead>
        </motion.div>
        <motion.div {...reveal} className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-[30px]">
          {c.steps.map((s) => (
            <div key={s.n} className="border border-border-soft rounded-[20px] p-[30px] bg-surface hover:border-ember/35 transition-colors">
              <div className="font-[var(--font-display)] text-[13px] font-semibold text-ember tracking-[0.1em] mb-5">{s.n}</div>
              <h3 className={`text-[19px] font-semibold text-bone mb-[10px] tracking-[-0.018em] ${isAr ? "font-[var(--font-arabic)] font-bold" : "font-[var(--font-display)]"}`}>{s.h}</h3>
              <p className={`text-[14px] text-bone-dim leading-[1.55] ${isAr ? "font-[var(--font-arabic)] leading-[1.8]" : ""}`}>{s.p}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function PricingSection() {
  const { lang } = useLang();
  const c = t[lang];
  const isAr = lang === "ar";
  return (
    <section className="relative py-[90px] z-[2]">
      <div className="max-w-[1280px] mx-auto px-7">
        <motion.div {...reveal}>
          <SectionLabel>{c.priceLabel}</SectionLabel>
          <SectionHead isAr={isAr}>{c.priceH}</SectionHead>
        </motion.div>
        <motion.div {...reveal} className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mt-[30px]">
          <div className="border border-border-soft rounded-[22px] p-[34px] bg-surface relative overflow-hidden">
            <div className={`font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-bone-dim mb-[18px] font-semibold ${isAr ? "font-[var(--font-arabic)]" : ""}`}>{c.setup.l}</div>
            <div className={`text-[14px] text-bone leading-[1.6] mb-6 ${isAr ? "font-[var(--font-arabic)] leading-[1.8]" : ""}`}>{c.setup.d}</div>
            <div className="font-[var(--font-display)] text-[21px] font-bold text-ember tracking-[-0.025em]">{c.setup.a}</div>
          </div>
          <div className="border border-ember/40 rounded-[22px] p-[34px] relative overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(255,106,46,0.06), var(--color-surface))" }}>
            <span className={`absolute top-5 ${isAr ? "left-5" : "right-5"} font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.16em] text-ember px-[11px] py-[5px] border border-ember/35 rounded-full bg-ember/[0.06] ${isAr ? "font-[var(--font-arabic)]" : ""}`}>{c.most}</span>
            <div className={`font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-bone-dim mb-[18px] font-semibold ${isAr ? "font-[var(--font-arabic)]" : ""}`}>{c.monthly.l}</div>
            <div className={`text-[14px] text-bone leading-[1.6] mb-6 ${isAr ? "font-[var(--font-arabic)] leading-[1.8]" : ""}`}>{c.monthly.d}</div>
            <div className={`font-[var(--font-display)] text-[21px] font-bold text-bone tracking-[-0.025em] ${isAr ? "font-[var(--font-arabic)]" : ""}`}>{c.monthly.a}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CtaSection() {
  const { lang } = useLang();
  const c = t[lang];
  const isAr = lang === "ar";
  return (
    <section id="contact" className="relative py-[90px] z-[2]">
      <div className="max-w-[1280px] mx-auto px-7">
        <motion.div {...reveal} className="border border-border-soft rounded-[26px] p-[64px_38px] text-center relative overflow-hidden" style={{ background: "linear-gradient(160deg, var(--color-surface) 0%, var(--color-surface-warm) 100%)" }}>
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,106,46,0.15), transparent 60%)", filter: "blur(40px)" }} />
          <div className="relative z-[1]">
            <h2 className={`text-[clamp(26px,4vw,42px)] font-bold tracking-[-0.03em] leading-[1.1] text-bone mb-4 ${isAr ? "font-[var(--font-arabic)] font-extrabold leading-[1.2]" : "font-[var(--font-display)]"}`}>{c.ctaH}</h2>
            <p className={`text-[15.5px] text-bone-dim max-w-[520px] mx-auto mb-[30px] leading-[1.55] ${isAr ? "font-[var(--font-arabic)] leading-[1.8]" : ""}`}>{c.ctaP}</p>
            <a
              href={waLinks[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[11px] bg-ember text-midnight font-[var(--font-display)] text-[15px] font-semibold px-[26px] py-[15px] rounded-full no-underline shadow-[0_0_0_1px_var(--color-ember),0_16px_50px_rgba(255,106,46,0.4)] hover:-translate-y-[2px] transition-transform duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.822-6.34-2.2l-.444-.356-3.17 1.063 1.063-3.17-.356-.444A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              {c.ctaBtn}
            </a>
            <div className={`font-[var(--font-mono)] text-[12px] text-bone-faint mt-[18px] tracking-[0.04em] ${isAr ? "font-[var(--font-arabic)]" : ""}`}>{c.ctaNote}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
