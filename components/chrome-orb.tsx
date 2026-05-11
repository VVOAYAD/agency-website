"use client";
import Image from "next/image";

/**
 * Centered photoreal chrome orb (real 3D render from brand identity).
 * Wrapped with ember/iridescent floor underglow + slow float + slow axial rotation.
 */
export function ChromeOrb({ size = 360 }: { size?: number }) {
  return (
    <div
      className="relative mx-auto my-2 flex items-center justify-center"
      style={{ width: `min(${size}px, 46vw)`, aspectRatio: 1 }}
    >
      <div className="iorb-floor absolute -bottom-[38%] -left-[40%] -right-[40%] h-[70%] pointer-events-none z-[1]" />
      <div className="iorb relative z-[2] w-full h-full flex items-center justify-center">
        <Image
          src="/hero-orb.jpg"
          alt=""
          width={500}
          height={500}
          priority
          className="w-full h-full object-contain"
        />
      </div>
      <style jsx>{`
        .iorb-floor {
          background:
            radial-gradient(ellipse at 25% 60%, rgba(63, 229, 255, 0.22) 0%, transparent 38%),
            radial-gradient(ellipse at 75% 60%, rgba(214, 63, 255, 0.24) 0%, transparent 38%),
            radial-gradient(ellipse at center 58%, rgba(255, 106, 46, 0.95) 0%, rgba(255, 140, 80, 0.55) 18%, rgba(214, 63, 255, 0.18) 42%, transparent 72%);
          filter: blur(26px);
          animation: floorBreathe 5s ease-in-out infinite;
        }
        .iorb {
          animation: orbFloat 8s ease-in-out infinite, orbSpin 60s linear infinite;
        }
        .iorb :global(img) {
          filter:
            drop-shadow(0 30px 80px rgba(255, 106, 46, 0.55))
            drop-shadow(0 0 50px rgba(214, 63, 255, 0.25))
            drop-shadow(0 0 30px rgba(63, 229, 255, 0.15));
        }
      `}</style>
    </div>
  );
}
