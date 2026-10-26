<!-- Chimera laws live ONLY in ~/.claude/CLAUDE.md (auto-loaded in every window). This file carries project facts. Live board: ~/.claude/chimera/BRAIN.md -->

# Agency Website — alvvoayad.com

## What this is
AI automation agency website. Showcases services, attracts clients.
Live: https://alvvoayad.com
GitHub: https://github.com/VVOAYAD/agency-website

## Stack
- Single `index.html` (CSS + JS inline — no build step)
- Hosting: Vercel (auto-deploys from GitHub push)
- Domain: Cloudflare DNS → alvvoayad.com
- No Supabase — static site, no database

## How to edit and deploy
1. Edit `index.html`
2. `git add . && git commit -m "message" && git push` → Vercel auto-deploys

## Rules
- His standing order (2026-10-26): ship every change he asks for straight to `main` (live). Don't park it on a branch or wait for a "merge".
- Read `index.html` fully before making any changes
- No frameworks, no build step — keep it a single file

## Improvements
*(add your ideas here)*

## Last session — 2026-10-26 (smoothness pass — live on main)
- Page to page: cross-document View Transitions on every page (old dissolves, new rises 10px) + speculation-rules prefetch.
- One motion system: `--e-out/--e-in/--t-fast/--t-base/--t-slow` tokens drive every transition; press states on buttons/cards/arrows.
- Hero settles in once fonts land (cap 450ms); boxes rise on scroll (IntersectionObserver, once). Reduce Motion = fades only.
- Service swap: old line lifts out fast, new one rises in line by line (WAAPI); caption + project row heights locked → swaps shift nothing.
  Still images crossfade only after decode. Dash fill is the timer: pauses under a finger / off screen, resumes where it stopped.
- Ink guard: software GPU (SwiftShader/llvmpipe) → ink is one still frame, scroll dims by opacity (`?forceink` overrides). 3D shapes stay live in lite mode
  (his note 10-26 "the shapes arent animating" — first cut had put them on stills). Software GPU: main 4fps → branch ~30fps, shapes moving.
  Governor steps quality down after a run of late frames, settles on still at the floor. 30fps pacing fixed (4ms slack). URL-bar resizes no longer reallocate.
- His note 10-26 "still not working": my first commits used vvoayad@gmail.com, not the GitHub noreply author every earlier deploy used —
  Vercel may have blocked them. Commit as `VVOAYAD <201911905+VVOAYAD@users.noreply.github.com>`. Fallback stills now sway/tilt/lift
  (never frozen when three.js can't run). `alvvoayad.com/?why` shows stage mode + why + GPU on any device.
- His ?why screenshot 10-26 (iPhone): "stage: still images (loading)" = three.js never arrived from cdnjs. three.js 0.170.0 now
  self-hosted at `vendor/three-0.170.0.module.min.js` (cdnjs only as backup); ?why shows loading 3D / building 3D / 3D live.
- "Our work" gallery (his ask 10-26: every project, links out): OLH, Gamers Hub, Al Omara, MW Events, Fizzy Karma Kombucha (in progress),
  Asma Al Riyami (in progress, thumb is her wordmark only — no face on ALVVO's page), Chimera (Private: opens a viewer of the
  interface, never links to the app). Screens: `work-*.webp` (captured locally from each repo; Chimera with empty data, no PII).
- Fixed: re-rendering the phone project row fired a scroll that paused rotation for 8s.
- Measured (headless Chromium, software GPU): desktop long tasks 126 → 1, frame p50 183ms → 16.7ms, LCP 1412 → 520ms; phone CLS .0031 → 0.
- Not verified: real-GPU fps, iPhone Safari, Firefox (no cross-doc VT there → normal navigation).

## Next step
- Domain: stays alvvoayad.com (his call 2026-10-24); alvvo.com is a $3,499 Atom listing, not bought.
- Check live fps of the ink + 3D stage on his real phone.

- Check the ink + 3D on his real phone now that the smoothness pass is live.
- Self-host Geist so the last font-swap shift (CLS .014, desktop) goes.

---
*Update "Last session" and "Next step" above at the end of every session.*
