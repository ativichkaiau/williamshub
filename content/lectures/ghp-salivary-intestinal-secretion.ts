import type { Lecture } from '../../lib/types';

export const ghpSalivaryIntestinalSecretion: Lecture = {
  id: 'ghp-salivary-intestinal-secretion',
  title: 'Salivary & Intestinal Secretion',
  system: 'gi',
  source: 'Ch 65 — Secretory Functions of the Alimentary Tract',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 65 Alimentary Secretion' },
    { kind: 'mechanism', label: 'Two-stage saliva · crypt Cl⁻ secretion' },
    { kind: 'exam', label: 'Flow rate · cholera and ORS' },
  ],

  highYield: [
    '**Saliva is made twice: an isotonic fluid, then a duct that strips the salt out of it.** The **acinus** delivers a **plasma-like isotonic** primary secretion carrying amylase, mucins, lysozyme, lactoferrin and secretory IgA. The **striated duct** then **reabsorbs Na⁺ and Cl⁻ while secreting K⁺ and HCO₃⁻**, and — this is the pivotal detail — it is **relatively impermeable to water**. Solute leaves without water following, so final saliva is **hypotonic**, **K⁺-rich at about seven times plasma** and **Na⁺-poor**. Output is roughly **1–1.5 L a day**, resting pH about **6.4**, climbing toward **8** when stimulated.',
    '**Flow rate rewrites the composition, and the exception to the pattern is the examinable bit.** At **high flow** the primary fluid spends less time in the duct, so **Na⁺ and Cl⁻ rise toward plasma** and saliva approaches isotonic; at **low flow** the duct has all the time it needs and saliva is at its most **hypotonic and K⁺-rich**. **Bicarbonate breaks the rule**: it is **actively secreted in proportion to stimulation**, so it **rises with flow** rather than falling — which is exactly why stimulated saliva is the alkaline saliva that neutralises reflux. **Aldosterone** exaggerates the ductal exchange, dropping Na⁺ further and raising K⁺, so the gland behaves like a miniature sweat gland.',
    '**Saliva is the one alimentary secretion that is essentially all nerve and almost no hormone, and both autonomic limbs stimulate it.** The **parasympathetic** supply dominates: **superior salivatory nucleus** via the **facial nerve (VII)** to submandibular and sublingual glands, **inferior salivatory nucleus** via the **glossopharyngeal (IX)** to the parotid, producing **copious watery** secretion sustained by **VIP- and kallikrein-mediated vasodilation**. **Sympathetic** stimulation is not the usual antagonist here — it also secretes, but only a **small, thick, protein-rich** volume. Two consequences follow immediately: there is **no hormonal reserve** to compensate for lost cholinergic drive, so an **antimuscarinic drug causes dry mouth at once**; and the dry mouth of fear is vasoconstriction, not inhibition of the gland.',
    '**Most of saliva’s value has nothing to do with digestion.** **Amylase (ptyalin)** is the expendable part — it is denatured below pH 4 in the stomach and pancreatic amylase repeats the job anyway. What is not expendable: **lubrication** for the bolus and for speech; **bicarbonate buffering** that neutralises refluxed acid and holds plaque above the pH at which enamel demineralises; **antibacterial** action from **lysozyme, lactoferrin, thiocyanate and secretory IgA** plus sheer mechanical washing; and **calcium and phosphate held supersaturated** by **statherin and proline-rich proteins** so that enamel can remineralise. That is why xerostomia — Sjögren syndrome, head and neck irradiation, anticholinergics — presents as **rampant caries, candidiasis and dysphagia**, and never as failure to digest starch.',
    '**The duodenum is defended by alkaline mucus, and the crypts supply a watery vehicle rather than enzymes.** **Brunner glands** sit in the **submucosa of the first few centimetres**, between pylorus and ampulla, and pour out **alkaline mucus** in response to irritation, vagal input and **secretin** — yet they are **inhibited by sympathetic stimulation**, which contributes to the duodenal bulb being the commonest site of peptic ulceration. Downstream, the **crypts of Lieberkühn** secrete about **1800 mL a day** of nearly pure **isotonic extracellular fluid at pH 7.5–8.0**, reabsorbed almost immediately by the villi so that it functions as a circulating solvent for absorption. Note what the small intestine does **not** secrete: the **disaccharidases and peptidases are brush-border membrane proteins**, not luminal secretions, and **mucus from goblet cells** lines the whole tract, an amphoteric, adherent gel that buffers and shields.',
    '**Crypt secretion is chloride-driven — and cholera hijacks precisely that machinery.** Basolateral **NKCC1** loads the crypt cell with Cl⁻ using the Na⁺ gradient set by the **Na⁺/K⁺-ATPase**; apical **CFTR** releases it into the lumen; **Na⁺ follows paracellularly down the electrical gradient and water follows osmotically**, giving isotonic fluid. **Cholera toxin** binds **GM1 ganglioside**, and its A subunit **ADP-ribosylates the Gs alpha subunit**, locking **adenylyl cyclase permanently on**. The resulting **cAMP holds CFTR open** and simultaneously **switches off villous NHE3 sodium absorption**, so secretion runs unopposed: up to **10–20 L a day** of **rice-water stool**, hypovolaemic shock, hypokalaemia and a **normal-anion-gap metabolic acidosis** from bicarbonate loss. The therapeutic gift sits in the same physiology — **SGLT1 is not cAMP-sensitive**, so **glucose plus sodium still drags water in**. That single fact is **oral rehydration solution**.',
  ],

  mechanism: {
    title: 'Crypt chloride secretion, and how cholera toxin locks it open',
    steps: [
      { id: 's1', label: 'Basolateral Na⁺/K⁺-ATPase sets up the inward Na⁺ gradient' },
      { id: 's2', label: 'NKCC1 uses that gradient to load the crypt cell with Cl⁻', emphasis: 'key' },
      { id: 's3', label: 'Apical CFTR releases Cl⁻ into the crypt lumen', emphasis: 'key' },
      { id: 's4', label: 'Na⁺ follows paracellularly, water follows osmotically — isotonic secretion', emphasis: 'key' },
      { id: 's5', label: 'Cholera toxin ADP-ribosylates Gs alpha → adenylyl cyclase locked on → cAMP', emphasis: 'danger' },
      { id: 's6', label: 'CFTR held open and NHE3 absorption switched off → litres of secretory stool', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Saliva is markedly hypotonic at rest but approaches plasma tonicity at high flow', mechanism: 'Ductal NaCl reabsorption is time-dependent, so rapid transit leaves less opportunity to strip salt', significance: 'key' },
    { sign: 'Salivary bicarbonate rises with stimulation while sodium handling implies the opposite trend', mechanism: 'Bicarbonate is actively secreted in proportion to stimulus rather than reabsorbed by the duct', significance: 'supportive' },
    { sign: 'An antimuscarinic drug produces dry mouth almost immediately', mechanism: 'Salivary flow is essentially all parasympathetic, with no hormonal control to take up the slack', significance: 'key' },
    { sign: 'Rampant dental caries and oral candidiasis in Sjögren syndrome, with normal starch digestion', mechanism: 'Loss of buffering, antibacterial proteins and mineral supersaturation; salivary amylase is redundant', significance: 'key' },
    { sign: 'Rice-water stool that continues unabated through a 48-hour fast, with a low stool osmotic gap', mechanism: 'Toxin-driven chloride secretion is independent of luminal nutrients, unlike osmotic diarrhoea', significance: 'key' },
    { sign: 'The duodenal bulb is the commonest site of peptic ulceration', mechanism: 'It receives the most acidic chyme, and its Brunner gland alkaline mucus defence is switched off by sympathetic drive', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Duct segment responsible for making saliva hypotonic', meaning: 'The striated duct — absorbs NaCl, secretes K⁺ and HCO₃⁻, and is poorly permeable to water' },
    { clue: 'Nucleus and cranial nerve supplying the parotid gland', meaning: 'Inferior salivatory nucleus by way of the glossopharyngeal nerve' },
    { clue: 'Submucosal glands unique to the first few centimetres of duodenum', meaning: 'Brunner glands — alkaline mucus, inhibited by sympathetic stimulation' },
    { clue: 'Source of the roughly 1800 mL of isotonic intestinal fluid secreted daily', meaning: 'The crypts of Lieberkühn, at pH 7.5 to 8.0, reabsorbed by the villi as a vehicle for absorption' },
    { clue: 'Apical channel carrying the chloride that drives intestinal secretion', meaning: 'CFTR — held open by cAMP, absent in cystic fibrosis' },
    { clue: 'The transporter that keeps working in cholera and makes oral rehydration possible', meaning: 'SGLT1, the sodium-glucose cotransporter, which is not cAMP-regulated' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cholera is the purest demonstration in physiology that **a therapy can be derived rather than discovered**. Every cAMP-sensitive transporter is disabled, so nothing that works through absorption of sodium alone will help — but **SGLT1 is untouched**, and coupling **glucose to sodium** restores absorption while the toxin is still bound. Get the ratio wrong and the solution becomes osmotic, so **ORS is roughly equimolar glucose and sodium**. The same logic runs backwards for constipation: agonists of guanylate cyclase C raise **cGMP** and open CFTR deliberately. Clinical and microbiological layer: [[secretory-toxigenic-enteritis]].' },
    { logic: 'Two secretions, two lessons', detail: '**Saliva:** acini set the volume, ducts set the composition, and because the duct leaks solute but not water the result is **hypotonic**. Its indispensable jobs are **protective, not digestive**. **Intestine:** crypts secrete, villi absorb, and normal life is the small difference between two large opposing flows — which is why anything that tips it produces litres, not millilitres. Parallel coverage: [[salivary-esophageal-mucus-secretion]] and [[intestinal-fluid-secretion]]. The acid this mucus defends against is generated in [[ghp-gastric-secretion]].' },
  ],

  mnemonics: [
    { hook: 'Acini make it isotonic, Ducts make it dilute', expansion: ['Duct takes Na⁺ and Cl⁻ out, puts K⁺ and HCO₃⁻ in, and will not let water follow', 'Fast flow means less duct time, so composition drifts back toward plasma', 'Bicarbonate is the exception — it climbs with stimulation'] },
    { hook: 'Cholera: Gs stuck ON, CFTR stuck OPEN, NHE3 switched OFF, SGLT1 still WORKS', expansion: ['The first three explain the 10 to 20 litres of rice-water stool', 'The fourth explains why a spoon of sugar and salt in water saves the patient'] },
  ],

  traps: [
    {
      questionCategory: 'Which salivary function is actually lost in xerostomia',
      wrongInstinct: 'Starch digestion fails because salivary amylase is missing',
      rightAnswer: 'Protection fails — buffering, antibacterial proteins, lubrication and enamel remineralisation — while starch digestion is unaffected',
      why: 'Pancreatic amylase fully duplicates ptyalin, so the digestive role is redundant and the protective role is not.',
    },
    {
      questionCategory: 'How salivary composition changes with flow rate',
      wrongInstinct: 'At high flow every ion simply moves toward its plasma concentration',
      rightAnswer: 'Na⁺ and Cl⁻ rise toward plasma because there is less time to reabsorb them, but HCO₃⁻ rises because it is actively secreted in response to the stimulus',
      why: 'One curve reflects a failure to reabsorb and the other reflects active secretion, so they rise for opposite reasons.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with cholera is losing several litres of watery stool daily. An oral solution of sodium chloride and glucose substantially reduces net fluid loss even though the toxin is still active. The reason is:',
      options: [
        { id: 'a', text: 'Glucose is osmotically active and draws sodium out of the enterocyte into the lumen' },
        { id: 'b', text: 'SGLT1 couples sodium to glucose absorption and is not regulated by cAMP, so water follows the absorbed solute' },
        { id: 'c', text: 'Glucose inhibits adenylyl cyclase and reverses the ADP-ribosylation of the Gs alpha subunit' },
        { id: 'd', text: 'Sodium chloride restores the NHE3 exchanger that the toxin has inhibited' },
      ],
      answerId: 'b',
      explanation: 'Cholera toxin raises cAMP, which holds CFTR open and shuts down electroneutral NaCl absorption through NHE3. The sodium-glucose cotransporter SGLT1 is not cAMP-sensitive and keeps working, so supplying both substrates restores an absorptive route and water follows osmotically. The toxin is irreversibly bound and glucose does not undo it; nor is NHE3 restored by giving more salt.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Saliva collected at a very low unstimulated flow rate is compared with saliva collected at maximal stimulation. Compared with the stimulated sample, the unstimulated sample will be:',
      options: [
        { id: 'a', text: 'More hypotonic, with lower Na⁺ and Cl⁻ and relatively higher K⁺' },
        { id: 'b', text: 'Closer to plasma tonicity, because acinar fluid is unmodified at low flow' },
        { id: 'c', text: 'Higher in bicarbonate, because bicarbonate secretion falls with stimulation' },
        { id: 'd', text: 'Hypertonic, because the duct secretes solute into a static column of fluid' },
      ],
      answerId: 'a',
      explanation: 'The primary acinar fluid is isotonic, and it is the striated duct that removes NaCl while adding K⁺ without allowing water to follow. Slow flow gives the duct maximum contact time, so the saliva is at its most hypotonic and K⁺-rich; fast flow leaves less time and the composition drifts back toward plasma. Bicarbonate is the exception and rises with stimulation, and the duct never makes saliva hypertonic because it removes more solute than water.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A traveller has profuse watery diarrhoea that persists unchanged through 48 hours of complete fasting. Stool osmolality is 290 mOsm/kg with sodium 130 and potassium 15 mmol/L, giving a low osmotic gap. This pattern indicates:',
      options: [
        { id: 'a', text: 'An osmotic diarrhoea from an unabsorbed luminal solute' },
        { id: 'b', text: 'A secretory diarrhoea from active crypt chloride secretion' },
        { id: 'c', text: 'An inflammatory diarrhoea with mucosal exudation' },
        { id: 'd', text: 'Accelerated transit with normal absorptive function' },
      ],
      answerId: 'b',
      explanation: 'Two features define secretory diarrhoea: it continues during fasting, because the driving force is the crypt chloride pump rather than any ingested solute, and the stool osmolality is accounted for almost entirely by measured electrolytes, so the osmotic gap is low. Osmotic diarrhoea stops with fasting and leaves a wide gap from the unmeasured solute, while inflammatory diarrhoea is characterised by blood and leukocytes rather than by this electrolyte profile.',
      tests: 'exam',
    },
  ],
};

export default ghpSalivaryIntestinalSecretion;
