# WilliamsHub (M-8)

A **VEStriPPN satellite**. WilliamsHub turns actual MedCMU lectures into high-yield,
mechanism-driven, exam-focused interactive study pages. It **supplements OnePagers — it does
not replace them.** The aim: turn UI/UX + web dev into an academic performance engine, so that
studying becomes building and building becomes studying.

> **Priority order (every trade-off resolves in this order):**
> correctness → lecture alignment → active recall → mechanism clarity → exam usefulness → UI beauty.
> Avoid *beautiful procrastination*.

See [DESIGN.md](DESIGN.md) for the full information architecture, schema, and feature roadmap.

## Content library — 14 modules across lectures L1–L4

**L1 — Cardiac Arrhythmias**
- Atrioventricular (AV) Block
- Atrial Fibrillation
- Atrial Flutter
- Premature Contractions (PAC & PVC)
- Ventricular Tachycardia (VT)
- Ventricular Fibrillation (VF)

**L2 — Abnormal ECG**
- STEMI Localization & Reciprocal Changes
- Bundle Branch Block (RBBB vs LBBB)
- Escape Rhythms & Sinus Node Dysfunction

**L3 — Congenital Heart Disease**
- Ventricular Septal Defect (VSD)
- Atrial Septal Defect (ASD)
- Patent Ductus Arteriosus (PDA)
- Tetralogy of Fallot (TOF)

**L4 — Antiarrhythmic Drugs**
- Antiarrhythmic Drugs (Vaughan-Williams)

Each module carries: high-yield summary · mechanism chain · physical-exam findings ·
investigations · treatment logic · mnemonics · an exam **trap card** (the "what question
*category* is this?" defense) · and an active-recall quiz item.

## Architecture

- **Content is code** — one typed `Lecture` object per disease in
  [`content/lectures/`](content/lectures), schema in [`lib/types.ts`](lib/types.ts).
- **Personal data** (error log, quiz attempts, progress) → `localStorage` (no backend, offline-first).
- Planned app: **Next.js + TypeScript + Tailwind**, static, recall-first UI for iPad/Mac.

## Status

- ✅ Content library complete for L1–L4 (14 modules, registered in [`content/index.ts`](content/index.ts)).
- ⏳ Next.js app scaffold (`/lecture/[id]` page + components) — pending.
