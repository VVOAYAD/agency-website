"use client";
import { useEffect, useRef } from "react";

type TubesCursorProps = {
  initialColors?: string[];
  lightColors?: string[];
  lightIntensity?: number;
  className?: string;
  opacity?: number;
};

/**
 * WebGL chromatic backdrop. Wraps threejs-components@0.0.19 tubes1.
 * Loaded from CDN at runtime (no bundler hop needed).
 */
export function TubesCursor({
  initialColors = ["#FF6A2E", "#FFB36A", "#9DA3AB"],
  lightColors = ["#FF6A2E", "#D63FFF", "#3FE5FF", "#FFB36A"],
  lightIntensity = 220,
  className = "",
  opacity = 0.55,
}: TubesCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<{ tubes?: { setColors: (c: string[]) => void; setLightsColors: (c: string[]) => void }; dispose?: () => void } | null>(null);

  useEffect(() => {
    let destroyed = false;
    let removeClick: (() => void) | null = null;

    (async () => {
      try {
        // CDN ESM URL — bypass bundler resolution via Function so Next.js doesn't try to inline
        const dynImport = new Function(
          "u",
          "return import(/* webpackIgnore: true */ /* @vite-ignore */ u);"
        ) as (u: string) => Promise<{ default?: unknown }>;
        const mod = await dynImport(
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );
        const Ctor = (mod.default ?? mod) as (
          c: HTMLCanvasElement,
          o: unknown
        ) => { tubes: { setColors: (c: string[]) => void; setLightsColors: (c: string[]) => void } };
        if (!canvasRef.current || destroyed) return;
        const app = Ctor(canvasRef.current, {
          tubes: {
            colors: initialColors,
            lights: { intensity: lightIntensity, colors: lightColors },
          },
        });
        appRef.current = app as unknown as typeof appRef.current;

        // Brand-only palette for click randomize
        const brand = ["#FF6A2E", "#FFB36A", "#D63FFF", "#3FE5FF", "#9DA3AB", "#E8ECEF", "#F5E9D8"];
        const pick = (n: number) => Array.from({ length: n }, () => brand[Math.floor(Math.random() * brand.length)]);
        const onClick = () => {
          try {
            app.tubes.setColors(pick(initialColors.length));
            app.tubes.setLightsColors(pick(lightColors.length));
          } catch {}
        };
        document.body.addEventListener("click", onClick);
        removeClick = () => document.body.removeEventListener("click", onClick);
      } catch (e) {
        console.warn("Tubes cursor failed to load:", e);
      }
    })();

    return () => {
      destroyed = true;
      if (removeClick) removeClick();
      try {
        appRef.current?.dispose?.();
        appRef.current = null;
      } catch {}
    };
  }, [initialColors, lightColors, lightIntensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`fixed inset-0 w-screen h-screen z-[1] pointer-events-none mix-blend-screen motion-reduce:hidden ${className}`}
      style={{ opacity }}
    />
  );
}
