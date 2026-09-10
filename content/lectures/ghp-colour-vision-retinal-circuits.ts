import type { Lecture } from '../../lib/types';

export const ghpColourVisionRetinalCircuits: Lecture = {
  id: 'ghp-colour-vision-retinal-circuits',
  title: 'Colour Vision, Retinal Circuitry and Centre-Surround Fields',
  system: 'neuro',
  source: 'Ch 50 — The Eye II — Receptor & Neural Function of the Retina',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 50 Colour & Retinal Circuits' },
    { kind: 'mechanism', label: 'Three cone ratios → ON/OFF bipolars → centre-surround' },
    { kind: 'exam', label: 'X-linked red-green · lateral inhibition' },
  ],

  highYield: [
    '**Trichromatic theory: three cone pigments, one chemistry, and colour computed as a ratio rather than read off any single cone.** All three cones use **11-cis retinal**; only the opsin differs, and the opsin shifts the absorption peak. The peaks are **blue (S) at about 419 nm, green (M) at about 531 nm and red (L) at about 559 nm**, and the curves are **broad and heavily overlapping** — no cone is a wavelength detector. The brain reads the **relative firing of the three types**, so **monochromatic orange light at 580 nm stimulating red about 99 per cent, green about 42 per cent and blue 0 per cent is indistinguishable from a mixture of red and green that produces the same ratio** (metamerism), and **equal stimulation of all three reads as white**. Note that **red and green peaks sit only about 30 nm apart**, which is exactly why red-green discrimination is the fragile one.',
    '**Red-green colour blindness is common in males because the red and green opsin genes sit side by side on the X chromosome.** The **L (red) and M (green) opsin genes lie in a tandem head-to-tail array on Xq28 and are about 96 per cent identical**, so **misalignment and unequal crossing over during meiosis readily deletes one or fuses them into a hybrid pigment**. Inheritance is therefore **X-linked recessive**: a **male is hemizygous and one abnormal X is enough**, so **about 8 per cent of males are affected against roughly 0.5 per cent of females**, and the classic pedigree runs **affected grandfather, unaffected carrier daughter, affected grandson**. Naming matters: **protan defects involve the red (L) pigment — in protanopia dark red looks black and red appears dim — and deutan defects involve the green (M) pigment with normal brightness**. Both confuse red with green.',
    '**Blue defects break the pattern, and that is the discriminator the question is fishing for.** The **S (blue) opsin gene is on chromosome 7, not the X**, so **tritanopia is autosomal, rare, and affects males and females equally**. Blue cones are also the **sparsest, essentially absent from the very centre of the fovea**, and blue sensitivity is the **first thing acquired disease degrades** — cataract, diabetic retinopathy and glaucoma cause **acquired blue-yellow loss**, whereas an **acquired red-green defect with reduced acuity and a relative afferent pupillary defect points at the optic nerve**. A useful rule: **congenital red-green defects are bilateral, symmetrical, lifelong and unnoticed; acquired dyschromatopsia is often unilateral, progressive and comes with other visual loss**.',
    '**The retinal circuit has a three-neuron direct path crossed by two layers of lateral cells, and the layer tells you the function.** The vertical chain is **photoreceptor to bipolar cell to ganglion cell**. **Horizontal cells spread laterally in the OUTER plexiform layer**, between receptors and bipolars, and build the **antagonistic surround**. **Amacrine cells spread laterally in the INNER plexiform layer**, between bipolars and ganglion cells, and handle **transient, motion and directional signalling** plus the route by which rod signals piggyback onto the cone pathway. **Interplexiform cells feed back from inner to outer**. The output rule is just as testable: **only ganglion cells (and a subset of amacrine cells) generate action potentials — receptors, bipolars and horizontal cells all signal with graded potentials**, and about **1.6 million ganglion axons carry the output of some 126 million receptors**.',
    '**ON and OFF bipolar cells solve the problem created by a receptor that signals light by releasing LESS transmitter.** In darkness photoreceptors pour out **glutamate**. **OFF (flat) bipolar cells carry ordinary ionotropic AMPA and kainate receptors, so glutamate depolarises them and light hyperpolarises them — the sign is preserved.** **ON (invaginating) bipolar cells carry the metabotropic mGluR6 receptor, where glutamate CLOSES a cation channel, so glutamate hyperpolarises them and light DEPOLARISES them — the sign is inverted.** One photoreceptor therefore feeds two parallel channels of opposite polarity, which is how the retina reports **both brightening and darkening with equal speed** rather than wasting half its dynamic range. **Bipolars, like the receptors, use graded potentials and no action potentials.**',
    '**Centre-surround receptive fields are lateral inhibition made visible, and they exist to report borders rather than brightness.** A ganglion cell field is **concentric**: an **ON-centre cell fires to light in the centre and is silenced by light in the surrounding annulus**, an **OFF-centre cell does the reverse. Diffuse light covering both zones produces almost no response**, because the surround, built by **horizontal cells feeding inhibition back onto the receptors and bipolars**, cancels the centre. The consequence is that **the retina transmits contrast and edges, not absolute illumination** — the same computation that produces **Mach bands**, where a uniform strip looks brighter at its light edge and darker at its dark edge. The same trick runs in colour as **opponency**: a **red-on/green-off ganglion cell** takes the ratio the trichromatic theory needs, so **colour opponency and trichromacy are two stages of one system, not rival theories**.',
  ],

  mechanism: {
    title: 'From three cone ratios to a sharpened border',
    steps: [
      { id: 's1', label: 'S, M and L cones respond with broad overlapping curves; no cone codes a wavelength' },
      { id: 's2', label: 'Tonic glutamate release falls in the cones illuminated by the stimulus', emphasis: 'key' },
      { id: 's3', label: 'OFF bipolars follow the sign via AMPA receptors; ON bipolars invert it via mGluR6', emphasis: 'key' },
      { id: 's4', label: 'Horizontal cells in the outer plexiform layer feed inhibition back to build the surround', emphasis: 'key' },
      { id: 's5', label: 'Amacrine cells in the inner plexiform layer add transient and motion signals' },
      { id: 's6', label: 'Ganglion cells fire action potentials coding contrast, colour opponency and change', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A 19-year-old man fails several Ishihara plates but has 6/6 acuity in both eyes, normal fields and normal discs, and had never suspected a problem', mechanism: 'Congenital X-linked red-green defect: bilateral, symmetrical, stable and unaccompanied by any other visual deficit', significance: 'key' },
    { sign: 'Pedigree with an affected maternal grandfather, unaffected mother and affected son', mechanism: 'X-linked recessive transmission of the L or M opsin gene through an obligate carrier daughter', significance: 'key' },
    { sign: 'One eye reports a red object as washed out and orange-grey, with reduced acuity and a relative afferent pupillary defect', mechanism: 'Acquired red desaturation of optic neuritis — dyschromatopsia out of proportion to the acuity loss', significance: 'key' },
    { sign: 'A uniformly shaded strip appears to have a bright band at its light edge and a dark band at its dark edge', mechanism: 'Mach bands: lateral inhibition through horizontal cells exaggerating luminance steps at borders', significance: 'supportive' },
    { sign: 'An infant with pendular nystagmus, marked photophobia, acuity around 6/60 and no colour discrimination at all', mechanism: 'Rod monochromatism (achromatopsia) — absent cone function, so the fovea has nothing to resolve or compare', significance: 'supportive' },
    { sign: 'Blue-yellow discrimination loss in a patient with long-standing diabetes and early lens opacity', mechanism: 'Acquired tritan defect: sparse S cones and short-wavelength absorption by the ageing lens make blue the most vulnerable channel', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Absorption peaks near 419, 531 and 559 nm', meaning: 'Blue (S), green (M) and red (L) cones; the red and green peaks are only about 30 nm apart' },
    { clue: 'L and M opsin genes in a tandem array on Xq28; S opsin on chromosome 7', meaning: 'Red-green defects are X-linked and common; tritan defects are autosomal, rare and sex-neutral' },
    { clue: 'About 8 per cent of males versus 0.5 per cent of females', meaning: 'The hemizygous male prevalence signature of an X-linked recessive trait' },
    { clue: 'Horizontal cells in the outer plexiform layer, amacrine cells in the inner plexiform layer', meaning: 'Surround and contrast are built in the outer layer; transient, motion and rod-to-cone crossover in the inner' },
    { clue: 'mGluR6 on the invaginating bipolar cell', meaning: 'The sign-inverting synapse that creates the ON channel from a receptor that releases less glutamate in light' },
    { clue: 'No response to diffuse illumination covering the whole receptive field', meaning: 'A concentric centre-surround ganglion cell — it encodes contrast at borders, not absolute light level' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The retina is not a camera sensor reporting pixels; it is already doing two computations before anything leaves the eye. **It takes the ratio of three broadly tuned cones, which is what makes colour possible at all**, and **it subtracts each point from its neighbours, which is what makes edges pop and absolute brightness almost invisible**. That is why perception of a grey square depends on its background and why the visual system tolerates a hundred-million-fold range of illumination without recalibrating consciously. It also sets the clinical rule: **congenital colour defects are a stable inherited wiring variant, while a new colour defect is a symptom** and belongs to the optic nerve or the macula until proven otherwise. The receptor stage feeding this: [[ghp-retina-photoreceptors]]. Why light means less glutamate in the first place: [[ghp-phototransduction-dark-adaptation]].' },
    { logic: 'Where it is examined', detail: 'Three reliable stems. A pedigree question that is really testing why an X-linked trait is common in males and why blue defects break the pattern. A sign-inversion question giving a bipolar cell in light and asking whether it depolarises — the answer hinges on mGluR6 versus AMPA. And a receptive field question where diffuse light gives no response, testing lateral inhibition. Downstream, these ganglion cell classes sort into the parvocellular and magnocellular streams: [[visual-pathway-fields]]. The general receptor and lateral inhibition principles that recur in every sensory system: [[sensory-receptors-transduction]].' },
  ],

  mnemonics: [
    { hook: 'Blue left the X', expansion: ['L (red) and M (green) opsins sit together on Xq28 and cross over unequally', 'S (blue) opsin sits on chromosome 7', 'So red-green is X-linked and common in males; tritan is autosomal, rare and sex-neutral'] },
    { hook: 'ON inverts, OFF obeys', expansion: ['ON bipolar: mGluR6, metabotropic, glutamate closes channels, light depolarises it', 'OFF bipolar: AMPA and kainate, ionotropic, glutamate depolarises it, light hyperpolarises it', 'HORizontal cells sit in the OUTer plexiform layer, Amacrine in the Inner'] },
  ],

  traps: [
    {
      questionCategory: 'What a single cone actually encodes',
      wrongInstinct: 'The red cone responds to red light and the green cone to green light, so the cone that fires names the colour',
      rightAnswer: 'Each cone has a broad overlapping response curve and can only report how much it was excited; colour is the ratio across all three, which is why a red-plus-green mixture is indistinguishable from monochromatic yellow',
      why: 'A single receptor cannot distinguish a dim optimal wavelength from a bright off-peak one, so any one-cone system is colour blind by definition.',
    },
    {
      questionCategory: 'Which interneuron builds the antagonistic surround',
      wrongInstinct: 'Amacrine cells, because they are the inhibitory interneurons of the retina',
      rightAnswer: 'Horizontal cells, which spread laterally in the outer plexiform layer and feed inhibition back onto photoreceptor terminals and bipolar dendrites',
      why: 'The surround is generated at the first synapse, before the bipolar cell; amacrine cells act one layer deeper and shape transient, motion and directional responses rather than the concentric field.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman whose father is red-green colour blind marries a man with normal colour vision. What is the expected outcome in their children?',
      options: [
        { id: 'a', text: 'Half the daughters are colour blind and all the sons are normal' },
        { id: 'b', text: 'All daughters are carriers with normal colour vision, and half the sons are colour blind' },
        { id: 'c', text: 'All children are unaffected because the father of the children is normal' },
        { id: 'd', text: 'Half the daughters and half the sons are colour blind' },
      ],
      answerId: 'b',
      explanation: 'The L and M opsin genes lie in a tandem array on Xq28, so red-green colour blindness is X-linked recessive. A woman whose father is affected received his only X, so she is an obligate carrier. Her sons receive her X at random, giving a one in two chance of being affected since a male is hemizygous and has no second copy to mask it. Her daughters receive a normal X from their father, so they cannot be affected but have a one in two chance of being carriers. The overall population figures follow the same logic: about 8 per cent of males against roughly 0.5 per cent of females.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A small spot of light is shone on the centre of a ganglion cell receptive field and the cell fires briskly. The spot is then expanded to illuminate the whole field uniformly. What happens and why?',
      options: [
        { id: 'a', text: 'Firing increases further, because more photoreceptors are now contributing excitation' },
        { id: 'b', text: 'Firing falls back to near baseline, because the illuminated surround inhibits the centre through horizontal cells' },
        { id: 'c', text: 'Firing stops completely and permanently, because the photoreceptors bleach' },
        { id: 'd', text: 'Firing becomes irregular, because amacrine cells impose a directional preference' },
      ],
      answerId: 'b',
      explanation: 'Ganglion cell receptive fields are concentric and antagonistic. An ON-centre cell is excited by light in the centre and inhibited by light in the surrounding annulus, and the two effects largely cancel under uniform illumination, so diffuse light is a poor stimulus. The surround is generated by horizontal cells in the outer plexiform layer, which spread laterally and feed inhibition back onto photoreceptor terminals and bipolar dendrites. The functional point is that the retina is built to signal contrast at borders rather than absolute luminance, which is also what produces Mach bands at a luminance step.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A light stimulus falls on a cone. In the ON (invaginating) bipolar cell contacting that cone, what happens, and through which receptor?',
      options: [
        { id: 'a', text: 'It hyperpolarises, because reduced glutamate removes drive from its ionotropic AMPA receptors' },
        { id: 'b', text: 'It depolarises, because reduced glutamate removes the channel-closing action of its metabotropic mGluR6 receptors' },
        { id: 'c', text: 'It fires a train of action potentials generated by voltage-gated sodium channels' },
        { id: 'd', text: 'It depolarises, because light directly opens cGMP-gated channels in the bipolar membrane' },
      ],
      answerId: 'b',
      explanation: 'Photoreceptors release glutamate tonically in darkness and release less in light. The ON bipolar cell expresses the metabotropic receptor mGluR6, whose activation by glutamate closes a cation channel, so glutamate hyperpolarises it and the reduction of glutamate in light depolarises it: the sign is inverted at this synapse. The OFF bipolar uses ionotropic AMPA and kainate receptors and therefore follows the receptor directly, hyperpolarising in light, which is option a and describes the other channel. Bipolar cells signal with graded potentials, not action potentials, and cGMP-gated channels belong to the photoreceptor outer segment, not to bipolar cells.',
      tests: 'lecture',
    },
  ],
};

export default ghpColourVisionRetinalCircuits;
