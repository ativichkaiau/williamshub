import type { Lecture } from '../../lib/types';

export const nonenvelopedRnaViruses: Lecture = {
  id: 'nonenveloped-rna-viruses',
  title: 'Non-enveloped RNA Viruses',
  system: 'microbiology',
  source: 'L2 — RNA Viruses I (Non-enveloped)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L2 Non-enveloped RNA' },
    { kind: 'mechanism', label: 'Picorna, calici, reovirus' },
    { kind: 'exam', label: 'Polio; norovirus; rotavirus' },
  ],

  highYield: [
    '**Non-enveloped RNA viruses are HARDY (resist acid/bile/detergents) → most spread FAECAL-ORALLY. PICORNAVIRUSES (small +ssRNA): ENTEROVIRUSES — POLIOVIRUS (flaccid paralysis; eradication via vaccines), COXSACKIE (hand-foot-and-mouth, herpangina, myocarditis, aseptic meningitis), ECHOvirus, and HEPATITIS A (acute self-limiting hepatitis, no chronicity); RHINOVIRUS (common cold — acid-labile exception, upper respiratory).**',
    '**CALICIVIRUSES: NOROVIRUS is the leading cause of adult epidemic viral GASTROENTERITIS (explosive vomiting/diarrhoea, outbreaks on cruise ships/institutions; very low infectious dose, environmentally stable). REOVIRUSES (dsRNA, naked): ROTAVIRUS is the leading cause of severe infantile diarrhoea worldwide (dehydration) — prevented by live oral vaccine.**',
    '**HEPATITIS E (hepevirus, +ssRNA, naked) causes enterically-transmitted acute hepatitis (waterborne outbreaks; high mortality in PREGNANCY). ASTROVIRUS also causes gastroenteritis. Because these are naked, alcohol hand-rub is less effective than soap-and-water/hygiene, and they persist on surfaces.**',
    '**Diagnosis is often clinical or by antigen/PCR of stool (rotavirus/norovirus) or serology (hepatitis A/E IgM). Management is mainly SUPPORTIVE (rehydration for gastroenteritis); prevention is by hygiene, sanitation and VACCINES (polio, rotavirus, hepatitis A).**',
    '**The take-home: naked RNA viruses = faecal-oral/hardy — PICORNAVIRUS (enterovirus: polio [paralysis], coxsackie [HFM/myocarditis], hepatitis A; rhinovirus = cold), CALICIVIRUS (NOROVIRUS adult gastroenteritis outbreaks), REOVIRUS (ROTAVIRUS infant diarrhoea — vaccine), hepatitis E (bad in pregnancy). Supportive care + vaccines/hygiene.** The general principles are in [[virology-principles-classification]]; enveloped RNA viruses follow in [[enveloped-rna-viruses-orthomyxo-paramyxo]].',
  ],

  mechanism: {
    title: 'Naked RNA = faecal-oral/hardy: picornavirus (polio/coxsackie/hep A; rhino=cold), calicivirus (norovirus), reovirus (rotavirus), hep E',
    steps: [
      { id: 's1', label: 'Non-enveloped RNA viruses are hardy → faecal-oral spread', emphasis: 'key' },
      { id: 's2', label: 'Picornavirus: enterovirus (polio paralysis, coxsackie HFM/myocarditis, hep A); rhinovirus = cold', emphasis: 'key' },
      { id: 's3', label: 'Calicivirus = NOROVIRUS (adult epidemic gastroenteritis, low dose, outbreaks)', emphasis: 'key' },
      { id: 's4', label: 'Reovirus = ROTAVIRUS (severe infant diarrhoea; live oral vaccine)', emphasis: 'key' },
      { id: 's5', label: 'Hepatitis E = enteric acute hepatitis; high mortality in pregnancy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Acute flaccid paralysis in an unvaccinated child', mechanism: 'Poliovirus (enterovirus/picornavirus)', significance: 'key' },
    { sign: 'Explosive vomiting/diarrhoea outbreak on a cruise ship', mechanism: 'Norovirus (calicivirus)', significance: 'key' },
    { sign: 'Severe dehydrating diarrhoea in an infant', mechanism: 'Rotavirus (reovirus) — vaccine-preventable', significance: 'key' },
    { sign: 'Acute self-limiting hepatitis with no chronic carriage', mechanism: 'Hepatitis A (picornavirus)', significance: 'key' },
    { sign: 'Fulminant hepatitis in a pregnant woman after waterborne exposure', mechanism: 'Hepatitis E', significance: 'key' },
  ],

  investigations: [
    { clue: 'The picornavirus causing flaccid paralysis', meaning: 'Poliovirus' },
    { clue: 'The leading cause of adult epidemic gastroenteritis', meaning: 'Norovirus (calicivirus)' },
    { clue: 'The leading cause of severe infant diarrhoea', meaning: 'Rotavirus (reovirus)' },
    { clue: 'The enteric hepatitis virus dangerous in pregnancy', meaning: 'Hepatitis E' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These hardy, faecal-orally transmitted viruses cause major diarrhoeal and hepatitis disease; management is largely supportive (rehydration), with prevention by sanitation, hygiene (soap-and-water — alcohol is less effective on naked viruses) and vaccines (polio, rotavirus, hepatitis A). Recognising norovirus outbreaks, rotavirus in infants, poliomyelitis and hepatitis E in pregnancy guides public-health response. The structural basis (naked = hardy) is in [[virology-principles-classification]].' },
  ],

  mnemonics: [
    { hook: 'Picornavirus "PERCH": Polio, Echo, Rhino, Coxsackie, Hepatitis A', expansion: ['Naked = faecal-oral', 'Rhino = cold (acid-labile exception)'] },
    { hook: '"Norovirus = adult outbreaks; Rotavirus = infant diarrhoea (vaccine)"', expansion: ['Hep E → bad in pregnancy', 'Supportive care'] },
  ],

  traps: [
    {
      questionCategory: 'Hepatitis A/E chronicity',
      wrongInstinct: 'All hepatitis viruses can become chronic',
      rightAnswer: 'The ENTERICALLY-transmitted, naked hepatitis viruses — hepatitis A and hepatitis E — cause ACUTE, self-limiting hepatitis and do NOT become chronic (unlike the blood-borne enveloped hepatitis B and C); hepatitis E is notable for high mortality in PREGNANCY',
      why: 'The route and chronicity differ: faecal-oral hep A/E are acute-only, while blood-borne hep B/C cause chronic disease/cirrhosis/cancer — a key distinction for prognosis and screening.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The leading cause of severe dehydrating diarrhoea in infants worldwide, preventable by a live oral vaccine, is:',
      options: [
        { id: 'a', text: 'Norovirus' },
        { id: 'b', text: 'Rotavirus' },
        { id: 'c', text: 'Poliovirus' },
        { id: 'd', text: 'Hepatitis A' },
      ],
      answerId: 'b',
      explanation: 'Rotavirus (a naked dsRNA reovirus) is the leading cause of severe infantile gastroenteritis and dehydration, and is prevented by a live oral vaccine. Norovirus causes adult epidemic gastroenteritis; poliovirus causes paralysis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which hepatitis virus is enterically (faecal-orally) transmitted and notable for high mortality in pregnant women?',
      options: [
        { id: 'a', text: 'Hepatitis B' },
        { id: 'b', text: 'Hepatitis E' },
        { id: 'c', text: 'Hepatitis C' },
        { id: 'd', text: 'Hepatitis D' },
      ],
      answerId: 'b',
      explanation: 'Hepatitis E is a naked RNA virus transmitted faecal-orally (often waterborne), causing acute self-limiting hepatitis but with notably high mortality in pregnancy. Hepatitis B, C and D are blood-borne and can become chronic.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nonenvelopedRnaViruses;
