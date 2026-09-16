import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpPrimarySecondaryImmunodeficiencies: Lecture = {
  id: 'rbp-primary-secondary-immunodeficiencies',
  title: 'Specific Immunodeficiencies & HIV-Related Immune Loss',
  system: 'pathology',
  source: 'Ch 4 — Diseases of the Immune System',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 4 Diseases of the Immune System' },
    { kind: 'mechanism', label: 'B-cell maturation, phagocyte function & CD4 loss' },
    { kind: 'disease', label: 'Primary & secondary immunodeficiency' },
  ],

  highYield: [
    '**The missing arm predicts the organism, and the rule is derivable rather than memorised.** **Antibody and early complement (C1 to C4) defects** give **encapsulated bacteria** — *Streptococcus pneumoniae*, *Haemophilus influenzae* type b, *Neisseria meningitidis* — because a polysaccharide capsule is slippery to a phagocyte and only **opsonisation by IgG and C3b** provides a handle; **asplenia** fails the same way for the same reason. **Terminal complement (C5 to C9) defects** give **Neisseria and almost nothing else**, because thin-walled gram-negative diplococci are killed by **direct membrane attack complex lysis** rather than by phagocytosis. **T-cell defects** give **viruses, fungi and intracellular organisms** — *Pneumocystis*, *Candida*, CMV, mycobacteria — because these live inside cells where antibody cannot reach. **Phagocyte defects** give **catalase-positive organisms and abscesses**. Learn the four arms and you never need to memorise an organism list.',
    '**Age of onset splits the diagnosis before any test is sent, because maternal IgG is a six-month loan.** Maternal **IgG** is actively transported from about **week 16**, peaks at term, then decays with a half-life of roughly **3 to 4 weeks**, so it is effectively gone by **6 months**. Therefore **T-cell and combined defects present in the first weeks to months** — thrush that will not clear, *Pneumocystis* pneumonia, intractable diarrhoea, failure to thrive — because maternal antibody never substituted for a T cell. **Pure B-cell defects present after 6 months**, classically **X-linked agammaglobulinaemia between 6 months and 2 years**, once the loan is repaid. The corollary is a testing trap: **a normal IgG at 3 months may be entirely maternal**, so in an infant you interpret **IgA and IgM**, which do not cross the placenta and are therefore the infant own production.',
    '**Antibody defects are four distinct diseases, separated by B-cell number and by isotype pattern.** **X-linked agammaglobulinaemia** — **BTK** mutation, boys, **B cells absent**, **all isotypes low**, and the physical sign is **absent tonsils and no palpable lymph nodes** because germinal centres never form; live vaccines are contraindicated. **Common variable immunodeficiency** — **B cells present in normal numbers but unable to become plasma cells**, onset typically in the **20s to 40s**, with a markedly raised rate of **autoimmunity, granulomatous disease and lymphoma**; the number is normal and the function is not. **Selective IgA deficiency** — the commonest primary immunodeficiency at roughly **1 in 600**, often asymptomatic, with mucosal infection and **giardiasis**, and the practical exam point is **anaphylaxis to blood products containing IgA**, requiring washed or IgA-depleted components. **Hyper-IgM syndrome** — **CD40 ligand** on the T cell, so class switching never happens: **IgM normal or high, IgG, IgA and IgE low**, and because CD40L also licenses macrophages these patients get *Pneumocystis*, which looks like a T-cell defect. B-cell development itself is in [[b-cell-development-tolerance]].',
    '**T-cell and combined defects are recognised by what is missing on the chest film and in the calcium.** **DiGeorge syndrome** — **22q11.2 deletion**, failure of the **third and fourth pharyngeal pouches**, so the **thymus and parathyroids** both fail: the neonate presents with **hypocalcaemic tetany or seizures in the first days**, a **conotruncal cardiac defect**, and an **absent thymic shadow**. **Severe combined immunodeficiency** is several genes with one phenotype: **X-linked common gamma chain (IL2RG)** is the commonest at roughly half of cases and gives a **T-minus B-plus NK-minus** pattern, while **adenosine deaminase deficiency** is autosomal recessive and gives **T-minus B-minus NK-minus** because accumulating deoxyadenosine is toxic to all lymphocytes. Untreated SCID is **fatal in the first year** without haematopoietic transplantation, and **live vaccines and non-irradiated cellular blood products are lethal**. Two syndromic combined defects: **Wiskott-Aldrich** — X-linked, **thrombocytopenia with characteristically SMALL platelets**, eczema and infection; and **ataxia-telangiectasia** — **ATM**, a DNA repair defect, with cerebellar ataxia, oculocutaneous telangiectasia, IgA deficiency, **raised alpha-fetoprotein** and lymphoma risk.',
    '**Phagocyte defects split cleanly into getting there and killing once there.** **Leukocyte adhesion deficiency type 1** loses **CD18**, the shared beta-2 integrin chain, so neutrophils cannot firmly adhere and therefore cannot leave the vessel: the blood shows a **high neutrophil count**, the tissue shows **infection with no pus**, and the neonatal clue is **delayed umbilical cord separation beyond about 30 days** with poor wound healing. **Chronic granulomatous disease** loses **NADPH oxidase** (**gp91phox**, X-linked, is the commonest subunit), so neutrophils arrive and phagocytose normally but cannot generate **superoxide**: the result is **recurrent abscesses and granulomas** with **catalase-positive organisms** — *Staphylococcus aureus*, *Serratia*, *Nocardia*, *Burkholderia*, *Aspergillus*. The classical explanation is that catalase-negative organisms obligingly supply hydrogen peroxide the defective neutrophil can borrow while catalase-positive ones destroy their own; that mechanism is genuinely disputed in the microbiology literature, but the organism list it predicts is exactly the one these patients get. **Chediak-Higashi syndrome** loses **LYST**, giving **giant lysosomal granules**, partial albinism, neuropathy and an accelerated haemophagocytic phase.',
    '**HIV is the worked secondary immunodeficiency, and the CD4 thresholds are a dose-response curve for residual T-cell help.** **gp120** binds **CD4**, then a coreceptor — **CCR5** on macrophages for the transmitted strain, **CXCR4** on T cells later — and **gp41** drives fusion; **CCR5-delta32 homozygotes are largely resistant**, which is the natural experiment proving the coreceptor is required. Untreated, CD4 counts fall by roughly **50 to 100 cells per microlitre per year**, and the opportunistic ladder follows because each organism needs a different amount of surviving CD4-dependent macrophage activation: **below 200**, *Pneumocystis* pneumonia; **below 100**, **toxoplasma encephalitis and cryptococcal meningitis**; **below 50**, **CMV retinitis and disseminated MAC**. That is why the count, not the symptom, chooses prophylaxis. Secondary immunodeficiency is far commoner than all primary causes combined: **malnutrition worldwide**, **corticosteroids and biologics**, **chemotherapy-induced neutropenia** (risk climbs steeply below **500** and is severe below **100 per microlitre**), **splenectomy** for encapsulated organisms, **nephrotic syndrome** losing IgG in urine, and **CLL or myeloma**, where a huge paraprotein coexists with functional antibody failure. HIV detail in [[secondary-immunodeficiency-hiv]]; transplant and amyloid consequences in [[rbp-immunodeficiency-transplant-amyloid]].',
  ],

  mechanism: {
    title: 'HIV from entry to the opportunistic-infection ladder',
    steps: [
      {
        id: 's1',
        label: 'gp120 binds CD4, then a chemokine coreceptor — CCR5 early, CXCR4 late',
        detail: 'Two receptors are required, not one. CCR5-delta32 homozygosity confers near-complete resistance to sexual transmission, which is the proof the coreceptor is obligatory.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'gp41 fuses the membranes and reverse transcriptase copies RNA into DNA with no proofreading',
        detail: 'The error rate is the origin of quasispecies diversity, drug resistance and the failure of monotherapy.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'Integrase inserts the provirus into host DNA, creating a latent reservoir',
        detail: 'Latently infected resting memory CD4 cells are invisible to both drugs and immunity, which is why therapy suppresses rather than cures.',
        emphasis: 'danger',
      },
      {
        id: 's4',
        label: 'Activating the cell activates the virus; budding, syncytium formation and pyroptosis kill CD4 cells',
        detail: 'Most CD4 loss is indirect — abortive infection triggering inflammatory death of bystander cells, plus chronic immune activation that exhausts the remaining repertoire.',
        emphasis: 'normal',
      },
      {
        id: 's5',
        label: 'CD4 counts fall by roughly 50 to 100 per microlitre per year and helper signals fade',
        detail: 'Macrophage activation, B-cell help and cytotoxic priming all degrade together, because all three depend on the same CD4 cell.',
        emphasis: 'key',
      },
      {
        id: 's6',
        label: 'The opportunistic ladder unlocks in order: 200, 100, 50',
        detail: 'Pneumocystis below 200; toxoplasma and cryptococcus below 100; CMV retinitis and disseminated MAC below 50. The count is a quantitative proxy for residual help, which is why it predicts the organism.',
        emphasis: 'danger',
      },
    ],
  },

  examFindings: [
    {
      sign: 'Umbilical cord still attached beyond 30 days, with a very high neutrophil count and infections that never form pus',
      mechanism: 'Leukocyte adhesion deficiency type 1 — CD18 loss means neutrophils cannot adhere and leave the vessel, so they pile up in blood and never reach tissue',
      significance: 'key',
    },
    {
      sign: 'Hypocalcaemic seizure in the first days of life with a conotruncal murmur and no thymic shadow',
      mechanism: 'DiGeorge syndrome from 22q11.2 deletion — third and fourth pharyngeal pouches fail together, so thymus and parathyroids are both absent',
      significance: 'key',
    },
    {
      sign: 'Persistent thrush, Pneumocystis pneumonia, chronic diarrhoea and failure to thrive before 6 months',
      mechanism: 'Severe combined immunodeficiency — maternal IgG cannot substitute for a T cell, so presentation is early and the infections are intracellular and fungal',
      significance: 'key',
    },
    {
      sign: 'A boy with recurrent sinopulmonary infection from 9 months, absent tonsils and no palpable lymph nodes',
      mechanism: 'X-linked agammaglobulinaemia — BTK failure means no mature B cells, so germinal centres and the lymphoid tissue built from them never develop',
      significance: 'key',
    },
    {
      sign: 'A second episode of meningococcal meningitis in a teenager with normal immunoglobulins and normal neutrophils',
      mechanism: 'Terminal complement (C5 to C9) deficiency — the membrane attack complex cannot form, and Neisseria is the organism that depends on direct lysis',
      significance: 'key',
    },
    {
      sign: 'Eczema, recurrent infection and petechiae in a boy whose platelets are both few and unusually small',
      mechanism: 'Wiskott-Aldrich syndrome — WAS protein is required for cytoskeletal reorganisation in platelets and lymphocytes alike',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'Quantitative immunoglobulins with post-vaccination antibody titres',
      meaning: 'Concentration and function are different questions. Common variable immunodeficiency has B cells but no response to vaccine; and in an infant under 6 months a normal IgG may be maternal, so read IgA and IgM instead.',
    },
    {
      clue: 'Dihydrorhodamine flow cytometry showing no oxidative burst',
      meaning: 'Chronic granulomatous disease. It has replaced the nitroblue tetrazolium slide test because it is quantitative and also identifies carrier mothers by their bimodal population.',
    },
    {
      clue: 'Flow cytometry for CD18 on neutrophils',
      meaning: 'Absent in leukocyte adhesion deficiency type 1. Note the counter-intuitive blood count that comes with it: the neutrophil number is high, not low, because the cells cannot leave the circulation.',
    },
    {
      clue: 'Lymphocyte subsets in a neonate with suspected SCID',
      meaning: 'The pattern names the gene. T-minus B-plus NK-minus fits X-linked common gamma chain disease; T-minus B-minus NK-minus fits adenosine deaminase deficiency, where the toxic metabolite kills all lymphoid lineages.',
    },
    {
      clue: 'CH50 total haemolytic complement',
      meaning: 'A single screen for the whole classical and terminal pathway. A CH50 of zero in recurrent Neisseria disease points straight at a terminal component; a normal CH50 makes terminal complement deficiency very unlikely.',
    },
    {
      clue: 'HIV fourth-generation antigen and antibody assay, with CD4 count and viral load',
      meaning: 'The p24 antigen shortens the window to roughly 2 to 3 weeks. Then keep the two numbers separate: CD4 count states current risk and selects prophylaxis, viral load states treatment response and infectivity.',
    },
  ],

  treatment: [
    {
      logic: 'In HIV, the CD4 number chooses the prophylaxis, not the symptom',
      detail: 'Start **co-trimoxazole below 200** for *Pneumocystis*, which conveniently also covers **toxoplasma once the count falls below 100**, and add **azithromycin below 50** for disseminated MAC. The logic is that each organism has a threshold of residual CD4-dependent macrophage activation below which it becomes possible, so the count predicts the infection before the patient has one. Prophylaxis is **stopped** once antiretroviral therapy holds the count above threshold for a sustained period — the risk is a function of the current count, not of the lowest count ever recorded.',
    },
    {
      logic: 'Never give a live vaccine or an unirradiated cellular blood product to a suspected T-cell defect',
      detail: 'In SCID or profound T-cell deficiency, **BCG, rotavirus, oral polio, varicella and MMR can disseminate and kill**, and **non-irradiated cellular blood products cause transfusion-associated graft-versus-host disease** because donor lymphocytes engraft in a host that cannot reject them. **Irradiation of the product** is the specific preventive step. Separately, a patient with **selective IgA deficiency** needs **washed or IgA-depleted components**, because anti-IgA antibodies can cause anaphylaxis — a different mechanism with the same practical instruction to check before transfusing.',
    },
  ],

  mnemonics: [
    {
      hook: 'The missing arm names the organism',
      expansion: [
        'Antibody or early complement or no spleen: encapsulated bacteria — pneumococcus, Haemophilus influenzae b, meningococcus.',
        'Terminal complement C5 to C9: Neisseria and essentially nothing else, because lysis is the only way it dies.',
        'T cell: viral, fungal and intracellular — Pneumocystis, Candida, CMV, mycobacteria.',
        'Phagocyte: catalase-positive organisms and abscesses — Staphylococcus aureus, Serratia, Nocardia, Burkholderia, Aspergillus.',
      ],
    },
    {
      hook: 'Six months is the clock',
      expansion: [
        'Maternal IgG crosses from week 16 and decays with a half-life of 3 to 4 weeks, so it runs out at about 6 months.',
        'Presentation before 6 months means the maternal loan was not enough — a T-cell or combined defect.',
        'Presentation after 6 months means the loan ran out — a pure B-cell or antibody defect.',
        'In an infant, read IgA and IgM rather than IgG, because only IgG crossed the placenta.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Leukocyte adhesion deficiency versus chronic granulomatous disease',
      wrongInstinct: 'Both are neutrophil defects, so both should give a low neutrophil count and similar infections.',
      rightAnswer: 'Leukocyte adhesion deficiency gives a HIGH blood neutrophil count with no pus at the site; chronic granulomatous disease gives a normal count with abscesses and granulomas.',
      why: 'One fails at getting there and one fails at killing once there — an adhesion problem versus a chemistry problem, and the blood count separates them before any specialised assay.',
    },
    {
      questionCategory: 'Interpreting immunoglobulins in an infant',
      wrongInstinct: 'A normal IgG at 3 months excludes an antibody deficiency.',
      rightAnswer: 'IgG before 6 months is largely maternal. Read IgA and IgM, which do not cross the placenta and therefore reflect the infant own production.',
      why: 'Placental transport is IgG-selective, so the one isotype that looks reassuring is the one the baby did not make.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 16-year-old has a second episode of meningococcal meningitis. Immunoglobulins, neutrophil count and lymphocyte subsets are all normal, but CH50 is undetectable. Which defect explains this, and why is the infection pattern so narrow?',
      options: [
        { id: 'a', text: 'Terminal complement (C5 to C9) deficiency, because Neisseria is killed by direct membrane attack complex lysis rather than by phagocytosis' },
        { id: 'b', text: 'NADPH oxidase deficiency, because the respiratory burst is needed for all bacterial killing' },
        { id: 'c', text: 'BTK deficiency, because opsonising antibody is required for every encapsulated organism' },
        { id: 'd', text: 'CD18 deficiency, because neutrophils cannot reach the meninges' },
      ],
      answerId: 'a',
      explanation: 'Terminal complement components assemble the membrane attack complex. Most bacteria are cleared by opsonisation and phagocytosis, which is intact here, so the susceptibility is essentially restricted to Neisseria, whose thin gram-negative wall makes it uniquely dependent on direct lysis. A CH50 of zero with normal antibody and normal phagocytes localises the defect in one test.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A man with untreated HIV has a CD4 count of 40 cells per microlitre and is entirely asymptomatic. Which prophylaxis does the count itself mandate, beyond what was already indicated at higher counts?',
      options: [
        { id: 'a', text: 'None, because he has no symptoms' },
        { id: 'b', text: 'Azithromycin for disseminated Mycobacterium avium complex' },
        { id: 'c', text: 'Isoniazid for latent tuberculosis, decided by the CD4 count' },
        { id: 'd', text: 'Fluconazole, because oral candidiasis is inevitable below 50' },
      ],
      answerId: 'b',
      explanation: 'The ladder is quantitative: co-trimoxazole from below 200 for Pneumocystis (and it covers toxoplasma below 100), then azithromycin from below 50 for MAC. Each threshold marks the residual CD4-dependent macrophage activation an organism can no longer overcome, which is why prophylaxis is chosen by the number before any symptom appears. Latent tuberculosis treatment is decided by exposure and testing, not by the count.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'A boy with chronic granulomatous disease gets recurrent Staphylococcus aureus and Serratia abscesses but handles streptococcal infections normally. What best explains the restriction to catalase-positive organisms?',
      options: [
        { id: 'a', text: 'Catalase-positive organisms have capsules that resist opsonisation' },
        { id: 'b', text: 'Neutrophils cannot reach tissue, so only aggressive organisms establish infection' },
        { id: 'c', text: 'The neutrophil cannot generate its own superoxide, and catalase-positive organisms destroy the hydrogen peroxide it could otherwise borrow from them' },
        { id: 'd', text: 'Catalase-positive organisms are intracellular and require T-cell immunity' },
      ],
      answerId: 'c',
      explanation: 'NADPH oxidase failure removes the respiratory burst. The classical teaching is that catalase-negative organisms supply hydrogen peroxide that the defective neutrophil can turn against them, while catalase-positive organisms degrade their own and leave the cell with nothing. That mechanism is debated in the microbiology literature, but the organism list it predicts — Staphylococcus aureus, Serratia, Nocardia, Burkholderia, Aspergillus — is exactly the one seen clinically. Neutrophils in this disease reach tissue normally, which is what separates it from leukocyte adhesion deficiency.',
      tests: 'mechanism',
    },
  ],
};

export default rbpPrimarySecondaryImmunodeficiencies;
