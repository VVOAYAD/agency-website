# Agency Website — alvvoayad.com

## What this is
AI automation agency website. Showcases services, attracts clients.
Live: https://alvvoayad.com
GitHub: https://github.com/VVOAYAD/agency-website

## Stack (NEW — Next.js migration on `next-migration` branch)
- **Next.js 16.2** (App Router, Turbopack)
- **React 19.2** + **TypeScript** strict
- **Tailwind v4** with `@theme` tokens (brand palette in `app/globals.css`)
- **motion v12** (the React API formerly known as framer-motion)
- **lucide-react** for icons
- **shadcn/ui** ready (`components.json` wired)
- **WebGL Tubes Cursor** via `threejs-components` CDN
- **next/font**: Geist (display) + DM Sans (mono labels) + Tajawal (Arabic)
- Hosting: **Vercel** (auto-deploys both `main` and `next-migration` branches)
- Domain: Cloudflare DNS → alvvoayad.com (production = `main` branch)

## File map
- `app/layout.tsx` — root layout, fonts, metadata
- `app/page.tsx` — homepage composition
- `app/globals.css` — brand tokens + base + keyframes
- `components/lang-provider.tsx` — EN/AR React context + RTL wrapper
- `components/nav.tsx` — chrome dot + alvvoayad.ai wordmark
- `components/hero.tsx` — phase 0 (badge + headline + orb + CTA)
- `components/chrome-orb.tsx` — photoreal /hero-orb.jpg + chromatic floor
- `components/stage.tsx` — 380vh sticky scroll, 5 phases, AnimatePresence
- `components/demos/{dashboard,whatsapp,website,app}.tsx` — light-theme demos
- `components/sections.tsx` — Ticker, Stats, Process, Pricing, CTA
- `components/footer.tsx`
- `components/ui/tube-cursor.tsx` — WebGL backdrop (21st.dev component, brand-tuned)
- `public/hero-orb.jpg` — the chrome torus from brand identity
- `_backup-static/` — pre-migration single-file version

## How to edit and deploy
1. `npm run dev` — local at http://localhost:3000
2. `npm run build` — production build check
3. Edit components in `components/`
4. `git add . && git commit -m "..." && git push` → Vercel auto-deploys

`next-migration` branch is currently active. To promote to production:
`git checkout main && git merge next-migration && git push`

## Rules
- Brand DNA locked in `Desktop/alvvo.ai/brand/visual-dna.md` — pull via Obsidian MCP
- Banned: blue/purple cosmic gradients, faces, robots, brain illustrations, networks, pure black bg, drop shadows on type
- Light-theme demos are the SOURCE of truth for service representation
- Use `useLang()` for bilingual content, never hardcode language

## Last session — 2026-05-11
- Migrated from single-file static HTML to Next.js 16 stack
- Brand tokens wired into Tailwind v4 via `@theme`
- All 5 phases ported (Hero + Dashboards + Automation/WhatsApp Bot + Websites + Apps)
- All demos converted to LIGHT theme (per design ask)
- All sections (Stats, Process, Pricing, CTA, Ticker, Footer) ported
- framer-motion (motion/react) wired into Hero entrance + Stage phase transitions + section in-view reveals
- Tubes Cursor WebGL backdrop as proper React component (brand palette only)
- Chrome torus JPG (real photoreal artifact) preserved + chromatic floor enhanced
- UI/UX Pro Max skill installed globally (`~/.claude/skills/ui-ux-pro-max/`)
- 3d-asset skill built (`/3d-asset` generates MJ v8 / Higgsfield / nano-banana prompts tuned to alvvo.ai DNA)

## Next step
- Confirm Vercel preview deploy looks right on `next-migration` branch
- Iterate on feedback (likely: hero artifact polish, scroll feel, mobile)
- When approved → merge to `main` → production goes live with new stack
- Consider: shadcn `Button` primitive, real Calendly integration, registering the `.ai` domain

---
*Update "Last session" and "Next step" above at the end of every session.*
