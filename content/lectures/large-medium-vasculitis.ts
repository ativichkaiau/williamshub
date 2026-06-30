import type { Lecture } from '../../lib/types';

export const largeMediumVasculitis: Lecture = {
  id: 'large-medium-vasculitis',
  title: 'Large & Medium Vessel Vasculitis',
  system: 'cardiovascular',
  source: 'L19 — Vascular Diseases II',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L19 Vascular Diseases II' },
    { kind: 'disease', label: 'Arteritis' },
    { kind: 'mechanism', label: 'Granulomatous / necrotizing' },
    { kind: 'exam', label: 'Pulseless / blindness' },
  ],

  highYield: [
    '**Giant cell (temporal) arteritis**: granulomatous, large/medium arteries (**temporal**), **>50 yo**, headache, jaw claudication, tender artery, **blindness** risk; ↑ESR; assoc. polymyalgia rheumatica.',
    '**Takayasu arteritis**: **women <50**, aorta + branches → **"pulseless disease"** (weak upper-extremity pulses), granulomatous.',
    '**Polyarteritis nodosa (PAN)**: necrotizing small/medium muscular arteries **EXCEPT pulmonary**; renal/visceral; **~30% hepatitis B**; fibrinoid necrosis → aneurysms; **no ANCA**.',
    '**Kawasaki**: **children**, **coronary arteries** → aneurysms/MI; fever >5 d + conjunctivitis, rash & edema of palms/soles, **strawberry tongue**, cervical adenopathy; treat **aspirin + IVIG**.',
    '**Buerger (thromboangiitis obliterans)**: **young male smokers**; segmental thrombosing vasculitis; **digital ischemia/gangrene**.',
  ],

  mechanism: {
    title: 'Inflammation by vessel size → ischemia',
    steps: [
      { id: 's1', label: 'Large (granulomatous: GCA / Takayasu)', emphasis: 'key' },
      { id: 's2', label: 'Narrowing → ischemia / blindness / pulselessness' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Medium vessel',
        steps: [{ id: 'm1', label: 'PAN (fibrinoid) · Kawasaki (coronary) · Buerger (thrombosing) → aneurysm/MI/gangrene', emphasis: 'danger' }],
      },
    ],
  },

  examFindings: [
    { sign: 'GCA: tender temporal artery, jaw claudication, visual loss, ↑ESR', mechanism: 'Granulomatous temporal arteritis', significance: 'key' },
    { sign: 'Takayasu: absent/weak upper-limb pulses, inter-arm BP differential', mechanism: 'Aortic-arch branch stenosis', significance: 'key' },
    { sign: 'Kawasaki: strawberry tongue, conjunctivitis, rash/edema of palms & soles', mechanism: 'Mucocutaneous lymph node syndrome', significance: 'key' },
    { sign: 'Buerger: digital ulcers/gangrene in a young smoker', mechanism: 'Thrombosing vasculitis of digital arteries', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'GCA: ↑ESR + temporal artery biopsy', meaning: 'Granuloma, giant cells, fragmented internal elastic lamina' },
    { clue: 'Takayasu: angiography', meaning: 'Aortic/branch stenoses' },
    { clue: 'PAN: angiography (microaneurysms) + HBsAg', meaning: 'Renal/visceral involvement; hepatitis B link' },
  ],

  treatment: [
    { logic: 'GCA → URGENT high-dose corticosteroids (prevent blindness)', detail: 'Do not wait for biopsy.' },
    { logic: 'Kawasaki → aspirin + IVIG; Buerger → smoking cessation', detail: 'Disease-specific.' },
  ],

  mnemonics: [
    { hook: 'GCA = Old + Temporal + ESR + blindness (steroids NOW)', expansion: ['Polymyalgia rheumatica link'] },
    { hook: 'Takayasu pulseless; PAN = HepB, no lung, no ANCA; Kawasaki = kids + coronary; Buerger = young smoker', expansion: ['Medium-vessel patterns'] },
  ],

  traps: [
    {
      questionCategory: 'Suspected GCA management',
      wrongInstinct: 'Wait for temporal artery biopsy before treating GCA',
      rightAnswer: 'Start high-dose corticosteroids IMMEDIATELY in suspected GCA to prevent blindness (biopsy can follow)',
      why: 'Vision loss is irreversible; steroids are started on clinical suspicion, and biopsy stays positive for days after starting.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 70-year-old has new temporal headache, jaw claudication, scalp tenderness, and ESR 90. Most urgent action?',
      options: [
        { id: 'a', text: 'Await temporal artery biopsy' },
        { id: 'b', text: 'Start high-dose corticosteroids immediately' },
        { id: 'c', text: 'CT head only' },
        { id: 'd', text: 'Aspirin alone' },
      ],
      answerId: 'b',
      explanation: 'Suspected giant cell arteritis is treated with immediate high-dose corticosteroids to prevent irreversible blindness; temporal artery biopsy can follow.',
      tests: 'treatment',
    },
  ],
};

export default largeMediumVasculitis;
