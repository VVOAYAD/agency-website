"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangCtx = createContext<Ctx>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={lang === "ar" ? "font-[var(--font-arabic)]" : ""}
      >
        {children}
      </div>
    </LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);
