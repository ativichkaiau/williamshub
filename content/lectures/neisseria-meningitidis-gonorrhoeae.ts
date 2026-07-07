import type { Lecture } from '../../lib/types';

export const neisseriaMeningitidisGonorrhoeae: Lecture = {
  id: 'neisseria-meningitidis-gonorrhoeae',
  title: 'Neisseria: meningitidis & gonorrhoeae',
  system: 'microbiology',
  source: 'L15 — Gram-Negative Cocci & Small Gram-Negative Rods',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L15 Neisseria' },
    { kind: 'mechanism', label: 'Diplococci; capsule vs no capsule' },
    { kind: 'exam', label: 'Meningococcaemia; gonorrhoea; maltose' },
  ],

  highYield: [
    'Neisseria are GRAM-NEGATIVE DIPLOCOCCI ("coffee-bean" / kidney-shaped), OXIDASE-POSITIVE, fastidious (grow on chocolate agar + CO2), and glucose-oxidising. The two pathogens are separated biochemically: N. MENINGITIDIS ferments MALTOSE AND glucose; N. GONORRHOEAE ferments GLUCOSE ONLY ("Maltose = Meningitidis"). Both are human-only pathogens of mucous membranes.',
    'N. MENINGITIDIS (meningococcus) has a POLYSACCHARIDE CAPSULE (anti-phagocytic; serogroups A/B/C/W/Y; VACCINE-preventable) and colonises the nasopharynx. It causes epidemic MENINGITIS and fulminant MENINGOCOCCAEMIA — a non-blanching PETECHIAL/purpuric rash, rapid shock, and WATERHOUSE-FRIDERICHSEN syndrome (bilateral adrenal haemorrhage from DIC). It is a medical emergency: empiric ceftriaxone, and CHEMOPROPHYLAXIS (rifampicin/ciprofloxacin/ceftriaxone) for close contacts. ASPLENIA/terminal complement (C5–C9) deficiency predispose.',
    'N. GONORRHOEAE (gonococcus) is NON-capsulated, antigenically variable (pili/Opa → no lasting immunity, no vaccine) and causes the STI GONORRHOEA: urethritis/cervicitis (may be asymptomatic in women → PID, infertility, ectopic risk), DISSEMINATED gonococcal infection (arthritis-dermatitis, septic arthritis), and neonatal OPHTHALMIA NEONATORUM (conjunctivitis from birth canal — prevented by eye prophylaxis). Rising resistance means dual/ceftriaxone therapy; treat presumptively for co-infecting Chlamydia.',
    'So both Neisseria are oxidase-positive Gram-negative diplococci, but differ by capsule and disease: meningococcus (capsule, vaccine, meningitis/meningococcaemia, prophylax contacts) vs gonococcus (no capsule, no vaccine, STI/PID/ophthalmia, resistance). The maltose test separates them in the lab.',
    '**The take-home: oxidase+ Gram-negative DIPLOCOCCI. MENINGITIDIS = maltose+, CAPSULE (vaccine) → meningitis + meningococcaemia (petechiae, Waterhouse-Friderichsen); emergency ceftriaxone + contact prophylaxis; complement/asplenia risk. GONORRHOEAE = glucose-only, NO capsule → STI (urethritis, PID, disseminated, ophthalmia neonatorum); resistance → ceftriaxone + treat Chlamydia.** The small Gram-negative rods are [[haemophilus-bordetella-small-gram-negative-rods]]; chlamydia is [[chlamydia-species]].',
  ],

  mechanism: {
    title: 'Oxidase+ Gram-negative diplococci; N. meningitidis (maltose+, capsule/vaccine → meningitis + meningococcaemia/Waterhouse-Friderichsen; prophylax contacts) vs N. gonorrhoeae (glucose-only, no capsule → STI/PID/ophthalmia; resistance)',
    steps: [
      { id: 's1', label: 'Neisseria = oxidase+ Gram-negative diplococci; maltose = Meningitidis (glucose+maltose) vs gonorrhoeae (glucose only)', emphasis: 'key' },
      { id: 's2', label: 'Meningococcus: capsule (vaccine); nasopharynx → meningitis + meningococcaemia', emphasis: 'key' },
      { id: 's3', label: 'Meningococcaemia: petechial/purpuric rash, shock, Waterhouse-Friderichsen (adrenal DIC)', emphasis: 'danger' },
      { id: 's4', label: 'Emergency ceftriaxone + chemoprophylaxis for close contacts; complement/asplenia risk', emphasis: 'danger' },
      { id: 's5', label: 'Gonococcus: no capsule/vaccine → urethritis/cervicitis, PID, disseminated, ophthalmia neonatorum; treat Chlamydia too', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Non-blanching petechial/purpuric rash with fever and shock', mechanism: 'Meningococcaemia (N. meningitidis)', significance: 'key' },
    { sign: 'Bilateral adrenal haemorrhage with meningococcal sepsis', mechanism: 'Waterhouse-Friderichsen syndrome', significance: 'key' },
    { sign: 'Recurrent Neisseria infections', mechanism: 'Terminal complement (C5–C9) deficiency', significance: 'key' },
    { sign: 'Purulent urethritis/cervicitis, Gram-negative diplococci', mechanism: 'N. gonorrhoeae', significance: 'key' },
    { sign: 'Purulent neonatal conjunctivitis in the first days of life', mechanism: 'Gonococcal ophthalmia neonatorum', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The sugar test separating the two Neisseria', meaning: 'Maltose (meningitidis ferments it; gonorrhoeae does not)' },
    { clue: 'The Neisseria with a vaccine-targetable capsule', meaning: 'N. meningitidis' },
    { clue: 'The immunodeficiency predisposing to Neisseria', meaning: 'Terminal complement (C5–C9) deficiency' },
    { clue: 'The co-infection to treat empirically with gonorrhoea', meaning: 'Chlamydia trachomatis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Both Neisseria are oxidase-positive Gram-negative diplococci but diverge clinically: meningococcus (encapsulated, vaccine-preventable) causes emergency meningitis and meningococcaemia (petechiae, Waterhouse-Friderichsen) needing immediate ceftriaxone and contact chemoprophylaxis, with complement deficiency/asplenia as risk factors; gonococcus (non-encapsulated, no lasting immunity) causes an STI with PID, disseminated infection and ophthalmia neonatorum amid rising resistance, treated with ceftriaxone plus empiric Chlamydia cover. Maltose fermentation separates them. Small Gram-negative rods are [[haemophilus-bordetella-small-gram-negative-rods]]; chlamydia is [[chlamydia-species]].' },
  ],

  mnemonics: [
    { hook: '"Maltose = Meningitidis" (ferments glucose + maltose); gonorrhoeae = glucose only', expansion: ['Meningococcus = capsule/vaccine', 'Gonococcus = no capsule/no vaccine'] },
    { hook: '"Meningococcaemia = petechiae + Waterhouse-Friderichsen"', expansion: ['Ceftriaxone + prophylax contacts', 'Complement/asplenia risk'] },
  ],

  traps: [
    {
      questionCategory: 'Recurrent Neisseria infection',
      wrongInstinct: 'Recurrent meningococcal or gonococcal infections just reflect repeated exposure',
      rightAnswer: 'RECURRENT Neisseria infections should prompt evaluation for a TERMINAL COMPLEMENT (C5–C9, membrane-attack-complex) deficiency — the MAC is essential for killing Neisseria, so its deficiency uniquely predisposes to recurrent meningococcal (and gonococcal) disease; asplenia also increases risk of encapsulated meningococcal infection',
      why: 'Recurrent Neisseria disease is a classic clue to terminal complement deficiency; missing this overlooks a diagnosable immunodeficiency (and the need for vaccination/prophylaxis), attributing it merely to bad luck.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A teenager presents with fever, headache, hypotension and a rapidly spreading non-blanching petechial/purpuric rash. The most likely organism is:',
      options: [
        { id: 'a', text: 'Neisseria gonorrhoeae' },
        { id: 'b', text: 'Neisseria meningitidis' },
        { id: 'c', text: 'Haemophilus influenzae' },
        { id: 'd', text: 'Streptococcus pneumoniae' },
      ],
      answerId: 'b',
      explanation: 'Fever with a non-blanching petechial/purpuric rash and shock is meningococcaemia (N. meningitidis); it can progress to Waterhouse-Friderichsen syndrome (adrenal haemorrhage from DIC). It is a medical emergency requiring immediate ceftriaxone and contact chemoprophylaxis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In the laboratory, Neisseria meningitidis is distinguished from N. gonorrhoeae because meningitidis ferments:',
      options: [
        { id: 'a', text: 'Both glucose and maltose (gonorrhoeae ferments glucose only)' },
        { id: 'b', text: 'Lactose only' },
        { id: 'c', text: 'Neither sugar' },
        { id: 'd', text: 'Maltose only' },
      ],
      answerId: 'a',
      explanation: 'Both Neisseria are oxidase-positive Gram-negative diplococci, but N. meningitidis ferments glucose AND maltose, whereas N. gonorrhoeae ferments glucose only — "Maltose = Meningitidis" is the classic mnemonic.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default neisseriaMeningitidisGonorrhoeae;
