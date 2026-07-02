import type { Lecture } from '../../lib/types';
import { HEART_VALVES_AUSCULTATION } from '../../lib/figures';

export const cardiovascularExamination: Lecture = {
  id: 'cardiovascular-examination',
  title: 'The Cardiovascular Physical Examination',
  system: 'cardiovascular',
  source: 'L13 — Early Clinical Exposure (CVS)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L13 Early Clinical Exposure' },
    { kind: 'mechanism', label: 'Inspect · palpate · auscultate' },
    { kind: 'exam', label: 'Auscultation areas' },
  ],

  highYield: [
    '**The cardiovascular exam follows the sequence: inspection → palpation → auscultation** (percussion is little used for the heart). It links the anatomy and cardiac cycle you have learned to bedside findings.',
    '**Inspection & palpation:** look for **cyanosis, oedema, JVP, clubbing**; feel the **pulses** (rate, rhythm, character, volume), the **apex beat** (normally 5th intercostal space, midclavicular line — displaced in cardiomegaly), and for **heaves/thrills** (a palpable murmur).',
    '**The four auscultation areas** (where each valve\'s sounds are best heard — downstream of the valve): **Aortic** = right 2nd intercostal space; **Pulmonary** = left 2nd ICS; **Tricuspid** = left lower sternal border; **Mitral** = 5th ICS, midclavicular line (apex). Mnemonic: **"APTM" / "All Physicians Take Money."**',
    '**Heart sounds & murmurs:** identify **S1 and S2** (see [[cardiac-cycle-heart-sounds]]), then time any **murmur** relative to them — **systolic** (between S1 and S2: aortic stenosis, mitral regurgitation) vs **diastolic** (between S2 and S1: aortic regurgitation, mitral stenosis). Note where it\'s loudest and any radiation.',
    '**Manoeuvres and adjuncts:** left-lateral position + bell accentuates mitral sounds; leaning forward + expiration accentuates aortic regurgitation. **Palpating the pulse while inflating a BP cuff estimates systolic pressure**; the exam is combined with the **ECG, echo, and CXR** to reach a diagnosis.',
  ],

  mechanism: {
    title: 'Inspect → palpate → auscultate the valve areas',
    steps: [
      { id: 's1', label: 'Sequence: inspection → palpation → auscultation', emphasis: 'key' },
      { id: 's2', label: 'Palpate pulses + apex beat (5th ICS, MCL); heaves/thrills' },
      { id: 's3', label: 'Auscultate 4 areas: Aortic, Pulmonary, Tricuspid, Mitral', emphasis: 'key' },
      { id: 's4', label: 'Identify S1/S2, then time murmurs (systolic vs diastolic)', emphasis: 'key' },
      { id: 's5', label: 'Manoeuvres accentuate murmurs; integrate with ECG/echo/CXR' },
    ],
  },

  examFindings: [
    { sign: 'Apex beat in the 5th ICS, midclavicular line', mechanism: 'Normal LV apex (displaced in cardiomegaly)', significance: 'key' },
    { sign: 'Systolic murmur (between S1 and S2)', mechanism: 'e.g. aortic stenosis or mitral regurgitation', significance: 'key' },
    { sign: 'Diastolic murmur (between S2 and S1)', mechanism: 'e.g. aortic regurgitation or mitral stenosis', significance: 'key' },
    { sign: 'Palpable thrill', mechanism: 'A murmur intense enough to feel', significance: 'supportive' },
    { sign: 'Raised JVP + peripheral oedema', mechanism: 'Right heart failure / volume overload', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Where the mitral valve is best auscultated', meaning: '5th ICS, midclavicular line (apex)' },
    { clue: 'Where the aortic valve is best auscultated', meaning: 'Right 2nd intercostal space' },
    { clue: 'A murmur occurring between S1 and S2', meaning: 'Systolic murmur' },
    { clue: 'Normal position of the apex beat', meaning: '5th intercostal space, midclavicular line' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The exam is the entry point to every cardiac diagnosis, integrating the cardiac cycle ([[cardiac-cycle-heart-sounds]]) and anatomy ([[heart-anatomy-chambers-valves]]) with the ECG, echo ([[echocardiography-basics]]), and CXR ([[chest-xray-cardiac]]). Valve-disease murmurs are detailed in HCVS-2 ([[aortic-stenosis]]).' },
  ],

  mnemonics: [
    { hook: 'Auscultation areas "APTM": Aortic (R 2nd ICS), Pulmonary (L 2nd), Tricuspid (LLSB), Mitral (apex)', expansion: ['"All Physicians Take Money"'] },
    { hook: 'Systolic = between S1–S2 (AS, MR); Diastolic = between S2–S1 (AR, MS)', expansion: ['Time it to the sounds'] },
  ],

  traps: [
    {
      questionCategory: 'Timing a murmur',
      wrongInstinct: 'A murmur heard between S2 and the next S1 is a systolic murmur',
      rightAnswer: 'A murmur between S2 and S1 is DIASTOLIC (e.g. aortic regurgitation, mitral stenosis); systolic murmurs fall between S1 and S2',
      why: 'Always fix S1 and S2 first, then place the murmur: S1→S2 = systole, S2→S1 = diastole. Mis-timing changes the diagnosis entirely.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The mitral valve is best auscultated at the:',
      options: [
        { id: 'a', text: 'Right 2nd intercostal space' },
        { id: 'b', text: 'Left 2nd intercostal space' },
        { id: 'c', text: 'Left lower sternal border' },
        { id: 'd', text: '5th intercostal space, midclavicular line (apex)' },
      ],
      answerId: 'd',
      explanation: 'The mitral area is at the cardiac apex (5th ICS, midclavicular line). Aortic = right 2nd ICS, pulmonary = left 2nd ICS, tricuspid = left lower sternal border ("APTM").',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A murmur occurring between the first heart sound (S1) and the second heart sound (S2) is:',
      options: [
        { id: 'a', text: 'A diastolic murmur' },
        { id: 'b', text: 'A systolic murmur' },
        { id: 'c', text: 'A continuous murmur' },
        { id: 'd', text: 'Always innocent' },
      ],
      answerId: 'b',
      explanation: 'S1→S2 is systole, so a murmur there is systolic (e.g. aortic stenosis, mitral regurgitation). A murmur between S2 and the next S1 is diastolic.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Cardiac auscultation areas', svg: HEART_VALVES_AUSCULTATION, caption: 'Aortic (R 2nd ICS), pulmonary (L 2nd ICS), tricuspid (LLSB), mitral (apex, 5th ICS MCL); time murmurs to S1/S2.' },
  ],
};

export default cardiovascularExamination;
