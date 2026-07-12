import type { Lecture } from '../../lib/types';

export const hhlBloodDonation: Lecture = {
  id: 'hhl-blood-donation',
  title: 'Blood Donation & Donor Screening',
  system: 'heme',
  source: 'L19 — Blood Donation & Blood Products',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L19 Blood Products' },
    { kind: 'investigation', label: 'Mandatory infectious screen · NAT' },
    { kind: 'treatment', label: 'Donor deferral' },
  ],

  highYield: [
    'Donors are **screened and deferred** for both donor safety and recipient safety (hemoglobin, weight, recent illness/travel, high-risk behaviour, medications, pregnancy).',
    '**Donation types**: **whole blood** (~450 mL every ~8–12 weeks) vs **apheresis** (selectively collect platelets/plasma/red cells and return the rest).',
    '**Mandatory infectious screening**: **HIV, HBV, HCV, syphilis** (± **HTLV** and region-specific agents) by **serology PLUS nucleic acid testing (NAT)**.',
    '**Window period** = infected but not yet detectable; **NAT** shortens it by detecting viral nucleic acid before antibody/antigen appears.',
    '**Autologous** (patient pre-deposits own blood) avoids alloimmunization/transmission; **allogeneic** is the usual supply. The commonest donor reaction is a **vasovagal** faint.',
  ],

  mechanism: {
    title: 'Two-layer safety: select the donor, then test the unit',
    steps: [
      { id: 's1', label: 'History + physical screen → defer unsafe donors (protect donor and recipient)', emphasis: 'key' },
      { id: 's2', label: 'Collect whole blood, or a single component by apheresis' },
      { id: 's3', label: 'Mandatory serology for HIV/HBV/HCV/syphilis (± HTLV)', emphasis: 'key' },
      { id: 's4', label: 'Add NAT to catch window-period infections serology misses', emphasis: 'key' },
      { id: 's5', label: 'Release only screened, correctly labelled units into inventory' },
    ],
  },

  examFindings: [
    { sign: 'Low donor hemoglobin at screening', mechanism: 'Prevents donation-induced anemia — a deferral criterion', significance: 'supportive' },
    { sign: 'Faintness, pallor and bradycardia during/after donation', mechanism: 'Vasovagal reaction — the commonest donor adverse event', significance: 'key' },
    { sign: 'Reactive HIV/HBV/HCV/syphilis screen', mechanism: 'Unit discarded and donor counselled/deferred', significance: 'key' },
  ],

  investigations: [
    { clue: 'Antibody-negative but NAT-positive donor', meaning: 'Window-period infection caught by nucleic acid testing' },
    { clue: 'Recent tattoo, high-risk exposure or febrile illness', meaning: 'Temporary deferral' },
    { clue: 'Need platelets or plasma from a single donor', meaning: 'Apheresis collection (red cells returned)' },
    { clue: 'Elective-surgery patient pre-depositing their own blood', meaning: 'Autologous donation — no alloimmunization/transmission risk' },
  ],

  treatment: [
    { logic: 'Defer rather than risk the donor or recipient', detail: 'Temporary (illness, travel, low Hb) vs permanent (some infections, high-risk history) deferral.' },
    { logic: 'Manage vasovagal reactions supportively', detail: 'Lay flat, elevate the legs, reassure and hydrate; usually self-limiting.' },
    { logic: 'Combine serology with NAT', detail: 'Reduces the residual window-period transmission risk.' },
  ],

  mnemonics: [
    { hook: 'Every unit is screened: HIV, HBV, HCV, syphilis (± HTLV)', expansion: ['Serology PLUS NAT', 'NAT shortens the window period', 'Regions may add malaria and others'] },
    { hook: 'NAT narrows the window', expansion: ['Window = infected but seronegative', 'NAT detects viral nucleic acid earlier', 'Lowers residual transmission risk'] },
  ],

  traps: [
    {
      questionCategory: 'Why NAT is added to serology',
      wrongInstinct: 'A negative antibody screen means the donor is definitely not infectious',
      rightAnswer: 'During the window period a donor is infectious but antibody-negative — NAT is added to detect nucleic acid earlier',
      why: 'Serology misses recent infection; NAT shortens (but does not eliminate) the window.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Nucleic acid testing (NAT) is added to donor screening primarily to:',
      options: [
        { id: 'a', text: 'Increase laboratory throughput' },
        { id: 'b', text: 'Detect infection during the antibody-negative window period' },
        { id: 'c', text: 'Replace ABO and Rh typing' },
        { id: 'd', text: 'Identify autologous units' },
      ],
      answerId: 'b',
      explanation: 'NAT detects viral nucleic acid before antibodies develop, shortening the window period during which serology is falsely negative.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'The most common adverse reaction in a blood donor is:',
      options: [
        { id: 'a', text: 'Anaphylaxis' },
        { id: 'b', text: 'A vasovagal (faint) reaction' },
        { id: 'c', text: 'Air embolism' },
        { id: 'd', text: 'Hemolysis' },
      ],
      answerId: 'b',
      explanation: 'Vasovagal reactions (light-headedness, pallor, faint) are the commonest donor complication and are managed by lying the donor flat with legs raised.',
      tests: 'disease',
    },
  ],
};

export default hhlBloodDonation;
