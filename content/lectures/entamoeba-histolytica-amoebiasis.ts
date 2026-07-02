import type { Lecture } from '../../lib/types';
import { ENTAMOEBA_AMOEBIASIS } from '../../lib/figures';

export const entamoebaHistolyticaAmoebiasis: Lecture = {
  id: 'entamoeba-histolytica-amoebiasis',
  title: 'Entamoeba histolytica & Amoebiasis',
  system: 'parasitology',
  source: 'L3 — Amoebae & Free-Living Amoebae',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L3 Amoebae' },
    { kind: 'disease', label: 'Amoebiasis' },
    { kind: 'exam', label: 'Liver abscess' },
  ],

  highYield: [
    '**Entamoeba histolytica causes amoebiasis, acquired FAECAL–ORAL by ingesting the mature (4-nucleate) CYST.** The cyst excysts in the gut to release TROPHOZOITES that colonise the colon. Only E. histolytica is invasive — the morphologically identical E. dispar is non-pathogenic.',
    '**Intestinal amoebiasis: trophozoites invade the colonic mucosa, producing characteristic FLASK-SHAPED ulcers → amoebic dysentery (bloody, mucoid diarrhoea with tenesmus).** A diagnostic clue is finding trophozoites that contain INGESTED RED CELLS (erythrophagocytosis) — a marker of invasive E. histolytica.',
    '**Amoebic LIVER ABSCESS is the commonest extra-intestinal form: trophozoites spread via the portal vein to the liver → RUQ pain, fever and tender hepatomegaly, usually in the RIGHT lobe, containing "ANCHOVY-PASTE" material.** It may rupture (into the pleura/pericardium/peritoneum). Serology is especially useful here.',
    '**Diagnosis: stool microscopy (cysts in formed stool, haematophagous trophozoites in dysenteric stool), antigen detection or PCR (to separate it from E. dispar), and serology + imaging for a liver abscess.** Trophozoites are seen in fresh, warm dysenteric specimens; formed stool shows cysts.',
    '**Treatment needs TWO drugs: a tissue amoebicide (METRONIDAZOLE) for invasive disease PLUS a LUMINAL agent (paromomycin/diloxanide) to eradicate intestinal cysts and prevent relapse/transmission.** Prevention is sanitation and safe food/water. It is the key pathogenic amoeba to distinguish from the free-living amoebae ([[free-living-nonpathogenic-amoebae]]).',
  ],

  mechanism: {
    title: 'Cyst (faecal-oral) → trophozoite invades colon (flask ulcer) → portal spread (liver abscess)',
    steps: [
      { id: 's1', label: 'Ingest 4-nucleate CYST (faecal–oral) → trophozoites in colon', emphasis: 'key' },
      { id: 's2', label: 'Invasion → FLASK-SHAPED ulcers → amoebic dysentery (bloody)', emphasis: 'key' },
      { id: 's3', label: 'Trophozoites with INGESTED RBCs = invasive E. histolytica', emphasis: 'key' },
      { id: 's4', label: 'Portal spread → RIGHT-lobe liver abscess ("anchovy paste"); may rupture', emphasis: 'danger' },
      { id: 's5', label: 'Treat: metronidazole + luminal agent (paromomycin); sanitation prevents' },
    ],
  },

  examFindings: [
    { sign: 'Bloody, mucoid diarrhoea (dysentery) with flask-shaped ulcers', mechanism: 'Invasive intestinal amoebiasis', significance: 'key' },
    { sign: 'Trophozoites containing ingested red blood cells', mechanism: 'Invasive E. histolytica (erythrophagocytosis)', significance: 'key' },
    { sign: 'Right-lobe liver abscess with "anchovy-paste" contents', mechanism: 'Amoebic liver abscess (portal spread)', significance: 'key' },
    { sign: 'Cysts in formed stool', mechanism: 'The infective/transmission stage', significance: 'supportive' },
    { sign: 'Identical morphology but no disease', mechanism: 'Non-pathogenic Entamoeba dispar (needs antigen/PCR to distinguish)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The infective stage of E. histolytica', meaning: 'The mature (4-nucleate) cyst (faecal–oral)' },
    { clue: 'The microscopic clue to invasive amoebiasis', meaning: 'Trophozoites with ingested red blood cells' },
    { clue: 'The commonest extra-intestinal amoebiasis', meaning: 'Amoebic liver abscess (right lobe)' },
    { clue: 'The two-part treatment of invasive amoebiasis', meaning: 'Metronidazole + a luminal agent (paromomycin)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Amoebiasis is a major cause of dysentery and liver abscess, and it must be treated with BOTH a tissue amoebicide and a luminal agent (or cysts persist). It contrasts with the environmental free-living amoebae ([[free-living-nonpathogenic-amoebae]]); the cyst/trophozoite biology comes from [[protozoa-classification-biology]], and it is one of the invasive causes of the dysentery differential (vs bacterial — [[inflammatory-invasive-enteritis]]).' },
  ],

  mnemonics: [
    { hook: 'Amoebiasis = "flask ulcers + anchovy-paste liver abscess"', expansion: ['Cyst infects, trophozoite invades', 'RBC-ingesting trophozoite = invasive'] },
    { hook: 'Treat "tissue + lumen": Metronidazole + paromomycin', expansion: ['Metronidazole = invasive disease', 'Luminal agent clears cysts (prevents relapse)'] },
  ],

  traps: [
    {
      questionCategory: 'Completing treatment of amoebiasis',
      wrongInstinct: 'Metronidazole alone fully cures intestinal amoebiasis',
      rightAnswer: 'Metronidazole treats the INVASIVE (tissue) trophozoites but does not reliably clear intraluminal CYSTS — a LUMINAL agent (paromomycin/diloxanide) must be added to eradicate cysts and prevent relapse and ongoing transmission',
      why: 'Cysts in the gut lumen survive tissue amoebicides; failing to add a luminal agent leaves the patient a cyst-passer who can relapse and infect others.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A traveller returns with several weeks of right upper quadrant pain and fever; imaging shows a right-lobe liver abscess with "anchovy-paste" contents and serology is positive. The organism is:',
      options: [
        { id: 'a', text: 'Echinococcus granulosus' },
        { id: 'b', text: 'Entamoeba histolytica' },
        { id: 'c', text: 'Giardia lamblia' },
        { id: 'd', text: 'Naegleria fowleri' },
      ],
      answerId: 'b',
      explanation: 'Amoebic liver abscess from Entamoeba histolytica classically affects the right lobe with "anchovy-paste" material and is diagnosed serologically; trophozoites reach the liver via the portal vein. Treatment is metronidazole plus a luminal agent.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which microscopic finding indicates invasive Entamoeba histolytica rather than the non-pathogenic E. dispar?',
      options: [
        { id: 'a', text: 'Trophozoites containing ingested red blood cells' },
        { id: 'b', text: 'The presence of cysts' },
        { id: 'c', text: 'A single nucleus' },
        { id: 'd', text: 'Flagella' },
      ],
      answerId: 'a',
      explanation: 'Erythrophagocytosis — trophozoites with ingested red blood cells — is a marker of invasive E. histolytica; the two species are otherwise morphologically identical and are distinguished by antigen detection or PCR.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Entamoeba histolytica & amoebiasis', svg: ENTAMOEBA_AMOEBIASIS, caption: 'Faecal–oral cyst → invasive trophozoite → flask ulcers and anchovy-paste liver abscess; treatment.' },
  ],
};

export default entamoebaHistolyticaAmoebiasis;
