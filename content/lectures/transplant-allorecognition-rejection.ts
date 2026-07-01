import type { Lecture } from '../../lib/types';
import { TRANSPLANT_REJECTION } from '../../lib/figures';

export const transplantAllorecognitionRejection: Lecture = {
  id: 'transplant-allorecognition-rejection',
  title: 'Transplantation: Allorecognition & Rejection',
  system: 'immune',
  source: 'L15 — Transplantation Immunology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L15 Transplantation' },
    { kind: 'mechanism', label: 'Alloreactivity · rejection' },
    { kind: 'exam', label: 'Rejection timing · GVHD' },
  ],

  highYield: [
    '**Graft types.** **Autograft** (self → self, no rejection); **isograft** (identical twin); **allograft** (same species, different individual — the usual clinical scenario, rejectable); **xenograft** (different species). Rejection is driven mainly by **differences in HLA (MHC)**.',
    '**Allorecognition — how the recipient "sees" the graft.** **Direct pathway:** recipient T cells recognise **intact donor MHC on donor APCs** (high frequency of alloreactive T cells → drives **acute rejection**). **Indirect pathway:** recipient APCs process donor antigens and present them on **self-MHC** (contributes to chronic rejection).',
    '**Hyperacute rejection (minutes–hours):** caused by **pre-existing recipient antibodies** (ABO or anti-HLA from prior transfusion/pregnancy/transplant) → complement/thrombosis → immediate graft loss. **Prevented by ABO matching + a pre-transplant crossmatch.**',
    '**Acute rejection (days–weeks):** primarily **alloreactive T cells** (cellular) ± donor-specific antibody; usually **responds to increased immunosuppression**. **Chronic rejection (months–years):** progressive **vascular intimal thickening/fibrosis** (T-cell + antibody + non-immune factors) → **irreversible** graft loss.',
    '**Graft-versus-host disease (GVHD)** is the mirror image: in **bone-marrow/haematopoietic stem-cell transplants**, immunocompetent **donor T cells attack the (immunosuppressed) host** — targeting **skin, gut, and liver**. Acute GVHD occurs <3 months; chronic GVHD after 3 months.',
  ],

  mechanism: {
    title: 'Recognise foreign MHC → reject (timing = mechanism)',
    steps: [
      { id: 's1', label: 'HLA mismatch drives allograft rejection', emphasis: 'key' },
      { id: 's2', label: 'Direct (donor MHC on donor APC) → acute; indirect → chronic', emphasis: 'key' },
      { id: 's3', label: 'Hyperacute: pre-existing antibody → minutes (crossmatch prevents)', emphasis: 'danger' },
      { id: 's4', label: 'Acute: T cells, days–weeks (immunosuppression-responsive)', emphasis: 'key' },
      { id: 's5', label: 'Chronic: fibrosis/vasculopathy; GVHD = donor T cells vs host' },
    ],
  },

  examFindings: [
    { sign: 'Graft thrombosis within minutes of reperfusion', mechanism: 'Hyperacute rejection (pre-existing antibody)', significance: 'key' },
    { sign: 'Cellular rejection at 1–2 weeks, reversible with steroids', mechanism: 'Acute rejection (alloreactive T cells)', significance: 'key' },
    { sign: 'Progressive graft vasculopathy/fibrosis over years', mechanism: 'Chronic rejection', significance: 'key' },
    { sign: 'Rash + diarrhoea + jaundice after bone-marrow transplant', mechanism: 'GVHD (donor T cells attack host skin/gut/liver)', significance: 'key' },
    { sign: 'High frequency of alloreactive recipient T cells', mechanism: 'Direct allorecognition of donor MHC', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Rejection occurring within minutes', meaning: 'Hyperacute (pre-formed antibody)' },
    { clue: 'Test preventing hyperacute rejection', meaning: 'Pre-transplant crossmatch + ABO matching' },
    { clue: 'Complication where donor cells attack the recipient', meaning: 'Graft-versus-host disease (GVHD)' },
    { clue: 'Pathway driving acute rejection', meaning: 'Direct allorecognition' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Prevention: HLA matching + crossmatch; treatment: immunosuppression (acute rejection responds, chronic does not). GVHD needs prophylaxis in HSCT. Matching and drugs in detail: [[transplant-matching-immunosuppression]]. Rejection is largely type IV hypersensitivity ([[hypersensitivity-type-3-4]]).' },
  ],

  mnemonics: [
    { hook: 'Rejection timing: Hyperacute (mins, antibody) → Acute (weeks, T cells) → Chronic (years, fibrosis)', expansion: ['GVHD = donor attacks host'] },
    { hook: 'Direct = donor MHC on donor APC (acute); Indirect = donor peptide on self-MHC (chronic)', expansion: ['Alloreactivity'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of hyperacute rejection',
      wrongInstinct: 'Hyperacute rejection is caused by newly activated alloreactive T cells',
      rightAnswer: 'Hyperacute rejection is caused by PRE-EXISTING recipient antibodies (ABO/anti-HLA) → immediate thrombosis; prevented by crossmatch',
      why: 'It happens in minutes — far too fast for a new T-cell response; it requires antibody that is already present.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A transplanted kidney turns dusky and thromboses within minutes of reperfusion. This hyperacute rejection is due to:',
      options: [
        { id: 'a', text: 'Newly primed alloreactive T cells' },
        { id: 'b', text: 'Pre-existing recipient antibodies against donor ABO/HLA antigens' },
        { id: 'c', text: 'Chronic vascular fibrosis' },
        { id: 'd', text: 'Graft-versus-host disease' },
      ],
      answerId: 'b',
      explanation: 'Hyperacute rejection results from pre-formed antibodies binding graft endothelium → complement activation and thrombosis in minutes; it is prevented by ABO matching and a pre-transplant crossmatch.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient develops skin rash, diarrhoea, and cholestatic jaundice after an allogeneic bone-marrow transplant. This is:',
      options: [
        { id: 'a', text: 'Hyperacute rejection' },
        { id: 'b', text: 'Chronic rejection' },
        { id: 'c', text: 'Graft-versus-host disease' },
        { id: 'd', text: 'Serum sickness' },
      ],
      answerId: 'c',
      explanation: 'In GVHD, immunocompetent donor T cells attack the immunosuppressed host — classically targeting skin, gut, and liver — a complication of bone-marrow/HSCT.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Graft rejection', svg: TRANSPLANT_REJECTION, caption: 'Hyperacute (antibody, mins), acute (T cell, weeks), chronic (fibrosis, years), GVHD (donor→host); direct vs indirect allorecognition.' },
  ],
};

export default transplantAllorecognitionRejection;
