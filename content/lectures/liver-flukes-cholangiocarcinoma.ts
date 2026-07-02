import type { Lecture } from '../../lib/types';
import { LIVER_FLUKE_CCA } from '../../lib/figures';

export const liverFlukesCholangiocarcinoma: Lecture = {
  id: 'liver-flukes-cholangiocarcinoma',
  title: 'Liver Flukes & Cholangiocarcinoma',
  system: 'gi',
  source: 'L17 — GI Flukes & Tapeworms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L17 Flukes & Tapeworms' },
    { kind: 'disease', label: 'Opisthorchis' },
    { kind: 'exam', label: 'Cholangiocarcinoma' },
  ],

  highYield: [
    '**Liver flukes are trematodes that live in the bile ducts and cause chronic biliary disease — and, critically here, CHOLANGIOCARCINOMA.** The regionally dominant one is **Opisthorchis viverrini (the Southeast Asian liver fluke), hyperendemic in Northeast Thailand and the Mekong basin**, acquired by eating **raw/undercooked freshwater cyprinid fish (e.g. "koi pla")**.',
    '**Life cycle: eggs in faeces → snail → freshwater fish (metacercariae) → humans eat undercooked fish → adult flukes mature in the intrahepatic bile ducts.** Light infection is often asymptomatic; heavier infection causes **RUQ discomfort, hepatomegaly, cholangitis, biliary obstruction and gallstones.** Diagnosis is by finding eggs on stool microscopy.',
    '**Chronic infection drives periductal inflammation and fibrosis → CHOLANGIOCARCINOMA (bile-duct adenocarcinoma) — Opisthorchis is a WHO group 1 carcinogen and a leading cause of cholangiocarcinoma in this region.** This link (fluke → chronic biliary inflammation → cancer) is the single highest-yield point and a major local public-health problem.',
    '**Clonorchis sinensis (the Chinese/oriental liver fluke) is biologically analogous (raw freshwater fish → bile ducts → cholangiocarcinoma). Fasciola hepatica (the sheep liver fluke) is acquired from aquatic plants (watercress) and also lives in the bile ducts.** All are treated with **PRAZIQUANTEL** (Fasciola with triclabendazole).',
    '**The prevention message is simple and powerful: COOK the fish.** A dietary history of raw freshwater fish in an endemic patient with biliary symptoms, hepatomegaly or a bile-duct mass should trigger stool examination for fluke eggs — and cholangiocarcinoma must be considered. Intestinal flukes and tapeworms are covered in [[intestinal-flukes-tapeworms]].',
  ],

  mechanism: {
    title: 'Raw fish → bile-duct flukes → chronic inflammation → cholangiocarcinoma',
    steps: [
      { id: 's1', label: 'Opisthorchis viverrini: raw freshwater fish (NE Thailand/Mekong)', emphasis: 'key' },
      { id: 's2', label: 'Adults live in intrahepatic bile ducts; eggs in stool', emphasis: 'key' },
      { id: 's3', label: 'Chronic biliary inflammation/fibrosis → CHOLANGIOCARCINOMA', emphasis: 'danger' },
      { id: 's4', label: 'Clonorchis (analogous); Fasciola (watercress) — bile ducts too' },
      { id: 's5', label: 'Treat praziquantel (Fasciola: triclabendazole); prevent by cooking fish', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'RUQ discomfort + hepatomegaly with a raw-freshwater-fish diet', mechanism: 'Opisthorchis viverrini liver-fluke infection', significance: 'key' },
    { sign: 'Cholangiocarcinoma in an endemic (NE Thailand) patient', mechanism: 'Chronic Opisthorchis infection (group 1 carcinogen)', significance: 'key' },
    { sign: 'Operculated fluke eggs on stool microscopy', mechanism: 'Liver fluke (Opisthorchis/Clonorchis)', significance: 'key' },
    { sign: 'Recurrent cholangitis and bile-duct stones', mechanism: 'Chronic biliary fluke infestation', significance: 'supportive' },
    { sign: 'Fasciola infection after eating watercress', mechanism: 'Sheep liver fluke (aquatic plants)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The Southeast Asian liver fluke linked to cholangiocarcinoma', meaning: 'Opisthorchis viverrini' },
    { clue: 'The food source of Opisthorchis/Clonorchis', meaning: 'Raw/undercooked freshwater fish' },
    { clue: 'The cancer caused by chronic liver-fluke infection', meaning: 'Cholangiocarcinoma (bile-duct adenocarcinoma)' },
    { clue: 'The treatment for liver flukes', meaning: 'Praziquantel (Fasciola: triclabendazole)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Opisthorchis is a leading, preventable cause of cholangiocarcinoma ([[hepatocellular-carcinoma-liver-tumors]]) in this region — cooking freshwater fish prevents it. Chronic infection causes the biliary obstruction/cholangitis that overlaps hepatobiliary pathology. Praziquantel treats the flukes; intestinal flukes and tapeworms are in [[intestinal-flukes-tapeworms]]. Stool egg microscopy makes the diagnosis.' },
  ],

  mnemonics: [
    { hook: 'Opisthorchis = "raw fish → bile ducts → Cholangiocarcinoma" (cook the fish!)', expansion: ['NE Thailand/Mekong endemic', 'WHO group 1 carcinogen', 'Praziquantel'] },
    { hook: 'Liver flukes "live in bile": Opisthorchis/Clonorchis (fish), Fasciola (watercress)', expansion: ['Eggs in stool', 'Cholangitis, obstruction, cancer'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of cholangiocarcinoma in endemic areas',
      wrongInstinct: 'Cholangiocarcinoma is essentially always sporadic with no identifiable cause',
      rightAnswer: 'In endemic regions (e.g. Northeast Thailand), chronic Opisthorchis viverrini liver-fluke infection from eating raw freshwater fish is a MAJOR, PREVENTABLE cause of cholangiocarcinoma (a WHO group 1 carcinogen)',
      why: 'Missing the fluke link overlooks both a diagnostic clue (dietary/egg findings) and a powerful prevention message (cooking fish, deworming) that can reduce a regionally devastating cancer.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In Northeast Thailand, chronic infection with which parasite is a leading, preventable cause of cholangiocarcinoma?',
      options: [
        { id: 'a', text: 'Ascaris lumbricoides' },
        { id: 'b', text: 'Opisthorchis viverrini (liver fluke)' },
        { id: 'c', text: 'Enterobius vermicularis' },
        { id: 'd', text: 'Taenia saginata' },
      ],
      answerId: 'b',
      explanation: 'Opisthorchis viverrini, acquired by eating raw freshwater fish, lives in the bile ducts; chronic infection causes periductal inflammation and fibrosis that predispose to cholangiocarcinoma — a WHO group 1 carcinogen and a major regional problem.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The definitive way to prevent Opisthorchis (and Clonorchis) liver-fluke infection is to:',
      options: [
        { id: 'a', text: 'Wear shoes to avoid skin penetration' },
        { id: 'b', text: 'Thoroughly cook freshwater fish before eating' },
        { id: 'c', text: 'Boil drinking water only' },
        { id: 'd', text: 'Avoid contact with soil' },
      ],
      answerId: 'b',
      explanation: 'Humans acquire these liver flukes by eating raw or undercooked freshwater fish containing metacercariae; thorough cooking of the fish interrupts transmission and prevents both the infection and its cancer risk.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Liver fluke → cholangiocarcinoma', svg: LIVER_FLUKE_CCA, caption: 'Opisthorchis life cycle (snail → fish → human bile ducts) and its progression to cholangiocarcinoma.' },
  ],
};

export default liverFlukesCholangiocarcinoma;
