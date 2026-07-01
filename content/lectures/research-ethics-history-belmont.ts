import type { Lecture } from '../../lib/types';
import { BELMONT_PRINCIPLES } from '../../lib/figures';

export const researchEthicsHistoryBelmont: Lecture = {
  id: 'research-ethics-history-belmont',
  title: 'Research Ethics: History & the Belmont Principles',
  system: 'research',
  source: 'L7 — Human Research Ethics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L7 Research Ethics' },
    { kind: 'mechanism', label: 'Belmont 3 principles' },
    { kind: 'exam', label: 'Which document, which abuse' },
  ],

  highYield: [
    '**Modern research ethics was built in reaction to abuses.** The timeline links each scandal to a safeguard: **Nazi experiments → Nuremberg Doctors’ Trial (1946) → Nuremberg Code (1947)**; the **Tuskegee Syphilis Study (1932–1972)**, in which ~400 Black men with syphilis were left untreated to observe its natural course, → the **National Research Act (1974) → Belmont Report (1979) → 45 CFR 46 (Common Rule)**.',
    '**Nuremberg Code (1947) — the first international code.** Its cardinal rule: **voluntary consent is absolutely essential**. Also: benefit to society unobtainable otherwise, prior animal work, avoid unnecessary suffering, no experiment where death/disability is expected, reasonable risk, qualified investigators, and the **subject’s right to withdraw** at any time.',
    '**Declaration of Helsinki (WMA, 1964, revised repeatedly)** — the profession’s own guideline for physicians in medical research. It extended Nuremberg, distinguishing therapeutic vs non-therapeutic research and stressing that the **participant’s well-being takes precedence over the interests of science/society**.',
    '**Belmont Report (1979) — the 3 core principles → 3 applications.** **Respect for persons → informed consent** (protect autonomy; safeguard those with reduced autonomy). **Beneficence → assessment of risks and benefits** (maximise benefit, minimise harm). **Justice → fair selection of participants** (fair distribution of research burdens and benefits — no exploiting the vulnerable).',
    '**Codified into regulation & global guidance.** The Belmont principles became US federal law as **45 CFR 46 ("the Common Rule")**, and internationally as the **CIOMS–WHO guidelines** for research in low-resource settings. These are what an ethics committee (IRB/REC) actually applies.',
  ],

  mechanism: {
    title: 'Abuse → safeguard → principles → law',
    steps: [
      { id: 's1', label: 'Nazi experiments → Nuremberg Code (1947): voluntary consent', emphasis: 'key' },
      { id: 's2', label: 'Declaration of Helsinki (1964): participant welfare > science' },
      { id: 's3', label: 'Tuskegee (1932–72) → National Research Act (1974)', emphasis: 'danger' },
      { id: 's4', label: 'Belmont (1979): Respect · Beneficence · Justice', emphasis: 'key' },
      { id: 's5', label: 'Codified: 45 CFR 46 (Common Rule) + CIOMS/WHO' },
    ],
  },

  examFindings: [
    { sign: 'Nuremberg Code (1947)', mechanism: 'First code — "voluntary consent is absolutely essential"', significance: 'key' },
    { sign: 'Belmont: Respect → consent; Beneficence → risk/benefit; Justice → fair selection', mechanism: '3 principles map to 3 applications', significance: 'key' },
    { sign: 'Tuskegee Syphilis Study', mechanism: 'Untreated syphilis in Black men → drove US regulation (National Research Act)', significance: 'key' },
    { sign: 'Declaration of Helsinki', mechanism: 'WMA physicians’ guideline; welfare of the subject over science', significance: 'supportive' },
    { sign: '45 CFR 46 (Common Rule) / CIOMS', mechanism: 'US regulation / international guidance operationalising Belmont', significance: 'supportive' },
  ],

  investigations: [
    { clue: '"Which document first made voluntary consent mandatory?"', meaning: 'The Nuremberg Code (1947)' },
    { clue: '"Which principle underlies fair participant selection?"', meaning: 'Justice (Belmont)' },
    { clue: '"Which abuse prompted US federal human-subjects regulation?"', meaning: 'The Tuskegee Syphilis Study' },
    { clue: '"Physician-authored guideline for medical research"', meaning: 'Declaration of Helsinki (WMA)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every study you design must satisfy the three Belmont principles before an IRB/REC will approve it. History shows what happens when they are ignored.' },
  ],

  mnemonics: [
    { hook: 'Belmont = "Respect, Benefit, Justice" → "Consent, Risk/Benefit, Fair selection"', expansion: ['3 principles → 3 applications, in order'] },
    { hook: 'Nuremberg = "Never again" → voluntary consent first', expansion: ['1947, first international code'] },
  ],

  traps: [
    {
      questionCategory: 'Match principle to application',
      wrongInstinct: 'Informed consent is the application of Beneficence',
      rightAnswer: 'Informed consent applies *Respect for persons*; Beneficence → risk/benefit assessment; Justice → fair participant selection',
      why: 'Belmont pairs each principle with a specific application — mixing them up is the most common exam trap.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the Belmont Report, the requirement for fair selection of research participants is the application of which principle?',
      options: [
        { id: 'a', text: 'Respect for persons' },
        { id: 'b', text: 'Beneficence' },
        { id: 'c', text: 'Justice' },
        { id: 'd', text: 'Non-maleficence' },
      ],
      answerId: 'c',
      explanation: 'Justice → fair distribution of the burdens and benefits of research → fair participant selection. Respect for persons → informed consent; Beneficence → risk/benefit assessment.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The Nuremberg Code was written primarily in response to:',
      options: [
        { id: 'a', text: 'The Tuskegee Syphilis Study' },
        { id: 'b', text: 'Nazi human experimentation revealed at the Doctors’ Trial' },
        { id: 'c', text: 'The thalidomide disaster' },
        { id: 'd', text: 'The discovery of penicillin' },
      ],
      answerId: 'b',
      explanation: 'The Nuremberg Code (1947) followed the Nuremberg Doctors’ Trial of Nazi physicians. Tuskegee later drove the US National Research Act and the Belmont Report.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Belmont principles → applications', svg: BELMONT_PRINCIPLES, caption: 'Respect for persons → informed consent; Beneficence → risk/benefit; Justice → fair selection. Lineage: Nuremberg → Helsinki → Belmont → Common Rule.' },
  ],
};

export default researchEthicsHistoryBelmont;
