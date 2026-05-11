"use client";
import { useLang } from "../lang-provider";

const t = {
  en: {
    brand: "ACME · Live Dashboard",
    tabs: ["Overview", "Live", "Reports"],
    live: "Live",
    kpis: [
      { lbl: "Revenue MTD", val: "42,180", delta: "↑ 18% vs last month" },
      { lbl: "Active leads", val: "127", delta: "↑ 12 today" },
      { lbl: "Conversion", val: "8.4%", delta: "↑ 1.2pt" },
    ],
    chartTitle: "This week · revenue",
    activity: [
      { dot: "ember", text: "New lead from WhatsApp · qualified", time: "just now" },
      { dot: "cyan", text: "Payment received · 245 OMR", time: "2m ago" },
      { dot: "magenta", text: "Auto-report sent to team", time: "5m ago" },
    ],
  },
  ar: {
    brand: "ACME · لوحة لحظية",
    tabs: ["نظرة عامة", "لحظي", "تقارير"],
    live: "LIVE",
    kpis: [
      { lbl: "الإيرادات الشهرية", val: "42,180", delta: "↑ ١٨٪" },
      { lbl: "عملاء محتملون", val: "127", delta: "↑ ١٢ اليوم" },
      { lbl: "معدل التحويل", val: "8.4%", delta: "↑ 1.2pt" },
    ],
    chartTitle: "الإيرادات هذا الأسبوع",
    activity: [
      { dot: "ember", text: "عميل جديد من واتساب · مؤهَّل", time: "الآن" },
      { dot: "cyan", text: "دفعة مستلمة · 245 ر.ع", time: "٢ د" },
      { dot: "magenta", text: "تقرير تلقائي أُرسل للفريق", time: "٥ د" },
    ],
  },
} as const;

const dotColor = { ember: "bg-ember", cyan: "bg-cyan", magenta: "bg-magenta" } as const;

export function DashboardDemo() {
  const { lang } = useLang();
  const c = t[lang];
  return (
    <div className="demo-light h-full flex flex-col">
      {/* Topbar */}
      <div className="flex items-center justify-between px-5 py-[14px] bg-white border-b border-[#E5E5EA]">
        <div className="flex items-center gap-[10px] font-[var(--font-display)] text-[13px] font-semibold text-[#0F0F14]">
          <span className="w-[14px] h-[14px] rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #fff, #9DA3AB 50%, #1F2227)", boxShadow: "0 0 6px rgba(0,0,0,0.08)" }} />
          {c.brand}
        </div>
        <div className="flex gap-[18px]">
          {c.tabs.map((tab, i) => (
            <span
              key={tab}
              className={[
                "text-[12px] py-[6px] font-medium font-[var(--font-mono)]",
                i === 1 ? "text-ember border-b-[1.5px] border-ember" : "text-[#8A8A98]",
              ].join(" ")}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="inline-flex items-center gap-[6px] font-[var(--font-mono)] text-[11px] text-ember uppercase tracking-[0.18em] font-semibold">
          <span className="w-[6px] h-[6px] rounded-full bg-ember shadow-[0_0_8px_rgba(255,106,46,0.5)] animate-[blink_1.4s_ease-in-out_infinite]" />
          {c.live}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 px-5 py-[18px] grid grid-rows-[auto_1fr_auto] gap-3 min-h-0 bg-[#F7F7F9]">
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-3">
          {c.kpis.map((k) => (
            <div key={k.lbl} className="bg-white border border-[#E5E5EA] rounded-xl p-[14px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="font-[var(--font-mono)] text-[9.5px] uppercase tracking-[0.18em] text-[#8A8A98] mb-[6px] font-semibold">{k.lbl}</div>
              <div className="font-[var(--font-display)] text-[24px] font-bold text-[#0F0F14] tracking-[-0.02em] leading-none">{k.val}</div>
              <div className="font-[var(--font-mono)] text-[10px] text-ember mt-[5px] font-semibold">{k.delta}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white border border-[#E5E5EA] rounded-xl p-[14px] flex flex-col gap-2 min-h-0 overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[#8A8A98] font-semibold">{c.chartTitle}</div>
            <div className="inline-flex items-center gap-[6px] font-[var(--font-mono)] text-[11px] text-ember uppercase tracking-[0.18em] font-semibold">
              <span className="w-[6px] h-[6px] rounded-full bg-ember shadow-[0_0_8px_rgba(255,106,46,0.5)] animate-[blink_1.4s_ease-in-out_infinite]" />
              {c.live}
            </div>
          </div>
          <svg className="flex-1 w-full min-h-[70px]" viewBox="0 0 400 110" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6A2E" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FF6A2E" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#chartFill)" style={{ opacity: 0, animation: "fadeIn 1.2s ease-out 3s forwards" }} d="M0 90 L 40 70 L 80 80 L 120 50 L 160 60 L 200 35 L 240 45 L 280 25 L 320 30 L 360 15 L 400 20 L 400 110 L 0 110 Z" />
            <path stroke="#FF6A2E" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeDasharray={1000} strokeDashoffset={1000} style={{ animation: "drawLine 3s ease-out 0.3s forwards" }} d="M0 90 L 40 70 L 80 80 L 120 50 L 160 60 L 200 35 L 240 45 L 280 25 L 320 30 L 360 15 L 400 20" />
            {[
              { x: 40, y: 70, d: 0.6, r: 3 },
              { x: 120, y: 50, d: 1, r: 3 },
              { x: 200, y: 35, d: 1.4, r: 3 },
              { x: 280, y: 25, d: 1.8, r: 3 },
              { x: 360, y: 15, d: 2.2, r: 4, fill: "#FFB36A" },
            ].map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={p.fill || "#FF6A2E"} style={{ opacity: 0, animation: `fadeIn 0.3s ease-out ${p.d}s forwards` }} />
            ))}
          </svg>
        </div>

        {/* Activity */}
        <div className="bg-white border border-[#E5E5EA] rounded-xl p-[10px_14px] flex flex-col gap-1 max-h-[90px] overflow-hidden">
          {c.activity.map((a, i) => (
            <div
              key={a.text}
              className="flex justify-between items-center font-[var(--font-mono)] text-[12px] text-[#0F0F14] py-[5px] border-b border-[#EFEFF3] last:border-b-0 font-medium opacity-0"
              style={{ animation: `slideIn 0.5s ease-out ${1.5 + i * 0.5}s forwards` }}
            >
              <div className="flex items-center gap-2">
                <span className={`w-[6px] h-[6px] rounded-full ${dotColor[a.dot as "ember" | "cyan" | "magenta"]}`} />
                {a.text}
              </div>
              <span className="text-[10px] text-[#8A8A98] tracking-[0.05em]">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
