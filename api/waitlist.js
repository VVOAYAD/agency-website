// The ALVVO Build waitlist (alvvoayad.com/build).
//
// Each signup is its own private object in the alvvo-waitlist Blob store,
// named by time and a random id, so two people signing up at the same moment
// can never overwrite each other. Nothing here reads or lists the store: the
// list is read from the CLI or the dashboard, never served to the public.
import { put } from "@vercel/blob";

const clean = (v, max) => String(v ?? "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max);
const INTERESTS = new Set(["cohort", "starter", "circle", "done-for-you"]);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

  // A field no human sees: anything that fills it is a bot. Say yes, keep nothing.
  if (body.company) return res.status(200).json({ ok: true });

  const name = clean(body.name, 80);
  const email = clean(body.email, 120).toLowerCase();
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: "name and email required" });

  const entry = {
    name,
    email,
    whatsapp: clean(body.whatsapp, 30),
    interest: INTERESTS.has(body.interest) ? body.interest : "cohort",
    at: new Date().toISOString(),
    country: req.headers["x-vercel-ip-country"] || null,
  };
  const id = `${entry.at.replace(/[:.]/g, "-")}-${crypto.randomUUID().slice(0, 8)}`;
  await put(`waitlist/${id}.json`, JSON.stringify(entry), {
    access: "private",
    addRandomSuffix: false,
    contentType: "application/json",
  });
  return res.status(200).json({ ok: true });
}
