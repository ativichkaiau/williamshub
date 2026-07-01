import type { Lecture } from '../../lib/types';

export const nsaidAcetaminophenSafety: Lecture = {
  id: 'nsaid-acetaminophen-safety',
  title: 'NSAID Safety & Acetaminophen',
  system: 'msk',
  source: 'L4 — Autacoids, NSAIDs & Salicylates',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L4 Autacoids & NSAIDs' },
    { kind: 'disease', label: 'Drug toxicity' },
    { kind: 'mechanism', label: 'Adverse effects' },
    { kind: 'exam', label: 'NAC / Reye / triple whammy' },
  ],

  highYield: [
    'NSAID adverse effects (from COX-1 loss): **GI ulcers/bleeding, renal impairment (↓ GFR), cardiovascular risk**. The **“triple whammy” (ACE inhibitor/ARB + diuretic + NSAID)** → **acute kidney injury**. **Misoprostol (PGE₁ analog)** protects the GI mucosa for long-term NSAID users.',
    '**Aspirin-specific**: **Reye syndrome** (encephalopathy + liver failure in **children with viral illness** — avoid pediatric aspirin), **aspirin-exacerbated respiratory disease** (asthma), and **overdose** → early **respiratory alkalosis** then **metabolic acidosis** + mitochondrial uncoupling (tinnitus, hyperthermia).',
    '**Third-trimester NSAIDs are contraindicated** (premature closure of the ductus arteriosus). Conversely, **indomethacin/ibuprofen close a patent ductus arteriosus** in preterm infants.',
    '**Acetaminophen (paracetamol)** = analgesic + antipyretic with **little anti-inflammatory effect** (acts where peroxide levels are low, i.e. CNS). **Safe for GI, platelets, children (no Reye), asthmatics** — but **not a substitute in chronic inflammatory disease**.',
    'Acetaminophen toxicity = **dose-dependent hepatotoxicity** (glutathione depleted → toxic **NAPQI**); antidote = **N-acetylcysteine** (replenishes glutathione).',
  ],

  mechanism: {
    title: 'Predict the adverse effect from the mechanism',
    steps: [
      { id: 's1', label: 'COX-1 loss → GI/renal/CV toxicity', emphasis: 'key' },
      { id: 's2', label: 'Aspirin: Reye (kids), AERD, overdose acid-base' },
      { id: 's3', label: 'Acetaminophen: NAPQI depletes glutathione → liver' },
      { id: 's4', label: 'N-acetylcysteine restores glutathione (antidote)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'AKI after starting an NSAID with ACEi + diuretic', mechanism: 'Triple whammy', significance: 'key' },
    { sign: 'Encephalopathy + hepatic dysfunction in a child given aspirin', mechanism: 'Reye syndrome', significance: 'key' },
    { sign: 'Hepatotoxicity after paracetamol overdose', mechanism: 'NAPQI + glutathione depletion → give NAC', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Renal function + medication list', meaning: 'Triple-whammy AKI risk' },
    { clue: 'Salicylate level + arterial blood gas', meaning: 'Aspirin overdose (mixed acid-base)' },
    { clue: 'Acetaminophen level (nomogram), LFTs', meaning: 'Hepatotoxicity → NAC' },
  ],

  treatment: [
    { logic: 'Acetaminophen for pain/fever when NSAIDs are risky', detail: 'Children, asthmatics, GI/bleeding risk.' },
    { logic: 'Misoprostol / PPI for GI protection on chronic NSAIDs', detail: 'Cytoprotection.' },
    { logic: 'Acetaminophen overdose: N-acetylcysteine', detail: 'Replenishes glutathione.' },
  ],

  mnemonics: [
    { hook: 'Triple whammy = ACEi/ARB + Diuretic + NSAID → AKI', expansion: ['Three renal hits'] },
    { hook: 'Paracetamol overdose → NAPQI → give NAC (N-acetylcysteine)', expansion: ['No Reye; safe in kids'] },
  ],

  traps: [
    {
      questionCategory: 'Acetaminophen in inflammatory disease',
      wrongInstinct: 'Acetaminophen can replace NSAIDs for the inflammation of rheumatoid arthritis',
      rightAnswer: 'Acetaminophen has minimal anti-inflammatory activity (works only where peroxide levels are low), so it relieves pain/fever but is not an adequate substitute for NSAIDs in inflammatory joint disease',
      why: 'In inflamed tissue, high peroxide levels neutralize acetaminophen’s COX inhibition, so it does not control inflammation the way NSAIDs do.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a large paracetamol (acetaminophen) overdose is at risk of hepatotoxicity from the toxic metabolite NAPQI. The specific antidote is:',
      options: [
        { id: 'a', text: 'Naloxone' },
        { id: 'b', text: 'N-acetylcysteine' },
        { id: 'c', text: 'Flumazenil' },
        { id: 'd', text: 'Misoprostol' },
      ],
      answerId: 'b',
      explanation: 'N-acetylcysteine replenishes hepatic glutathione, allowing detoxification of NAPQI, and is the specific antidote for acetaminophen (paracetamol) overdose.',
      tests: 'treatment',
    },
  ],
};

export default nsaidAcetaminophenSafety;
