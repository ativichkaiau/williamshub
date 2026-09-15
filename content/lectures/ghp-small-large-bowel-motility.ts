import type { Lecture } from '../../lib/types';

export const ghpSmallLargeBowelMotility: Lecture = {
  id: 'ghp-small-large-bowel-motility',
  title: 'Small & Large Bowel Motility and Defecation',
  system: 'gi',
  source: 'Ch 64 — Propulsion & Mixing of Food in the Alimentary Tract',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Gastrointestinal' },
    { kind: 'lecture', label: 'Ch 64 Propulsion & Mixing' },
    { kind: 'mechanism', label: 'Segmentation · MMC · mass movement' },
    { kind: 'exam', label: 'Defecation reflex · cord injury' },
  ],

  highYield: [
    '**Segmentation mixes; peristalsis propels — and the small bowel spends most of a meal mixing.** Segmentation is a set of **stationary concentric constrictions** that chop the chyme, relax, and reform in the gaps, renewing contact with the brush border rather than moving anything far. Their rate is simply the local **basic electrical rhythm**: about **12 per minute** in the duodenum falling to about **8 per minute** in the terminal ileum, and that **descending frequency gradient** is itself what gives a slow net drift toward the colon. Segmentation is entirely **myenteric** — block the plexus and it stops dead.',
    '**Peristalsis obeys the law of the gut, and it is deliberately feeble.** Distension triggers **contraction above** the bolus (acetylcholine and substance P) and **relaxation below** it (nitric oxide and VIP), so the ring moves anally at **0.5–2 cm/s**. But each wave dies out after only **3–5 cm**, so net transit from pylorus to ileocaecal valve takes **3–5 hours**. Slowness is the point: absorption needs contact time. Emptying is speeded by the **gastroenteric reflex**, gastrin, CCK and serotonin, and slowed by secretin, glucagon and sympathetic activity.',
    '**Between meals the gut runs a housekeeper: the migrating motor complex.** Every **80–120 minutes** of fasting a four-phase cycle sweeps from stomach to terminal ileum — quiescence, irregular activity, then **phase III**, a **5–10 minute burst of intense regular peristalsis at the maximum slow-wave frequency**, then decline. **Motilin** from duodenal M cells rises cyclically and triggers phase III. Its job is to clear residue, shed cells, indigestible solids larger than 2 mm and, critically, **bacteria** — which is why losing the MMC (scleroderma, diabetic autonomic neuropathy, chronic opioids) causes **small intestinal bacterial overgrowth**. Eating abolishes it within minutes. **Erythromycin is a motilin receptor agonist**, which is exactly why it works as a prokinetic.',
    '**The ileocaecal valve is a one-way flap, and the gastroileal reflex is its release.** The valve lips project into the caecum, so **rising caecal pressure presses them shut** — the valve resists **50–60 cm H2O** of back-pressure, keeping the colonic bacterial load out of the ileum. Just proximal, a tonically constricted **ileocaecal sphincter** holds chyme in the ileum for absorption, so only about **1500–2000 mL a day** crosses into the caecum. Caecal distension or irritation (think appendicitis) tightens it further and inhibits ileal peristalsis; conversely food in the stomach fires the **gastroileal reflex**, which relaxes the sphincter and intensifies ileal peristalsis to make room for the incoming meal.',
    '**The colon churns slowly, then empties in a few violent bursts.** **Haustration** is circular muscle contracting together with the three **taeniae coli**, bulging the wall into sacculations that dig into the faecal mass, roll it and expose fresh surface — about **30 seconds to develop and 60 to relax**, with only slow aboral creep. Absorption happens mostly in the proximal **absorbing colon** and storage in the distal **storage colon**, with total transit of **18–48 hours**. Propulsion proper comes from **mass movements**: **1–3 times a day**, usually after breakfast, a ring constricts and **20 cm or more of colon distal to it loses its haustrations and contracts as a single unit**, driving contents en masse. They are triggered by the **gastrocolic and duodenocolic reflexes** — by distension of the stomach and duodenum, not by the meal arriving in the colon.',
    '**Defecation is a weak intrinsic reflex made powerful by a sacral loop, with one voluntary veto.** A mass movement loads the rectum; at roughly **25% filling** the urge appears. The **intrinsic reflex** is myenteric alone: distension spreads afferent signals through the plexus, generating peristalsis in the descending colon, sigmoid and rectum, and relaxing the **internal anal sphincter** (smooth muscle, sympathetic tone from **L1–L2**) as the wave approaches — the **rectoanal inhibitory reflex**. On its own it is too feeble to empty the bowel. The **parasympathetic reflex** rescues it: rectal afferents to **S2–S4**, back out in the **pelvic nerves**, greatly intensifying the waves and the sphincter relaxation. Cortex then adds the Valsalva and, decisively, the **external anal sphincter** — striated, **pudendal nerve S2–S4**, voluntary — which either lets go or holds until the rectum accommodates and the urge fades.',
  ],

  mechanism: {
    title: 'Segmentation → peristalsis → MMC → ileocaecal gate → mass movement → defecation',
    steps: [
      { id: 's1', label: 'Fed state: segmentation at 12/min in duodenum falling to 8/min in ileum mixes and renews brush-border contact', emphasis: 'key' },
      { id: 's2', label: 'Law of the gut: contraction above (ACh, substance P), relaxation below (NO, VIP) moves the bolus anally', emphasis: 'key' },
      { id: 's3', label: 'Fasting: motilin fires phase III of the MMC every 90 minutes to sweep out residue and bacteria', emphasis: 'key' },
      { id: 's4', label: 'Gastroileal reflex relaxes the ileocaecal sphincter; the valve lips block reflux from the caecum' },
      { id: 's5', label: 'Colon: haustral churning absorbs water, and the gastrocolic reflex triggers mass movements 1 to 3 times daily', emphasis: 'key' },
      { id: 's6', label: 'Rectal filling: intrinsic myenteric reflex amplified by the S2 to S4 loop; internal sphincter relaxes, external sphincter decides', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Bloating, flatulence, loose stool and low B12 with a high folate in long-standing diabetes or scleroderma', mechanism: 'Loss of the migrating motor complex removes the housekeeping sweep, so colonic-type bacteria colonise the small bowel and consume B12 while producing folate', significance: 'key' },
    { sign: 'Failure to pass meconium in the first 48 hours, then explosive stool after the examining finger is withdrawn', mechanism: 'Hirschsprung disease: an aganglionic distal segment has no inhibitory neurons, so it never relaxes and the rectoanal inhibitory reflex is absent', significance: 'key' },
    { sign: 'A reliable urge to defecate 15 to 30 minutes after breakfast', mechanism: 'The gastrocolic reflex, fired by gastric distension, triggers a mass movement in the distal colon', significance: 'supportive' },
    { sign: 'Right iliac fossa tenderness accompanied by ileus and absent bowel sounds', mechanism: 'Caecal irritation intensifies the ileocaecal sphincter and reflexly inhibits ileal peristalsis, holding chyme upstream', significance: 'supportive' },
    { sign: 'After a mid-thoracic cord injury: no sensation of filling, a tight anal sphincter, but reflex evacuation reliably triggered by a suppository or digital stimulation', mechanism: 'The sacral reflex arc is intact below the lesion; only cortical sensation and voluntary control are lost', significance: 'key' },
    { sign: 'High-volume watery stool that continues unchanged through a 48-hour fast, with a low stool osmotic gap', mechanism: 'Secretory diarrhoea: luminal fluid delivery exceeds the roughly 5 L per day the colon can reclaim, and it is not driven by ingested solute', significance: 'key' },
  ],

  investigations: [
    { clue: 'Segmentation frequency in the duodenum compared with the terminal ileum', meaning: 'About 12 per minute falling to about 8 per minute — the gradient itself produces net aboral movement' },
    { clue: 'Hormone that triggers phase III of the migrating motor complex', meaning: 'Motilin from duodenal M cells; erythromycin is a motilin receptor agonist, hence its use as a prokinetic' },
    { clue: 'What abolishes the migrating motor complex within minutes', meaning: 'Eating — the fed pattern of segmentation replaces it until the next fasting period' },
    { clue: 'Back-pressure the ileocaecal valve can withstand from the caecal side', meaning: 'About 50 to 60 cm H2O, which is what keeps colonic bacteria out of the ileum' },
    { clue: 'Anorectal manometry: the internal sphincter fails to relax when the rectal balloon is distended', meaning: 'Absent rectoanal inhibitory reflex — the functional signature of Hirschsprung disease' },
    { clue: 'The two anal sphincters and their nerve supply', meaning: 'Internal: smooth muscle, sympathetic tone from L1 to L2, relaxed reflexly. External: striated, pudendal nerve S2 to S4, voluntary' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every motility pattern in the gut is an answer to a trade-off between **contact time and throughput**. Segmentation buys absorption time, peristalsis is kept weak so the chyme does not outrun the brush border, the MMC only runs when there is nothing to absorb, and the colon converts slow churning into a few **mass movements** so that continence has to be defended just a handful of times a day. The clinical layer is at [[small-intestinal-motility]] and [[colonic-motility-defecation]]; the neural wiring that carries all of it is at [[enteric-autonomic-reflex-control]], and the step upstream is [[ghp-gastric-motility-emptying]].' },
    { logic: 'Constipation and diarrhoea are the same equation solved in opposite directions', detail: 'Stool water is what survives the sum **(secretion plus intake) minus absorption**, and absorption needs both a working mucosa and enough **contact time**. **Constipation** is therefore either too much time (slow transit lets the colon desiccate the stool) or a failure of evacuation (pelvic floor dyssynergia, or an aganglionic segment that never relaxes in **Hirschsprung disease**). **Diarrhoea** is either too much fluid delivered — **secretory**, as when cholera toxin locks adenylate cyclase on and drives chloride secretion past the roughly 5 L per day the colon can reclaim, or **osmotic**, where unabsorbed solute holds water — or too little time, when rapid transit denies the mucosa its contact. Read any stool complaint by asking which term of the equation moved, because that determines the treatment far more than the symptom does.' },
  ],

  mnemonics: [
    { hook: 'Segmentation Mixes, Peristalsis Pushes, and between meals Motilin Sweeps', expansion: ['Fed pattern: stationary chopping rings at 12 per minute, dropping to 8 in the ileum', 'Fasting pattern: phase III of the MMC every 80 to 120 minutes, the housekeeper that prevents bacterial overgrowth'] },
    { hook: 'S2, 3, 4 keeps the faeces off the floor', expansion: ['Pelvic parasympathetic nerves from S2 to S4 amplify the weak intrinsic defecation reflex', 'The pudendal nerve, from the same segments, holds the voluntary external sphincter — lose the sacral cord and you lose both'] },
  ],

  traps: [
    {
      questionCategory: 'What actually triggers the post-breakfast urge to defecate',
      wrongInstinct: 'The meal has reached the colon and is pushing the previous contents onward',
      rightAnswer: 'The gastrocolic reflex — gastric and duodenal distension signals the colon neurally and hormonally, long before any of that meal arrives',
      why: 'Colonic transit takes 18 to 48 hours, so the meal triggering the mass movement cannot possibly be the meal being moved.',
    },
    {
      questionCategory: 'What a spinal cord lesion does to defecation',
      wrongInstinct: 'A high cord injury abolishes defecation altogether because the pathway to the brain is cut',
      rightAnswer: 'A lesion above the sacral cord leaves the S2 to S4 arc intact, so reflex defecation persists and can be triggered digitally — it is voluntary control and sensation that are lost',
      why: 'Only a conus or cauda equina lesion destroys the arc itself, giving a flaccid areflexic sphincter with soiling and impaction rather than reflex evacuation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with long-standing scleroderma has bloating, steatorrhoea and a low serum B12 with a raised folate. Breath testing confirms bacterial overgrowth. The motility abnormality responsible is:',
      options: [
        { id: 'a', text: 'Loss of the migrating motor complex during fasting' },
        { id: 'b', text: 'Excessive segmentation in the proximal jejunum' },
        { id: 'c', text: 'An incompetent ileocaecal valve allowing colonic reflux' },
        { id: 'd', text: 'Accelerated small bowel peristalsis shortening contact time' },
      ],
      answerId: 'a',
      explanation: 'Phase III of the MMC is the interdigestive housekeeping sweep that clears residue and bacteria distally every 80 to 120 minutes. When it is lost, organisms are no longer flushed out and colonise the small bowel, where they consume B12 and synthesise folate — producing exactly this paired abnormality. An incompetent valve can contribute in other settings but is not the scleroderma mechanism, and segmentation and rapid transit do not by themselves permit colonisation.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In a neonate with abdominal distension and delayed passage of meconium, rectal balloon distension fails to relax the internal anal sphincter. This indicates:',
      options: [
        { id: 'a', text: 'Immaturity of the pudendal nerve supply to the external sphincter' },
        { id: 'b', text: 'Absence of myenteric ganglion cells in the distal segment, abolishing the rectoanal inhibitory reflex' },
        { id: 'c', text: 'Excess sympathetic outflow from L1 and L2 overriding the reflex' },
        { id: 'd', text: 'A sacral cord lesion interrupting the S2 to S4 parasympathetic loop' },
      ],
      answerId: 'b',
      explanation: 'Relaxation of the internal sphincter on rectal distension is an intrinsic myenteric event, so it depends on inhibitory ganglion cells within the wall. In Hirschsprung disease neural crest migration fails and the distal segment is aganglionic, so no inhibitory signal exists, the segment stays tonically contracted, and manometry shows an absent rectoanal inhibitory reflex with dilatation proximally. The external sphincter is voluntary and irrelevant to this test, and the reflex is intrinsic rather than dependent on the sacral loop.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Two years after a complete T6 spinal cord injury, a patient uses a suppository each morning and reliably evacuates, although sensing nothing. This is possible because:',
      options: [
        { id: 'a', text: 'The intrinsic myenteric reflex alone is sufficient to empty the rectum' },
        { id: 'b', text: 'The S2 to S4 reflex arc lies below the lesion and remains functional' },
        { id: 'c', text: 'The external anal sphincter has become flaccid and offers no resistance' },
        { id: 'd', text: 'Colonic mass movements are no longer under any neural control' },
      ],
      answerId: 'b',
      explanation: 'A lesion above the sacral cord separates the brain from an intact sacral arc. Rectal afferents still reach S2 to S4 and the pelvic parasympathetic efferents still return, so the powerful reflex component survives and can be provoked chemically or digitally; what is lost is conscious sensation and voluntary control. The intrinsic myenteric reflex alone is too weak to empty the bowel, and the external sphincter in a suprasacral injury is spastic rather than flaccid — flaccidity is the hallmark of a conus or cauda equina lesion.',
      tests: 'exam',
    },
  ],
};

export default ghpSmallLargeBowelMotility;
