import type { Lecture } from '../../lib/types';
import { CSF_PROFILES } from '../../lib/figures';

export const bacterialMeningitis: Lecture = {
  id: 'bacterial-meningitis',
  title: 'Bacterial Meningitis & CSF Interpretation',
  system: 'neuro',
  source: 'L18 — CNS Infections & Immune Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L18 CNS Infections' },
    { kind: 'disease', label: 'Meningitis' },
    { kind: 'mechanism', label: 'CSF profiles' },
    { kind: 'exam', label: 'Empiric therapy' },
  ],

  highYield: [
    'Acute CNS infection = an **emergency**. Three syndromes: **meningitis** (leptomeninges), **encephalitis** (parenchyma), **abscess** (space-occupying).',
    '**Acute bacterial meningitis** — commonest organisms: **S. pneumoniae (most common), N. meningitidis, group B Streptococcus, H. influenzae, Listeria**. **Classic triad = fever + neck stiffness + altered mental status** (present in only ~44%); look for **Kernig/Brudzinski** signs; **petechiae/purpura → N. meningitidis**; **Listeria → rhombencephalitis** (add ampicillin in elderly/immunocompromised).',
    '**CSF interpretation is the crux**: bacterial = **↑↑ neutrophils, ↑↑ protein, LOW glucose**; viral = **↑ lymphocytes, normal glucose**; TB/fungal = **↑ lymphocytes, ↑↑↑ protein, low glucose**.',
    '**Empiric therapy = ceftriaxone + vancomycin** (± ampicillin for Listeria); **adjunctive dexamethasone** given **before/with the first antibiotic dose** in suspected pneumococcal meningitis (reduces neurologic sequelae).',
    'Do **CT before LP** only if focal deficit, papilledema, immunocompromise, or reduced consciousness — but **never delay antibiotics** while awaiting imaging.',
  ],

  mechanism: {
    title: 'Bacteria invade the subarachnoid space → inflammatory exudate',
    steps: [
      { id: 's1', label: 'Hematogenous/contiguous spread → subarachnoid space', emphasis: 'key' },
      { id: 's2', label: 'Neutrophilic exudate → ↑ protein, ↓ glucose CSF' },
      { id: 's3', label: 'Fever, neck stiffness, altered mental status' },
      { id: 's4', label: 'Cerebral edema/↑ICP → death if untreated', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fever + neck stiffness + altered mental status', mechanism: 'Meningeal inflammation (classic triad)', significance: 'key' },
    { sign: 'CSF: neutrophils, high protein, low glucose', mechanism: 'Bacterial meningitis', significance: 'key' },
    { sign: 'Petechiae / palpable purpura', mechanism: 'Meningococcemia (N. meningitidis)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Lumbar puncture with CSF cell count/protein/glucose/Gram stain/culture', meaning: 'Diagnostic; typifies the pathogen' },
    { clue: 'Blood cultures before antibiotics', meaning: 'Identifies organism' },
    { clue: 'CT head before LP if focal signs/↓consciousness', meaning: 'Excludes mass/herniation risk' },
  ],

  treatment: [
    { logic: 'Empiric ceftriaxone + vancomycin immediately', detail: 'Do not delay for imaging; add ampicillin for Listeria risk.' },
    { logic: 'Adjunctive dexamethasone before/with first antibiotic', detail: 'Pneumococcal meningitis — reduces sequelae.' },
  ],

  mnemonics: [
    { hook: 'Bacterial CSF: Neutrophils ↑, Protein ↑↑, Glucose LOW', expansion: ['Viral: lymphocytes, normal glucose'] },
    { hook: 'Give steroids + antibiotics together (steroids first) in pneumococcal meningitis', expansion: ['Never delay antibiotics'] },
  ],

  traps: [
    {
      questionCategory: 'CSF glucose interpretation',
      wrongInstinct: 'A low CSF glucose confirms bacterial (not tuberculous or fungal) meningitis',
      rightAnswer: 'Low CSF glucose occurs in BOTH bacterial and TB/fungal meningitis; the cell type separates them — neutrophils (bacterial) vs lymphocytes (TB/fungal)',
      why: 'Organisms that consume glucose lower it in bacterial, tuberculous, and fungal meningitis alike, so the predominant white-cell type (and clinical tempo) is what distinguishes them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A febrile patient with neck stiffness has CSF showing 2,000 WBC/mm³ (90% neutrophils), protein 200 mg/dL, and glucose 25 mg/dL (serum 100). The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Viral meningitis' },
        { id: 'b', text: 'Bacterial meningitis' },
        { id: 'c', text: 'Guillain-Barré syndrome' },
        { id: 'd', text: 'Normal CSF' },
      ],
      answerId: 'b',
      explanation: 'Neutrophil-predominant pleocytosis with high protein and low glucose (CSF:serum ratio <0.4) is the classic profile of acute bacterial meningitis — treat empirically without delay.',
      tests: 'investigation',
    },
  ],

  figures: [
    { title: 'CSF profiles in meningitis', svg: CSF_PROFILES, caption: 'Bacterial = neutrophils, ↑↑ protein, low glucose. Viral = lymphocytes, normal glucose. TB/fungal = lymphocytes, very high protein, low glucose.' },
  ],
};

export default bacterialMeningitis;
