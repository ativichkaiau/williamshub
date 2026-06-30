import type { Lecture } from '../../lib/types';

export const rheumaticHeartDisease: Lecture = {
  id: 'rheumatic-heart-disease',
  title: 'Rheumatic Fever & Heart Disease',
  system: 'cardiovascular',
  source: 'L8 — Valvular Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L8 Valvular Heart Disease' },
    { kind: 'disease', label: 'Rheumatic heart disease' },
    { kind: 'mechanism', label: 'Molecular mimicry' },
    { kind: 'investigation', label: 'ASO titer' },
  ],

  highYield: [
    'Follows **Group A β-hemolytic streptococcal pharyngitis** (~2–3 wks later); **type II hypersensitivity** via molecular mimicry.',
    '**Jones criteria** (2 major, or 1 major + 2 minor, + evidence of strep).',
    '**JONES** = **J**oints (migratory polyarthritis), **♥** carditis, subcutaneous **N**odules, **E**rythema marginatum, **S**ydenham chorea.',
    '**Aschoff bodies** (granulomas) + **Anitschkow cells** (caterpillar nuclei) = pathognomonic of acute rheumatic carditis.',
    'Chronic → **mitral stenosis** (most common); ↑ **ASO titer**; needs penicillin prophylaxis.',
  ],

  mechanism: {
    title: 'Strep pharyngitis → cross-reactive immunity → carditis',
    steps: [
      { id: 's1', label: 'Group A strep pharyngitis' },
      { id: 's2', label: 'Molecular mimicry (anti-M protein cross-reacts)', emphasis: 'key' },
      { id: 's3', label: 'Type II hypersensitivity → acute rheumatic fever' },
      { id: 's4', label: 'Pancarditis (Aschoff bodies / Anitschkow cells)' },
      { id: 's5', label: 'Chronic valve scarring → mitral stenosis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Migratory polyarthritis, carditis (new murmur), subcutaneous nodules, erythema marginatum, Sydenham chorea', mechanism: 'Jones major criteria', significance: 'key' },
    { sign: 'Chronic: opening snap + mid-diastolic rumble (mitral stenosis)', mechanism: 'Healed valve scarring', significance: 'key' },
    { sign: 'Fever + recent sore throat', mechanism: 'Preceding strep infection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ASO titer / anti-DNase B', meaning: 'Evidence of recent strep — diagnostic support' },
    { clue: 'Echocardiography', meaning: 'Carditis / valve damage' },
    { clue: 'Aschoff bodies on histology', meaning: 'Pathognomonic of rheumatic carditis' },
  ],

  treatment: [
    { logic: 'Treat strep (penicillin) + anti-inflammatory (aspirin/steroids)', detail: 'Acute episode.' },
    { logic: 'Long-term penicillin prophylaxis', detail: 'Prevents recurrence & progression.' },
    { logic: 'Manage chronic valve disease', detail: 'Mitral stenosis — valvotomy/replacement.' },
  ],

  mnemonics: [
    { hook: 'JONES (♥)', expansion: ['Joints (migratory)', 'Carditis', 'Nodules (subcutaneous)', 'Erythema marginatum', 'Sydenham chorea'] },
    { hook: 'Aschoff bodies + Anitschkow cells = rheumatic carditis', expansion: ['Aschoff = granuloma', 'Anitschkow = caterpillar nuclei'] },
  ],

  traps: [
    {
      questionCategory: 'Preceding infection',
      wrongInstinct: 'Caused by Group D / skin strep / Staphylococcus',
      rightAnswer: 'Group A β-hemolytic streptococcal PHARYNGITIS',
      why: 'Rheumatic fever follows Group A strep throat (not skin/impetigo, which causes post-strep glomerulonephritis); ASO titer rises.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with chronic mitral stenosis had a childhood illness with fever, rash, migratory joint pain, and chorea. What infection precedes this disease?',
      options: [
        { id: 'a', text: 'Group D alpha-hemolytic streptococcal infection of the heart' },
        { id: 'b', text: 'Group A beta-hemolytic streptococcal infection of the pharynx' },
        { id: 'c', text: 'Streptococcus pyogenes infection of the skin' },
        { id: 'd', text: 'Staphylococcus aureus infection of the lungs' },
      ],
      answerId: 'b',
      explanation: 'Rheumatic fever follows Group A β-hemolytic streptococcal pharyngitis (~2–3 weeks prior), via molecular mimicry — not a skin or staphylococcal infection.',
      tests: 'exam',
    },
  ],
};

export default rheumaticHeartDisease;
