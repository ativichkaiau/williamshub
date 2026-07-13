import type { Lecture } from '../../lib/types';
import { LARVA_MIGRANS } from '../../lib/figures';

export const toxocariasisLarvaMigrans: Lecture = {
  id: 'toxocariasis-larva-migrans',
  title: 'Toxocariasis & Larva Migrans',
  system: 'parasitology',
  source: 'L6 — Toxocariasis & Anisakiasis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L6 Toxocara & Anisakis' },
    { kind: 'disease', label: 'Larva migrans' },
    { kind: 'exam', label: 'Visceral/ocular LM' },
  ],

  highYield: [
    '**"Larva migrans" describes zoonotic larvae migrating through an ACCIDENTAL (dead-end) human host in which they cannot mature — so they wander through tissue causing damage and marked EOSINOPHILIA.** The prototype is *Toxocara*, the dog/cat roundworm.',
    '**Toxocara canis (dog) and T. cati (cat) are acquired by ingesting embryonated eggs from soil contaminated by pet faeces (young children with pica/geophagia are at risk).** Larvae hatch and migrate but, because humans are the wrong host, they never become adults — instead they cause larva migrans syndromes.',
    '**Two forms: VISCERAL larva migrans (VLM) — larvae in liver, lungs and other organs → fever, hepatomegaly, wheeze, and eosinophilia; and OCULAR larva migrans (OLM) — a larva in the eye causing a retinal granuloma that can MIMIC RETINOBLASTOMA (a critical differential in a child with leukocoria/an eye mass).** Diagnosis is largely serological (*Toxocara* ELISA) since larvae are in tissue, not stool.',
    'Related migrans syndromes: CUTANEOUS larva migrans — animal HOOKWORM larvae (*Ancylostoma* braziliense) penetrating skin → an intensely itchy, serpiginous "creeping eruption"; and the tissue nematodes *Gnathostoma* and *Angiostrongylus* (see [[gnathostomiasis]], [[angiostrongyliasis-eosinophilic-meningitis]]). All share the "wrong host → wandering larva → eosinophilia" theme.',
    '**The high-yield points: a child with pica + eosinophilia + hepatomegaly/wheeze (VLM) or a retinal mass mimicking retinoblastoma (OLM) → Toxocara, diagnosed serologically.** Prevention is deworming pets and hand hygiene; treatment (albendazole, ± steroids for OLM) targets the larvae. It anchors the larva-migrans concept for this block.',
  ],

  mechanism: {
    title: 'Zoonotic larva in dead-end human host → wandering (VLM/OLM) + eosinophilia',
    steps: [
      { id: 's1', label: 'Larva migrans = zoonotic larva in accidental host, cannot mature', emphasis: 'key' },
      { id: 's2', label: 'Toxocara canis/cati: ingest eggs from pet-faeces soil (pica in kids)', emphasis: 'key' },
      { id: 's3', label: 'Visceral LM: liver/lung → fever, hepatomegaly, wheeze, eosinophilia', emphasis: 'key' },
      { id: 's4', label: 'Ocular LM: retinal granuloma → MIMICS RETINOBLASTOMA', emphasis: 'danger' },
      { id: 's5', label: 'Dx serology (larvae in tissue, not stool); cutaneous LM = animal hookworm' },
    ],
  },

  examFindings: [
    { sign: 'Child with pica, hepatomegaly, wheeze and marked eosinophilia', mechanism: 'Visceral larva migrans (Toxocara)', significance: 'key' },
    { sign: 'Retinal granuloma/leukocoria mimicking retinoblastoma', mechanism: 'Ocular larva migrans (Toxocara)', significance: 'key' },
    { sign: 'Itchy serpiginous "creeping" skin track', mechanism: 'Cutaneous larva migrans (animal hookworm)', significance: 'key' },
    { sign: 'Positive Toxocara serology with negative stool', mechanism: 'Larvae are in tissue, not the gut (no eggs in stool)', significance: 'supportive' },
    { sign: 'Marked peripheral eosinophilia', mechanism: 'Tissue-migrating larvae', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The organism causing visceral and ocular larva migrans', meaning: 'Toxocara canis/cati (dog/cat roundworm)' },
    { clue: 'The malignancy ocular larva migrans can mimic', meaning: 'Retinoblastoma' },
    { clue: 'The diagnostic method for toxocariasis', meaning: 'Serology (Toxocara ELISA) — larvae are not in stool' },
    { clue: 'The cause of cutaneous larva migrans (creeping eruption)', meaning: 'Animal hookworm larvae (Ancylostoma braziliense)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Larva migrans is the "wrong host → wandering larva → eosinophilia" concept: *Toxocara* (VLM/OLM, serology; OLM mimics retinoblastoma), cutaneous LM (animal hookworm), and the tissue nematodes *Gnathostoma* and *Angiostrongylus* ([[gnathostomiasis]], [[angiostrongyliasis-eosinophilic-meningitis]]). It is diagnosed serologically (not stool) and prevented by deworming pets — a zoonotic nematode theme within [[helminth-classification-overview]].' },
  ],

  mnemonics: [
    { hook: 'Toxocara = "pet roundworm → wandering larva": Visceral or Ocular LM (mimics retinoblastoma)', expansion: ['Kids with pica', 'Serology (no stool eggs)'] },
    { hook: 'Larva migrans "wrong host, wandering larva, eosinophilia"', expansion: ['Cutaneous LM = animal hookworm (creeping eruption)', 'Gnathostoma/Angiostrongylus too'] },
  ],

  traps: [
    {
      questionCategory: 'Diagnosing toxocariasis',
      wrongInstinct: 'Toxocariasis is diagnosed by finding Toxocara eggs in the stool',
      rightAnswer: 'In humans, Toxocara larvae are trapped in TISSUE and never mature into egg-laying adults, so there are NO eggs in the stool — diagnosis is SEROLOGICAL (Toxocara ELISA) supported by eosinophilia and the clinical picture',
      why: 'Because humans are a dead-end host, stool microscopy is negative; expecting eggs in stool misses the diagnosis, which relies on serology and recognising the larva-migrans syndrome.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young child with a habit of eating soil presents with fever, hepatomegaly, wheeze and marked eosinophilia; stool examination is negative but Toxocara serology is positive. The diagnosis is:',
      options: [
        { id: 'a', text: 'Ascariasis' },
        { id: 'b', text: 'Visceral larva migrans (toxocariasis)' },
        { id: 'c', text: 'Giardiasis' },
        { id: 'd', text: 'Amoebiasis' },
      ],
      answerId: 'b',
      explanation: 'Ingested Toxocara eggs (from pet-faeces-contaminated soil) release larvae that migrate through viscera in this dead-end human host, causing visceral larva migrans — fever, hepatomegaly, wheeze and eosinophilia — diagnosed serologically since no eggs are passed in stool.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Ocular larva migrans due to Toxocara is an important differential diagnosis of which paediatric eye condition?',
      options: [
        { id: 'a', text: 'Cataract' },
        { id: 'b', text: 'Retinoblastoma' },
        { id: 'c', text: 'Glaucoma' },
        { id: 'd', text: 'Conjunctivitis' },
      ],
      answerId: 'b',
      explanation: 'A Toxocara larva in the eye can form a retinal granuloma that mimics retinoblastoma (e.g. presenting with leukocoria or an eye mass) — a critical distinction, as the management is completely different.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Larva migrans syndromes', svg: LARVA_MIGRANS, caption: 'Visceral/ocular (Toxocara), cutaneous (animal hookworm), gnathostomiasis and angiostrongyliasis — dead-end larvae + eosinophilia.' },
  ],
};

export default toxocariasisLarvaMigrans;
