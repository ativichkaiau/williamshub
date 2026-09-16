import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpHyperemiaCongestionHaemorrhage: Lecture = {
  id: 'rbp-hyperemia-congestion-haemorrhage',
  title: 'Hyperaemia, Congestion & Haemorrhage',
  system: 'pathology',
  source: 'Ch 3 — Hemodynamic Disorders, Thromboembolism, and Shock',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 3 Hemodynamic Disorders, Thromboembolism, and Shock' },
    { kind: 'mechanism', label: 'Active inflow vs passive outflow obstruction' },
    { kind: 'exam', label: 'Nutmeg liver & heart-failure cells' },
  ],

  highYield: [
    '**Hyperaemia and congestion both increase the blood in a tissue, but one is active and the other passive — and the colour tells you which, because colour reads oxygen content directly.** **Hyperaemia** is **arteriolar dilatation** admitting **more oxygenated** blood: the tissue is **bright red (erythematous)**, **warm**, and **blanches briskly**. It is the vascular signature of exercising muscle, blushing, and the first phase of acute inflammation. **Congestion** is **impaired venous outflow** holding **deoxygenated** blood back: the tissue is **blue-red (cyanotic)**, **cool**, and **dusky**. Congestion may be **systemic** (right heart failure raising pressure in every vein) or **local** (deep vein thrombosis, portal hypertension, an obstructed hepatic vein). The distinction is not cosmetic: hyperaemia is a physiological response to demand and needs no treatment, while congestion is an obstruction that must be found and relieved. Hyperaemia is worked alongside the inflammatory vascular events in [[edema-hyperemia-congestion]].',
    '**Congestion and oedema are the same raised pressure acting on two different compartments, which is why they always travel together.** Once venous outflow is impaired, **capillary hydrostatic pressure** rises behind the block. Inside the vessel that produces **engorgement** — the congestion. Across the wall the same pressure drives a **protein-poor transudate** into the interstitium — the oedema. So a congested limb is also a swollen one, and a congested lung is also a wet one. Two consequences follow. Chronically congested tissue is **hypoxic despite containing more blood than normal**, because that blood is already deoxygenated and static. And the raised pressure ruptures small vessels, so **red cells leak out** and are phagocytosed, which is what converts an acute haemodynamic problem into a permanent pigmented, fibrotic one. The Starling derivation sits in [[rbp-edema-haemostasis-thrombosis]].',
    '**In the lung, chronic congestion writes its history in iron.** Acute pulmonary congestion shows **engorged alveolar capillaries**, **septal oedema** and focal **intra-alveolar haemorrhage**. Persist for months, as in **mitral stenosis** or chronic left heart failure, and alveolar macrophages phagocytose the extravasated erythrocytes and store the iron as **haemosiderin**: these are the **heart-failure cells**, **Prussian blue positive** on a Perls stain, coughed up as **rusty brown sputum**. The septa then thicken with fibrosis, and the combination of fibrosis with iron pigment gives the firm brown lung called **brown induration**. The exam nuance is worth holding: haemosiderin-laden macrophages mark **alveolar haemorrhage of any cause** — Goodpasture disease and pulmonary vasculitis produce them too — so the cells date the bleeding but do not name its cause. Iron handling in tissue is developed in [[intracellular-accumulations-calcification]].',
    '**Nutmeg liver is pure anatomy: zone 3 is congested because it is the last to receive blood and the first to run out of oxygen.** The hepatic acinus is perfused from the portal triad outwards, so **zone 3 (centrilobular)** hepatocytes surround the **central vein** and already sit at the **lowest oxygen tension** in the liver. Raise central venous pressure — right heart failure, constrictive pericarditis, tricuspid regurgitation — and pressure transmits back through the hepatic veins to exactly that zone. The cut surface shows **dark red-brown congested centrilobular areas** against **paler, often fatty, periportal zone 1**, resembling a cut nutmeg. Prolonged or severe congestion produces **centrilobular haemorrhagic necrosis** and, if sustained, **centrilobular fibrosis** bridging vein to vein — **cardiac sclerosis**, misleadingly called cardiac cirrhosis. The same zonal logic explains why zone 3 is also where ischaemic and paracetamol injury land.',
    '**Haemorrhage is classified by size and by site, and the two answer different questions.** By **size in the skin and mucosa**: **petechiae 1–2 mm**, **purpura 3–10 mm**, **ecchymoses over 1–2 cm**. By **site in a cavity**: **haemothorax**, **haemopericardium**, **haemoperitoneum**, **haemarthrosis**. The pattern discriminates the defect. **Petechiae and purpura** with **immediate mucosal bleeding** point to **platelets or vessel wall** — thrombocytopenia, platelet dysfunction, vasculitis or vitamin C deficiency. **Deep bleeding into joints, muscles and large expanding haematomas**, often **delayed** after the injury, points to **coagulation factors** — the haemophilias. An ecchymosis then dates itself as haemoglobin is degraded: **red-blue**, then **blue-green** as **biliverdin** forms, then **gold-brown** as **haemosiderin** accumulates.',
    '**A haematoma is judged by the space it occupies, not by how much blood it contains — this is the single most transferable rule in the chapter.** Around **150–200 mL** entering the **pericardium rapidly** will tamponade the heart, because the fibrous sac cannot stretch acutely, while a slowly accumulating effusion may reach **1–2 L** without doing so. A few tens of millilitres in the **epidural space** kills, while over a litre can sit in a thigh with nothing worse than a fall in haemoglobin. Volume matters only once it becomes systemic: losing up to about **20%** of blood volume, or any volume slowly, is usually tolerated, while faster or larger loss produces **hypovolaemic shock** — see [[rbp-embolism-infarction-shock]]. One final discriminator with a clean rule: **blood lost outside the body takes its iron with it**, so chronic external or gastrointestinal loss causes **iron-deficiency anaemia**; blood bled into a cavity or tissue is **reabsorbed and its iron recycled**, so it causes **jaundice from bilirubin load but never iron deficiency**.',
  ],

  mechanism: {
    title: 'Impaired venous outflow to pigment and fibrosis',
    steps: [
      { id: 's1', label: 'Right heart failure or venous obstruction raises pressure in the veins draining the tissue', emphasis: 'key' },
      { id: 's2', label: 'Capillaries engorge with deoxygenated blood — the tissue turns blue-red and cool, not red and warm', detail: 'This is the discriminator from hyperaemia, where arteriolar dilatation brings oxygenated blood in.', emphasis: 'key' },
      { id: 's3', label: 'The same rise in capillary hydrostatic pressure drives a protein-poor transudate into the interstitium', emphasis: 'normal' },
      { id: 's4', label: 'Small vessels rupture; red cells enter alveoli or sinusoids and macrophages store their iron as haemosiderin', detail: 'Heart-failure cells in the lung; Prussian blue positive on a Perls stain.', emphasis: 'normal' },
      { id: 's5', label: 'Zone 3 hepatocytes, already the most hypoxic, drop out — dark centrilobular necrosis beside pale fatty zone 1', emphasis: 'danger' },
      { id: 's6', label: 'Sustained congestion deposits fibrosis: brown induration in the lung, cardiac sclerosis in the liver', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Warm, bright red, briskly blanching erythema over an acutely inflamed joint', mechanism: 'Active hyperaemia — arteriolar dilatation increasing inflow of oxygenated blood', significance: 'key' },
    { sign: 'Cool, dusky blue-red discoloration of a swollen leg that refills slowly after blanching', mechanism: 'Passive congestion — outflow obstruction retaining deoxygenated blood, with a transudate behind the same pressure', significance: 'key' },
    { sign: 'Rusty brown sputum in a patient with long-standing mitral stenosis', mechanism: 'Haemosiderin-laden alveolar macrophages expectorated after chronic intra-alveolar haemorrhage from pulmonary venous congestion', significance: 'key' },
    { sign: 'Tender pulsatile hepatomegaly with a positive hepatojugular reflux and raised jugular venous pressure', mechanism: 'Systemic venous congestion transmitted through the hepatic veins to the centrilobular zone', significance: 'key' },
    { sign: 'Pinpoint lesions over dependent skin that do not blanch when pressed with a glass slide', mechanism: 'Blood has extravasated into the dermis, so it cannot be displaced; dilated vessels would blanch', significance: 'key' },
    { sign: 'A bruise passing from red-blue through blue-green to gold-brown over a week', mechanism: 'Sequential degradation of haemoglobin to biliverdin and then to haemosiderin by tissue macrophages', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Sputum or lavage cytology showing macrophages that stain Prussian blue positive', meaning: 'Alveolar haemorrhage that is at least days old. Chronic pulmonary venous congestion is the commonest cause, but any alveolar bleed produces them, so the cells date the event rather than naming it' },
    { clue: 'Liver histology with centrilobular sinusoidal dilatation and zone 3 hepatocyte dropout, zone 1 preserved and steatotic', meaning: 'The nutmeg pattern of chronic passive congestion. Zone 3 is furthest from the portal supply and so fails first' },
    { clue: 'Ultrasound showing a dilated inferior vena cava that fails to collapse by half on inspiration, with distended hepatic veins', meaning: 'Raised right atrial pressure transmitted backwards — systemic rather than local congestion' },
    { clue: 'Haemoglobin unchanged one hour after a major traumatic haemorrhage', meaning: 'Whole blood was lost, so concentration is initially preserved. Use heart rate, pulse pressure and lactate, not haemoglobin, in the first hour' },
    { clue: 'Microcytic hypochromic film with ferritin 6 micrograms per litre in a patient with melaena', meaning: 'Chronic external loss: the iron left the body with the blood. Bleeding into a cavity recycles iron and never produces this picture' },
    { clue: 'Rising urea with a normal creatinine after an episode of haematemesis', meaning: 'Absorbed blood protein presented to the liver as a nitrogen load — evidence that the bleeding was into the gut lumen and proximal' },
  ],

  treatment: [
    {
      logic: 'Lower the pressure behind the congestion rather than draining the fluid in front of it',
      detail: 'Systemic congestion from right heart failure responds to **preload reduction** — **loop diuretics**, **sodium restriction** and treating the failing ventricle — because the raised **venous pressure** is what both engorges the vessel and drives the transudate. A **local** cause behaves quite differently: an obstructed hepatic vein, a **constrictive pericardium** or a proximal **deep vein thrombosis** will not respond to diuresis at all, and diuresing such a patient simply lowers cardiac output while the obstruction remains. The question to ask first is therefore **systemic or local**, since only one of the two answers is a pharmacological problem.',
    },
    {
      logic: 'Judge a haematoma by the compartment, not by the volume',
      detail: 'The same **200 mL** is trivial in a thigh, **lethal in the pericardium** because the fibrous sac cannot stretch acutely, and far beyond lethal in the **epidural space**. So the decision is driven by **compartment pressure and its effect** — tamponade physiology, a rising intracranial pressure, a tense limb compartment with pain on passive stretch — and not by the size on the scan. Acute decompression (**pericardiocentesis**, **fasciotomy**, **evacuation**) is a pressure decision. The **systemic** consequences run on a separate axis: loss beyond roughly **20%** of blood volume produces hypovolaemic shock regardless of where it went.',
    },
  ],

  mnemonics: [
    {
      hook: 'Active is Arterial and angry red; Passive is Pooled and purple',
      expansion: [
        'Hyperaemia: active, arteriolar dilatation, more oxygenated blood in, warm and bright red, blanches',
        'Congestion: passive, venous outflow blocked, deoxygenated blood held back, cool and blue-red',
        'Both raise the blood content of the tissue; only congestion makes it hypoxic',
        'Both raise capillary hydrostatic pressure, so oedema accompanies congestion',
      ],
    },
    {
      hook: 'One, three, ten — the sizes of a bleed into skin',
      expansion: [
        'Petechiae 1 to 2 mm — platelet number or function, or raised intravascular pressure',
        'Purpura 3 to 10 mm — platelets, vessel wall or vasculitis',
        'Ecchymoses over 1 to 2 cm — the common bruise, dating itself red-blue then blue-green then gold-brown',
        'Deep muscle and joint bleeds instead of skin lesions — a coagulation factor problem, not a platelet one',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Hyperaemia versus congestion at the bedside',
      wrongInstinct: 'Both make a part swollen and discoloured, so the distinction is academic',
      rightAnswer: 'Hyperaemia is arteriolar dilatation bringing more oxygenated blood in, so the tissue is warm and bright red; congestion is obstructed outflow holding deoxygenated blood back, so it is cool and blue-red',
      why: 'Colour and temperature read oxygen content directly — active inflow is red and warm, passive pooling is cyanotic and cool, and only the second one has an obstruction to find',
    },
    {
      questionCategory: 'Estimating blood loss from the haemoglobin',
      wrongInstinct: 'A normal haemoglobin an hour after major trauma excludes significant haemorrhage',
      rightAnswer: 'Acute haemorrhage removes red cells and plasma in the same proportion, so the concentration is unchanged until interstitial fluid shifts in or crystalloid is given',
      why: 'Haemoglobin measures concentration, not volume — in the first hour trust heart rate, pulse pressure and lactate instead',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A leg is swollen, cool and dusky blue-red, and refills slowly after blanching. Which statement identifies the process and its consequence?',
      options: [
        { id: 'a', text: 'Active hyperaemia from arteriolar dilatation; the tissue is well oxygenated' },
        { id: 'b', text: 'Passive congestion from impaired venous outflow; the tissue is hypoxic despite containing more blood than normal' },
        { id: 'c', text: 'Lymphatic obstruction; the fluid is protein-rich and will not pit' },
        { id: 'd', text: 'Arterial occlusion; the limb is pale and pulseless' },
      ],
      answerId: 'b',
      explanation: 'Cool and blue-red means the blood sitting in the tissue is deoxygenated and static, which only happens when outflow is obstructed. The paradox is the examinable point: congestion increases the blood content while reducing oxygen delivery. Hyperaemia would be warm, bright red and blanching, because arteriolar dilatation is bringing oxygenated blood in.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The cut surface of a liver at autopsy shows dark red-brown centrilobular areas alternating with pale, fatty periportal tissue. What explains the zonal distribution?',
      options: [
        { id: 'a', text: 'Portal vein thrombosis preferentially damages periportal hepatocytes' },
        { id: 'b', text: 'Zone 3 surrounds the central vein and has the lowest oxygen tension, so raised central venous pressure congests and injures it first' },
        { id: 'c', text: 'Bile stasis pigments the centrilobular region' },
        { id: 'd', text: 'Hepatic artery occlusion produces a wedge-shaped pale infarct' },
      ],
      answerId: 'b',
      explanation: 'This is the nutmeg liver of chronic passive congestion. Blood enters at the portal triad and leaves by the central vein, so zone 3 is last to be perfused and sits at the lowest oxygen tension. Raised right atrial pressure transmits back through the hepatic veins to exactly that zone, giving centrilobular congestion and, when sustained, centrilobular necrosis and fibrosis known as cardiac sclerosis.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Which comparison of two 200 mL collections of blood is correct?',
      options: [
        { id: 'a', text: 'Both are clinically equivalent, because the systemic volume lost is identical' },
        { id: 'b', text: '200 mL accumulating rapidly in the pericardium can cause tamponade, whereas 200 mL in the thigh causes little more than a fall in haemoglobin' },
        { id: 'c', text: '200 mL in either site will cause hypovolaemic shock' },
        { id: 'd', text: 'The thigh haematoma is more dangerous because muscle has a richer blood supply' },
      ],
      answerId: 'b',
      explanation: 'A haematoma is judged by the compartment it fills. The fibrous pericardium cannot stretch acutely, so roughly 150 to 200 mL arriving quickly raises intrapericardial pressure enough to prevent ventricular filling, while a slowly accumulating effusion may reach one to two litres without tamponade. The thigh accommodates the same volume freely. Systemic volume loss is a separate axis, and 200 mL is far below the roughly 20% of blood volume needed for hypovolaemic shock.',
      tests: 'exam',
    },
  ],
};

export default rbpHyperemiaCongestionHaemorrhage;
