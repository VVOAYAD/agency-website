"use client";
import { useLang } from "../lang-provider";

const t = {
  en: {
    notifTitle: "New lead · Khalid",
    notifBody: "Qualified by AI · 2m ago",
    titleA: "Today",
    titleB: "Inbox",
  },
  ar: {
    notifTitle: "عميل جديد · خالد",
    notifBody: "مؤهَّل بالذكاء الاصطناعي · قبل ٢ د",
    titleA: "اليوم",
    titleB: "الوارد",
  },
} as const;

function Phone({ active, title, withNotif, withFab, isAr }: { active: number; title: string; withNotif?: { t: string; b: string }; withFab?: boolean; isAr?: boolean }) {
  return (
    <div className={`relative w-[180px] h-[370px] border-[8px] border-[#1A1A22] rounded-[36px] bg-[#1A1A22] shadow-[0_40px_80px_rgba(0,0,0,0.45)] shrink-0 ${withFab ? "" : "translate-y-6 rotate-[5deg] opacity-90"}`}>
      <span className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[64px] h-[18px] rounded-b-[14px] bg-[#1A1A22] z-[2]" />
      <div className="h-full rounded-[28px] overflow-hidden flex flex-col bg-white relative">
        {withNotif && (
          <div
            className="absolute top-[52px] left-[10px] right-[10px] bg-white/95 backdrop-blur-md border border-[#E5E5EA] rounded-[11px] p-[9px_11px] flex items-center gap-[9px] shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
            style={{ animation: "notifSlide 4s ease-out infinite" }}
          >
            <div className="w-[18px] h-[18px] rounded-[5px] bg-ember shadow-[0_0_6px_rgba(255,106,46,0.5)] shrink-0" />
            <div className={`font-[var(--font-mono)] text-[10px] text-[#0F0F14] leading-[1.3] ${isAr ? "font-[var(--font-arabic)]" : ""}`}>
              <strong className="block font-bold mb-[2px]">{withNotif.t}</strong>
              {withNotif.b}
            </div>
          </div>
        )}
        <div className="px-[14px] pt-8 pb-3 flex justify-between items-center bg-white border-b border-[#EEE]">
          <div className={`font-[var(--font-display)] text-[14px] font-bold text-[#0F0F14] tracking-[-0.018em] ${isAr ? "font-[var(--font-arabic)]" : ""}`}>{title}</div>
          <div className="w-[22px] h-[22px] rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #FFB36A, var(--color-ember) 65%, #3F2A1A)", boxShadow: "0 0 8px rgba(255,106,46,0.4)" }} />
        </div>
        <div className="flex-1 px-[14px] py-2 flex flex-col gap-[7px] bg-[#FAFAFA]">
          <div className="bg-gradient-to-br from-[#FFF7F2] to-[#FFEDE2] border border-ember/35 rounded-[10px] p-[9px] shadow-[0_2px_10px_rgba(255,106,46,0.15)]">
            <div className="h-[5px] rounded-[3px] mb-[4px]" style={{ background: "linear-gradient(90deg, var(--color-ember), rgba(255,106,46,0.3))", width: "70%" }} />
            <div className="h-[5px] rounded-[3px] bg-[#E5E5EA] mb-[4px]" style={{ width: "85%" }} />
            <div className="h-[5px] rounded-[3px] bg-[#E5E5EA]" style={{ width: "55%" }} />
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-white border border-[#ECECF0] rounded-[10px] p-[9px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <div className="h-[5px] rounded-[3px] bg-[#E5E5EA] mb-[4px]" style={{ width: i % 2 === 0 ? "85%" : "55%" }} />
              <div className="h-[5px] rounded-[3px] bg-[#E5E5EA]" style={{ width: i % 2 === 0 ? "55%" : "85%" }} />
            </div>
          ))}
        </div>
        <div className="px-[14px] py-[10px] pb-[14px] flex justify-around bg-white border-t border-[#EEE]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`w-[6px] h-[6px] rounded-full ${i === active ? "bg-ember shadow-[0_0_6px_var(--color-ember)]" : "bg-[#D1D1D6]"}`}
            />
          ))}
        </div>
        {withFab && (
          <div
            className="absolute bottom-[62px] right-[12px] w-[40px] h-[40px] rounded-full bg-ember shadow-[0_6px_20px_rgba(255,106,46,0.6),0_0_0_4px_rgba(255,106,46,0.15)] flex items-center justify-center text-white font-[var(--font-display)] font-bold text-[18px]"
            style={{ animation: "fabPulse 2.2s ease-in-out infinite" }}
          >
            +
          </div>
        )}
      </div>
    </div>
  );
}

export function AppDemo() {
  const { lang } = useLang();
  const c = t[lang];
  const isAr = lang === "ar";
  return (
    <div className="h-full flex items-center justify-center gap-7 px-6 py-6" style={{ background: "linear-gradient(160deg, #F7F7F9 0%, #FFF 60%, #FFF7F2 100%)" }}>
      <Phone active={0} title={c.titleA} withNotif={{ t: c.notifTitle, b: c.notifBody }} withFab isAr={isAr} />
      <Phone active={1} title={c.titleB} isAr={isAr} />
    </div>
  );
}
