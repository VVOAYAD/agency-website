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
- Read `index.html` fully before making any changes
- No frameworks, no build step — keep it a single file

## Improvements
*(add your ideas here)*

## Last session — 2026-10-14
- Homepage replaced by the ONE-SCREEN design (his ask 10-14): blob mark + ALVVO / ألفو top-left, one bilingual headline,
  WebGL heat ring (same thermal ramp as the "This is ALVVO" reel), and a left-right rail of 12 cards
  (6 systems + 6 ALVVO Studio). Wheel/drag/arrows drive the rail; each card opens WhatsApp pre-filled (EN + AR).
- Assets: `blob.webp` (cleaned cutout of the chrome blob master), `favicon-blob.png`. Old homepage = git history (2210ce1).
- Preview/source of the design: `design/v2/` (not committed — design/ is a scratch folder).

## Next step
- Domain: alvvo.ai + alvvo.om are unregistered (whois 2026-10-14); alvvo.ai ~$160 / 2 yrs waits on his GO,
  then add to Vercel + 301 alvvoayad.com → alvvo.ai.
- Check live fps of the heat ring on a real GPU / phone.

---
*Update "Last session" and "Next step" above at the end of every session.*
