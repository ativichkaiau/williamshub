import type { Lecture } from '../../lib/types';
import { URETER_CONSTRICTIONS } from '../../lib/figures';

export const kidneyUreterAnatomy: Lecture = {
  id: 'kidney-ureter-anatomy',
  title: 'Kidney & Ureter',
  system: 'renal',
  source: 'L17 — Posterior Abdominal Wall & Urinary System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L17 Posterior Wall & Urinary' },
    { kind: 'disease', label: 'Kidney / ureter' },
    { kind: 'mechanism', label: 'Coverings & constrictions' },
    { kind: 'exam', label: 'Ureteric stones' },
  ],

  highYield: [
    'The **kidneys are retroperitoneal** (≈ T12–L3); the **right kidney is lower** (pushed down by the liver). Coverings from deep to superficial: **fibrous (renal) capsule → perirenal (perinephric) fat → renal fascia (Gerota) → pararenal fat**. The **hilum** (transmits, anterior→posterior: **renal Vein, renal Artery, renal Pelvis** — "VAP") faces medially.',
    'The **renal artery divides into 5 segmental (END) arteries** — they do **not anastomose**, so occlusion of one causes a **segmental infarct**. The left renal vein is longer and crosses anterior to the aorta (receiving the left gonadal + suprarenal veins).',
    'The **ureter (25–30 cm)** runs retroperitoneally on **psoas major**, crosses the **pelvic brim at the bifurcation of the common iliac artery**, and enters the bladder obliquely (a valve preventing reflux).',
    '**Three ureteric constrictions where stones lodge**: (1) the **ureteropelvic junction**, (2) the **pelvic brim (crossing the iliac vessels)**, and (3) the **ureterovesical junction** (narrowest). A stone causes **renal (ureteric) colic**.',
    '**Referred pain**: renal/ureteric pain (visceral afferents **T11–L2**) is felt as **"loin to groin"** — flank pain radiating to the groin/scrotum/labia as the stone descends.',
  ],

  mechanism: {
    title: 'Retroperitoneal kidney; ureter narrows at 3 points',
    steps: [
      { id: 's1', label: 'Coverings: capsule → perirenal fat → Gerota → pararenal fat', emphasis: 'key' },
      { id: 's2', label: 'Segmental arteries = end arteries (infarcts)' },
      { id: 's3', label: 'Ureter constrictions: UPJ, pelvic brim, UVJ' },
      { id: 's4', label: 'Stone → loin-to-groin colic (T11–L2)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Severe colicky flank pain radiating to the groin, patient writhing', mechanism: 'Ureteric stone (renal colic, T11–L2)', significance: 'key' },
    { sign: 'Stone lodged where the ureter crosses the iliac vessels', mechanism: 'Pelvic-brim constriction', significance: 'key' },
    { sign: 'Segmental (wedge) renal infarct on imaging', mechanism: 'Occlusion of an end (segmental) artery', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Non-contrast CT KUB for stones', meaning: 'Locate the stone at a constriction' },
    { clue: 'Costovertebral angle tenderness', meaning: 'Renal origin of pain' },
  ],

  treatment: [
    { logic: 'Small stones: analgesia + hydration, pass spontaneously', detail: 'Especially at/below the UVJ.' },
    { logic: 'Large/obstructing stones: lithotripsy / ureteroscopy', detail: 'Relieve obstruction.' },
  ],

  mnemonics: [
    { hook: 'Ureter narrows at 3 points: UPJ, pelvic brim (iliac vessels), UVJ', expansion: ['Stones lodge here'] },
    { hook: 'Hilum front→back = Vein, Artery, Pelvis ("VAP")', expansion: ['Renal vein most anterior'] },
  ],

  traps: [
    {
      questionCategory: 'Renal segmental arteries',
      wrongInstinct: 'The renal segmental arteries anastomose freely, so blocking one is harmless',
      rightAnswer: 'Segmental renal arteries are END arteries with NO anastomoses — occluding one causes a segmental infarct of that region',
      why: 'The lack of collateral flow is why renal artery embolism produces wedge-shaped infarcts.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with severe loin-to-groin pain has a ureteric stone. At which of the following normal constrictions are stones LEAST likely to be trapped?',
      options: [
        { id: 'a', text: 'Ureteropelvic junction' },
        { id: 'b', text: 'Mid-ureter over the psoas muscle (no constriction)' },
        { id: 'c', text: 'Where the ureter crosses the pelvic brim/iliac vessels' },
        { id: 'd', text: 'Ureterovesical junction' },
      ],
      answerId: 'b',
      explanation: 'Stones lodge at the three normal constrictions — the ureteropelvic junction, the pelvic brim (crossing the iliac vessels), and the ureterovesical junction (narrowest). The mid-ureter over psoas is not a constriction.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Ureteric constrictions', svg: URETER_CONSTRICTIONS, caption: 'Stones lodge at the ureteropelvic junction, the pelvic brim (iliac vessels), and the ureterovesical junction.' },
  ],
};

export default kidneyUreterAnatomy;
