import type { Lecture } from '../../lib/types';

export const ghpOpticsRefractionAccommodation: Lecture = {
  id: 'ghp-optics-refraction-accommodation',
  title: 'Optics of the Eye: Refraction, Accommodation and Presbyopia',
  system: 'neuro',
  source: 'Ch 49 — The Eye I — Optics of Vision',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 49 Optics of Vision' },
    { kind: 'mechanism', label: 'Ciliary contraction → zonules slacken → lens rounds' },
    { kind: 'exam', label: 'Presbyopia · near triad · cycloplegia' },
  ],

  highYield: [
    '**The cornea, not the lens, does most of the focusing — because refraction happens at an interface between two different refractive indices, and the only large jump in the eye is air to tissue.** Light passes from **air (index 1.00) into cornea (1.38)**, and that single surface supplies about **43 of the roughly 59 dioptres** the resting eye possesses. Everything behind it is bathed in fluid: **aqueous 1.33, lens 1.40, vitreous 1.34**. The consequence is the classic vignette — **open the eyes underwater and vision is grossly blurred**, because **water (1.33) nearly matches the cornea and abolishes the air-cornea interface**, leaving a **severely hyperopic eye**. **Goggles restore an air pocket in front of the cornea and vision snaps back.**',
    '**The lens is a feeble refractor in situ and a monster out of it — and that paradox is pure interface physics.** Removed from the eye and surrounded by air, the crystalline lens has a power of about **150 dioptres**. Left where it belongs, with aqueous in front and vitreous behind whose indices nearly match its own, its **net contribution is only about 20 dioptres**. It earns its keep not by strength but by being the **one adjustable element** in the system: the cornea is a fixed lens, the crystalline lens is a variable one.',
    '**Accommodation runs backwards from intuition: the ciliary muscle contracts in order to LET GO.** At rest, the elastic pull of the sclera and choroid keeps the **zonular fibres taut**, and that tension **stretches the lens flat** against its own elasticity. When the **circular and meridional fibres of the ciliary muscle contract**, the ciliary ring **narrows and slides forward**, which **releases zonular tension**; the **elastic lens capsule then moulds the lens into a more spherical shape** and refractive power rises from about **59 to nearly 70 dioptres** in a young eye. So **contraction of a muscle relaxes a ligament** — write that down, because the examiner will offer you the opposite.',
    '**Accommodation is parasympathetic, and blocking it or losing it produces two very different clinical pictures.** The pathway is **Edinger-Westphal nucleus → oculomotor nerve → ciliary ganglion → short ciliary nerves → muscarinic M3 receptors on ciliary muscle**, with only a weak sympathetic beta-adrenergic relaxing influence. **Atropine or cyclopentolate paralyses the ciliary muscle (cycloplegia) and the near image blurs while the pupil dilates** — deliberately exploited in **cycloplegic refraction of children**, whose vigorous accommodation otherwise hides hyperopia. **Pilocarpine does the reverse**, driving contraction, miosis and an accommodative spasm.',
    '**Looking at something near is never accommodation alone — it is a triad, and all three parts serve the same optical goal.** The **near reflex** couples **(1) accommodation** by the ciliary muscle, **(2) convergence** by both medial recti, and **(3) pupillary constriction** by the sphincter pupillae. Convergence keeps the images on **corresponding foveal points**; **miosis narrows the aperture, which cuts spherical aberration and widens the depth of focus**, exactly as stopping down a camera does. All three are **oculomotor and parasympathetic**, which is why **light-near dissociation** — a pupil that will not react to light but still constricts on near effort — points to a lesion of the **pretectal light limb with the near pathway spared**.',
    '**Presbyopia is a lens problem, not a muscle problem, and it is universal.** The lens **grows new fibres throughout life without shedding old ones**, its **proteins progressively denature**, and it becomes **larger, denser and hard**. The **amplitude of accommodation falls from about 14 dioptres at age 10, to roughly 2 dioptres by 45-50, to essentially zero by 70**: the ciliary muscle still contracts and the zonules still slacken, but the **hardened lens no longer changes shape**. The near point therefore drifts outward until print must be held at arm length, and the fix is **added convex power for near work** — reading glasses, bifocals or a progressive addition.',
  ],

  mechanism: {
    title: 'Focusing a near object: from air-cornea interface to a rounded lens',
    steps: [
      { id: 's1', label: 'Air (1.00) to cornea (1.38): the largest index jump, about 43 of 59 dioptres', emphasis: 'key' },
      { id: 's2', label: 'Aqueous, lens and vitreous add only about 20 net dioptres — indices nearly match' },
      { id: 's3', label: 'Near target blurs; Edinger-Westphal fires via ciliary ganglion and short ciliary nerves' },
      { id: 's4', label: 'M3 receptors drive the ciliary ring to narrow and move forward', emphasis: 'key' },
      { id: 's5', label: 'Zonular tension FALLS and the elastic capsule rounds the lens up', emphasis: 'key' },
      { id: 's6', label: 'Power climbs toward 70 dioptres; convergence and miosis complete the near triad' },
    ],
  },

  examFindings: [
    { sign: 'A 47-year-old with previously perfect vision now holds the menu at arm length and reads better in bright light', mechanism: 'Presbyopia — the hardened lens cannot round up when zonular tension is released; a small pupil in bright light buys depth of focus', significance: 'key' },
    { sign: 'A swimmer sees only coloured blurs underwater but sharp detail the moment goggles go on', mechanism: 'Water abolishes the air-cornea interface and with it two thirds of the refractive power; goggles restore the air pocket', significance: 'key' },
    { sign: 'Pupils are small and irregular, do not react to light, yet constrict briskly when the patient looks at the tip of the nose', mechanism: 'Light-near dissociation — the pretectal light limb is interrupted while the near pathway to Edinger-Westphal is intact', significance: 'key' },
    { sign: 'A child given cyclopentolate drops before refraction complains that near print is blurred for the rest of the day', mechanism: 'Cycloplegia — muscarinic blockade paralyses the ciliary muscle so accommodation cannot be added', significance: 'supportive' },
    { sign: 'Eyes converge, pupils constrict and the near point sharpens the instant a pen is brought toward the nose', mechanism: 'The near reflex triad: accommodation, convergence and miosis driven together by the oculomotor parasympathetic outflow', significance: 'key' },
    { sign: 'An uncorrected hyperopic 5-year-old develops an inward turn of one eye that disappears in convex spectacles', mechanism: 'Accommodative esotropia — the accommodative effort needed to clear the image drags convergence along with it', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Total refractive power of the resting eye', meaning: 'About 59 dioptres, of which roughly 43 come from the single air-cornea interface' },
    { clue: 'Power of the crystalline lens in air versus in situ', meaning: 'About 150 dioptres in air but only about 20 in the eye, because aqueous and vitreous nearly match its refractive index' },
    { clue: 'One dioptre', meaning: 'The power that brings parallel rays to a focus at 1 metre; power in dioptres is the reciprocal of the focal length in metres, and diverging lenses are negative' },
    { clue: 'Amplitude of accommodation at 10, 45 and 70 years', meaning: 'About 14 dioptres, about 2 dioptres, and essentially none — the arithmetic of presbyopia' },
    { clue: 'Zonular tension during ciliary muscle contraction', meaning: 'It falls; the ring narrows, the ligament slackens and the lens rounds up' },
    { clue: 'Blurred near vision with a dilated pupil after eye drops', meaning: 'Cycloplegia plus mydriasis from muscarinic blockade of ciliary muscle and sphincter pupillae' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Almost every optics question is really an interface question. Ask where the refractive index changes and by how much, and the answers fall out: the cornea dominates because it faces air, the lens is adjustable because it is elastic, and underwater vision collapses because water impersonates the cornea. The same logic explains why corneal refractive surgery can correct several dioptres from a few microns of tissue while the lens has to change shape dramatically to gain ten. Where the focused image is converted into a signal: [[visual-phototransduction]]. What happens when the eyeball length does not match this power: [[ghp-refractive-errors-visual-acuity]].' },
    { logic: 'Where it is examined', detail: 'Two stems recur. The first asks for the direction of zonular tension during accommodation and rewards the counterintuitive answer. The second offers presbyopia and tempts you toward ciliary muscle failure when the muscle is innocent and the lens is guilty. Keep the near triad together in your head, because a question about convergence is often a question about accommodation wearing a disguise. The medial recti and the oculomotor supply that drive convergence: [[extraocular-muscles-orbital-nerves]]. The pupillary half of the triad and light-near dissociation: [[pupillary-reflexes-horner]].' },
  ],

  mnemonics: [
    { hook: 'Contract to slacken, slacken to round', expansion: ['Ciliary muscle contracts and the ring narrows', 'Zonular fibres go slack, not tight', 'The elastic capsule rounds the lens and power rises'] },
    { hook: 'Three A words for the near triad', expansion: ['Accommodation of the lens', 'Adduction of both eyes, which is convergence', 'Aperture narrowed by miosis for depth of focus'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of zonular tension during accommodation',
      wrongInstinct: 'The ciliary muscle contracts, pulls the suspensory ligament tight and stretches the lens flatter',
      rightAnswer: 'Contraction narrows the ciliary ring and RELEASES zonular tension, letting the elastic lens become more spherical and more powerful',
      why: 'The ciliary muscle is a sphincter around the lens, not a set of guy ropes pulling outward — closing the ring can only bring the anchor points closer.',
    },
    {
      questionCategory: 'Which element supplies most of the refractive power',
      wrongInstinct: 'The crystalline lens, since it is the structure with the highest refractive index',
      rightAnswer: 'The air-cornea interface, contributing about 43 of 59 dioptres, because refraction depends on the difference in index across a surface',
      why: 'A high index is worthless if the neighbouring medium matches it, which is exactly why the lens gives only 20 dioptres in situ and why vision fails underwater.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A competitive swimmer with 6/6 unaided vision opens her eyes underwater and can barely make out the lane markers, yet sees perfectly the moment she puts on goggles. What is the optical explanation?',
      options: [
        { id: 'a', text: 'Water distorts the corneal curvature by osmotic swelling' },
        { id: 'b', text: 'The refractive index of water nearly equals that of the cornea, abolishing the interface that supplies most of the refractive power' },
        { id: 'c', text: 'Sustained accommodation fatigues the ciliary muscle within seconds' },
        { id: 'd', text: 'The pupil dilates underwater and increases spherical aberration' },
      ],
      answerId: 'b',
      explanation: 'Refraction occurs only where the refractive index changes, and the biggest change in the eye is from air at 1.00 to cornea at 1.38, worth roughly 43 of the total 59 dioptres. Water has an index of about 1.33, so with water in front of the cornea that interface almost disappears and the eye is left with the modest 20 dioptres of the lens, which focuses far behind the retina and produces profound hyperopia. Goggles work because they reinstate a layer of air against the cornea, not because they change anything inside the eye.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 20-year-old shifts her gaze from a distant clock to a book held 25 cm away. Which sequence correctly describes what happens inside the eye?',
      options: [
        { id: 'a', text: 'Ciliary muscle relaxes, zonular tension falls, the lens flattens' },
        { id: 'b', text: 'Ciliary muscle contracts, zonular tension rises, the lens flattens' },
        { id: 'c', text: 'Ciliary muscle contracts, zonular tension falls, the lens becomes more spherical' },
        { id: 'd', text: 'Ciliary muscle relaxes, zonular tension rises, the lens becomes more spherical' },
      ],
      answerId: 'c',
      explanation: 'The resting state is the flat lens: elastic tension in the sclera and choroid keeps the zonular fibres taut and stretches the lens against its own elasticity. Parasympathetic drive through the oculomotor nerve and ciliary ganglion contracts the circular and meridional ciliary fibres, which narrows the ciliary ring and moves it forward, so the zonules slacken. Freed from that pull, the elastic capsule moulds the lens into a rounder shape and refractive power climbs from about 59 toward 70 dioptres. Every other option keeps muscle contraction and ligament tension moving in the same direction, which is the mistake this question exists to catch.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 48-year-old accountant with no previous eye trouble finds he must hold spreadsheets at arm length. Distance vision is 6/6, pupils react normally, and eye movements are full. What has changed?',
      options: [
        { id: 'a', text: 'Age-related atrophy of the ciliary muscle has removed the force needed for accommodation' },
        { id: 'b', text: 'Progressive degeneration of the Edinger-Westphal parasympathetic outflow' },
        { id: 'c', text: 'The lens has grown denser and lost elasticity, so it no longer rounds up when zonular tension is released' },
        { id: 'd', text: 'Axial elongation of the globe has moved the retina behind the focal point' },
      ],
      answerId: 'c',
      explanation: 'This is presbyopia. The lens adds fibres throughout life without shedding old ones and its proteins denature, so it becomes larger, denser and stiff. The ciliary muscle still contracts and the zonules still slacken on cue, but the lens cannot deform, and the amplitude of accommodation falls from about 14 dioptres in childhood to roughly 2 by the late forties. Intact pupillary reactions argue against a parasympathetic lesion, since the same outflow drives the sphincter pupillae, and axial elongation would produce myopia with blurred distance vision rather than blurred near vision. The remedy is added convex power for near work.',
      tests: 'lecture',
    },
  ],
};

export default ghpOpticsRefractionAccommodation;
