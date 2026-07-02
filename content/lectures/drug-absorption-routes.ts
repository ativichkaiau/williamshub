import type { Lecture } from '../../lib/types';

export const drugAbsorptionRoutes: Lecture = {
  id: 'drug-absorption-routes',
  title: 'Drug Absorption & Routes of Administration',
  system: 'pharmacology',
  source: 'L2 — Pharmacokinetics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L2 Absorption' },
    { kind: 'mechanism', label: 'Absorption & first-pass' },
    { kind: 'exam', label: 'Bioavailability; ion trapping' },
  ],

  highYield: [
    '**ABSORPTION is the movement of drug from its administration site into the systemic circulation. Most drugs cross membranes by PASSIVE diffusion of the UN-IONISED (lipid-soluble) form; because most drugs are weak acids or bases, the local pH (Henderson-Hasselbalch) determines the ionised fraction and thus absorption/trapping ("ion trapping" — e.g. aspirin absorbed in the acidic stomach).**',
    '**ROUTE determines onset and BIOAVAILABILITY (F). ENTERAL: oral (convenient, but FIRST-PASS metabolism through gut wall/liver lowers F; and variable absorption), sublingual/rectal (partly bypass first-pass). PARENTERAL: IV (F = 100%, immediate, no absorption step), IM/SC (slower, depot). Other: inhaled (lung — fast, local), transdermal (slow, steady), topical.**',
    '**FIRST-PASS metabolism is why some oral drugs need much higher oral than IV doses or are given by another route (e.g. GTN sublingual). Absorption is modified by: gut motility, food, formulation, splanchnic blood flow, and interactions (antacids/cations CHELATE tetracyclines/fluoroquinolones; PPIs alter pH-dependent absorption).**',
    '**Bioavailability F is quantified from the AUC (area under the concentration–time curve) relative to IV: F = (AUC_oral/AUC_IV) × (dose_IV/dose_oral). It underlies dose conversions between routes and the bioequivalence testing of generics ([[drug-development-bioequivalence]]).**',
    '**The take-home: absorption favours the UN-IONISED lipid-soluble form (pH-dependent, ion trapping); ROUTE sets onset and bioavailability — oral suffers FIRST-PASS (↓F), IV is 100%, sublingual/rectal partly bypass the liver; F is measured by AUC.** This feeds the distribution/metabolism/excretion of [[pharmacokinetics-adme]]; chelation/absorption interactions are in [[drug-interactions-mechanisms]].',
  ],

  mechanism: {
    title: 'Un-ionised form diffuses (pH-dependent, ion trapping); route sets onset/F; oral → first-pass ↓F; IV F=100%; F from AUC',
    steps: [
      { id: 's1', label: 'Passive diffusion of UN-IONISED lipid-soluble drug; pH sets ionised fraction (ion trapping)', emphasis: 'key' },
      { id: 's2', label: 'Oral = convenient but FIRST-PASS (gut/liver) lowers bioavailability', emphasis: 'key' },
      { id: 's3', label: 'IV = 100% bioavailable/immediate; IM/SC = slower depot; sublingual/rectal bypass some first-pass', emphasis: 'key' },
      { id: 's4', label: 'Absorption altered by food, motility, formulation, chelation (antacids/PPIs)', emphasis: 'key' },
      { id: 's5', label: 'F = AUC_oral/AUC_IV (route conversions, bioequivalence)' },
    ],
  },

  examFindings: [
    { sign: 'A large oral-to-IV dose difference for the same effect', mechanism: 'Extensive first-pass metabolism (low oral F)', significance: 'key' },
    { sign: 'Sublingual GTN acting faster than swallowed GTN', mechanism: 'Sublingual route bypasses hepatic first-pass', significance: 'key' },
    { sign: 'Aspirin absorbed in the stomach', mechanism: 'Weak acid un-ionised in acidic gastric pH (ion trapping)', significance: 'supportive' },
    { sign: 'Reduced antibiotic absorption taken with milk/antacids', mechanism: 'Cation chelation of tetracyclines/fluoroquinolones', significance: 'key' },
    { sign: '100% bioavailability by definition', mechanism: 'Intravenous administration', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The form of a drug that best crosses membranes', meaning: 'The un-ionised (lipid-soluble) form' },
    { clue: 'The process lowering oral bioavailability', meaning: 'First-pass (gut/hepatic) metabolism' },
    { clue: 'The route with 100% bioavailability', meaning: 'Intravenous' },
    { clue: 'How bioavailability is measured', meaning: 'From the AUC relative to IV (F = AUC_oral/AUC_IV)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Route and absorption determine onset, dose and reliability: first-pass metabolism dictates oral vs alternative routes (sublingual GTN, IV), pH/ion-trapping affects absorption and toxicology (urine alkalinisation for aspirin), and chelation interactions change antibiotic dosing timing ([[drug-interactions-mechanisms]]). Bioavailability (AUC) underpins bioequivalence ([[drug-development-bioequivalence]]) and links to the wider ADME picture of [[pharmacokinetics-adme]].' },
  ],

  mnemonics: [
    { hook: '"Un-ionised = absorbed (lipid-soluble); ionised = trapped"', expansion: ['Weak acid absorbed in acid stomach', 'pH → ion trapping'] },
    { hook: 'Bioavailability: "Oral suffers first-pass; IV = 100%; sublingual/rectal skip the liver"', expansion: ['F = AUC_oral/AUC_IV', 'Chelation ↓ absorption'] },
  ],

  traps: [
    {
      questionCategory: 'First-pass metabolism and route choice',
      wrongInstinct: 'If a drug is well absorbed from the gut, its oral bioavailability must be high',
      rightAnswer: 'Good gut ABSORPTION does not guarantee high BIOAVAILABILITY — a well-absorbed drug can still have low oral F if it undergoes extensive FIRST-PASS metabolism in the gut wall and liver before reaching the systemic circulation, which is why some drugs are given IV, sublingually or rectally to bypass the liver',
      why: 'Bioavailability reflects absorption MINUS first-pass loss; ignoring first-pass overestimates oral F and misjudges route/dose choices (e.g. GTN, propranolol).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Glyceryl trinitrate (GTN) is given sublingually rather than swallowed because the sublingual route:',
      options: [
        { id: 'a', text: 'Is more comfortable' },
        { id: 'b', text: 'Bypasses hepatic first-pass metabolism, giving rapid systemic levels' },
        { id: 'c', text: 'Slows absorption for a depot effect' },
        { id: 'd', text: 'Increases ionisation of the drug' },
      ],
      answerId: 'b',
      explanation: 'Sublingual absorption drains into the systemic venous circulation, largely bypassing the hepatic portal system and first-pass metabolism, so GTN reaches the circulation rapidly and effectively — important for a drug otherwise heavily metabolised on first pass.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A weak acid such as aspirin is best absorbed in the stomach because in the acidic gastric environment it is largely:',
      options: [
        { id: 'a', text: 'Ionised and lipid-insoluble' },
        { id: 'b', text: 'Un-ionised and lipid-soluble' },
        { id: 'c', text: 'Bound to protein' },
        { id: 'd', text: 'Chelated' },
      ],
      answerId: 'b',
      explanation: 'In an acidic environment a weak acid stays largely un-ionised (protonated), which is lipid-soluble and diffuses across membranes readily. Ionised drug is "trapped" and poorly absorbed — the principle of pH partitioning/ion trapping.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default drugAbsorptionRoutes;
