import type { Lecture } from '../../lib/types';
import { ARACHIDONIC_ACID_PATHWAY } from '../../lib/figures';

export const coxPathwayNsaids: Lecture = {
  id: 'cox-pathway-nsaids',
  title: 'Autacoids, COX Pathway & NSAIDs',
  system: 'msk',
  source: 'L4 — Autacoids, NSAIDs & Salicylates',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L4 Autacoids & NSAIDs' },
    { kind: 'disease', label: 'Inflammation' },
    { kind: 'mechanism', label: 'COX-1 vs COX-2' },
    { kind: 'exam', label: 'Aspirin antiplatelet' },
  ],

  highYield: [
    '**Autacoids** = local, short-lived mediators. **Phospholipase A₂** (blocked by **corticosteroids**) liberates **arachidonic acid** → **COX pathway (prostaglandins/thromboxane)** or **LOX pathway (leukotrienes — bronchoconstriction/allergy)**.',
    '**COX-1 (constitutive)** = gastric mucosal protection, renal blood flow, **platelet thromboxane A₂ (clot-promoting)**; **COX-2 (inducible)** = inflammation/fever/pain and **endothelial prostacyclin (PGI₂, anti-clotting)**.',
    '**Aspirin** = **irreversible** COX inhibitor (acetylation). Because platelets lack a nucleus, they cannot remake COX-1 → **TXA₂ suppressed for the platelet lifespan (7–10 days)** → low-dose aspirin is antiplatelet (CV prophylaxis).',
    '**Traditional NSAIDs (ibuprofen, naproxen)** = **reversible** COX-1/COX-2 inhibitors: anti-inflammatory, analgesic, antipyretic. Ibuprofen short-acting; naproxen long-acting (preferred for chronic arthritis).',
    '**COX-2-selective (coxibs — celecoxib)** spare gastric COX-1 → **less GI toxicity** but **higher cardiovascular risk** (block endothelial PGI₂ while platelet TXA₂ continues → thrombosis; rofecoxib withdrawn).',
  ],

  mechanism: {
    title: 'Block prostaglandin synthesis at COX (or PLA₂ upstream)',
    steps: [
      { id: 's1', label: 'PLA₂ → arachidonic acid (steroids block here)', emphasis: 'key' },
      { id: 's2', label: 'COX → prostaglandins/thromboxane' },
      { id: 's3', label: 'Aspirin irreversible; other NSAIDs reversible' },
      { id: 's4', label: 'Coxibs spare COX-1 but raise CV risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Low-dose aspirin prevents MI/stroke', mechanism: 'Irreversible platelet COX-1 → ↓ TXA₂', significance: 'key' },
    { sign: 'Coxib with lower GI bleeding but higher MI risk', mechanism: 'Spare COX-1; block endothelial PGI₂', significance: 'key' },
    { sign: 'Steroids reduce both prostaglandins and leukotrienes', mechanism: 'Upstream PLA₂ inhibition', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Reversible vs irreversible inhibition', meaning: 'Traditional NSAID vs aspirin (7–10 day platelet effect)' },
    { clue: 'COX selectivity', meaning: 'GI vs cardiovascular risk profile' },
    { clue: 'TXA₂ (platelet) vs PGI₂ (endothelium) balance', meaning: 'Thrombosis risk' },
  ],

  treatment: [
    { logic: 'Low-dose aspirin for cardiovascular protection', detail: 'Antiplatelet via irreversible COX-1.' },
    { logic: 'NSAIDs for musculoskeletal pain/inflammation', detail: 'Naproxen for chronic; ibuprofen for acute.' },
    { logic: 'Coxib if GI risk but avoid in cardiovascular disease', detail: 'GI-CV trade-off.' },
  ],

  mnemonics: [
    { hook: 'Aspirin = irreversible (acetylation); platelets can’t recover (7–10 days)', expansion: ['Antiplatelet CV prophylaxis'] },
    { hook: 'Coxibs: ↓GI but ↑CV (spare TXA₂, block PGI₂)', expansion: ['Rofecoxib withdrawn'] },
  ],

  traps: [
    {
      questionCategory: 'Why coxibs increase cardiovascular risk',
      wrongInstinct: 'COX-2 inhibitors are cardioprotective like low-dose aspirin because they reduce inflammation',
      rightAnswer: 'Coxibs block endothelial COX-2 (PGI₂, anti-clotting) while sparing platelet COX-1 (TXA₂, pro-clotting), shifting the balance toward thrombosis and RAISING cardiovascular risk',
      why: 'Unlike aspirin’s antiplatelet effect, selective COX-2 inhibition removes the protective prostacyclin without touching platelet thromboxane — tipping toward clotting.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why does low-dose aspirin provide long-lasting antiplatelet effect while ibuprofen does not?',
      options: [
        { id: 'a', text: 'Aspirin selectively blocks COX-2' },
        { id: 'b', text: 'Aspirin irreversibly acetylates platelet COX-1, which platelets cannot resynthesize (no nucleus)' },
        { id: 'c', text: 'Ibuprofen is a stronger COX inhibitor' },
        { id: 'd', text: 'Aspirin increases thromboxane A₂' },
      ],
      answerId: 'b',
      explanation: 'Aspirin irreversibly acetylates COX-1; because platelets are anucleate and cannot make new enzyme, thromboxane A₂ is suppressed for the platelet lifespan (7–10 days). Reversible NSAIDs like ibuprofen wear off as the drug clears.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Arachidonic acid pathway', svg: ARACHIDONIC_ACID_PATHWAY, caption: 'PLA₂ (steroids block) → arachidonic acid → COX (NSAIDs/aspirin block) → prostaglandins/TXA₂, or 5-LOX → leukotrienes.' },
  ],
};

export default coxPathwayNsaids;
