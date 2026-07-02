import type { Lecture } from '../../lib/types';
import { APICOMPLEXA_FIG } from '../../lib/figures';

export const intestinalCoccidiaCryptosporidium: Lecture = {
  id: 'intestinal-coccidia-cryptosporidium',
  title: 'Intestinal Coccidia (Cryptosporidium & Cyclospora)',
  system: 'parasitology',
  source: 'L9 — Apicomplexa',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L9 Apicomplexa' },
    { kind: 'disease', label: 'Cryptosporidiosis' },
    { kind: 'exam', label: 'Acid-fast oocysts' },
  ],

  highYield: [
    '**The intestinal coccidia are apicomplexan protozoa (Cryptosporidium, Cyclospora, Cystoisospora) that cause WATERY, non-bloody diarrhoea by infecting small-bowel enterocytes.** They are transmitted FAECAL–ORAL by resistant OOCYSTS in water/food, and their oocysts are typically ACID-FAST on stool staining — a key diagnostic clue.',
    '**Cryptosporidium is the most important: it causes self-limited watery diarrhoea in the immunocompetent, but CHRONIC, severe, life-threatening diarrhoea in the IMMUNOCOMPROMISED (especially advanced HIV/AIDS with low CD4).** Its oocysts RESIST CHLORINE, so it causes waterborne outbreaks (including from treated recreational/drinking water) — the classic "swimming pool/water-park" outbreak organism.',
    '**Cyclospora cayetanensis is linked to imported FRESH PRODUCE (berries, herbs, salad) and causes prolonged, relapsing watery diarrhoea; Cystoisospora (Isospora) belli causes diarrhoea especially in HIV.** Cyclospora and Cystoisospora respond to co-trimoxazole; Cryptosporidium has no reliably effective drug (nitazoxanide helps the immunocompetent), so the key is immune reconstitution (antiretrovirals) in HIV.',
    '**Diagnosis is by finding OOCYSTS in stool with a MODIFIED ACID-FAST stain (Cryptosporidium, Cyclospora, Cystoisospora all stain acid-fast) — routine O&P can miss them; Cryptosporidium antigen/PCR is also used.** Cyclospora oocysts autofluoresce under UV. The shared clue is "acid-fast oocysts + watery diarrhoea."',
    '**High-yield: watery diarrhoea + acid-fast oocysts → intestinal coccidia; think CRYPTOSPORIDIUM (water, chlorine-resistant) especially with HIV/immunosuppression, CYCLOSPORA with imported produce.** They are the apicomplexan intestinal counterparts to Toxoplasma and the blood apicomplexa ([[toxoplasmosis]], [[blood-apicomplexa-malaria-babesia]]).',
  ],

  mechanism: {
    title: 'Faecal-oral acid-fast oocysts → small-bowel enterocytes → watery diarrhoea (severe if immunocompromised)',
    steps: [
      { id: 's1', label: 'Coccidia (Cryptosporidium/Cyclospora/Cystoisospora): faecal–oral OOCYSTS', emphasis: 'key' },
      { id: 's2', label: 'Watery, non-bloody diarrhoea (small-bowel enterocytes)', emphasis: 'key' },
      { id: 's3', label: 'Cryptosporidium: chlorine-resistant (water outbreaks); severe/chronic in HIV', emphasis: 'danger' },
      { id: 's4', label: 'Cyclospora = imported produce; Cystoisospora = HIV (both → co-trimoxazole)' },
      { id: 's5', label: 'Dx: ACID-FAST oocysts in stool (± antigen/PCR); Crypto has no reliable drug', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Chronic severe watery diarrhoea in advanced HIV', mechanism: 'Cryptosporidium (immunocompromised)', significance: 'key' },
    { sign: 'Waterborne diarrhoea outbreak (chlorine-resistant)', mechanism: 'Cryptosporidium oocysts', significance: 'key' },
    { sign: 'Acid-fast oocysts in stool', mechanism: 'Intestinal coccidia (Crypto/Cyclospora/Cystoisospora)', significance: 'key' },
    { sign: 'Prolonged diarrhoea linked to imported berries/herbs', mechanism: 'Cyclospora cayetanensis', significance: 'supportive' },
    { sign: 'Diarrhoea responding to co-trimoxazole', mechanism: 'Cyclospora/Cystoisospora (not Cryptosporidium)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The chlorine-resistant coccidian causing water outbreaks', meaning: 'Cryptosporidium' },
    { clue: 'The stool stain that reveals coccidian oocysts', meaning: 'Modified acid-fast stain' },
    { clue: 'The coccidian linked to imported fresh produce', meaning: 'Cyclospora cayetanensis' },
    { clue: 'The coccidia treatable with co-trimoxazole', meaning: 'Cyclospora and Cystoisospora (not Cryptosporidium)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Intestinal coccidia are a leading cause of chronic diarrhoea in HIV/AIDS (Cryptosporidium especially) and of waterborne/produce outbreaks; the acid-fast oocyst is the diagnostic key (routine O&P misses them). Cryptosporidium lacks a reliable drug (immune reconstitution matters), while Cyclospora/Cystoisospora respond to co-trimoxazole. They are apicomplexa alongside [[toxoplasmosis]] and [[blood-apicomplexa-malaria-babesia]] ([[protozoa-classification-biology]]).' },
  ],

  mnemonics: [
    { hook: 'Coccidia = "watery diarrhoea + ACID-FAST oocysts"', expansion: ['Cryptosporidium: water, chlorine-resistant, HIV', 'Cyclospora: imported produce'] },
    { hook: 'Treatment: "Cyclospora/Cystoisospora → co-trimoxazole; Cryptosporidium → immune reconstitution"', expansion: ['Nitazoxanide (immunocompetent Crypto)', 'Antiretrovirals in HIV'] },
  ],

  traps: [
    {
      questionCategory: 'Detecting intestinal coccidia',
      wrongInstinct: 'A routine stool ova-and-parasite examination reliably detects Cryptosporidium',
      rightAnswer: 'Coccidian OOCYSTS are easily missed on routine O&P — they require a MODIFIED ACID-FAST stain (or specific antigen/PCR for Cryptosporidium) to be seen; you must specifically request these tests when coccidia are suspected',
      why: 'Because the oocysts are small and not highlighted by standard stains, relying on routine O&P gives false negatives; suspecting coccidia (watery diarrhoea, HIV, water/produce exposure) prompts the correct acid-fast stain.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with advanced HIV (low CD4) has chronic, profuse watery diarrhoea; stool shows acid-fast oocysts. The most likely organism is:',
      options: [
        { id: 'a', text: 'Cryptosporidium' },
        { id: 'b', text: 'Giardia lamblia' },
        { id: 'c', text: 'Entamoeba histolytica' },
        { id: 'd', text: 'Shigella' },
      ],
      answerId: 'a',
      explanation: 'Cryptosporidium causes chronic, severe watery diarrhoea in the immunocompromised (advanced HIV); its acid-fast oocysts are seen on modified acid-fast staining. It resists chlorine and there is no reliably effective drug, so immune reconstitution is key.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The intestinal coccidia (Cryptosporidium, Cyclospora, Cystoisospora) are best detected in stool using:',
      options: [
        { id: 'a', text: 'A modified acid-fast stain' },
        { id: 'b', text: 'A Gram stain' },
        { id: 'c', text: 'India ink' },
        { id: 'd', text: 'Blood film' },
      ],
      answerId: 'a',
      explanation: 'The oocysts of intestinal coccidia are acid-fast and are demonstrated with a modified acid-fast (Kinyoun/Ziehl–Neelsen) stain; routine ova-and-parasite microscopy often misses them.',
      tests: 'investigation',
    },
  ],

  figures: [
    { title: 'Apicomplexa', svg: APICOMPLEXA_FIG, caption: 'Intestinal coccidia (acid-fast oocysts), Toxoplasma (cat cycle) and blood apicomplexa (Plasmodium, Babesia).' },
  ],
};

export default intestinalCoccidiaCryptosporidium;
