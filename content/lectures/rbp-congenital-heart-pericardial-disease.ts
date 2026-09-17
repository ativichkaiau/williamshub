import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpCongenitalHeartPericardialDisease: Lecture = {
  id: 'rbp-congenital-heart-pericardial-disease',
  title: 'Congenital Heart Disease & the Pericardium',
  system: 'cardiovascular',
  source: 'Ch 10 — Heart',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 10 Heart' },
    { kind: 'mechanism', label: 'Shunt direction, pulmonary vascular remodelling and pericardial compliance' },
    { kind: 'disease', label: 'Septal defects, tetralogy, tamponade and constriction' },
  ],

  highYield: [
    '**Ask one question of every congenital lesion — which way does blood shunt — because the direction, not the name, determines whether the child is blue and what will kill them.** Congenital heart disease affects about **1% of live births**, roughly **6 to 8 per 1000**, and about **90%** is multifactorial; the minority with a named genetic cause are the ones examined. **Trisomy 21** gives atrioventricular septal defects; **22q11.2 deletion** gives outflow tract lesions — truncus arteriosus, tetralogy, interrupted aortic arch — because the defect is in **neural crest** migration into the conotruncus; **Turner syndrome** gives coarctation and a bicuspid valve; **congenital rubella** gives a patent ductus and pulmonary artery stenosis; maternal diabetes is associated with transposition. Three physiological categories follow. **Left-to-right shunt**: **acyanotic** at first, because oxygenated blood is simply recirculated through the lungs, but the pulmonary circuit is volume-loaded and will remodel. **Right-to-left shunt**: **cyanotic from birth**, because deoxygenated blood enters the systemic circulation directly. **Obstructive lesions**: no shunt, and the problem is pressure. One number governs the colour: central cyanosis becomes visible when **reduced haemoglobin exceeds about 5 g/dL**, which is why a polycythaemic infant looks blue early while an anaemic one with the same saturation does not.',
    '**The three left-to-right shunts are told apart by what actually drives the flow, and the most dangerous ventricular septal defect is the quiet one.** A **ventricular septal defect** is the commonest congenital cardiac malformation; about **90%** are in the membranous septum, and roughly half of small muscular defects close spontaneously. Its murmur is governed by a rule that inverts the usual instinct: **intensity is INVERSE to defect size**. A small defect maintains a large pressure difference between the ventricles, so a high-velocity jet crosses it and produces a **loud harsh holosystolic murmur with a thrill** in a thriving infant; a **large** defect equalises ventricular pressures, so the gradient and therefore the noise disappear while the shunt volume is enormous and the infant is in heart failure. An **atrial septal defect** — about **90%** ostium secundum — is the one that presents in **adulthood**, because the shunt is driven not by a pressure gradient but by the difference in **ventricular compliance**, which is negligible in childhood and widens over decades as the left ventricle stiffens. Its murmur is not the shunt at all but **increased flow across the pulmonary valve**, accompanied by **fixed splitting of the second sound**, fixed because the interatrial communication abolishes the respiratory variation in filling between the two atria. A **patent ductus arteriosus** persisting beyond about **48 hours** of life gives a **continuous machinery murmur**, continuous because aortic pressure exceeds pulmonary pressure in systole **and** in diastole; prostaglandin E keeps it open for duct-dependent lesions and indometacin closes it. All three end in the same place: sustained high pulmonary flow.',
    '**Eisenmenger syndrome is the moment the shunt reverses, and it is also the moment the operation stops being possible.** Chronic high pulmonary flow and pressure injure the pulmonary endothelium, producing **medial hypertrophy**, then **intimal fibrosis**, and finally irreversible **plexiform lesions**. Pulmonary vascular resistance climbs, and when it **exceeds systemic vascular resistance** the shunt reverses to **right-to-left**. The patient who was pink becomes blue: **late cyanosis**, clubbing, and secondary **polycythaemia** with hyperviscosity. The timing is predicted by the pressure load rather than the shunt volume — a large **ventricular septal defect** or **patent ductus** transmits systemic pressure directly to the pulmonary bed, so Eisenmenger arrives in childhood or early adult life, whereas an **atrial septal defect** imposes only a low-pressure volume load and takes decades, often never arriving at all. Once resistance is fixed the defect has become the **pop-off valve** for a right ventricle facing a rigid pulmonary bed, so closing it converts a cyanosed but compensated patient into acute right ventricular failure and death. That is why the operative decision turns on **reversibility** — whether the pulmonary vasculature still dilates in response to oxygen or inhaled nitric oxide — and not on the size of the hole. Developed in [[add-eisenmenger-syndrome]].',
    '**Tetralogy of Fallot is one developmental event read four ways, and its severity tracks the pulmonary stenosis alone.** The event is **anterosuperior and cephalad displacement of the infundibular (conal) septum** during septation of the outflow tract. Everything follows mechanically. Displaced anteriorly, the infundibular septum **obstructs the right ventricular outflow tract**, giving subpulmonary stenosis. Displaced out of line, it **fails to meet the muscular septum**, leaving a malalignment **ventricular septal defect**. With the septum out of position, the aortic root sits astride the gap, giving an **overriding aorta**. And the right ventricle, working against the obstruction, undergoes **hypertrophy** — the upturned apex of the **boot-shaped heart** on the radiograph. Now the clinically decisive point: only the **degree of pulmonary stenosis** determines the physiology. Mild stenosis leaves systemic resistance higher than right ventricular outflow resistance, so the shunt runs **left-to-right** through the defect and the child is **pink**; severe stenosis makes right ventricular outflow resistance the greater, so the shunt runs **right-to-left** and the child is **cyanosed**. A hypercyanotic spell is a transient increase in infundibular obstruction or a fall in systemic resistance, and **squatting** aborts it by raising systemic vascular resistance, which pushes the shunt back toward left-to-right and forces more blood across the stenosis into the lungs. Contrast **transposition of the great arteries**, where the circulations run in parallel and survival **requires** a shunt through a patent foramen, duct or septal defect — the exact opposite dependency, since in tetralogy the shunt causes the cyanosis while in transposition it relieves it. Any right-to-left shunt also carries two structural risks: **paradoxical embolism**, because venous clot, air or septic material bypasses the pulmonary filter, and **brain abscess** for the same reason. Extended in [[tetralogy-of-fallot]].',
    '**In pericardial effusion the RATE of accumulation matters more than the volume, because the parietal pericardium is stiff but stretches slowly.** The normal sac contains only **30 to 50 mL** of serous fluid. Introduce **150 to 200 mL** over minutes — haemopericardium from ventricular free wall rupture, from an aortic dissection tracking into the sac, from trauma or from a procedure — and the sac is on the steep part of its compliance curve, so pericardial pressure rises above the diastolic pressure of the chambers and filling stops: **tamponade**. Introduce **1 to 2 litres** over months, as in malignant, uraemic or hypothyroid effusions, and the pericardium remodels and stretches, so the same patient may be haemodynamically unremarkable with a far larger effusion. Tamponade physiology is then entirely derivable. Total intrapericardial volume is fixed, so the chambers **compete**: on inspiration systemic venous return rises, the right ventricle fills, the septum bows into the left ventricle, left ventricular filling and stroke volume fall, and systolic pressure drops by more than **10 mmHg** — **pulsus paradoxus**, which is ventricular interdependence made measurable. **Beck triad** is hypotension, raised jugular venous pressure and muffled heart sounds. The venous waveform is the discriminating detail: the **x descent is preserved** but the **y descent is absent or blunted**, because filling is obstructed throughout diastole and the ventricle can only accept blood while the heart is ejecting. **Kussmaul sign is characteristically absent** in tamponade. Clinical handling sits in [[cardiac-tamponade]].',
    '**Name the pericardial exudate and you have usually named the cause; and separate constriction from restrictive cardiomyopathy by looking for the shell, not by comparing the haemodynamics.** The patterns: **serous** (viral, lupus, rheumatic fever, early uraemia, tumour); **fibrinous or serofibrinous**, the commonest, giving the bread-and-butter appearance and the friction rub (post-infarction at 2 to 4 days, Dressler syndrome, uraemia, radiation, trauma); **purulent** (bacterial, a thick creamy exudate, and the type most likely to scar); **haemorrhagic** (tuberculosis, malignancy, after cardiac surgery); and **caseous** (tuberculosis, still the commonest antecedent of constriction worldwide). **Constrictive pericarditis** is a dense fibrous or fibrocalcific shell, sometimes **0.5 to 1 cm** thick, encasing the heart and obliterating the pericardial space — from tuberculosis, previous cardiac surgery, radiation or purulent pericarditis. Its physiology is the mirror image of tamponade: filling is **unimpeded in early diastole** and then halts **abruptly** when the ventricle meets the shell, so the **y descent is rapid and prominent**, the ventricular pressure trace shows a **dip and plateau** (square root sign), there is a **pericardial knock**, and **Kussmaul sign is present** because the rigid box cannot accommodate the extra inspiratory venous return. Restrictive cardiomyopathy produces almost identical numbers from a stiff **myocardium**, so use the discriminators that ask where the stiffness is: **pericardial thickening or calcification** on CT or MRI (present in constriction, absent in restriction); **ventricular interdependence** with respiratory septal shift and reciprocal filling (present in constriction, because the shell couples the ventricles; absent in restriction); **equalisation of end-diastolic pressures within about 5 mmHg across all four chambers** in constriction, versus a left-sided pressure exceeding the right by more than **5 mmHg** in restriction; and **natriuretic peptide**, which is markedly raised in restriction because the myocardium itself is diseased and stretched but only modestly raised in constriction, where the muscle is normal. Extended in [[constrictive-tuberculous-pericarditis]].',
  ],

  mechanism: {
    title: 'Shunt direction decides the colour, and time decides the direction',
    steps: [
      { id: 's1', label: 'A septal defect or persistent duct connects the systemic and pulmonary circulations', emphasis: 'normal' },
      { id: 's2', label: 'Because systemic pressure exceeds pulmonary pressure, blood shunts left to right: the child is pink, but the pulmonary circuit is volume-loaded', detail: 'Murmur intensity tracks the pressure gradient across the hole, not the volume of the shunt.', emphasis: 'key' },
      { id: 's3', label: 'Sustained high flow and pressure remodel the pulmonary arterioles: medial hypertrophy, then intimal fibrosis, then plexiform lesions', detail: 'A ventricular septal defect or duct transmits systemic pressure, so this takes years; an atrial defect is a low-pressure load and takes decades.', emphasis: 'key' },
      { id: 's4', label: 'Pulmonary vascular resistance rises until it exceeds systemic vascular resistance', emphasis: 'danger' },
      { id: 's5', label: 'The shunt reverses. Deoxygenated blood enters the aorta: late cyanosis, clubbing, polycythaemia and paradoxical embolism', detail: 'Cyanosis becomes visible once reduced haemoglobin exceeds about 5 g/dL.', emphasis: 'danger' },
      { id: 's6', label: 'The defect is now the pop-off valve for a fixed pulmonary bed, so closing it precipitates right ventricular failure and death', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Wide and fixed splitting of the second heart sound with a pulmonary ejection systolic murmur in a 35-year-old', mechanism: 'Atrial septal defect. The communication equalises the respiratory swing in filling between the atria, so the timing of pulmonary valve closure stops varying with breathing, and the murmur is increased pulmonary flow rather than the shunt itself', significance: 'key' },
    { sign: 'A loud harsh holosystolic murmur with a palpable thrill at the lower left sternal edge in a thriving, well-grown infant', mechanism: 'A small ventricular septal defect: a preserved interventricular pressure difference drives a high-velocity jet through a narrow orifice, so the noise is loud while the shunt volume is trivial', significance: 'key' },
    { sign: 'A continuous machinery murmur below the left clavicle with bounding pulses and a wide pulse pressure', mechanism: 'Patent ductus arteriosus. Aortic pressure exceeds pulmonary pressure throughout the cardiac cycle so flow never stops, and diastolic runoff into the pulmonary artery widens the pulse pressure', significance: 'supportive' },
    { sign: 'Differential cyanosis: pink fingers with blue clubbed toes', mechanism: 'A reversed ductal shunt in Eisenmenger syndrome, delivering deoxygenated pulmonary arterial blood into the aorta distal to the left subclavian artery, so only the lower body desaturates', significance: 'key' },
    { sign: 'A cyanosed toddler who squats during a spell and becomes pink again', mechanism: 'Tetralogy of Fallot. Squatting raises systemic vascular resistance and reduces venous return from the legs, so the shunt swings back toward left-to-right and more blood is forced across the stenosed right ventricular outflow into the lungs', significance: 'key' },
    { sign: 'Hypotension with a raised jugular venous pressure showing a preserved x descent and an absent y descent, and a 16 mmHg inspiratory fall in systolic pressure', mechanism: 'Cardiac tamponade. Filling is obstructed throughout diastole so there is no y descent, and ventricular interdependence within a fixed intrapericardial volume produces pulsus paradoxus', significance: 'key' },
  ],

  investigations: [
    { clue: 'Chest radiograph showing a boot-shaped heart with a concave pulmonary artery segment and reduced pulmonary vascular markings', meaning: 'Tetralogy of Fallot. The upturned apex is right ventricular hypertrophy, the concavity is the underdeveloped infundibulum and pulmonary trunk, and the oligaemic lung fields confirm that flow is being diverted right to left' },
    { clue: 'Chest radiograph showing an egg-on-a-string appearance with a narrow mediastinal pedicle in a cyanosed neonate', meaning: 'Transposition of the great arteries, where the anteroposterior alignment of the great vessels narrows the silhouette. The circulations run in parallel, so a shunt is what keeps the baby alive rather than what makes it blue' },
    { clue: 'Cardiac catheterisation showing an oxygen saturation step-up from 65% in the superior vena cava to 85% in the right atrium', meaning: 'A left-to-right shunt at atrial level. The chamber in which saturation jumps localises the defect precisely: right atrium means atrial septal defect, right ventricle means ventricular septal defect, and pulmonary artery means patent ductus' },
    { clue: 'Lung biopsy showing plexiform lesions in a young adult with a large unrepaired ventricular septal defect', meaning: 'Irreversible pulmonary vascular disease. This is the histological point of no return, after which closing the defect removes the pop-off valve and causes right ventricular failure' },
    { clue: 'Echocardiogram with a swinging heart in a large effusion, diastolic collapse of the right atrium and right ventricle, and over 25% respiratory variation in mitral inflow', meaning: 'Tamponade. Right atrial collapse is the earliest and most sensitive sign, right ventricular diastolic collapse the more specific, and the inflow variation is ventricular interdependence measured directly' },
    { clue: 'CT showing a 6 mm calcified pericardium with normal ventricular wall thickness in a patient with a raised jugular venous pressure and ascites', meaning: 'Constrictive pericarditis, and the finding that settles the argument with restrictive cardiomyopathy, which never has a shell. It also makes the case operable, since pericardiectomy removes the constraint' },
  ],

  treatment: [
    {
      logic: 'Close the shunt while the pulmonary vasculature can still forgive you',
      detail: 'The surgical decision is about the **pulmonary arterioles**, not the size of the defect. While the remodelling is limited to **medial hypertrophy** and early intimal change the resistance is still **reactive**, the vessels dilate in response to **oxygen or inhaled nitric oxide**, and closure allows the pulmonary bed to recover. Once **plexiform lesions** have formed the resistance is **fixed**, the shunt has reversed, and the defect is the only route by which the right ventricle can decompress — so closing it is **fatal**. This is why an atrial septal defect can be repaired comfortably in adulthood while a large ventricular septal defect or duct must be dealt with in infancy: the pressure load, not the shunt volume, sets the clock. In established Eisenmenger syndrome the management becomes pulmonary vasodilator therapy, avoidance of dehydration and of systemic vasodilatation, careful attention to hyperviscosity, and transplantation, since the anatomy is no longer the problem.',
    },
    {
      logic: 'In tamponade drain, in constriction strip, and never treat either as a stiff myocardium',
      detail: 'Tamponade is a **pressure** problem that reverses in minutes with **pericardiocentesis**, and the pre-drainage physiology dictates the bridging: the heart is **preload-dependent**, so fluid and chronotropy buy time while **diuretics, nitrates and any preload reduction are actively harmful**, because they remove the only filling pressure that still exceeds pericardial pressure. Positive pressure ventilation is dangerous for the same reason. Constriction is a **structural shell**, so no drug relieves it and the treatment is **pericardiectomy**. Restrictive cardiomyopathy shares the numbers but lives in the myocardium, and pericardiectomy does nothing for it — which is exactly why **pericardial thickness, respiratory septal shift and the difference between left and right end-diastolic pressures** are worth chasing before anyone opens the chest.',
    },
  ],

  mnemonics: [
    {
      hook: 'Tetralogy is one displacement, read four ways',
      expansion: [
        'The event: anterosuperior displacement of the infundibular septum during outflow tract septation',
        'It obstructs the right ventricular outflow tract, giving subpulmonary stenosis',
        'It fails to meet the muscular septum, giving a malalignment ventricular septal defect',
        'The aortic root then sits astride the gap, giving an overriding aorta',
        'The right ventricle works against the obstruction, giving hypertrophy and a boot-shaped heart',
        'And severity tracks the pulmonary stenosis alone: mild means a pink tetralogy, severe means cyanosis',
      ],
    },
    {
      hook: 'The y descent answers the pericardium',
      expansion: [
        'Absent or blunted y descent means tamponade: filling is blocked throughout diastole',
        'Steep prominent y descent with a pericardial knock means constriction: it fills fast, then hits the shell',
        'Kussmaul sign is absent in tamponade and present in constriction',
        'Pulsus paradoxus over 10 mmHg belongs to tamponade, from ventricular interdependence',
        'And if the wall is thick with low ECG voltage, leave the pericardium alone and go to amyloid',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Reading the loudness of a ventricular septal defect murmur',
      wrongInstinct: 'The murmur is very loud with a thrill, so the defect must be large and the child severely affected',
      rightAnswer: 'Loudness is inverse to defect size; the dangerous large defect equalises ventricular pressures and can be almost silent while the infant is in heart failure',
      why: 'Murmur intensity reflects the pressure gradient across the orifice, not the volume of the shunt — so when the gradient disappears the noise disappears with it, and a quiet defect in a failing infant is the emergency',
    },
    {
      questionCategory: 'Separating constrictive pericarditis from restrictive cardiomyopathy',
      wrongInstinct: 'The haemodynamics are identical, so the two cannot be told apart without an endomyocardial biopsy',
      rightAnswer: 'Look for the shell: pericardial thickening or calcification on CT or MRI, ventricular interdependence with a respiratory septal shift, and equalisation of end-diastolic pressures within about 5 mmHg across all four chambers',
      why: 'Constriction encloses both ventricles in one fixed box so they compete and their pressures equalise, whereas restriction stiffens the myocardium and leaves them independent, with the left-sided pressure exceeding the right by more than 5 mmHg and a markedly raised natriuretic peptide',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cyanosed infant has a boot-shaped heart on the chest radiograph, a malalignment ventricular septal defect, an overriding aorta, subpulmonary stenosis and right ventricular hypertrophy. Which single developmental event accounts for all four features?',
      options: [
        { id: 'a', text: 'Failure of the ostium secundum to close during atrial septation' },
        { id: 'b', text: 'Anterosuperior displacement of the infundibular septum during septation of the outflow tract' },
        { id: 'c', text: 'Failure of the ductus arteriosus to close after birth' },
        { id: 'd', text: 'Failure of the endocardial cushions to fuse' },
      ],
      answerId: 'b',
      explanation: 'One misplacement generates all four components. Displaced anteriorly the infundibular septum obstructs the right ventricular outflow tract; displaced out of alignment it cannot meet the muscular septum, leaving a malalignment defect; the aortic root then straddles that gap; and the right ventricle hypertrophies against the obstruction. The practical value of deriving it rather than listing it is the severity rule that follows: only the degree of pulmonary stenosis determines whether the shunt runs left to right, giving a pink tetralogy, or right to left, giving cyanosis and hypercyanotic spells relieved by squatting.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A stabbing victim with 150 mL of blood in the pericardium is hypotensive with distended neck veins and a pulsus paradoxus of 18 mmHg. On the same ward a woman with a malignant effusion of 1.4 litres accumulated over four months is haemodynamically normal. What explains the difference?',
      options: [
        { id: 'a', text: 'Blood irritates the pericardium more than malignant fluid does' },
        { id: 'b', text: 'The rate of accumulation, because the parietal pericardium stretches only slowly, so a small rapid collection exceeds its compliance while a large slow one does not' },
        { id: 'c', text: 'Volume is what determines tamponade, so one of the two measurements must be mistaken' },
        { id: 'd', text: 'The woman has developed constrictive physiology, which protects her from tamponade' },
      ],
      answerId: 'b',
      explanation: 'The sac normally holds only 30 to 50 mL, and its parietal layer is stiff acutely but remodels when stretched over weeks to months. A rapid 150 to 200 mL therefore lands on the steep part of the compliance curve and drives pericardial pressure above chamber diastolic pressure, while 1 to 2 litres accumulating slowly is accommodated by a sac that has grown. That is why free wall rupture, dissection into the sac and procedural injury cause tamponade at trivial volumes, and why a huge chronic effusion can be asymptomatic. The physiology then follows: competition for a fixed volume gives ventricular interdependence and pulsus paradoxus, and obstructed diastolic filling abolishes the y descent.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A man has a raised jugular venous pressure, ascites and normal ventricular wall motion. Which combination of findings would point AWAY from constrictive pericarditis and toward restrictive cardiomyopathy?',
      options: [
        { id: 'a', text: 'Equalisation of end-diastolic pressures within 5 mmHg in all four chambers' },
        { id: 'b', text: 'A left ventricular end-diastolic pressure exceeding the right by more than 5 mmHg, a markedly raised natriuretic peptide, and no pericardial thickening on CT' },
        { id: 'c', text: 'A pericardial knock in early diastole' },
        { id: 'd', text: 'A jugular venous pressure that rises on inspiration' },
      ],
      answerId: 'b',
      explanation: 'Constriction encloses both ventricles inside one rigid box, so they share a fixed total volume, compete with each other through the septum, and equalise their end-diastolic pressures. Restriction stiffens the myocardium itself, leaving the ventricles mechanically independent, so the more affected left side runs a higher pressure than the right, there is no shell to see on imaging, and the diseased stretched myocardium releases far more natriuretic peptide. Equalised pressures, a pericardial knock and a Kussmaul sign all belong to constriction, and the distinction is worth making precisely because pericardiectomy cures one and does nothing for the other.',
      tests: 'investigation',
    },
  ],
};

export default rbpCongenitalHeartPericardialDisease;
