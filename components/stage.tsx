"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "./lang-provider";
import { Hero } from "./hero";
import { DashboardDemo } from "./demos/dashboard";
import { WhatsAppDemo } from "./demos/whatsapp";
import { WebsiteDemo } from "./demos/website";
import { AppDemo } from "./demos/app";

type PhaseId = 0 | 1 | 2 | 3 | 4;

const copy = {
  en: [
    null,
    {
      num: "01 · Dashboards",
      h2: "The view of your business you've never had.",
      lede: "Live KPIs, revenue, team activity, ops — one screen, any device.",
      bullets: [
        "Real-time KPIs custom to your business",
        "Team and pipeline tracking",
        "Mobile-friendly · role-based access",
        "Connected to tools you already use",
      ],
    },
    {
      num: "02 · Automation · WhatsApp Bot",
      h2: "Work that runs itself.",
      lede: "A WhatsApp agent that replies, qualifies, and follows up — 24/7, in your voice.",
      bullets: [
        "Auto-reply with AI in your tone",
        "Lead qualification + routing to your team",
        "Quick-reply menus and bookings",
        "Plugs into Make, n8n, your CRM",
      ],
    },
    {
      num: "03 · Websites",
      h2: "Sites that look like the work you actually do.",
      lede: "Landing pages, agency sites, sales funnels — premium, on-brand, built to convert.",
      bullets: [
        "Custom design — no templates",
        "Bilingual English / Arabic",
        "Vercel hosting · auto-deploy",
        "SEO, analytics, payments included",
      ],
    },
    {
      num: "04 · Apps",
      h2: "Mobile and web apps, shipped in weeks.",
      lede: "For your team or your customers — designed, built, deployed with modern AI tooling.",
      bullets: [
        "iOS, Android, web — one codebase",
        "Internal tools for teams",
        "Client-facing portals and products",
        "From prototype to production in weeks",
      ],
    },
  ],
  ar: [
    null,
    {
      num: "01 · لوحات تحكّم",
      h2: "رؤية شاملة لأعمالكم لم تكن متاحة من قبل.",
      lede: "مؤشرات لحظية، إيرادات، نشاط الفريق — شاشة واحدة من أي جهاز.",
      bullets: [
        "مؤشرات أداء مخصصة لطبيعة عملكم",
        "متابعة الفرق وقمعات المبيعات",
        "متوافقة مع الجوال · صلاحيات حسب الدور",
        "مربوطة بالأدوات التي تستخدمونها",
      ],
    },
    {
      num: "02 · أتمتة · بوت واتساب",
      h2: "أعمال تعمل بنفسها.",
      lede: "وكيل واتساب يردّ ويُؤهِّل ويتابع — ٢٤/٧، بصوتكم وأسلوبكم.",
      bullets: [
        "ردّ تلقائي بذكاء اصطناعي يحاكي نبرتكم",
        "تأهيل العملاء وتوجيههم لفريقكم",
        "قوائم ردّ سريع وحجوزات",
        "تكامل مع Make و n8n وأنظمة CRM",
      ],
    },
    {
      num: "03 · مواقع",
      h2: "مواقع تعكس مستوى أعمالكم الفعلي.",
      lede: "صفحات هبوط، مواقع شركات، قمعات بيع — احترافية، منسجمة، مصمَّمة للتحويل.",
      bullets: [
        "تصميم مخصص — بلا قوالب جاهزة",
        "ثنائي اللغة عربي / إنجليزي",
        "استضافة Vercel · تحديث تلقائي",
        "تحسين محركات بحث ومدفوعات",
      ],
    },
    {
      num: "04 · تطبيقات",
      h2: "تطبيقات جوال وويب، خلال أسابيع.",
      lede: "لفريقكم أو لعملائكم — تصميم وبناء وإطلاق بأحدث أدوات الذكاء الاصطناعي.",
      bullets: [
        "iOS و Android والويب — بقاعدة كود واحدة",
        "أدوات داخلية للفرق",
        "منتجات وبوابات للعملاء",
        "من النموذج إلى الإنتاج خلال أسابيع",
      ],
    },
  ],
} as const;

function PhaseCopy({ phase }: { phase: 1 | 2 | 3 | 4 }) {
  const { lang } = useLang();
  const c = copy[lang][phase]!;
  const isAr = lang === "ar";
  return (
    <div className="relative">
      <div className="font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.22em] text-ember mb-4">{c.num}</div>
      <h2 className={`text-[clamp(32px,4.2vw,50px)] font-bold tracking-[-0.032em] leading-[1.05] text-bone mb-[18px] ${isAr ? "font-[var(--font-arabic)] font-extrabold leading-[1.2]" : "font-[var(--font-display)]"}`}>
        {c.h2}
      </h2>
      <p className={`text-[15.5px] text-bone-dim leading-[1.65] mb-[22px] ${isAr ? "font-[var(--font-arabic)] leading-[1.8]" : ""}`}>{c.lede}</p>
      <ul className="flex flex-col gap-[11px]">
        {c.bullets.map((b) => (
          <li key={b} className="flex gap-[11px] items-start text-[14px] text-bone leading-[1.5]">
            <span className="shrink-0 w-[5px] h-[5px] rounded-full bg-ember shadow-[0_0_10px_var(--color-ember)] mt-[9px]" />
            <span className={isAr ? "font-[var(--font-arabic)] leading-[1.8]" : ""}>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const DEMOS = {
  1: DashboardDemo,
  2: WhatsAppDemo,
  3: WebsiteDemo,
  4: AppDemo,
} as const;

function DemoFrame({ phase }: { phase: 1 | 2 | 3 | 4 }) {
  const D = DEMOS[phase];
  return (
    <div className="relative w-full aspect-[1/0.7] max-h-[72vh] rounded-[22px] overflow-hidden bg-white border border-border-soft/0 shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(245,233,216,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]">
      <D />
      <div className="absolute -bottom-[140px] -right-[140px] w-[380px] h-[380px] rounded-full pointer-events-none z-0" style={{ background: "radial-gradient(circle, rgba(255,106,46,0.25), transparent 70%)", filter: "blur(30px)" }} />
    </div>
  );
}

export function Stage() {
  const stageRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<PhaseId>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const stage = stageRef.current;
      if (!stage) return;
      if (window.innerWidth < 900) {
        setActive(0);
        return;
      }
      const rect = stage.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = stage.offsetHeight - vh;
      const scrolled = -rect.top;
      if (scrolled < -10 || scrolled > scrollable + vh) return;
      const progress = Math.max(0, Math.min(0.9999, scrolled / scrollable));
      const idx = Math.min(4, Math.floor(progress * 5)) as PhaseId;
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = (i: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const scrollable = stage.offsetHeight - window.innerHeight;
    const target = window.scrollY + rect.top + (scrollable * i) / 5 + 4;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section
      ref={stageRef}
      data-active={active}
      className="relative h-[380vh] md:h-[380vh] max-md:h-auto"
    >
      <div className="sticky top-0 h-screen overflow-hidden max-md:relative max-md:h-auto max-md:overflow-visible">
        {/* Persistent background (chromatic shine) */}
        <div className="absolute inset-0 pointer-events-none z-[1] max-md:hidden">
          <div className="absolute -bottom-[150px] left-1/2 -translate-x-1/2 w-[120vw] max-w-[1600px] h-[480px]" style={{ background: "radial-gradient(ellipse at center, rgba(255,106,46,0.4) 0%, rgba(255,106,46,0.12) 30%, rgba(214,63,255,0.06) 55%, transparent 72%)", filter: "blur(60px)", animation: "floorPulse 6s ease-in-out infinite" }} />
          {active === 0 && (
            <div className="absolute top-[55%] -left-[30%] w-[160%] h-[80px] mix-blend-screen" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(63,229,255,0.4) 28%, rgba(214,63,255,0.5) 50%, rgba(255,106,46,0.6) 72%, transparent 100%)", filter: "blur(16px)", transform: "rotate(-2.5deg)", animation: "chromaSweep 9s ease-in-out infinite" }} />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-[160px] pointer-events-none z-[4]" style={{ background: "linear-gradient(180deg, transparent, var(--color-midnight) 90%)" }} />
        </div>

        {/* Phases */}
        <div className="relative w-full h-full z-[3] max-md:h-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center px-7 pt-[110px] pb-[100px] max-md:relative max-md:inset-auto max-md:py-[80px]"
            >
              {active === 0 ? (
                <Hero />
              ) : (
                <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] gap-[54px] items-center">
                  <PhaseCopy phase={active as 1 | 2 | 3 | 4} />
                  <DemoFrame phase={active as 1 | 2 | 3 | 4} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress nav */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-[5] max-md:hidden">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Phase ${i}`}
              className={[
                "w-[38px] h-[3px] rounded-[2px] border-0 p-0 cursor-pointer transition-all duration-300",
                i <= active ? "bg-gradient-to-r from-ember to-ember-halo scale-y-[1.7]" : "bg-bone/15",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Phase counter */}
        <div className="absolute top-[88px] left-1/2 -translate-x-1/2 font-[var(--font-mono)] text-[11px] text-bone-faint uppercase tracking-[0.22em] z-[5] max-md:hidden">
          {String(active + 1).padStart(2, "0")} / 05
        </div>

        {/* Scroll hint */}
        {active === 0 && (
          <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 font-[var(--font-mono)] text-[10px] text-bone-faint uppercase tracking-[0.22em] flex flex-col items-center gap-2 z-[5] max-md:hidden">
            <span>Scroll to swap</span>
            <span className="w-px h-[26px] bg-gradient-to-b from-ember to-transparent" style={{ animation: "lineDrop 2.4s ease-in-out infinite" }} />
          </div>
        )}
      </div>
    </section>
  );
}
