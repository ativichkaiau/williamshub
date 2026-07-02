import type { Lecture } from '../../lib/types';
import { IBD_CROHN_UC } from '../../lib/figures';

export const inflammatoryBowelDisease: Lecture = {
  id: 'inflammatory-bowel-disease',
  title: 'Inflammatory Bowel Disease: Crohn & Ulcerative Colitis',
  system: 'gi',
  source: 'L2 — Pathology of the Lower GI Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L2 Lower GI Pathology' },
    { kind: 'disease', label: 'Crohn / UC' },
    { kind: 'exam', label: 'Transmural vs mucosal' },
  ],

  highYield: [
    '**Inflammatory bowel disease is chronic, relapsing immune-mediated intestinal inflammation with two forms — Crohn disease and ulcerative colitis — best learned as a contrast table.** Both cause bloody or non-bloody diarrhoea, cramping and extraintestinal manifestations, but their distribution and depth differ fundamentally.',
    '**Crohn disease can affect ANY part of the gut (mouth to anus), classically the terminal ileum, with SKIP LESIONS and TRANSMURAL inflammation.** Hallmarks: **non-caseating granulomas, cobblestone mucosa, fissures/fistulae, strictures and creeping fat**. Transmural disease explains fistulas, abscesses and obstruction; terminal-ileal disease causes **B12 and bile-salt malabsorption (gallstones, oxalate kidney stones)**.',
    '**Ulcerative colitis is limited to the COLON, starts in the RECTUM and extends CONTINUOUSLY (no skips), with inflammation confined to the MUCOSA/submucosa.** Hallmarks: **crypt abscesses, pseudopolyps, a "lead-pipe" (haustra-less) colon, and bloody diarrhoea with tenesmus**. Complications: **toxic megacolon, and a markedly increased colorectal cancer risk** (with primary sclerosing cholangitis as a classic association).',
    '**The mnemonic split: "Crohn = transmural + skip lesions + granulomas (any site, terminal ileum)"; "UC = mucosal + continuous + crypt abscesses (colon/rectum, bloody)."** Smoking WORSENS Crohn but is PROTECTIVE in UC. Serology: ASCA more with Crohn, p-ANCA more with UC.',
    '**Both share extraintestinal manifestations — arthritis, uveitis/episcleritis, erythema nodosum, pyoderma gangrenosum — and both carry a raised colorectal cancer risk (greater and earlier in extensive, long-standing UC), warranting surveillance colonoscopy.** UC\'s link to primary sclerosing cholangitis is a high-yield association.',
  ],

  mechanism: {
    title: 'Crohn = transmural/skip/granuloma (any site); UC = mucosal/continuous (colon)',
    steps: [
      { id: 's1', label: 'Crohn: mouth→anus (ileum), skip lesions, TRANSMURAL', emphasis: 'key' },
      { id: 's2', label: 'Crohn: non-caseating granulomas, cobblestone, fistula/stricture', emphasis: 'key' },
      { id: 's3', label: 'UC: rectum→colon, CONTINUOUS, mucosal only, crypt abscesses', emphasis: 'key' },
      { id: 's4', label: 'UC: pseudopolyps, lead-pipe colon, bloody diarrhoea; toxic megacolon', emphasis: 'danger' },
      { id: 's5', label: 'Smoking worsens Crohn / protects UC; UC → PSC + ↑↑cancer' },
    ],
  },

  examFindings: [
    { sign: 'Transmural inflammation with non-caseating granulomas + skip lesions', mechanism: 'Crohn disease', significance: 'key' },
    { sign: 'Continuous mucosal inflammation from the rectum with crypt abscesses', mechanism: 'Ulcerative colitis', significance: 'key' },
    { sign: 'Fistulae, strictures and terminal-ileal disease', mechanism: 'Transmural Crohn disease', significance: 'key' },
    { sign: 'Toxic megacolon / lead-pipe colon', mechanism: 'Ulcerative colitis complication', significance: 'key' },
    { sign: 'Primary sclerosing cholangitis with colitis', mechanism: 'Classic ulcerative colitis association', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The IBD with transmural inflammation and granulomas', meaning: 'Crohn disease' },
    { clue: 'The IBD confined to the colonic mucosa, starting rectally', meaning: 'Ulcerative colitis' },
    { clue: 'The IBD in which smoking is protective', meaning: 'Ulcerative colitis (smoking worsens Crohn)' },
    { clue: 'The hepatobiliary disease associated with ulcerative colitis', meaning: 'Primary sclerosing cholangitis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'IBD is managed with 5-ASA, steroids, immunomodulators and biologics (anti-TNF); colectomy is curative for UC but not Crohn. Terminal-ileal Crohn causes B12/bile-salt malabsorption (nutrition — [[water-soluble-vitamins-trace-elements]]). Both raise colorectal cancer risk, feeding the adenoma-carcinoma/surveillance theme of [[colorectal-polyps-carcinoma]]. Distinguish from infective colitis ([[inflammatory-invasive-enteritis]]).' },
  ],

  mnemonics: [
    { hook: 'Crohn = "Crows skip" (skip lesions, transmural, granuloma, terminal ileum)', expansion: ['Fistula/stricture/cobblestone', 'B12 + bile-salt malabsorption'] },
    { hook: 'UC = "Continuous, Colon, Crypt abscess, Cancer" (mucosal, bloody)', expansion: ['Rectum → proximal', 'Lead-pipe, pseudopolyps', 'PSC + toxic megacolon'] },
  ],

  traps: [
    {
      questionCategory: 'Depth of inflammation in Crohn vs UC',
      wrongInstinct: 'Both Crohn disease and ulcerative colitis inflame the full thickness of the bowel wall',
      rightAnswer: 'Crohn disease is TRANSMURAL (full-thickness → fistulae, strictures, granulomas), whereas ulcerative colitis is limited to the MUCOSA/submucosa — the depth explains why fistulas occur in Crohn but not UC',
      why: 'The transmural vs mucosal distinction is the root of their different complications; only full-thickness Crohn inflammation can burrow through the wall to form fistulas and abscesses.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has patchy (skip) transmural inflammation of the terminal ileum with non-caseating granulomas and a fistula. The diagnosis is:',
      options: [
        { id: 'a', text: 'Ulcerative colitis' },
        { id: 'b', text: 'Crohn disease' },
        { id: 'c', text: 'Ischaemic colitis' },
        { id: 'd', text: 'Diverticulitis' },
      ],
      answerId: 'b',
      explanation: 'Skip lesions, transmural inflammation, non-caseating granulomas and fistula formation, often involving the terminal ileum, are characteristic of Crohn disease. Ulcerative colitis is continuous, mucosal and colonic.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which feature is characteristic of ulcerative colitis rather than Crohn disease?',
      options: [
        { id: 'a', text: 'Transmural inflammation' },
        { id: 'b', text: 'Continuous mucosal inflammation extending proximally from the rectum with crypt abscesses' },
        { id: 'c', text: 'Non-caseating granulomas' },
        { id: 'd', text: 'Skip lesions and fistulae' },
      ],
      answerId: 'b',
      explanation: 'Ulcerative colitis is a continuous, mucosa-limited inflammation beginning in the rectum, with crypt abscesses and pseudopolyps. Transmural inflammation, granulomas, skip lesions and fistulae are features of Crohn disease.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Crohn disease vs ulcerative colitis', svg: IBD_CROHN_UC, caption: 'Site, pattern, depth, histology and complications contrasted, plus smoking and serology associations.' },
  ],
};

export default inflammatoryBowelDisease;
