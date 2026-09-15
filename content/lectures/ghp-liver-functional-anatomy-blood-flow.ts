import type { Lecture } from '../../lib/types';

export const ghpLiverFunctionalAnatomyBloodFlow: Lecture = {
  id: 'ghp-liver-functional-anatomy-blood-flow',
  title: 'The Liver: Functional Anatomy & Blood Flow',
  system: 'gi',
  source: 'Ch 71 — The Liver as an Organ',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Gastrointestinal' },
    { kind: 'lecture', label: 'Ch 71 Hepatic Anatomy & Blood Flow' },
    { kind: 'mechanism', label: 'Arterial buffer response · sinusoidal permeability · acinar zonation' },
    { kind: 'exam', label: 'Centrilobular necrosis · protein-rich ascites · nutmeg liver' },
  ],

  highYield: [
    '**Two inflows, and the flow share is deliberately not the oxygen share — this is the single most exploited number in the chapter.** The **portal vein delivers roughly 1050 mL/min, about 75% of hepatic blood flow**, but it arrives having already crossed the gut capillary bed, so it is **partly deoxygenated**. The **hepatic artery adds only about 300 mL/min, some 25% of flow, yet supplies about half the oxygen** the liver consumes. Together roughly **1350 mL/min, about a quarter of resting cardiac output**. The pressures matter as much as the volumes: **portal pressure sits near 9 mmHg and hepatic venous pressure near 0 mmHg**, so the entire sinusoidal bed is crossed on a gradient of a few mmHg. A resistance that low is the price of a bed built for exchange rather than for regulation — and it is why a modest rise in sinusoidal resistance translates into a disproportionate rise in portal pressure.',
    '**The buffer response is one-directional, and the asymmetry is the whole clinical point.** When portal inflow falls, the **hepatic artery dilates and partly makes up the loss — the hepatic arterial buffer response**. The accepted mechanism is **adenosine washout**: adenosine is released at a steady rate into the periportal space, and **portal flow normally washes it away**, so when portal flow drops the adenosine accumulates and dilates the artery. The converse does not exist. **Portal inflow is set upstream by the splanchnic arterioles, so the portal vein cannot buffer a fall in arterial flow at all.** Hence the rule: the liver tolerates portal compromise far better than arterial compromise. **The bile ducts prove it** — the peribiliary plexus is supplied **exclusively by the hepatic artery**, so **hepatic artery thrombosis after transplantation produces ischaemic cholangiopathy, biliary strictures and bilomas** while the hepatocytes, still fed by portal blood, may survive.',
    '**The sinusoid is a capillary with the safety features removed, and that is why hepatic lymph is almost plasma.** Sinusoidal endothelium is **fenestrated, the pores are large, and there is no basement membrane**; beneath it lies the **space of Disse**, opening directly onto the hepatocyte microvilli. Protein permeability is therefore **extraordinarily high — hepatic lymph protein runs around 6 g/dL, close to plasma**, and the liver alone generates **roughly half of all lymph reaching the thoracic duct**. Raise sinusoidal pressure and the consequence follows mechanically: the liver **weeps protein-rich fluid from its surface**. This is the origin of ascites in **post-sinusoidal obstruction** — hepatic vein thrombosis, constrictive pericarditis, right heart failure — and the reason that ascites is **protein-rich**, in deliberate contrast with the **low-protein transudate of pure hypoalbuminaemia**, where the leak is a normal capillary responding to a low oncotic pressure.',
    '**One oxygen gradient explains two apparently unrelated causes of centrilobular necrosis.** Blood entering at the portal triad is progressively stripped of oxygen as it flows toward the central vein, so the acinus is functionally layered. **Zone 1, periportal, sees the highest oxygen tension** and houses the oxygen-hungry, best-defended work — **gluconeogenesis, the urea cycle, beta-oxidation, bile acid uptake**. **Zone 3, pericentral, sits at the bottom of the oxygen gradient** and is where **cytochrome P450, especially CYP2E1, is concentrated**, along with glycolysis, lipogenesis and the glutamine synthetase that scavenges ammonia the urea cycle missed. Now the payoff: **ischaemia kills zone 3 because it is the last to receive oxygen, and paracetamol kills zone 3 because it is where the toxic metabolite is made**. Two entirely different insults, **one zone**, because the same gradient positions both the hypoxia and the P450.',
    '**The liver is a compliant blood reservoir, and it works in both directions.** In the resting state the liver holds **about 10% of total blood volume, some 450 mL**, sitting in easily distended sinusoids and hepatic veins. Under **sympathetic drive during haemorrhage it constricts and expels several hundred millilitres** into the systemic circulation — an autotransfusion that buys time before blood pressure falls. Run the same compliance backwards and **raised right atrial pressure distends the liver to hold an extra 0.5 to 1 L**, which is why **right heart failure produces tender, sometimes pulsatile hepatomegaly** and, over time, the mottled cut surface of **nutmeg liver** from congested zone 3 alternating with paler surviving periportal tissue. **Congestive hepatopathy is a plumbing problem, not a hepatocyte problem** — the liver is a capacitance vessel being used as one.',
    '**Kupffer cells are the reason gut bacteria do not routinely reach systemic blood.** Portal blood arrives carrying organisms absorbed across the intestinal wall, and the sinusoids are lined with **Kupffer cells — resident macrophages so efficient that well over 99% of these bacteria are phagocytosed in a single pass**, typically within seconds. The liver is therefore the **filter standing between the gut lumen and the systemic circulation**, and the arrangement is only as good as the anatomy. **In cirrhosis it fails twice over**: portosystemic collaterals let portal blood bypass the sinusoids entirely, and the Kupffer cells that blood does reach are functionally impaired. That double failure is the physiological basis of the **spontaneous bacteraemia and peritonitis with gut organisms** that characterise advanced liver disease.',
  ],

  mechanism: {
    title: 'Dual inflow → sinusoid and space of Disse → acinar oxygen gradient → central vein → hepatic vein',
    steps: [
      { id: 's1', label: 'Portal vein delivers about 1050 mL/min at 9 mmHg — nutrient-rich but already partly deoxygenated', detail: 'About 75% of hepatic flow, but only about half the oxygen.' },
      { id: 's2', label: 'Hepatic artery adds about 300 mL/min and buffers falls in portal flow — but never the reverse', emphasis: 'key', detail: 'Adenosine washout: less portal flow means less adenosine cleared, so the artery dilates.' },
      { id: 's3', label: 'Mixed blood enters fenestrated sinusoids that have no basement membrane', emphasis: 'key' },
      { id: 's4', label: 'Plasma bathes hepatocytes in the space of Disse; Kupffer cells strip portal bacteria', emphasis: 'key' },
      { id: 's5', label: 'Oxygen falls along the sinusoid: zone 1 periportal, oxygen-rich; zone 3 pericentral, P450-rich', emphasis: 'key' },
      { id: 's6', label: 'Raised outflow pressure makes a protein-permeable bed weep protein-rich lymph', emphasis: 'danger', detail: 'Ascites of post-sinusoidal obstruction, and the distended reservoir of congestive hepatopathy.' },
    ],
  },

  examFindings: [
    { sign: 'Protein-rich ascites in hepatic vein outflow obstruction, constrictive pericarditis or right heart failure', mechanism: 'Sinusoids lack a basement membrane, so fluid forced out at raised pressure carries nearly plasma-level protein', significance: 'key' },
    { sign: 'Centrilobular necrosis after both circulatory shock and paracetamol overdose', mechanism: 'Zone 3 sits at the bottom of the acinar oxygen gradient and is also where CYP2E1 generates the toxic metabolite', significance: 'key' },
    { sign: 'Ischaemic biliary strictures and bilomas after hepatic artery thrombosis, with hepatocytes relatively spared', mechanism: 'The peribiliary plexus is supplied only by the hepatic artery, while hepatocytes retain portal inflow', significance: 'key' },
    { sign: 'Tender, sometimes pulsatile hepatomegaly with a mottled nutmeg cut surface', mechanism: 'Raised right atrial pressure distends the compliant hepatic reservoir and congests zone 3 selectively', significance: 'key' },
    { sign: 'Bacteraemia and spontaneous peritonitis with gut organisms in advanced cirrhosis', mechanism: 'Portosystemic shunting bypasses the sinusoids and the Kupffer cells that blood does reach are impaired', significance: 'supportive' },
    { sign: 'Doppler showing reduced portal inflow but near-preserved total hepatic flow', mechanism: 'Hepatic arterial buffer response — adenosine accumulates as portal washout falls and dilates the artery', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Share of hepatic blood flow versus share of hepatic oxygen carried by the portal vein', meaning: 'About 75% of the flow but only about half the oxygen — flow share and oxygen share are different numbers' },
    { clue: 'Which vessel can compensate for a fall in the other', meaning: 'The artery buffers the portal vein; the portal vein cannot buffer the artery, because its inflow is set upstream' },
    { clue: 'Structure whose blood supply is exclusively arterial', meaning: 'The peribiliary plexus — hence bile ducts, not hepatocytes, infarct after hepatic artery thrombosis' },
    { clue: 'Feature making hepatic lymph almost as protein-rich as plasma', meaning: 'Fenestrated sinusoidal endothelium with no basement membrane, draining into the space of Disse' },
    { clue: 'Acinar zone with the lowest oxygen tension and the highest cytochrome P450 content', meaning: 'Zone 3, pericentral — the common target of both ischaemic and paracetamol necrosis' },
    { clue: 'Proportion of blood volume normally held in the liver', meaning: 'About 10%, roughly 450 mL, with several hundred mL expellable in haemorrhage and 0.5 to 1 L absorbable in congestion' },
  ],

  treatment: [
    { logic: 'Read the liver as plumbing before you read it as parenchyma', detail: 'Most of what looks like hepatocyte disease at the bedside is first a flow problem. **Where the resistance sits determines the syndrome.** Pre-sinusoidal resistance raises portal pressure while leaving the sinusoid intact, so ascites is scanty; **post-sinusoidal obstruction loads the protein-permeable bed itself and ascites is early and protein-rich**. The clinical end of this is worked through in [[cirrhosis-fatty-liver-portal-hypertension]], and the upstream bed that feeds it in [[ghp-splanchnic-circulation]]. The practical habit: before attributing a finding to failing hepatocytes, ask which of the two inflows or the single outflow is actually embarrassed.' },
    { logic: 'Three rules that carry most of the marks', detail: '**One — 75% of the flow, about 50% of the oxygen.** The portal vein dominates volume, the artery dominates oxygenation, and exams write distractors that swap them. **Two — the buffer runs one way only.** Arterial compromise is catastrophic and falls hardest on the arterially supplied bile ducts. **Three — zone 3 is the low-oxygen, high-P450 corner**, which is why ischaemic and paracetamol necrosis are both centrilobular; the injury patterns themselves are set out in [[hepatitis-liver-injury-patterns]]. What this anatomy then enables metabolically is the subject of [[ghp-liver-metabolic-clearance-storage]].' },
  ],

  mnemonics: [
    { hook: 'Three quarters of the flow, half of the oxygen', expansion: ['Portal vein: about 1050 mL/min, roughly 75% of flow, already partly deoxygenated', 'Hepatic artery: about 300 mL/min, roughly 25% of flow, but about 50% of the oxygen'] },
    { hook: 'The artery buffers the vein; the vein buffers nothing', expansion: ['Falling portal flow leaves adenosine unwashed, so the hepatic artery dilates to compensate', 'Nothing compensates for a lost artery, and the bile ducts, supplied only arterially, pay first'] },
  ],

  traps: [
    {
      questionCategory: 'How hepatic oxygen delivery is divided between the two inflows',
      wrongInstinct: 'The portal vein carries about three quarters of hepatic blood flow, so it must also deliver about three quarters of the oxygen',
      rightAnswer: 'The portal vein supplies only about half the oxygen, because its blood has already given up oxygen crossing the gut capillary bed',
      why: 'Flow share and oxygen share are separate numbers: the low-volume arterial inflow is the fully oxygenated one.',
    },
    {
      questionCategory: 'What the protein content of ascitic fluid is telling you',
      wrongInstinct: 'Ascites forms because oncotic pressure is low, so ascitic fluid should always be a low-protein transudate',
      rightAnswer: 'Ascites from post-sinusoidal obstruction is protein-rich, because the sinusoid has no basement membrane and leaks nearly plasma-level protein when pressure rises',
      why: 'A bed built for protein exchange cannot filter protein out — raise its pressure and what weeps out is close to plasma.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two weeks after liver transplantation a patient develops rising alkaline phosphatase and bilirubin. Imaging shows hepatic artery thrombosis with patent portal flow, and cholangiography demonstrates multiple intrahepatic biliary strictures while hepatocellular enzymes are only mildly raised. The reason the bile ducts are damaged out of proportion to the hepatocytes is that:',
      options: [
        { id: 'a', text: 'Bile ducts have a higher basal oxygen consumption than hepatocytes' },
        { id: 'b', text: 'The peribiliary plexus is supplied only by the hepatic artery, whereas hepatocytes retain portal inflow' },
        { id: 'c', text: 'Portal blood is diverted preferentially to the bile ducts when the artery occludes' },
        { id: 'd', text: 'Retained bile salts are directly toxic to arterial endothelium' },
      ],
      answerId: 'b',
      explanation: 'Biliary epithelium is nourished by the peribiliary vascular plexus, which is an exclusively arterial bed. Hepatocytes receive both inflows, so when the artery is lost they continue to be perfused by portal blood and survive relatively well. The asymmetry is the clinical expression of the buffer response running one way only: the hepatic artery can dilate to offset a fall in portal flow, but portal inflow is determined upstream by the splanchnic arterioles and cannot rise to offset a lost artery. This is why hepatic artery thrombosis after transplantation presents as ischaemic cholangiopathy with strictures and bilomas rather than as hepatocellular infarction.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A pathologist reports necrosis centred on the central veins in two separate cases: one patient died after prolonged hypotension, the other after paracetamol overdose. The single anatomical feature that accounts for both distributions is:',
      options: [
        { id: 'a', text: 'Kupffer cells are concentrated around the central vein and release cytotoxic mediators' },
        { id: 'b', text: 'The central vein has no basement membrane, so toxins escape there preferentially' },
        { id: 'c', text: 'Blood is progressively deoxygenated as it crosses the acinus, so zone 3 has both the lowest oxygen tension and the greatest cytochrome P450 content' },
        { id: 'd', text: 'Bile flows toward the central vein, concentrating toxic metabolites there' },
      ],
      answerId: 'c',
      explanation: 'Sinusoidal blood enters at the portal triad and is stripped of oxygen as it travels toward the central vein, so zone 3 is chronically the least oxygenated region and fails first in any low-flow state. The same gradient positions the cytochrome P450 system, particularly CYP2E1, pericentrally, and it is CYP2E1 that converts paracetamol to its toxic quinone-imine metabolite. One gradient therefore produces two superficially unrelated patterns of centrilobular necrosis. Bile actually flows in the opposite direction, from the central region toward the portal triad, and Kupffer cells are distributed along the whole sinusoid.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient with severe tricuspid regurgitation and a raised right atrial pressure has tender hepatomegaly. Compared with a healthy liver, the volume of blood contained within this liver is best described as:',
      options: [
        { id: 'a', text: 'Unchanged, because hepatic blood volume is fixed by the rigid capsule' },
        { id: 'b', text: 'Reduced, because raised outflow pressure diverts portal blood through collaterals' },
        { id: 'c', text: 'Increased by roughly 0.5 to 1 L, because the sinusoids and hepatic veins are highly distensible' },
        { id: 'd', text: 'Increased by about 3 L, exceeding the capacity of any other venous reservoir' },
      ],
      answerId: 'c',
      explanation: 'The liver is a compliant capacitance organ, normally holding about 10% of blood volume, roughly 450 mL. Because its sinusoids and hepatic veins distend readily, a sustained rise in right atrial pressure can add a further 0.5 to 1 L, producing tender and sometimes pulsatile hepatomegaly and, over time, the nutmeg appearance of congested zone 3 against paler periportal tissue. The same compliance works in the opposite direction during haemorrhage, when sympathetic constriction expels several hundred millilitres into the systemic circulation. The capsule is distensible over this range, and an extra 3 L would represent most of the circulating volume.',
      tests: 'mechanism',
    },
  ],
};

export default ghpLiverFunctionalAnatomyBloodFlow;
