import type { Lecture } from '../../lib/types';
import { VACCINE_TYPES } from '../../lib/figures';

export const vaccinesImmunization: Lecture = {
  id: 'vaccines-immunization',
  title: 'Vaccines & Immunisation',
  system: 'immune',
  source: 'L17 — Manipulating the Immune System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L17 Manipulating Immunity' },
    { kind: 'mechanism', label: 'Active vs passive' },
    { kind: 'exam', label: 'Vaccine platforms' },
  ],

  highYield: [
    '**Active vs passive immunisation.** **Active** = give an **antigen** so the host makes its own response **+ memory** — slow onset, **long-lasting** (vaccines). **Passive** = give **preformed antibody** → **immediate** protection but **no memory, short-lived** (maternal IgG, antitoxin, immunoglobulin, therapeutic monoclonals).',
    '**Live-attenuated vaccines** (weakened microbe: **MMR, BCG, oral polio, varicella, yellow fever**) give a **strong, durable, often single-dose** response — but are **contraindicated in immunocompromised patients and pregnancy** (risk of reversion/disease).',
    '**Inactivated (killed) vaccines** (**rabies, hepatitis A, inactivated polio**) are **safe but weaker → need boosters**. **Subunit/toxoid/conjugate** vaccines use purified parts: protein/polysaccharide subunits, **toxoids** (tetanus, diphtheria), and **conjugates** (polysaccharide + protein carrier → T-dependent, memory-generating: Hib, pneumococcus, meningococcus).',
    '**Newer platforms deliver the antigen gene:** **mRNA**, **viral-vector**, and **DNA** vaccines (COVID-19). **Adjuvants** (e.g. alum) boost innate/dendritic-cell activation to strengthen and shape the adaptive response.',
    '**Herd immunity:** when enough of a population is immune, transmission is interrupted, indirectly protecting the unvaccinated (vulnerable, immunocompromised). This links active immunity back to the memory response ([[germinal-center-antibody-response]]).',
  ],

  mechanism: {
    title: 'Teach immunity (active) or lend it (passive)',
    steps: [
      { id: 's1', label: 'Active = antigen → own response + memory (slow, lasting)', emphasis: 'key' },
      { id: 's2', label: 'Passive = preformed antibody → immediate, no memory', emphasis: 'key' },
      { id: 's3', label: 'Live-attenuated = strong/durable; avoid in immunocompromised/pregnancy', emphasis: 'danger' },
      { id: 's4', label: 'Inactivated/subunit/toxoid/conjugate = safer, need boosters' },
      { id: 's5', label: 'mRNA/viral-vector/DNA; adjuvants boost; herd immunity' },
    ],
  },

  examFindings: [
    { sign: 'Immediate protection but no memory', mechanism: 'Passive immunisation (preformed antibody)', significance: 'key' },
    { sign: 'Strong lifelong immunity from one/two doses', mechanism: 'Live-attenuated vaccine', significance: 'key' },
    { sign: 'Live vaccine avoided in an immunocompromised patient', mechanism: 'Risk of disease from the attenuated organism', significance: 'key' },
    { sign: 'Conjugate vaccine effective in infants', mechanism: 'Protein carrier → T-dependent response + memory', significance: 'supportive' },
    { sign: 'Anti-tetanus immunoglobulin after a wound', mechanism: 'Passive immunisation (antitoxin)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Immunisation giving immediate but short-lived protection', meaning: 'Passive (preformed antibody)' },
    { clue: 'Vaccine type contraindicated in pregnancy/immunodeficiency', meaning: 'Live-attenuated' },
    { clue: 'Why Hib/pneumococcal vaccines are conjugated', meaning: 'To make them T-dependent (memory in infants)' },
    { clue: 'Component added to boost a vaccine\'s response', meaning: 'Adjuvant' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Vaccine choice balances immunogenicity vs safety (live = strong but risky in immunocompromised); conjugation solves infant polysaccharide responses ([[humoral-response-b-activation]]); passive immunoglobulin gives instant cover. Broader immune modulation: [[immunotherapy-modulation]].' },
  ],

  mnemonics: [
    { hook: 'Active = "make your own" (slow, memory); Passive = "borrowed antibody" (fast, no memory)', expansion: ['Maternal IgG = passive'] },
    { hook: 'Live vaccines: strong but "no live in immunocompromised/pregnancy"', expansion: ['MMR, BCG, OPV, varicella, yellow fever'] },
  ],

  traps: [
    {
      questionCategory: 'Live vaccines and immunosuppression',
      wrongInstinct: 'Live-attenuated vaccines are safe to give to immunocompromised patients because they are weakened',
      rightAnswer: 'Live-attenuated vaccines are CONTRAINDICATED in significant immunocompromise/pregnancy — the attenuated organism can cause disease',
      why: 'Without adequate immunity, even a weakened organism can replicate and cause infection; inactivated/subunit vaccines are used instead.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Administering preformed antitoxin (immunoglobulin) after a tetanus-prone wound is an example of:',
      options: [
        { id: 'a', text: 'Active immunisation' },
        { id: 'b', text: 'Passive immunisation' },
        { id: 'c', text: 'A live-attenuated vaccine' },
        { id: 'd', text: 'A conjugate vaccine' },
      ],
      answerId: 'b',
      explanation: 'Giving preformed antibody provides immediate but short-lived protection with no memory — passive immunisation. Active immunisation (toxoid) would stimulate the host\'s own response.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which vaccine type is generally contraindicated in a significantly immunocompromised patient?',
      options: [
        { id: 'a', text: 'Inactivated (killed) vaccine' },
        { id: 'b', text: 'Toxoid vaccine' },
        { id: 'c', text: 'Live-attenuated vaccine' },
        { id: 'd', text: 'Subunit vaccine' },
      ],
      answerId: 'c',
      explanation: 'Live-attenuated vaccines can cause disease in immunocompromised hosts (and are avoided in pregnancy). Inactivated, toxoid, and subunit vaccines are non-replicating and safer.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Vaccines & immunisation', svg: VACCINE_TYPES, caption: 'Active (antigen → memory) vs passive (preformed antibody); vaccine platforms live/inactivated/subunit/conjugate/mRNA; adjuvants; herd immunity.' },
  ],
};

export default vaccinesImmunization;
