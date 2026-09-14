import type { Lecture } from '../../lib/types';

export const ghpEntericNervousSystem: Lecture = {
  id: 'ghp-enteric-nervous-system',
  title: 'The Enteric Nervous System',
  system: 'gi',
  source: 'Ch 62 — General Principles of Gastrointestinal Function',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Gastrointestinal' },
    { kind: 'lecture', label: 'Ch 62 Enteric Nervous System' },
    { kind: 'mechanism', label: 'Myenteric motility · submucosal secretion' },
    { kind: 'exam', label: 'VIP and NO · three reflex levels · Hirschsprung' },
  ],

  highYield: [
    '**The gut carries its own brain — roughly 100 million neurons, comparable with the entire spinal cord — and it works with every extrinsic nerve cut.** The enteric nervous system runs continuously in the wall from oesophagus to anus and contains its own **sensory neurons, interneurons and motor neurons**. An isolated segment of bowel still senses a bolus, contracts above it, relaxes below it and propels it onward. Extrinsic autonomic nerves **modulate** that machinery; they do not create it, and they are not required for it. That framing is what the examiners are testing when they call the gut semi-autonomous.',
    '**Two plexuses, two jobs, and confusing them is the commonest error in the topic.** The **myenteric (Auerbach) plexus** lies **between the longitudinal and circular muscle layers** as a mostly linear chain and governs **motility**: it raises **tone**, increases the **intensity** and slightly the **rate** of rhythmic contraction, and speeds the **conduction velocity of the excitatory wave**, which is what makes peristalsis run faster. The **submucosal (Meissner) plexus** lies **in the submucosa** and is the local housekeeping circuit: **glandular secretion, local absorption, local infolding of the mucosa and local blood flow**. Position gives the answer away — **between the muscles means movement, under the mucosa means secretion**.',
    '**The myenteric plexus is not purely excitatory, and the inhibitory half is the interesting one.** Excitatory enteric motor neurons release **acetylcholine** (with substance P as a co-transmitter); the inhibitory ones release **vasoactive intestinal polypeptide (VIP) and nitric oxide**. Those two are what permit **receptive relaxation ahead of an advancing bolus** and the timed opening of the **pyloric and ileocaecal sphincters**. The law of the gut follows directly: **acetylcholine contracts behind the bolus while VIP and nitric oxide relax in front of it**, and peristalsis is simply those two limbs travelling together.',
    '**Both extrinsic autonomic limbs act on the enteric neurons, not on muscle — and they push in opposite directions.** **Parasympathetic** is split: the **vagus** supplies oesophagus, stomach, pancreas and the **proximal half of the large intestine** (with a lesser supply to small bowel), while the **pelvic nerves from S2–S4** supply the **distal colon, sigmoid, rectum and anus** and carry the defecation reflexes. Its postganglionic neurons **are** the enteric neurons, so stimulation works by turning the whole enteric system up. **Sympathetic** fibres from **T5 to L2** relay in the **prevertebral coeliac and mesenteric ganglia** and release **noradrenaline**, which inhibits gut smooth muscle directly — **the muscularis mucosae, which it excites, is the exception** — but inhibits far more powerfully by **switching off the enteric neurons themselves**. **Strong sympathetic discharge can halt transit altogether**, which is exactly the ileus of peritonitis, trauma and shock.',
    '**Gastrointestinal reflexes work at three levels, and naming the level usually names the answer.** **Level 1 — entirely within the gut wall**: local control of secretion, peristalsis, mixing contractions and local inhibition, with no neuron leaving the bowel. **Level 2 — gut to prevertebral ganglion and straight back to gut**, bypassing the CNS completely: the **gastrocolic** reflex (stomach filling drives colonic evacuation), the **enterogastric** reflex (small bowel and colon inhibit gastric motility and secretion) and the **colonoileal** reflex (a loaded colon slows ileal emptying). **Level 3 — gut to cord or brainstem and back**: **vagovagal** control of gastric motility and secretion, **pain reflexes that inhibit the entire tract at once**, and the **defecation reflexes** through the sacral cord.',
    '**Hirschsprung disease is the enteric nervous system experiment run on a human, and the anatomy is a trap.** Neural crest cells migrate **craniocaudally** down the gut, so arrested migration leaves a distal segment with **no myenteric and no submucosal ganglion cells**; it therefore **always includes the internal anal sphincter** and extends proximally for a variable distance. Lacking inhibitory VIP and nitric oxide neurons, that segment **can never relax and sits tonically contracted** — the **narrow segment is the obstruction**. The trap: **the dilated megacolon proximal to it is the NORMALLY innervated bowel**, merely obstructed, so **the biopsy must come from the narrow distal segment**. Clinically, **failure to pass meconium within 48 hours**, then distension and constipation; **rectal suction biopsy shows absent ganglion cells with hypertrophied nerve trunks**, and **anorectal manometry shows loss of the rectoanal inhibitory reflex**.',
  ],

  mechanism: {
    title: 'Sensor in the wall → enteric circuit → excitation behind, VIP and NO in front → autonomic modulation',
    steps: [
      { id: 's1', label: 'Mucosal and stretch endings detect the bolus, its chemistry and any irritation' },
      { id: 's2', label: 'The signal enters the enteric circuit — 100 million neurons, no CNS required', emphasis: 'key' },
      { id: 's3', label: 'Myenteric plexus sets motility; submucosal plexus sets secretion and local blood flow', emphasis: 'key' },
      { id: 's4', label: 'Excitatory limb: acetylcholine contracts the segment above the bolus' },
      { id: 's5', label: 'Inhibitory limb: VIP and nitric oxide relax the segment below it', emphasis: 'key' },
      { id: 's6', label: 'Extrinsic overlay: vagal and pelvic input amplifies, sympathetic noradrenaline brakes', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'An isolated loop of bowel still propels a bolus after every extrinsic nerve is divided', mechanism: 'The enteric system contains its own sensory, inter- and motor neurons', significance: 'key' },
    { sign: 'Peristalsis: contraction above the bolus with simultaneous relaxation below it', mechanism: 'Cholinergic excitation orally paired with VIP and nitric oxide inhibition aborally', significance: 'key' },
    { sign: 'The gut falls silent after peritonitis, laparotomy or major trauma', mechanism: 'Intense sympathetic discharge inhibits the enteric neurons themselves, not merely the muscle', significance: 'key' },
    { sign: 'Newborn who has not passed meconium by 48 hours, with a tight empty rectum and abdominal distension', mechanism: 'Aganglionic distal segment cannot relax and obstructs; stool loads the normal bowel above it', significance: 'key' },
    { sign: 'Urge to defaecate shortly after a meal', mechanism: 'Gastrocolic reflex relayed through the prevertebral ganglia without entering the CNS', significance: 'supportive' },
    { sign: 'Severe abdominal pain of any cause shuts down motility throughout the tract', mechanism: 'Level three reflex through cord and brainstem producing generalised inhibition', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Plexus lying between the longitudinal and circular muscle layers', meaning: 'Myenteric (Auerbach) plexus — the motility circuit' },
    { clue: 'Plexus lying within the submucosa', meaning: 'Submucosal (Meissner) plexus — secretion, local absorption and local blood flow' },
    { clue: 'The two principal inhibitory transmitters of enteric motor neurons', meaning: 'Vasoactive intestinal polypeptide and nitric oxide' },
    { clue: 'Ganglia where sympathetic fibres to the gut relay, and where gut-to-gut reflexes turn around', meaning: 'The prevertebral coeliac and mesenteric ganglia' },
    { clue: 'Segment to biopsy when Hirschsprung disease is suspected', meaning: 'The narrow contracted distal segment, never the dilated proximal bowel' },
    { clue: 'Approximate neuron count of the enteric nervous system', meaning: 'About 100 million, comparable with the whole spinal cord' },
  ],

  treatment: [
    { logic: 'Why it matters clinically', detail: 'Almost every motility disorder is a lesion somewhere in this three-layer scheme. **Loss of inhibitory VIP and nitric oxide neurons** produces a segment that cannot relax — Hirschsprung disease distally, achalasia at the lower oesophageal sphincter. **Excess sympathetic drive** produces the postoperative and peritonitic ileus. **Loss of the parasympathetic amplifier** produces the sluggish, poorly emptying gut of autonomic neuropathy. The extrinsic reflex layer in more detail: [[enteric-autonomic-reflex-control]]. The neural crest migration that Hirschsprung disease interrupts: [[hindgut-anorectal-development]].' },
    { logic: 'The one-line separation to memorise', detail: '**Myenteric (Auerbach)** — between the muscle layers, controls **motility**: tone, contraction strength, slight rate increase, conduction velocity, and both excitatory and inhibitory motor output. **Submucosal (Meissner)** — in the submucosa, controls **secretion, local absorption and local blood flow**. Then the overlay: **parasympathetic excites through the enteric neurons, sympathetic inhibits through them**, and the **muscularis mucosae is the one muscle noradrenaline excites**. How that output shows up electrically: [[ghp-gi-smooth-muscle-electrical]]. How it produces the defecation sequence: [[colonic-motility-defecation]].' },
  ],

  mnemonics: [
    { hook: 'MyEnteric moves, SubMucosal secretes', expansion: ['Auerbach sits between the muscle layers, so it moves things along', 'Meissner sits under the mucosa, so it secretes and sets local blood flow'] },
    { hook: 'Push behind, VIP and NO in front', expansion: ['Acetylcholine contracts the segment above the bolus', 'VIP and nitric oxide relax the segment below it — lose those neurons and you get Hirschsprung disease'] },
  ],

  traps: [
    {
      questionCategory: 'Which plexus is at fault',
      wrongInstinct: 'Reduced intestinal secretion must be a myenteric problem, because the myenteric plexus is the important one',
      rightAnswer: 'Secretion, local absorption and local blood flow belong to the submucosal (Meissner) plexus; the myenteric plexus handles motility',
      why: 'Position decides function — between the muscle layers means movement, under the mucosa means secretion.',
    },
    {
      questionCategory: 'Which bowel is diseased in Hirschsprung disease',
      wrongInstinct: 'The hugely dilated megacolon is obviously the abnormal bowel, so biopsy and resect that',
      rightAnswer: 'The narrow contracted distal segment is the aganglionic one; the dilated bowel above it is normally innervated and simply obstructed',
      why: 'With no inhibitory VIP and nitric oxide neurons the segment can never relax, so the narrow part is the lesion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A length of small intestine is removed, denervated of all extrinsic connections and perfused in an organ bath. A bolus placed in the lumen is still propelled aborally. The best explanation is that:',
      options: [
        { id: 'a', text: 'Residual vagal postganglionic fibres within the wall continue to fire' },
        { id: 'b', text: 'The enteric nervous system contains complete sensory, interneuronal and motor circuits within the gut wall' },
        { id: 'c', text: 'Slow waves alone are sufficient to generate directional propulsion' },
        { id: 'd', text: 'Circulating gut hormones substitute for the missing neural control' },
      ],
      answerId: 'b',
      explanation: 'The enteric nervous system is a self-contained reflex apparatus of roughly 100 million neurons: mucosal and stretch sensors, interneurons and both excitatory and inhibitory motor neurons, all inside the wall. Extrinsic nerves modulate it but are not needed for propulsion. Slow waves set timing but carry no directional information, and an isolated perfused preparation has no source of circulating hormones.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A neonate has not passed meconium at 60 hours. Contrast study shows a narrow distal rectosigmoid with markedly dilated bowel proximally. The correct site for diagnostic biopsy and the expected finding are:',
      options: [
        { id: 'a', text: 'The dilated proximal segment, showing absent ganglion cells' },
        { id: 'b', text: 'The narrow distal segment, showing absent ganglion cells with hypertrophied nerve trunks' },
        { id: 'c', text: 'The transition zone, showing a dense inflammatory infiltrate' },
        { id: 'd', text: 'The dilated proximal segment, showing hypertrophy of the muscularis propria' },
      ],
      answerId: 'b',
      explanation: 'Neural crest cells migrate craniocaudally, so the aganglionic segment is always the distal one and always includes the internal anal sphincter. Lacking inhibitory VIP and nitric oxide neurons it stays tonically contracted and obstructs, while the dilated bowel above is normally innervated and merely working against that block. Suction biopsy of the narrow segment shows absent ganglion cells with hypertrophied, acetylcholinesterase-rich nerve trunks.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Twenty-four hours after laparotomy for peritonitis, a patient has a silent, distended abdomen with no bowel sounds. The dominant mechanism is:',
      options: [
        { id: 'a', text: 'Sympathetic noradrenaline inhibiting the enteric neurons and the smooth muscle' },
        { id: 'b', text: 'Destruction of the interstitial cells of Cajal by the inflammatory process' },
        { id: 'c', text: 'Excess release of acetylcholine causing sustained tetanic contraction' },
        { id: 'd', text: 'Failure of vagal afferent transmission to the brainstem' },
      ],
      answerId: 'a',
      explanation: 'Peritoneal irritation and surgery evoke intense sympathetic outflow through the prevertebral ganglia. Noradrenaline inhibits gut smooth muscle directly, but its far stronger action is to silence the enteric neurons themselves, and strong discharge can halt transit completely. Loss of pacemaker cells causes chronic pseudo-obstruction rather than an acute postoperative ileus, and excess acetylcholine would increase, not abolish, activity.',
      tests: 'mechanism',
    },
  ],
};

export default ghpEntericNervousSystem;
