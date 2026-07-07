import type { Lecture } from '../../lib/types';

export const hepatocellularCarcinomaLiverTumors: Lecture = {
  id: 'hepatocellular-carcinoma-liver-tumors',
  title: 'Hepatocellular Carcinoma & Liver Tumours',
  system: 'gi',
  source: 'L3 — Pathology of the Liver',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L3 Liver Pathology' },
    { kind: 'disease', label: 'Hepatocellular carcinoma' },
    { kind: 'exam', label: 'AFP / cirrhosis' },
  ],

  highYield: [
    '**Hepatocellular carcinoma (HCC) is the main primary liver cancer and usually arises on a background of CIRRHOSIS.** Major risk factors: **chronic hepatitis B and C, cirrhosis of any cause (alcohol, NASH), and AFLATOXIN (Aspergillus toxin on stored grains/nuts → TP53 mutation)**. HBV can cause HCC even without cirrhosis (it integrates into the genome).',
    '**HCC presents with worsening of known liver disease, RUQ pain, weight loss, a rising alpha-fetoprotein (AFP), and sometimes sudden decompensation or haemoperitoneum (tumour rupture).** It has a propensity for **vascular (portal vein) invasion**. Surveillance of cirrhotic patients (ultrasound ± AFP) aims to catch it early enough for curative treatment.',
    '**The metastatic liver is FAR more common than any primary tumour — the liver is a leading site of metastasis (from colon, breast, lung, pancreas, stomach), producing multiple nodules.** So multiple liver masses in a patient without cirrhosis are more likely metastases than primary HCC.',
    'Other primary tumours: cholangiocarcinoma (bile-duct epithelium — linked to primary sclerosing cholangitis and, in this region, to the liver fluke Opisthorchis viverrini); hepatic adenoma (young women on oral contraceptives — risk of bleeding); and haemangioma (the commonest benign liver tumour — do NOT biopsy).',
    '**The high-yield framework: cirrhosis + rising AFP + a mass → HCC; multiple masses without cirrhosis → metastases; a fluke/PSC history + bile-duct mass → cholangiocarcinoma.** Prevention (HBV vaccination, treating HCV, avoiding aflatoxin, cooking fish) targets the leading causes of primary liver cancer worldwide.',
  ],

  mechanism: {
    title: 'Cirrhosis/HBV/HCV/aflatoxin → HCC (AFP, vascular invasion); mets commonest overall',
    steps: [
      { id: 's1', label: 'HCC usually on cirrhosis; HBV/HCV, alcohol/NASH, aflatoxin (TP53)', emphasis: 'key' },
      { id: 's2', label: 'HBV integrates → HCC even without cirrhosis', emphasis: 'key' },
      { id: 's3', label: 'HCC: rising AFP, RUQ pain, portal-vein (vascular) invasion', emphasis: 'key' },
      { id: 's4', label: 'Metastases >> primary; multiple nodules without cirrhosis = mets' },
      { id: 's5', label: 'Cholangiocarcinoma (PSC, liver fluke); adenoma (OCP); haemangioma (benign)' },
    ],
  },

  examFindings: [
    { sign: 'Rising AFP + new mass in a cirrhotic liver', mechanism: 'Hepatocellular carcinoma', significance: 'key' },
    { sign: 'Portal vein tumour thrombus', mechanism: 'HCC vascular invasion', significance: 'key' },
    { sign: 'Multiple liver nodules without cirrhosis', mechanism: 'Metastatic disease (commonest liver malignancy)', significance: 'key' },
    { sign: 'Bile-duct cancer with a liver-fluke or PSC history', mechanism: 'Cholangiocarcinoma', significance: 'supportive' },
    { sign: 'Liver adenoma in a young woman on the oral contraceptive pill', mechanism: 'Hepatic adenoma (risk of rupture/bleeding)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tumour marker raised in hepatocellular carcinoma', meaning: 'Alpha-fetoprotein (AFP)' },
    { clue: 'The fungal toxin causing HCC via TP53 mutation', meaning: 'Aflatoxin (Aspergillus)' },
    { clue: 'The commonest malignant tumour found in the liver', meaning: 'Metastases (secondary tumours)' },
    { clue: 'The bile-duct cancer linked to the liver fluke and PSC', meaning: 'Cholangiocarcinoma' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'HCC prevention is powerful — HBV vaccination, treating HCV ([[hepatitis-b-c-d-chronic]]), and, regionally, cooking freshwater fish to prevent the fluke-driven cholangiocarcinoma of [[liver-flukes-cholangiocarcinoma]]. Surveillance of the cirrhosis in [[cirrhosis-fatty-liver-portal-hypertension]] catches HCC early. Multiple masses should prompt a search for a primary (e.g. [[colorectal-polyps-carcinoma]]).' },
  ],

  mnemonics: [
    { hook: 'HCC risk = "cirrhosis + HBV/HCV + Aflatoxin" (AFP marker, vascular invasion)', expansion: ['HBV → HCC even without cirrhosis', 'Aflatoxin → TP53'] },
    { hook: 'Liver masses: "cirrhosis+AFP = HCC; no cirrhosis+multiple = mets; fluke/PSC = cholangio"', expansion: ['Haemangioma = commonest benign (don\'t biopsy)', 'Adenoma = OCP, young women'] },
  ],

  traps: [
    {
      questionCategory: 'Primary vs secondary liver tumours',
      wrongInstinct: 'A patient with multiple liver masses most likely has primary hepatocellular carcinoma',
      rightAnswer: 'METASTASES are far more common than primary liver cancer; multiple masses in a NON-cirrhotic liver are usually secondaries (colon, breast, lung, pancreas), whereas HCC typically arises as a mass on a CIRRHOTIC liver with a rising AFP',
      why: 'Assuming multiple masses are HCC misdirects the work-up; the presence or absence of cirrhosis and the number of lesions point toward primary versus metastatic disease and change which primary to hunt for.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with long-standing hepatitis C cirrhosis develops a new hepatic mass with a rising serum alpha-fetoprotein and portal vein invasion. The diagnosis is:',
      options: [
        { id: 'a', text: 'Hepatic haemangioma' },
        { id: 'b', text: 'Hepatocellular carcinoma' },
        { id: 'c', text: 'Hepatic adenoma' },
        { id: 'd', text: 'Metastatic colon cancer' },
      ],
      answerId: 'b',
      explanation: 'HCC classically arises on cirrhosis (here HCV), with a rising AFP and a tendency for vascular (portal vein) invasion. Haemangioma and adenoma are benign and AFP-negative.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Chronic hepatitis B can cause hepatocellular carcinoma even in the absence of cirrhosis because the virus:',
      options: [
        { id: 'a', text: 'Only replicates in cirrhotic livers' },
        { id: 'b', text: 'Integrates into the host genome, promoting oncogenesis directly' },
        { id: 'c', text: 'Produces alpha-fetoprotein' },
        { id: 'd', text: 'Causes iron overload' },
      ],
      answerId: 'b',
      explanation: 'Unlike most causes of HCC that act through cirrhosis, HBV DNA can integrate into the host genome and act as a direct oncogenic driver, so HBV-related HCC can occur without established cirrhosis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hepatocellularCarcinomaLiverTumors;
