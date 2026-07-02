import type { Lecture } from '../../lib/types';

export const intestinalRoundwormsPhasmid: Lecture = {
  id: 'intestinal-roundworms-phasmid',
  title: 'Intestinal Roundworms (Soil-Transmitted Nematodes)',
  system: 'gi',
  source: 'L15 — Intestinal Roundworms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L15 Intestinal Roundworms' },
    { kind: 'disease', label: 'Ascaris / hookworm' },
    { kind: 'exam', label: 'Soil-transmitted helminths' },
  ],

  highYield: [
    '**The soil-transmitted (phasmid) nematodes — Ascaris lumbricoides, hookworms (Necator americanus, Ancylostoma duodenale), Strongyloides stercoralis, and Enterobius vermicularis — are among the commonest human infections, spread by faecal contamination of soil/food.** Several have a **lung-migration (Löffler) phase** before maturing in the gut.',
    '**Ascaris lumbricoides (the large roundworm) is acquired by ingesting eggs; larvae migrate through the lungs (cough, eosinophilia) then mature in the small bowel.** Heavy loads cause **intestinal or biliary obstruction** by a bolus of worms. Diagnosis: eggs in stool; treat with **albendazole/mebendazole.**',
    '**Hookworms penetrate the SKIN (bare feet) → migrate through the lungs → attach in the small intestine and suck blood → chronic IRON-DEFICIENCY ANAEMIA and hypoproteinaemia.** This blood loss is the hallmark. **Strongyloides stercoralis also penetrates skin and can AUTOINFECT** (persisting for decades), causing **hyperinfection/dissemination in the immunosuppressed** — screen/treat before steroids.',
    '**Enterobius vermicularis (pinworm) is the classic cause of PERIANAL ITCH (pruritus ani), especially in children — the female migrates to the anus at night to lay eggs.** Diagnosis is by the **"Scotch-tape" (adhesive tape) test** for perianal eggs, not stool; treat the patient and household.',
    '**The unifying themes: faecal–oral or skin penetration, an eosinophilic lung-migration phase for several, and specific signatures — Ascaris (obstruction), hookworm (iron-deficiency anaemia), Strongyloides (autoinfection/hyperinfection), Enterobius (perianal itch, tape test).** Treatment is usually a benzimidazole (albendazole/mebendazole); Strongyloides needs ivermectin.',
  ],

  mechanism: {
    title: 'Soil/skin entry; lung migration (some); gut maturation with organism-specific harm',
    steps: [
      { id: 's1', label: 'Ascaris: ingest eggs → lung migration → gut; obstruction (bolus/biliary)', emphasis: 'key' },
      { id: 's2', label: 'Hookworm: skin penetration → lungs → gut blood-sucking → iron-def anaemia', emphasis: 'key' },
      { id: 's3', label: 'Strongyloides: skin entry, AUTOINFECTION → hyperinfection if immunosuppressed', emphasis: 'danger' },
      { id: 's4', label: 'Enterobius (pinworm): perianal itch; "Scotch-tape" test', emphasis: 'key' },
      { id: 's5', label: 'Treat: albendazole/mebendazole (Strongyloides → ivermectin)' },
    ],
  },

  examFindings: [
    { sign: 'Intestinal or biliary obstruction by a bolus of worms', mechanism: 'Heavy Ascaris lumbricoides infection', significance: 'key' },
    { sign: 'Chronic iron-deficiency anaemia in an endemic area', mechanism: 'Hookworm intestinal blood loss', significance: 'key' },
    { sign: 'Disseminated larvae + Gram-negative sepsis in an immunosuppressed patient', mechanism: 'Strongyloides hyperinfection (autoinfection)', significance: 'key' },
    { sign: 'Nocturnal perianal itch in a child', mechanism: 'Enterobius vermicularis (pinworm)', significance: 'key' },
    { sign: 'Cough with eosinophilia (Löffler) before GI symptoms', mechanism: 'Larval transpulmonary migration', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The roundworm causing intestinal/biliary obstruction', meaning: 'Ascaris lumbricoides' },
    { clue: 'The roundworm causing iron-deficiency anaemia via blood-sucking', meaning: 'Hookworm (Necator/Ancylostoma)' },
    { clue: 'The nematode that autoinfects and can hyperinfect', meaning: 'Strongyloides stercoralis (treat with ivermectin)' },
    { clue: 'The test for pinworm (Enterobius)', meaning: 'The adhesive "Scotch-tape" perianal test' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Soil-transmitted helminths are treatable (albendazole/mebendazole; ivermectin for Strongyloides) and preventable (sanitation, footwear, deworming). Screen/treat Strongyloides before immunosuppression to prevent fatal hyperinfection. The lung-migration phase overlaps the parasitic lung disease of HRS-2; the aphasmid nematodes (Trichuris, Trichinella) are in [[aphasmid-nematodes]], and flukes/tapeworms in [[liver-flukes-cholangiocarcinoma]].' },
  ],

  mnemonics: [
    { hook: 'Signatures: "Ascaris obstructs, Hookworm bleeds (iron), Strongyloides autoinfects, Enterobius itches"', expansion: ['Hookworm/Strongyloides = skin entry', 'Ascaris = ingest eggs'] },
    { hook: 'Pinworm = "tape test + night itch" (treat the household)', expansion: ['Enterobius vermicularis', 'Eggs on perianal skin, not stool'] },
  ],

  traps: [
    {
      questionCategory: 'Diagnosing pinworm (Enterobius)',
      wrongInstinct: 'Pinworm infection is diagnosed by finding eggs on routine stool microscopy',
      rightAnswer: 'Enterobius (pinworm) is diagnosed by the adhesive "Scotch-tape" test applied to the PERIANAL skin in the morning — the female lays eggs there at night, so they are usually absent from the stool',
      why: 'Because the worm deposits eggs on perianal skin rather than in the faeces, stool exams miss it; the tape test targets the correct site, and treating the whole household prevents reinfection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Chronic iron-deficiency anaemia in a barefoot agricultural worker from an endemic region is most likely caused by which intestinal nematode?',
      options: [
        { id: 'a', text: 'Enterobius vermicularis' },
        { id: 'b', text: 'Hookworm (Necator/Ancylostoma)' },
        { id: 'c', text: 'Ascaris lumbricoides' },
        { id: 'd', text: 'Trichuris trichiura' },
      ],
      answerId: 'b',
      explanation: 'Hookworm larvae penetrate the skin (bare feet), migrate through the lungs and attach to the small-bowel mucosa where they suck blood, causing chronic iron-deficiency anaemia and hypoproteinaemia.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which nematode can autoinfect the host and cause a disseminated hyperinfection syndrome in immunosuppressed patients?',
      options: [
        { id: 'a', text: 'Strongyloides stercoralis' },
        { id: 'b', text: 'Ascaris lumbricoides' },
        { id: 'c', text: 'Enterobius vermicularis' },
        { id: 'd', text: 'Hookworm' },
      ],
      answerId: 'a',
      explanation: 'Strongyloides stercoralis can complete its life cycle within the host (autoinfection), persisting for years; immunosuppression (e.g. steroids) allows massive dissemination — hyperinfection — so it should be screened for and treated (ivermectin) beforehand.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default intestinalRoundwormsPhasmid;
