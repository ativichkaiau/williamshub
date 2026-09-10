import type { Lecture } from '../../lib/types';

export const ghpVisceralPainThermalSensation: Lecture = {
  id: 'ghp-visceral-pain-thermal-sensation',
  title: 'Visceral Pain and Thermal Sensation',
  system: 'neuro',
  source: 'Ch 48 — Somatic Sensations II — Pain, Headache & Thermal Sensations',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'Ch 48 Pain & Thermal Sensation' },
    { kind: 'mechanism', label: 'True visceral vs parietal pain' },
    { kind: 'exam', label: 'Colic · 45 °C · thermal adaptation' },
  ],

  highYield: [
    '**Viscera have only nociceptive innervation, and very little of it — that sparseness is the whole reason visceral pain behaves so differently from skin pain.** Because the receptors are few and widely scattered, **a large area of an organ must be involved before anything is felt at all**, and what is felt is **dull, diffuse and badly localised**. A stimulus that would be excruciating on skin can be entirely silent in the gut, and the corollary is dangerous: **a small, focal, early visceral lesion may be completely painless**.',
    '**The adequate stimuli are different, and this is the single most examined fact in the chapter.** Cutting, burning, crushing and tearing — the classics for skin — **provoke no pain in the gut**; a surgeon can divide bowel in a conscious patient without complaint. What viscera do report is **ischaemia, chemical irritation, spasm of a hollow organ and overdistension**. **Ischaemia** works through **acid metabolites, bradykinin and proteolytic enzymes**; **chemical irritation** is the acid and enzyme spill of a **perforated ulcer**; and **overdistension** hurts twice, both by stretch and by **collapsing the vessels in the wall and creating ischaemia**.',
    '**Spasm gives pain a rhythm, and the rhythm tells you where you are.** Cramping colic **waxes and wanes with the peristaltic cycle of the organ**, so the interval is a clue: gut colic recurs roughly **every few minutes**, and the frequency is **higher in proximal small bowel than in distal colon**. The mechanism is the same vicious circle as in skeletal muscle — **contraction distorts the endings and simultaneously throttles the blood supply**, so each cramp is part mechanical and part ischaemic.',
    '**One organ, two innervations, two utterly different pains.** **True visceral pain** travels with **autonomic (mainly sympathetic) afferents**, and is **dull, midline or vaguely central, poorly localised, and referred to the dermatome of the embryological segment** — often with nausea, sweating and restlessness. **Parietal pain** arises when inflammation reaches the **parietal peritoneum, pleura or pericardium**, travels in **spinal nerves**, and is **sharp, steady and localised directly over the lesion**, worsened by movement or coughing. **Appendicitis is the set-piece**: a dull periumbilical ache (**T10, true visceral**) that hours later becomes sharp right iliac fossa pain (**parietal**) — and that transition, not the shift of any anatomy, is what the story is describing.',
    '**Temperature is judged by three receptor types, and the brain reads a ratio rather than a number.** **Cold receptors** respond from roughly **10 to 35 °C** with a peak near **24 °C**; **warmth receptors** from about **30 to 45 °C**, peaking near **45 °C** and then falling; both are **free nerve endings**, and **cold spots outnumber warm ones by something like three to ten times**. Cold travels mainly on **Aδ fibres**, warmth on **C fibres**. Across the broad overlap in the middle both populations are firing, and it is the **ratio of the two discharge rates** that the brain converts into a perceived temperature.',
    '**Clinical anchor — both ends of the scale hurt, and the middle of the scale disappears.** **Below about 10–15 °C and above about 45 °C the thermal receptors are no longer the ones reporting: cold-pain and heat-pain nociceptors take over**, which is why ice water and a hot plate produce the same burning quality. The 45 °C figure is not arbitrary — it is **the temperature at which tissue begins to be damaged**. Thermal receptors also **adapt strongly**: they fire hard at the moment of change, signalling the **rate** of change, then settle within seconds to minutes. Adaptation is near-complete **between about 20 and 40 °C**, so a cool room becomes comfortable and a hot bath becomes tolerable — but **outside that window the sensation never fades**, because outside that window it is a warning.',
  ],

  mechanism: {
    title: 'Two routes out of a sick organ: first a vague central ache, then a sharp localised one',
    steps: [
      { id: 's1', label: 'Distension, ischaemia, spasm or chemical irritation — cutting and burning do nothing', emphasis: 'key' },
      { id: 's2', label: 'Sparse visceral C fibres fire; a wide area must be involved before pain is perceived' },
      { id: 's3', label: 'True visceral pain runs with sympathetic afferents to the cord', emphasis: 'key' },
      { id: 's4', label: 'It converges on second-order neurons of the embryological segment → dull, central, referred to a dermatome', emphasis: 'key' },
      { id: 's5', label: 'Inflammation spreads outward to reach parietal peritoneum, pleura or pericardium' },
      { id: 's6', label: 'Parietal afferents in spinal nerves fire → sharp pain localised over the organ, worse on movement — peritonitis has begun', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Conscious patient tolerates the bowel being cut but is distressed by traction on the mesentery', mechanism: 'Cutting is not an adequate visceral stimulus; traction stretches and ischaemises, which is', significance: 'key' },
    { sign: 'Dull periumbilical ache for some hours, then sharp right iliac fossa pain worse on coughing', mechanism: 'True visceral pain referred to T10, followed by parietal pain once the inflamed appendix touches parietal peritoneum', significance: 'key' },
    { sign: 'Colicky pain that climbs to a peak and subsides every few minutes', mechanism: 'Spasm of a hollow viscus timed to its own peristaltic rhythm, each cramp part mechanical and part ischaemic', significance: 'key' },
    { sign: 'Board-like rigidity, absolute stillness and pain on the slightest movement after a perforated ulcer', mechanism: 'Gastric acid on the parietal peritoneum drives somatic afferents — parietal pain plus reflex guarding', significance: 'key' },
    { sign: 'Water at 10 °C described as burning rather than cold', mechanism: 'Cold receptor discharge is already falling at that temperature; cold-pain endings are now carrying the signal', significance: 'key' },
    { sign: 'A bath feels scalding on entry and comfortable a minute later, yet a 50 °C bath never becomes comfortable', mechanism: 'Thermal adaptation is near-complete only between about 20 and 40 °C; beyond that the pain endings do not adapt', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Adequate stimuli for visceral pain', meaning: 'Ischaemia, chemical irritation, spasm and overdistension — never cutting, burning or crushing' },
    { clue: 'Route and character of true visceral pain', meaning: 'Sympathetic afferents; dull, central, poorly localised, referred to the dermatome of the embryological segment' },
    { clue: 'Route and character of parietal pain', meaning: 'Spinal nerves from parietal peritoneum, pleura or pericardium; sharp and localised directly over the lesion' },
    { clue: 'Fibre types serving cold and warmth', meaning: 'Cold mainly on Aδ fibres, warmth on C fibres; both endings are unencapsulated' },
    { clue: 'How the brain converts receptor firing into a perceived temperature', meaning: 'By the ratio of cold to warmth discharge across their overlapping ranges, not by either rate alone' },
    { clue: 'Temperature at which warmth receptor firing falls away and pain endings take over', meaning: 'About 45 °C — the point at which tissue begins to be damaged' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This is the physiology behind the whole surgical assessment of an acute abdomen. A patient who is restless and cannot get comfortable is usually reporting true visceral colic; a patient lying rigidly still because movement is unbearable has parietal irritation and needs to be taken seriously. The migration of pain, its rhythm, and whether coughing hurts are therefore mechanistic questions rather than descriptive ones — they are worked through clinically in [[fcp1-abdominal-pain-acute-abdomen]]. The peripheral chemistry that makes ischaemic and spasmodic tissue hurt at all is set out in [[ghp-pain-fast-slow-pathways]].' },
    { logic: 'Where it is examined', detail: 'Three questions recur. What stimuli do viscera actually respond to — the answer is never cutting. What distinguishes true visceral from parietal pain — the answer is the route, sympathetic versus spinal nerve, and therefore the localisation. And why do extreme cold and extreme heat feel alike — because at both extremes the thermoreceptors have dropped out and nociceptors have taken over. The convergence rule that puts appendicitis pain at the umbilicus is developed in [[ghp-pain-modulation-analgesia]], and the receptor properties that make a free nerve ending behave this way sit in [[sensory-receptors-transduction]].' },
  ],

  mnemonics: [
    { hook: 'Viscera hurt for DISC reasons: Distension, Ischaemia, Spasm, Chemical — and then True visceral is Vague while Parietal is Pointed', expansion: ['Cutting, burning and crushing are silent', 'Colic keeps time with the peristaltic clock of the organ', 'A wide area must be involved before anything is felt, so early focal disease can be painless', 'True visceral: sympathetic afferents, dull, central, referred, with nausea and sweating', 'Parietal: spinal nerves, sharp, localised over the lesion, worse on movement and coughing'] },
    { hook: 'Temperature is a RATIO, not a reading', expansion: ['Cold about 10–35 °C peaking near 24 °C; warmth about 30–45 °C peaking near 45 °C', 'Below roughly 10 °C and above 45 °C the pain endings take over, so both extremes burn', 'Adaptation is near-complete only between about 20 and 40 °C'] },
  ],

  traps: [
    {
      questionCategory: 'Why appendicitis pain moves',
      wrongInstinct: 'The pain shifts because the inflamed appendix moves, or because infection tracks across to the right iliac fossa',
      rightAnswer: 'The route changes: true visceral pain via sympathetic afferents referred to T10, then parietal pain via somatic nerves once the parietal peritoneum is involved',
      why: 'One organ, two innervations — the sharp localised phase means the peritoneum, not the appendix, has started doing the reporting.',
    },
    {
      questionCategory: 'What extreme cold actually stimulates',
      wrongInstinct: 'Freezing pain is cold receptors firing at their maximum rate',
      rightAnswer: 'Cold receptor discharge is already declining below about 10–15 °C; the burning is carried by cold-pain nociceptors',
      why: 'Cold receptors peak near 24 °C and fade at the extremes, so at both ends of the scale it is the pain endings, not the thermoreceptors, that report the danger.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During an operation under local anaesthesia the surgeon divides a loop of small bowel and the patient reports nothing, but cries out when the mesentery is pulled. Which statement best explains this?',
      options: [
        { id: 'a', text: 'The bowel wall has no sensory innervation of any kind' },
        { id: 'b', text: 'Cutting is not an adequate visceral stimulus, whereas traction produces stretch and ischaemia, which are' },
        { id: 'c', text: 'Local anaesthetic reached the gut wall but not the mesentery' },
        { id: 'd', text: 'Visceral afferents conduct too slowly for a brief stimulus such as cutting to be perceived' },
      ],
      answerId: 'b',
      explanation: 'Viscera are innervated, but only by nociceptors, and their adequate stimuli are ischaemia, chemical irritation, spasm and overdistension. A clean cut damages too few of the sparse endings to be felt. Traction on the mesentery stretches the tissue and compromises its vessels, which is exactly the kind of stimulus visceral afferents do report. Conduction velocity is irrelevant here: slow C fibres transmit the pain of colic perfectly well.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 20-year-old has had a dull ache around the umbilicus for eight hours. It is now a sharp pain in the right iliac fossa, worse when he coughs or when the bed is knocked. What has changed?',
      options: [
        { id: 'a', text: 'The pain has switched from parietal to true visceral as inflammation deepened' },
        { id: 'b', text: 'Referred pain has resolved and the appendix has perforated into the pelvis' },
        { id: 'c', text: 'Inflammation now involves the parietal peritoneum, so somatic afferents in spinal nerves report the pain directly over the lesion' },
        { id: 'd', text: 'The T10 dermatome has shifted with abdominal wall guarding' },
      ],
      answerId: 'c',
      explanation: 'The early ache is true visceral pain, carried by sympathetic afferents and referred to the T10 dermatome around the umbilicus because that is the segment the midgut developed from. Once the inflamed appendix contacts the parietal peritoneum, somatic afferents running in spinal nerves are stimulated and the pain becomes sharp, steady and localised over the appendix, with pain on coughing and movement. It is a change of route, not of position, and it does not require perforation.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A volunteer plunges a hand into water at 8 °C and describes an intense burning pain rather than cold. Which explanation is correct?',
      options: [
        { id: 'a', text: 'Cold receptors are firing at their maximum rate, which the cortex misinterprets as heat' },
        { id: 'b', text: 'Cold receptor discharge is declining at this temperature and cold-pain nociceptors are being stimulated' },
        { id: 'c', text: 'Warmth receptors are paradoxically activated by rapid cooling of the skin' },
        { id: 'd', text: 'Vasoconstriction has raised local tissue temperature above the 45 °C pain threshold' },
      ],
      answerId: 'b',
      explanation: 'Cold receptors respond across roughly 10 to 35 °C with a peak near 24 °C, so at 8 °C their firing is already falling away. What is being stimulated instead is the cold-pain population of free nerve endings. The mirror image happens above 45 °C, where warmth receptor firing declines and heat-pain endings take over. That is why the two extremes of the thermal scale share the same burning quality: at both ends the sensation is being reported by nociceptors rather than by thermoreceptors.',
      tests: 'lecture',
    },
  ],
};

export default ghpVisceralPainThermalSensation;
