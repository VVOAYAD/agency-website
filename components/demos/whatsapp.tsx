"use client";
import { useLang } from "../lang-provider";

const t = {
  en: {
    name: "Acme Co.",
    status: "online · auto-reply",
    day: "TODAY",
    msgs: [
      { side: "in", text: "Hi! Do you offer dashboards?", time: "2:14 pm" },
      { side: "out", text: "Hey 👋 Yes — we build live KPI dashboards. Want a quick demo?", time: "2:14 pm ✓✓" },
      { side: "in", text: "Yes, and what's the price?", time: "2:15 pm" },
    ],
    qrs: ["📊 See demo", "💬 Get quote", "📅 Book call"],
    input: "Type a message…",
    stats: [
      { v: "2.4s", l: "AVG REPLY", em: false },
      { v: "98.7%", l: "AUTO-RESOLVED", em: true },
      { v: "24/7", l: "NEVER SLEEPS", em: false },
    ],
  },
  ar: {
    name: "Acme Co.",
    status: "متصل · ردّ تلقائي",
    day: "اليوم",
    msgs: [
      { side: "in", text: "السلام عليكم، هل تقدّمون لوحات تحكّم؟", time: "2:14" },
      { side: "out", text: "وعليكم السلام 👋 نعم — نبني لوحات مؤشرات لحظية. تحبّون عرضاً سريعاً؟", time: "2:14 ✓✓" },
      { side: "in", text: "نعم، وما السعر؟", time: "2:15" },
    ],
    qrs: ["📊 العرض", "💬 عرض سعر", "📅 احجز"],
    input: "اكتب رسالة…",
    stats: [
      { v: "2.4 ث", l: "متوسط الرد", em: false },
      { v: "98.7%", l: "حلّ تلقائي", em: true },
      { v: "24/7", l: "دون توقف", em: false },
    ],
  },
} as const;

export function WhatsAppDemo() {
  const { lang } = useLang();
  const c = t[lang];
  const isAr = lang === "ar";

  return (
    <div className="h-full grid grid-rows-[1fr_auto]">
      <div className="flex flex-col h-full min-h-0">
        {/* Header */}
        <div className="flex items-center gap-3 px-[18px] py-[12px] bg-[#075E54] text-white">
          <div className="w-9 h-9 rounded-full relative shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.2)]" style={{ background: "radial-gradient(circle at 30% 30%, #fff, #9DA3AB 45%, #3F2A1A 85%)" }}>
            <span className="absolute -bottom-px -right-px w-[11px] h-[11px] rounded-full bg-ember border-2 border-[#075E54] shadow-[0_0_6px_var(--color-ember)]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-[var(--font-display)] text-[14px] font-semibold flex items-center gap-[6px]">
              {c.name} <span className="text-[10px] text-ember-halo">✓</span>
            </div>
            <div className={`text-[11px] text-white/75 flex items-center gap-[6px] mt-[1px] font-[var(--font-mono)] ${isAr ? "font-[var(--font-arabic)]" : ""}`}>
              <span className="w-[5px] h-[5px] rounded-full bg-ember shadow-[0_0_6px_var(--color-ember)] animate-[blink_1.4s_ease-in-out_infinite]" />
              {c.status}
            </div>
          </div>
          <div className="text-white/70 text-[18px] tracking-[1px]">⋮</div>
        </div>

        {/* Thread */}
        <div
          className="flex-1 overflow-hidden px-4 py-[14px] flex flex-col gap-[6px]"
          style={{
            background:
              '#E5DDD5 url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23D4CDC4\' fill-opacity=\'0.25\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z\'/%3E%3C/g%3E%3C/svg%3E")',
          }}
        >
          <div className="self-center font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[#5A5A6A] px-[11px] py-[5px] rounded-full bg-white/85 mb-1 font-semibold">{c.day}</div>

          {c.msgs.map((m, i) => (
            <div
              key={i}
              className={[
                "flex max-w-[80%] opacity-0",
                m.side === "in" ? "self-start" : "self-end",
              ].join(" ")}
              style={{ animation: `bubbleIn 0.45s cubic-bezier(0.4,0,0.2,1) ${0.4 + i * 0.7}s forwards` }}
            >
              <div
                className={[
                  "px-[13px] py-[9px] rounded-2xl font-[var(--font-mono)] text-[13px] leading-[1.45] shadow-[0_1px_2px_rgba(0,0,0,0.1)]",
                  m.side === "in" ? "bg-white text-[#0F0F14] rounded-bl-[4px]" : "bg-[#DCF8C6] text-[#0F0F14] rounded-br-[4px]",
                  isAr ? "font-[var(--font-arabic)]" : "",
                ].join(" ")}
              >
                {m.text}
                <span className="block text-[9.5px] text-[#5A5A6A] mt-[3px] text-right">{m.time}</span>
              </div>
            </div>
          ))}

          {/* Typing */}
          <div className="flex max-w-[80%] self-end opacity-0" style={{ animation: "bubbleIn 0.45s cubic-bezier(0.4,0,0.2,1) 2.4s forwards" }}>
            <div className="px-[13px] py-[9px] rounded-2xl rounded-br-[4px] bg-[#DCF8C6] shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
              <span className="inline-flex gap-1 py-[2px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#5A5A6A] animate-[typingDots_1.2s_infinite_ease-in-out]" />
                <span className="w-[6px] h-[6px] rounded-full bg-[#5A5A6A] animate-[typingDots_1.2s_infinite_ease-in-out]" style={{ animationDelay: "0.2s" }} />
                <span className="w-[6px] h-[6px] rounded-full bg-[#5A5A6A] animate-[typingDots_1.2s_infinite_ease-in-out]" style={{ animationDelay: "0.4s" }} />
              </span>
            </div>
          </div>

          {/* Quick replies */}
          <div className="flex flex-wrap gap-[6px] mt-[6px] self-end opacity-0" style={{ animation: "bubbleIn 0.5s cubic-bezier(0.4,0,0.2,1) 3.1s forwards" }}>
            {c.qrs.map((qr) => (
              <button key={qr} className={`font-[var(--font-mono)] text-[11px] font-semibold text-ember bg-white border border-ember/50 rounded-full px-3 py-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${isAr ? "font-[var(--font-arabic)]" : ""}`}>
                {qr}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center gap-[10px] px-[14px] py-[10px] bg-[#F0F0F2] border-t border-[#DADADE]">
          <span className="text-[#7A7A8A] text-[15px]">😊</span>
          <input
            placeholder={c.input}
            readOnly
            className={`flex-1 bg-white border border-[#DADADE] rounded-full px-[14px] py-2 text-[#5A5A6A] font-[var(--font-mono)] text-[12px] outline-none ${isAr ? "font-[var(--font-arabic)] text-right" : ""}`}
          />
          <span className="text-[#7A7A8A] text-[15px]">🎤</span>
        </div>
      </div>

      {/* Stats strip */}
      <div className="flex justify-around gap-3 px-5 py-[12px] bg-white border-t border-[#E5E5EA]">
        {c.stats.map((s) => (
          <div key={s.l} className={`font-[var(--font-mono)] text-[9.5px] uppercase tracking-[0.18em] text-[#8A8A98] text-center font-semibold ${isAr ? "font-[var(--font-arabic)]" : ""}`}>
            <strong className={`block font-[var(--font-display)] text-[18px] font-bold tracking-[-0.02em] mb-[2px] ${s.em ? "text-ember" : "text-[#0F0F14]"}`}>{s.v}</strong>
            {s.l}
          </div>
        ))}
      </div>
    </div>
  );
}
