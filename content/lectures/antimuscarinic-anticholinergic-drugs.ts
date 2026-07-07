import type { Lecture } from '../../lib/types';

export const antimuscarinicAnticholinergicDrugs: Lecture = {
  id: 'antimuscarinic-anticholinergic-drugs',
  title: 'Antimuscarinic & Anticholinergic Drugs',
  system: 'pharmacology',
  source: 'L8 — Cholinergic (Parasympathetic) Drugs',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L8 Antimuscarinics' },
    { kind: 'mechanism', label: 'Muscarinic blockade by organ' },
    { kind: 'exam', label: 'Atropine; anticholinergic toxidrome' },
  ],

  highYield: [
    'ANTIMUSCARINICS block muscarinic receptors → oppose parasympathetic ("rest and digest") effects, producing the classic ANTICHOLINERGIC picture: MYDRIASIS/cycloplegia, dry mouth/eyes, tachycardia, bronchodilation + reduced secretions, reduced gut motility (constipation), URINARY RETENTION, and CNS effects (confusion, especially in the elderly).',
    'Clinically useful antimuscarinics by target: ATROPINE (bradycardia, organophosphate antidote, pre-anaesthetic drying, mydriasis); IPRATROPIUM/TIOTROPIUM (inhaled — COPD/asthma bronchodilation); OXYBUTYNIN/tolterodine/solifenacin (overactive bladder); HYOSCINE/SCOPOLAMINE (motion sickness, antisecretory); BENZTROPINE/trihexyphenidyl (Parkinson tremor, drug-induced EPS); tropicamide/cyclopentolate (eye exams); glycopyrronium (drying).',
    'The ANTICHOLINERGIC TOXIDROME (overdose or additive from many drugs — TCAs, antihistamines, antipsychotics): "hot as a hare (hyperthermia — no sweating), dry as a bone, red as a beet (flushed), blind as a bat (mydriasis/blurred), mad as a hatter (delirium)", plus tachycardia and urinary retention. Severe cases can be treated with PHYSOSTIGMINE (an AChE inhibitor that crosses the BBB).',
    'CAUTIONS/contraindications: NARROW-ANGLE GLAUCOMA (mydriasis raises intraocular pressure), bladder outlet obstruction/BPH (precipitate RETENTION), and the elderly (confusion, falls — "anticholinergic burden" of polypharmacy). Antimuscarinics are the wrong choice in overflow/obstructive urinary symptoms.',
    '**The take-home: antimuscarinics oppose parasympathetic tone → dry/hot/mydriasis/tachycardia/retention/confusion; uses by organ (atropine, ipratropium, oxybutynin, scopolamine, benztropine); toxidrome = "hot, dry, red, blind, mad" (treat severe cases with physostigmine); avoid in glaucoma, obstruction and the frail elderly.** The cholinergic agonists/AChE inhibitors they oppose are in [[cholinergic-drugs]]; the autonomic map is HNS-1 ([[autonomic-nervous-system]]); bladder use in HRU-2 ([[urinary-incontinence-drugs]]).',
  ],

  mechanism: {
    title: 'Block muscarinic → dry/hot/mydriasis/tachycardia/retention/confusion; uses by organ; toxidrome "hot dry red blind mad" (physostigmine)',
    steps: [
      { id: 's1', label: 'Muscarinic blockade opposes parasympathetic effects (anticholinergic picture)', emphasis: 'key' },
      { id: 's2', label: 'Uses: atropine (bradycardia/OP antidote), ipratropium (COPD), oxybutynin (bladder), scopolamine (motion), benztropine (EPS)', emphasis: 'key' },
      { id: 's3', label: 'Toxidrome: hyperthermia (no sweat), dry, flushed, mydriasis/blurred, delirium, tachycardia, retention', emphasis: 'danger' },
      { id: 's4', label: 'Severe toxicity → physostigmine (AChE inhibitor crossing BBB)', emphasis: 'key' },
      { id: 's5', label: 'Avoid: narrow-angle glaucoma, outlet obstruction/BPH, frail elderly (anticholinergic burden)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hot, dry, flushed, dilated pupils, delirious with tachycardia and retention', mechanism: 'Anticholinergic toxidrome', significance: 'key' },
    { sign: 'Bronchodilation in COPD with minimal systemic effect', mechanism: 'Inhaled antimuscarinic (ipratropium/tiotropium)', significance: 'key' },
    { sign: 'Antidote to symptomatic bradycardia or organophosphate poisoning', mechanism: 'Atropine', significance: 'key' },
    { sign: 'Acute angle-closure glaucoma precipitated by an antimuscarinic', mechanism: 'Mydriasis raising intraocular pressure', significance: 'key' },
    { sign: 'Urinary retention in a man with BPH given an antimuscarinic', mechanism: 'Reduced detrusor activity (avoid in obstruction)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The antimuscarinic used for bradycardia and as an OP antidote', meaning: 'Atropine' },
    { clue: 'The inhaled antimuscarinics for COPD', meaning: 'Ipratropium/tiotropium' },
    { clue: 'The features of the anticholinergic toxidrome', meaning: 'Hot, dry, red, blind (mydriasis), mad (delirium) + tachycardia/retention' },
    { clue: 'The antidote for severe anticholinergic toxicity', meaning: 'Physostigmine (crosses the BBB)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Antimuscarinics are used across specialties (cardiology, respiratory, urology, ophthalmology, neurology, anaesthesia), so knowing their organ-specific effects, the recognisable toxidrome ("hot, dry, red, blind, mad") and the contraindications (glaucoma, obstruction, elderly) prevents harm — including the cumulative "anticholinergic burden" of polypharmacy. They mirror-image the cholinergic agents of [[cholinergic-drugs]] on the autonomic map ([[autonomic-nervous-system]]); the overactive-bladder use is in HRU-2 ([[urinary-incontinence-drugs]]).' },
  ],

  mnemonics: [
    { hook: 'Toxidrome: "Hot (no sweat), Dry, Red, Blind (mydriasis), Mad (delirium)"', expansion: ['+ tachycardia + retention', 'Severe → physostigmine'] },
    { hook: 'Uses: "Atropine heart, Ipratropium lungs, Oxybutynin bladder, Scopolamine motion, Benztropine EPS"', expansion: ['Avoid: glaucoma/BPH/elderly', 'Opposes parasympathetic'] },
  ],

  traps: [
    {
      questionCategory: 'Antimuscarinics in the elderly and obstruction',
      wrongInstinct: 'Antimuscarinics are benign symptomatic drugs suitable for any patient',
      rightAnswer: 'Antimuscarinics carry real hazards: they precipitate ACUTE ANGLE-CLOSURE GLAUCOMA (mydriasis) and URINARY RETENTION (outlet obstruction/BPH), and cause CONFUSION/falls in the frail ELDERLY — where cumulative "anticholinergic burden" from combined drugs (antihistamines, TCAs, bladder agents) is a recognised cause of delirium; they should be used cautiously and avoided in these groups',
      why: 'Underestimating antimuscarinic risks leads to preventable glaucoma crises, retention and delirium, especially with polypharmacy in older patients — recognising the burden changes prescribing.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient who overdosed on an antimuscarinic drug is likely to be:',
      options: [
        { id: 'a', text: 'Bradycardic, sweaty and with pinpoint pupils' },
        { id: 'b', text: 'Hyperthermic, dry, flushed, with dilated pupils and delirium' },
        { id: 'c', text: 'Hypothermic with excessive salivation' },
        { id: 'd', text: 'Cyanotic with bronchorrhoea' },
      ],
      answerId: 'b',
      explanation: 'The anticholinergic toxidrome is "hot as a hare (hyperthermia from no sweating), dry as a bone, red as a beet, blind as a bat (mydriasis/blurred vision), mad as a hatter (delirium)", with tachycardia and urinary retention. This is the opposite of the cholinergic (SLUDGE) picture.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Antimuscarinic drugs should be used with particular caution or avoided in a patient with:',
      options: [
        { id: 'a', text: 'Overactive bladder' },
        { id: 'b', text: 'Narrow-angle glaucoma or bladder outlet obstruction' },
        { id: 'c', text: 'Motion sickness' },
        { id: 'd', text: 'Bradycardia' },
      ],
      answerId: 'b',
      explanation: 'Antimuscarinics cause mydriasis (which can precipitate acute angle-closure glaucoma) and reduce detrusor contraction (precipitating urinary retention in outlet obstruction/BPH); they also cause confusion in the frail elderly. These are key contraindications/cautions.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default antimuscarinicAnticholinergicDrugs;
