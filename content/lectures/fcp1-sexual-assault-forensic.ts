import type { Lecture } from '../../lib/types';

export const fcp1SexualAssaultForensic: Lecture = {
  id: 'fcp1-sexual-assault-forensic',
  title: 'Sexual Assault: Forensic Examination',
  system: 'clinical',
  source: 'L36 — Sexual Assault',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L36 Sexual Assault' },
    { kind: 'exam', label: 'Forensic examination' },
    { kind: 'mechanism', label: 'Chain of custody' },
    { kind: 'investigation', label: 'Evidence kit · toxicology' },
  ],

  highYield: [
    'The physician holds a **dual role** — therapeutic care of the survivor [[fcp1-sexual-assault-medical]] and **forensic evidence** for justice — but **patient care always comes first**.',
    '**Specific informed consent** [[fcp1-professionalism-consent]] is needed for the forensic examination, each sample, any photography and the **release of evidence or reports to authorities**; the survivor may decline any element.',
    '**Chain of custody** is an unbroken, documented, signed and **tamper-evident** trail for every specimen from collection to court — a break can render the evidence inadmissible.',
    '**Timely collection** (generally within 72 hours, up to roughly 120 hours) uses a **standardized kit**; include **toxicology** if drug-facilitated assault is suspected, and advise against washing or changing where possible without ever coercing.',
    '**Documentation is objective and contemporaneous** — body maps, injury descriptions and the survivor’s own words in quotation marks — while avoiding legal conclusions. **Mandatory reporting** applies to minors and vulnerable adults [[fcp1-medical-law-thailand]], and confidentiality has legal limits [[fcp1-medical-negligence-confidentiality]].',
  ],

  mechanism: {
    title: 'The forensic examination and chain of custody',
    steps: [
      { id: 's1', label: 'Specific consent for forensic exam and evidence release', emphasis: 'key' },
      { id: 's2', label: 'Collect standardized-kit samples within the window', emphasis: 'key' },
      { id: 's3', label: 'Label, seal (tamper-evident) and sign every specimen', emphasis: 'key' },
      { id: 's4', label: 'Contemporaneous objective documentation (body maps, quotes)', emphasis: 'key' },
      { id: 's5', label: 'Hand over via signed transfers; report as mandated', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Injury described by site, size, type and colour on a body map', mechanism: 'Creates an objective record that is admissible later', significance: 'key' },
    { sign: 'The survivor’s account recorded in their own words', mechanism: 'Preserves accuracy and avoids interpretation', significance: 'supportive' },
    { sign: 'Toxicology sample taken when drug-facilitated assault is suspected', mechanism: 'Detects sedating agents with short detection windows', significance: 'key' },
    { sign: 'Tamper-evident seals and signatures on every specimen', mechanism: 'Maintains the chain of custody', significance: 'key' },
  ],

  investigations: [
    { clue: 'Presentation within 72 to 120 hours', meaning: 'Evidence may still be recoverable — use the forensic kit' },
    { clue: 'Suspected drug-facilitated assault', meaning: 'Take early blood and urine toxicology, as detection windows are short' },
    { clue: 'Each specimen sealed, signed and dated at every transfer', meaning: 'An intact chain of custody keeps evidence admissible' },
    { clue: 'The survivor is a minor or a vulnerable adult', meaning: 'Mandatory reporting applies regardless of the survivor’s wishes' },
  ],

  treatment: [
    { logic: 'Patient care before evidence', detail: 'Never delay treatment of injuries or prophylaxis in order to collect samples.' },
    { logic: 'Preserve the chain of custody', detail: 'Collect, label, seal with a tamper-evident closure, sign and document every transfer; an unexplained gap can make the evidence inadmissible.' },
    { logic: 'Report and testify within the law', detail: 'Provide the medico-legal report, comply with mandatory reporting, and give factual or expert testimony if summoned [[fcp1-medical-law-thailand]].' },
  ],

  mnemonics: [
    { hook: 'Collect, Label, Seal, Sign, Document', expansion: ['Standardized kit within the window', 'Tamper-evident seals on every specimen', 'Signed transfers build the chain of custody', 'Objective body-map documentation'] },
  ],

  traps: [
    {
      questionCategory: 'Chain of custody',
      wrongInstinct: 'A well-collected sample is valid evidence even if the transfer log has an unexplained gap',
      rightAnswer: 'An unexplained break in the chain of custody can make the evidence inadmissible',
      why: 'Admissibility depends on a documented, unbroken trail proving the sample was not tampered with or switched.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which practice best preserves the chain of custody for forensic specimens?',
      options: [
        { id: 'a', text: 'Store all samples together in one unsealed bag for convenience' },
        { id: 'b', text: 'Seal each specimen with a tamper-evident closure and sign and date every transfer' },
        { id: 'c', text: 'Let the survivor carry the samples to the police station' },
        { id: 'd', text: 'Label the samples only after all of them are collected' },
      ],
      answerId: 'b',
      explanation: 'Chain of custody requires each specimen to be individually sealed with tamper-evident closures and every transfer to be signed and dated, so the trail is unbroken.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A stable adult survivor declines forensic evidence collection but wants medical care. The correct action is to:',
      options: [
        { id: 'a', text: 'Collect the evidence anyway because it may be needed later' },
        { id: 'b', text: 'Refuse medical care until she consents to evidence collection' },
        { id: 'c', text: 'Provide medical care and prophylaxis and respect her refusal of forensic collection' },
        { id: 'd', text: 'Report her decision to the police as obstruction' },
      ],
      answerId: 'c',
      explanation: 'A competent adult may decline forensic collection; care and prophylaxis proceed with consent, and the declined forensic step is respected and documented.',
      tests: 'lecture',
    },
  ],
};

export default fcp1SexualAssaultForensic;
