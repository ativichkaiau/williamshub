// Reusable physiology / pathology figures as inline SVG strings. Each sits on a
// light "paper" panel so it reads on both light and dark cards. Referenced from
// lecture content via the `svg` field of a Figure.

export const FRANK_STARLING = `<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Frank-Starling curves: normal vs failing heart" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="210" rx="10" fill="#fbfbff"/>
  <line x1="54" y1="22" x2="54" y2="176" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="54" y1="176" x2="416" y2="176" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M54,172 C120,118 210,64 410,52" fill="none" stroke="#0d9488" stroke-width="2.5"/>
  <path d="M54,174 C150,160 290,132 410,122" fill="none" stroke="#e11d48" stroke-width="2.5"/>
  <text x="235" y="200" text-anchor="middle" font-size="12" fill="#475569">Preload (LVEDP / EDV) →</text>
  <text x="20" y="100" font-size="12" fill="#475569" transform="rotate(-90 20 100)">Stroke volume →</text>
  <text x="300" y="44" font-size="12" font-weight="600" fill="#0d9488">Normal</text>
  <text x="290" y="138" font-size="12" font-weight="600" fill="#e11d48">Failing (HFrEF)</text>
</svg>`;

export const CARDIAC_ACTION_POTENTIAL = `<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Cardiac action potential phases and antiarrhythmic drug targets" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="210" rx="10" fill="#fbfbff"/>
  <line x1="42" y1="18" x2="42" y2="168" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="42" y1="168" x2="416" y2="168" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M42,150 L82,150 L92,30 L102,54 L214,60 C256,62 300,150 330,150 L416,150" fill="none" stroke="#7c3aed" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="96" y="24" font-size="11" font-weight="700" fill="#334155">0</text>
  <text x="110" y="50" font-size="11" font-weight="700" fill="#334155">1</text>
  <text x="150" y="52" font-size="11" font-weight="700" fill="#334155">2</text>
  <text x="300" y="96" font-size="11" font-weight="700" fill="#334155">3</text>
  <text x="370" y="144" font-size="11" font-weight="700" fill="#334155">4</text>
  <text x="92" y="186" font-size="11" fill="#dc2626">0: Na⁺ in — Class I</text>
  <text x="220" y="186" font-size="11" fill="#d97706">2: Ca²⁺ — Class IV</text>
  <text x="220" y="200" font-size="11" fill="#2563eb">3: K⁺ out — Class III</text>
  <text x="92" y="200" font-size="11" fill="#475569">(nodes: Class II β-block)</text>
</svg>`;

export const ATHEROSCLEROSIS_PLAQUE = `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Atherosclerosis progression: normal, atheroma, plaque rupture with thrombus" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="160" rx="10" fill="#fbfbff"/>
  <!-- Normal -->
  <circle cx="80" cy="66" r="34" fill="#fee2e2" stroke="#cbd5e1" stroke-width="3"/>
  <circle cx="80" cy="66" r="23" fill="#ffffff"/>
  <text x="80" y="130" text-anchor="middle" font-size="11" fill="#475569">Normal</text>
  <!-- Atheroma -->
  <circle cx="220" cy="66" r="34" fill="#fee2e2" stroke="#cbd5e1" stroke-width="3"/>
  <circle cx="220" cy="66" r="23" fill="#ffffff"/>
  <ellipse cx="220" cy="76" rx="19" ry="11" fill="#fcd34d"/>
  <path d="M201,68 Q220,60 239,68" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="220" y="130" text-anchor="middle" font-size="11" fill="#475569">Atheroma (cap + lipid core)</text>
  <!-- Rupture + thrombus -->
  <circle cx="360" cy="66" r="34" fill="#fee2e2" stroke="#cbd5e1" stroke-width="3"/>
  <circle cx="360" cy="66" r="23" fill="#ffffff"/>
  <ellipse cx="360" cy="76" rx="19" ry="11" fill="#fcd34d"/>
  <circle cx="357" cy="60" r="11" fill="#ef4444"/>
  <text x="360" y="130" text-anchor="middle" font-size="11" fill="#475569">Rupture + thrombus</text>
</svg>`;

export const RAAS_PATHWAY = `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Renin-angiotensin-aldosterone system and drug block points" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="250" rx="10" fill="#fbfbff"/>
  <g font-size="12" fill="#334155">
    <rect x="150" y="12" width="140" height="26" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="220" y="29" text-anchor="middle">Angiotensinogen</text>
    <line x1="220" y1="38" x2="220" y2="56" stroke="#94a3b8"/><text x="258" y="51" fill="#475569" font-size="11">Renin</text>
    <rect x="160" y="56" width="120" height="26" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="220" y="73" text-anchor="middle">Angiotensin I</text>
    <line x1="220" y1="82" x2="220" y2="100" stroke="#94a3b8"/><text x="262" y="95" fill="#dc2626" font-size="11">ACE ✗ ACEi</text>
    <rect x="158" y="100" width="124" height="26" rx="6" fill="#e0e7ff" stroke="#a5b4fc"/><text x="220" y="117" text-anchor="middle">Angiotensin II</text>
    <text x="120" y="118" text-anchor="end" fill="#dc2626" font-size="11">ARB ✗ (AT1)</text>
    <line x1="200" y1="126" x2="120" y2="150" stroke="#94a3b8"/><line x1="240" y1="126" x2="320" y2="150" stroke="#94a3b8"/>
    <rect x="40" y="150" width="150" height="30" rx="6" fill="#fee2e2" stroke="#fecaca"/><text x="115" y="169" text-anchor="middle">Vasoconstriction ↑PVR</text>
    <rect x="250" y="150" width="160" height="30" rx="6" fill="#fef3c7" stroke="#fde68a"/><text x="330" y="169" text-anchor="middle">Aldosterone → ↑Na⁺/H₂O</text>
    <text x="330" y="196" text-anchor="middle" fill="#dc2626" font-size="11">MRA ✗</text>
    <line x1="115" y1="180" x2="200" y2="212" stroke="#94a3b8"/><line x1="330" y1="186" x2="240" y2="212" stroke="#94a3b8"/>
    <rect x="170" y="212" width="100" height="28" rx="6" fill="#fee2e2" stroke="#fca5a5"/><text x="220" y="230" text-anchor="middle" font-weight="600" fill="#b91c1c">↑ Blood pressure</text>
  </g>
</svg>`;

export const BP_DETERMINANTS = `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Blood pressure determinants: BP equals cardiac output times peripheral resistance" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="200" rx="10" fill="#fbfbff"/>
  <g font-size="12" fill="#334155">
    <rect x="160" y="12" width="120" height="28" rx="6" fill="#fee2e2" stroke="#fca5a5"/><text x="220" y="30" text-anchor="middle" font-weight="600">Blood pressure</text>
    <text x="220" y="56" text-anchor="middle" fill="#475569">= CO × PVR</text>
    <line x1="180" y1="62" x2="110" y2="84" stroke="#94a3b8"/><line x1="260" y1="62" x2="330" y2="84" stroke="#94a3b8"/>
    <rect x="50" y="84" width="120" height="26" rx="6" fill="#dbeafe" stroke="#bfdbfe"/><text x="110" y="101" text-anchor="middle">Cardiac output</text>
    <rect x="270" y="84" width="130" height="26" rx="6" fill="#dcfce7" stroke="#bbf7d0"/><text x="335" y="101" text-anchor="middle">Periph. resistance</text>
    <text x="110" y="128" text-anchor="middle" fill="#475569">= HR × SV</text>
    <line x1="80" y1="134" x2="50" y2="152" stroke="#94a3b8"/><line x1="140" y1="134" x2="170" y2="152" stroke="#94a3b8"/>
    <rect x="6" y="152" width="80" height="24" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="46" y="168" text-anchor="middle" font-size="11">Heart rate</text>
    <rect x="98" y="152" width="120" height="24" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="158" y="168" text-anchor="middle" font-size="11">Preload·Contract.</text>
    <text x="335" y="128" text-anchor="middle" font-size="11" fill="#475569">SNS · RAAS · vessel tone</text>
  </g>
</svg>`;

export const HYPERTROPHY_PATTERNS = `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Normal, concentric (pressure overload) and eccentric (volume overload) hypertrophy" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="160" rx="10" fill="#fbfbff"/>
  <g stroke="#9ca3af" fill="#fecaca">
    <circle cx="80" cy="60" r="34" stroke-width="6"/><circle cx="80" cy="60" r="26" fill="#ffffff" stroke="none"/>
    <circle cx="220" cy="60" r="34" stroke-width="14"/><circle cx="220" cy="60" r="16" fill="#ffffff" stroke="none"/>
    <circle cx="360" cy="60" r="40" stroke-width="5"/><circle cx="360" cy="60" r="33" fill="#ffffff" stroke="none"/>
  </g>
  <g font-size="11" fill="#475569" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif">
    <text x="80" y="120">Normal</text>
    <text x="220" y="120">Concentric</text><text x="220" y="134" font-size="10">pressure overload (HTN/AS)</text>
    <text x="360" y="124">Eccentric</text><text x="360" y="138" font-size="10">volume overload (AR/dilated)</text>
  </g>
</svg>`;

export const PV_LOOP_NORMAL = `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Normal left-ventricular pressure-volume loop with phases" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="240" rx="10" fill="#fbfbff"/>
  <line x1="55" y1="206" x2="418" y2="206" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="55" y1="22" x2="55" y2="206" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M360,165 L360,58 C322,46 214,44 168,52 L168,168 C226,176 322,173 360,165 Z" fill="none" stroke="#0d9488" stroke-width="2.5"/>
  <g font-size="11" fill="#475569">
    <text x="235" y="230" text-anchor="middle">LV volume →</text>
    <text x="20" y="118" transform="rotate(-90 20 118)">LV pressure →</text>
    <text x="264" y="40" fill="#0d9488">Ejection</text>
    <text x="264" y="190" fill="#0d9488">Filling</text>
    <text x="374" y="116" font-size="10">IVC</text>
    <text x="150" y="116" text-anchor="end" font-size="10">IVR</text>
    <text x="168" y="222" text-anchor="middle" font-size="10">ESV</text>
    <text x="360" y="222" text-anchor="middle" font-size="10">EDV</text>
  </g>
</svg>`;

export const PV_LOOP_HF = `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Pressure-volume loops: normal vs systolic HF vs diastolic HF" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="250" rx="10" fill="#fbfbff"/>
  <line x1="55" y1="200" x2="418" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="55" y1="20" x2="55" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M340,158 L340,54 C306,44 214,42 172,50 L172,160 C224,168 306,165 340,158 Z" fill="none" stroke="#0d9488" stroke-width="2.2"/>
  <path d="M388,168 L388,86 C360,76 296,74 266,80 L266,170 C312,176 360,173 388,168 Z" fill="none" stroke="#e11d48" stroke-width="2.2"/>
  <path d="M334,128 L334,52 C302,42 232,40 196,48 L196,130 C244,142 300,138 334,128 Z" fill="none" stroke="#d97706" stroke-width="2.2"/>
  <g font-size="11" fill="#475569">
    <text x="235" y="228" text-anchor="middle">LV volume →</text>
    <text x="20" y="118" transform="rotate(-90 20 118)">LV pressure →</text>
  </g>
  <g font-size="11">
    <rect x="64" y="28" width="14" height="3" fill="#0d9488"/><text x="84" y="32" fill="#0d9488">Normal</text>
    <rect x="64" y="44" width="14" height="3" fill="#e11d48"/><text x="84" y="48" fill="#e11d48">HFrEF (right shift, ↓SV)</text>
    <rect x="64" y="60" width="14" height="3" fill="#d97706"/><text x="84" y="64" fill="#d97706">HFpEF (↑filling pressure)</text>
  </g>
</svg>`;

export const PV_LOOP_VALVE = `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Pressure-volume loops: normal vs pressure overload vs volume overload" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="250" rx="10" fill="#fbfbff"/>
  <line x1="55" y1="200" x2="418" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="55" y1="18" x2="55" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M340,160 L340,72 C306,62 214,60 172,68 L172,162 C224,170 306,167 340,160 Z" fill="none" stroke="#0d9488" stroke-width="2.2"/>
  <path d="M340,160 L340,34 C306,24 214,22 172,30 L172,162 C224,170 306,167 340,160 Z" fill="none" stroke="#e11d48" stroke-width="2.2"/>
  <path d="M390,164 L376,92 C322,74 226,72 176,82 L172,164 C240,172 330,170 390,164 Z" fill="none" stroke="#d97706" stroke-width="2.2"/>
  <g font-size="11" fill="#475569">
    <text x="235" y="228" text-anchor="middle">LV volume →</text>
    <text x="20" y="118" transform="rotate(-90 20 118)">LV pressure →</text>
  </g>
  <g font-size="11">
    <rect x="64" y="26" width="14" height="3" fill="#0d9488"/><text x="84" y="30" fill="#0d9488">Normal</text>
    <rect x="64" y="42" width="14" height="3" fill="#e11d48"/><text x="84" y="46" fill="#e11d48">Pressure overload (AS) — tall</text>
    <rect x="64" y="58" width="14" height="3" fill="#d97706"/><text x="84" y="62" fill="#d97706">Volume overload (MR/AR) — wide</text>
  </g>
</svg>`;

export const WIGGERS_CYCLE = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Wiggers cardiac cycle: pressures, ventricular volume, ECG and heart sounds" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="300" rx="10" fill="#fbfbff"/>
  <rect x="98" y="24" width="84" height="232" fill="#fde68a" opacity="0.35"/>
  <text x="140" y="20" text-anchor="middle" font-size="10" fill="#92400e">Systole</text>
  <text x="318" y="20" text-anchor="middle" font-size="10" fill="#475569">Diastole</text>
  <!-- aortic pressure -->
  <path d="M50,108 L100,106 C108,84 124,52 158,48 C176,58 182,86 184,96 C186,104 188,110 196,112 C210,116 360,128 410,128" fill="none" stroke="#e11d48" stroke-width="2"/>
  <!-- LV pressure -->
  <path d="M50,132 L96,130 L104,108 C116,60 150,44 162,48 C176,72 178,100 182,112 L190,132 L196,150 C220,140 360,136 410,134" fill="none" stroke="#0d9488" stroke-width="2"/>
  <!-- LA pressure -->
  <path d="M50,140 C70,134 84,142 100,138 C120,144 150,150 182,150 C240,142 330,132 410,128" fill="none" stroke="#64748b" stroke-width="1.4" stroke-dasharray="3 3"/>
  <g font-size="10">
    <text x="414" y="128" fill="#e11d48">Aortic</text>
    <text x="414" y="140" fill="#0d9488">LV</text>
    <text x="414" y="152" fill="#64748b">LA</text>
  </g>
  <!-- LV volume -->
  <path d="M50,196 L100,194 C120,196 150,232 184,234 C220,234 232,210 252,202 C300,184 360,182 410,182" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <text x="54" y="186" font-size="10" fill="#4f46e5">LV volume</text>
  <!-- ECG -->
  <path d="M50,262 L70,262 L78,254 L86,262 L96,262 L100,266 L106,236 L112,272 L118,262 L150,262 L162,252 L178,262 L410,262" fill="none" stroke="#334155" stroke-width="1.4"/>
  <text x="54" y="252" font-size="10" fill="#334155">ECG</text>
  <!-- heart sounds -->
  <line x1="100" y1="276" x2="100" y2="292" stroke="#334155" stroke-width="2"/><text x="100" y="290" text-anchor="middle" font-size="9" fill="#334155" dx="-12">S1</text>
  <line x1="184" y1="276" x2="184" y2="292" stroke="#334155" stroke-width="2"/><text x="196" y="290" text-anchor="middle" font-size="9" fill="#334155">S2</text>
</svg>`;

// ── Neuro / special-senses figures (HNS-2) ───────────────────────────────────

export const VISUAL_FIELD_DEFECTS = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Visual field defects by lesion site along the visual pathway" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="260" rx="10" fill="#fbfbff"/>
  <text x="16" y="22" font-size="12" font-weight="700" fill="#334155">Lesion site → field defect (LE · RE, black = lost)</text>
  <g stroke="#64748b" stroke-width="1.4">
    <!-- rows: cx pairs 330 & 380; helper defect fills = #1e293b -->
    <!-- 1 optic nerve: monocular -->
    <circle cx="330" cy="52" r="15" fill="#1e293b"/><circle cx="380" cy="52" r="15" fill="#fff"/>
    <!-- 2 chiasm: bitemporal -->
    <circle cx="330" cy="98" r="15" fill="#fff"/><path d="M330,83 A15 15 0 0 0 330,113 Z" fill="#1e293b" stroke="none"/>
    <circle cx="380" cy="98" r="15" fill="#fff"/><path d="M380,83 A15 15 0 0 1 380,113 Z" fill="#1e293b" stroke="none"/>
    <!-- 3 optic tract: R homonymous hemianopia -->
    <circle cx="330" cy="144" r="15" fill="#fff"/><path d="M330,129 A15 15 0 0 1 330,159 Z" fill="#1e293b" stroke="none"/>
    <circle cx="380" cy="144" r="15" fill="#fff"/><path d="M380,129 A15 15 0 0 1 380,159 Z" fill="#1e293b" stroke="none"/>
    <!-- 4 temporal radiation: R superior quadrantanopia -->
    <circle cx="330" cy="190" r="15" fill="#fff"/><path d="M330,190 L330,175 A15 15 0 0 1 345,190 Z" fill="#1e293b" stroke="none"/>
    <circle cx="380" cy="190" r="15" fill="#fff"/><path d="M380,190 L380,175 A15 15 0 0 1 395,190 Z" fill="#1e293b" stroke="none"/>
    <!-- 5 occipital: R homonymous hemianopia, macular sparing -->
    <circle cx="330" cy="236" r="15" fill="#fff"/><path d="M330,221 A15 15 0 0 1 330,251 Z" fill="#1e293b" stroke="none"/><circle cx="330" cy="236" r="4.5" fill="#fff" stroke="none"/>
    <circle cx="380" cy="236" r="15" fill="#fff"/><path d="M380,221 A15 15 0 0 1 380,251 Z" fill="#1e293b" stroke="none"/><circle cx="380" cy="236" r="4.5" fill="#fff" stroke="none"/>
  </g>
  <g font-size="11" fill="#475569">
    <text x="16" y="56">1 · Optic nerve — monocular loss</text>
    <text x="16" y="102">2 · Chiasm — bitemporal hemianopia</text>
    <text x="16" y="148">3 · Optic tract — homonymous hemianopia</text>
    <text x="16" y="186">4 · Temporal (Meyer) — superior</text>
    <text x="16" y="199">   quadrantanopia (“pie in the sky”)</text>
    <text x="16" y="240">5 · Occipital — homon., macular sparing</text>
  </g>
</svg>`;

export const EXTRAAXIAL_HEMORRHAGE = `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Epidural (biconvex) versus subdural (crescent) hematoma on CT" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="210" rx="10" fill="#fbfbff"/>
  <!-- Epidural, left -->
  <path d="M40,150 A90 90 0 0 1 210,150 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <path d="M58,150 A74 74 0 0 1 192,150 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <path d="M96,70 Q125,86 154,70 Q140,104 96,70 Z" fill="#dc2626"/>
  <text x="125" y="176" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Epidural</text>
  <text x="125" y="192" text-anchor="middle" font-size="10.5" fill="#475569">biconvex · MMA · lucid interval</text>
  <text x="125" y="204" text-anchor="middle" font-size="10.5" fill="#475569">stops at sutures</text>
  <!-- Subdural, right -->
  <path d="M250,150 A90 90 0 0 1 420,150 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <path d="M268,150 A74 74 0 0 1 402,150 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <path d="M268,150 A74 74 0 0 1 402,150 A82 82 0 0 0 268,150 Z" fill="#dc2626"/>
  <text x="335" y="176" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Subdural</text>
  <text x="335" y="192" text-anchor="middle" font-size="10.5" fill="#475569">crescent · bridging veins · elderly</text>
  <text x="335" y="204" text-anchor="middle" font-size="10.5" fill="#475569">crosses sutures, not midline</text>
</svg>`;

export const BRAIN_HERNIATION = `<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Brain herniation types: subfalcine, uncal (transtentorial), tonsillar" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="420" height="250" rx="10" fill="#fbfbff"/>
  <!-- skull + hemispheres (coronal) -->
  <path d="M40,150 A170 150 0 0 1 380,150 Z" fill="#eef2ff" stroke="#94a3b8" stroke-width="2"/>
  <line x1="210" y1="16" x2="210" y2="150" stroke="#cbd5e1" stroke-width="10"/>
  <text x="150" y="30" font-size="10" fill="#64748b">falx</text>
  <!-- mass on left pushing across -->
  <ellipse cx="120" cy="86" rx="34" ry="28" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="120" y="90" text-anchor="middle" font-size="10" fill="#7f1d1d">mass</text>
  <!-- tentorium + brainstem -->
  <line x1="150" y1="150" x2="270" y2="150" stroke="#cbd5e1" stroke-width="6"/>
  <rect x="196" y="150" width="28" height="60" rx="8" fill="#e2e8f0" stroke="#94a3b8"/>
  <path d="M196,210 q14,26 28,0" fill="#e2e8f0" stroke="#94a3b8"/>
  <g font-size="11" fill="#b91c1c">
    <text x="228" y="44">1 Subfalcine (cingulate under falx)</text>
    <text x="248" y="128">2 Uncal / transtentorial → CN III</text>
    <text x="150" y="238">3 Tonsillar → foramen magnum (brainstem)</text>
  </g>
  <path d="M176,96 h26" stroke="#b91c1c" stroke-width="2" marker-end="url(#ah)"/>
  <defs><marker id="ah" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#b91c1c"/></marker></defs>
</svg>`;

export const CORD_CROSS_SECTION = `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Spinal cord cross-section: dorsal columns, corticospinal and spinothalamic tracts" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="240" rx="10" fill="#fbfbff"/>
  <ellipse cx="200" cy="120" rx="120" ry="96" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
  <!-- butterfly grey matter -->
  <path d="M200,60 C168,64 150,96 150,120 C150,150 168,176 200,180 C232,176 250,150 250,120 C250,96 232,64 200,60 Z" fill="#e9d5ff" stroke="#a78bfa" stroke-width="1.2"/>
  <path d="M200,60 L200,180" stroke="#a78bfa" stroke-width="1.2"/>
  <!-- dorsal columns (posterior) -->
  <rect x="182" y="42" width="36" height="20" rx="5" fill="#bae6fd" stroke="#0284c7"/>
  <text x="200" y="30" text-anchor="middle" font-size="11" fill="#0369a1">Dorsal columns (touch/vibration/proprio, ipsi)</text>
  <!-- lateral corticospinal (posterolateral) -->
  <circle cx="286" cy="104" r="15" fill="#fecaca" stroke="#dc2626"/><circle cx="114" cy="104" r="15" fill="#fecaca" stroke="#dc2626"/>
  <text x="330" y="100" font-size="11" fill="#b91c1c">Lat. corticospinal</text><text x="330" y="114" font-size="11" fill="#b91c1c">(motor, ipsi)</text>
  <!-- spinothalamic (anterolateral) -->
  <circle cx="278" cy="158" r="14" fill="#bbf7d0" stroke="#16a34a"/><circle cx="122" cy="158" r="14" fill="#bbf7d0" stroke="#16a34a"/>
  <text x="12" y="180" font-size="11" fill="#15803d">Spinothalamic</text><text x="12" y="194" font-size="11" fill="#15803d">(pain/temp, contra)</text>
  <!-- anterior horn -->
  <text x="200" y="206" text-anchor="middle" font-size="10.5" fill="#7c3aed">Anterior horn = LMN</text>
</svg>`;

export const CARDINAL_GAZE = `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Cardinal positions of gaze and the extraocular muscle tested in each" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="240" rx="10" fill="#fbfbff"/>
  <text x="220" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Cardinal gaze — muscle tested (Right eye)</text>
  <g font-size="12" fill="#1e293b" text-anchor="middle">
    <circle cx="120" cy="70" r="22" fill="#eef2ff" stroke="#94a3b8"/><text x="120" y="74">SR</text>
    <circle cx="320" cy="70" r="22" fill="#e0f2fe" stroke="#0284c7"/><text x="320" y="74">IO</text>
    <circle cx="120" cy="130" r="22" fill="#eef2ff" stroke="#94a3b8"/><text x="120" y="134">LR→</text>
    <circle cx="320" cy="130" r="22" fill="#eef2ff" stroke="#94a3b8"/><text x="320" y="134">MR</text>
    <circle cx="120" cy="190" r="22" fill="#eef2ff" stroke="#94a3b8"/><text x="120" y="194">IR</text>
    <circle cx="320" cy="190" r="22" fill="#dbeafe" stroke="#2563eb"/><text x="320" y="194">SO</text>
  </g>
  <g font-size="10.5" fill="#475569" text-anchor="middle">
    <text x="120" y="40">abduct+up</text><text x="320" y="40">adduct+up</text>
    <text x="220" y="134">← abduct / adduct →</text>
    <text x="120" y="224">abduct+down</text><text x="320" y="224">adduct+down</text>
  </g>
  <text x="220" y="212" text-anchor="middle" font-size="10.5" fill="#0369a1">Obliques &amp; IO/SO tested in ADduction; SR/IR in ABduction</text>
</svg>`;

export const WEBER_RINNE = `<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Weber and Rinne tuning-fork test interpretation" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="190" rx="10" fill="#fbfbff"/>
  <g font-size="12" fill="#334155">
    <text x="20" y="26" font-weight="700">Tuning-fork tests</text>
    <line x1="20" y1="36" x2="440" y2="36" stroke="#cbd5e1"/>
    <text x="160" y="56" font-weight="600" fill="#0369a1">Rinne (AC vs BC)</text>
    <text x="330" y="56" font-weight="600" fill="#b45309">Weber (lateralize)</text>
    <text x="20" y="86" font-weight="600" fill="#16a34a">Normal</text>
    <text x="160" y="86">AC &gt; BC (positive)</text>
    <text x="330" y="86">central / equal</text>
    <text x="20" y="116" font-weight="600" fill="#dc2626">Conductive</text>
    <text x="160" y="116">BC &gt; AC (negative)</text>
    <text x="330" y="116">→ affected (bad) ear</text>
    <text x="20" y="146" font-weight="600" fill="#7c3aed">Sensorineural</text>
    <text x="160" y="146">AC &gt; BC (positive)</text>
    <text x="330" y="146">→ normal (good) ear</text>
  </g>
</svg>`;

export const DOPAMINE_PATHWAY = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Dopamine synthesis and metabolism with antiparkinson drug block points" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="260" rx="10" fill="#fbfbff"/>
  <g font-size="12" fill="#334155">
    <rect x="160" y="12" width="140" height="26" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="230" y="29" text-anchor="middle">Tyrosine</text>
    <line x1="230" y1="38" x2="230" y2="58" stroke="#94a3b8"/><text x="238" y="52" font-size="11" fill="#475569">tyrosine hydroxylase</text>
    <rect x="150" y="58" width="160" height="26" rx="6" fill="#dcfce7" stroke="#86efac"/><text x="230" y="75" text-anchor="middle">L-DOPA  (given as drug)</text>
    <line x1="230" y1="84" x2="230" y2="104" stroke="#94a3b8"/>
    <text x="238" y="98" font-size="11" fill="#475569">DOPA decarboxylase</text>
    <text x="238" y="112" font-size="11" fill="#dc2626">✗ Carbidopa / benserazide (periphery)</text>
    <rect x="165" y="120" width="130" height="26" rx="6" fill="#fef9c3" stroke="#fde047"/><text x="230" y="137" text-anchor="middle">Dopamine → D-receptors</text>
    <line x1="230" y1="146" x2="230" y2="176" stroke="#94a3b8"/>
    <text x="238" y="164" font-size="11" fill="#475569">MAO-B  · COMT</text>
    <text x="238" y="178" font-size="11" fill="#dc2626">✗ Selegiline/rasagiline · ✗ Entacapone/tolcapone</text>
    <rect x="150" y="186" width="160" height="26" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/><text x="230" y="203" text-anchor="middle">Inactive metabolites</text>
  </g>
  <text x="16" y="238" font-size="11" fill="#7c3aed">Dopamine agonists (pramipexole, ropinirole, apomorphine) act directly at D-receptors →</text>
</svg>`;

export const AED_TARGETS = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Antiepileptic drug targets at the synapse" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="22" font-size="12" font-weight="700" fill="#334155">AED targets: ↓ excitation, ↑ inhibition</text>
  <!-- presynaptic terminal -->
  <path d="M30,40 q120,-8 200,20 q10,50 -40,70 q-90,20 -160,-10 Z" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="70" y="70" font-size="11" fill="#1e3a8a">Presynaptic</text>
  <circle cx="150" cy="86" r="9" fill="#bfdbfe" stroke="#3b82f6"/><text x="150" y="90" font-size="9" text-anchor="middle" fill="#1e3a8a">SV2A</text>
  <g font-size="10.5" fill="#b91c1c">
    <text x="250" y="52">Na⁺ channel ✗ — phenytoin, carbamazepine,</text>
    <text x="262" y="65">lamotrigine, lacosamide, valproate</text>
    <text x="250" y="88">Ca²⁺ channel ✗ — ethosuximide (T-type),</text>
    <text x="262" y="101">gabapentin/pregabalin (α2δ)</text>
    <text x="250" y="124">SV2A vesicle ✗ — levetiracetam</text>
    <text x="250" y="147">AMPA/glutamate ✗ — perampanel, felbamate</text>
  </g>
  <!-- postsynaptic -->
  <rect x="30" y="150" width="400" height="70" rx="10" fill="#f0fdf4" stroke="#86efac"/>
  <text x="45" y="172" font-size="11" fill="#166534">Postsynaptic</text>
  <rect x="150" y="160" width="40" height="18" rx="4" fill="#bbf7d0" stroke="#16a34a"/><text x="170" y="173" font-size="9" text-anchor="middle" fill="#166534">GABA-A</text>
  <text x="205" y="173" font-size="10.5" fill="#166534">Cl⁻ ↑ (inhibition) — benzodiazepines, phenobarbital</text>
  <text x="45" y="205" font-size="10.5" fill="#166534">Broad-spectrum: valproate, topiramate, lamotrigine act at multiple targets</text>
</svg>`;

export const CNS_TUMOR_LOCATIONS = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Common CNS tumor locations on a sagittal brain" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="270" rx="10" fill="#fbfbff"/>
  <!-- cerebrum -->
  <path d="M60,150 C55,70 150,30 230,40 C300,48 340,90 335,140 C335,155 320,165 300,165 L120,165 C90,165 62,165 60,150 Z" fill="#eef2ff" stroke="#94a3b8" stroke-width="1.6"/>
  <!-- brainstem -->
  <path d="M250,165 q10,45 -6,70 q-18,4 -20,-4 q6,-35 4,-66 Z" fill="#e2e8f0" stroke="#94a3b8"/>
  <!-- cerebellum -->
  <path d="M300,165 q60,4 66,44 q2,32 -40,36 q-40,2 -44,-30 q-2,-40 18,-50 Z" fill="#e0e7ff" stroke="#94a3b8"/>
  <!-- markers -->
  <g font-size="10.5">
    <circle cx="160" cy="95" r="5" fill="#dc2626"/><text x="14" y="70" fill="#b91c1c">Glioblastoma / astrocytoma</text><text x="14" y="83" fill="#b91c1c">(hemisphere; adults) · mets</text>
    <circle cx="120" cy="52" r="5" fill="#7c3aed"/><text x="70" y="30" fill="#6d28d9">Meningioma (dura-based)</text>
    <circle cx="335" cy="205" r="5" fill="#0891b2"/><text x="300" y="255" fill="#0e7490">Medulloblastoma &amp;</text><text x="300" y="267" fill="#0e7490">pilocytic (cerebellum, kids)</text>
    <circle cx="262" cy="188" r="5" fill="#16a34a"/><text x="200" y="150" fill="#15803d">Ependymoma (4th ventricle)</text>
    <circle cx="238" cy="150" r="5" fill="#d97706"/><text x="150" y="120" fill="#b45309">Pituitary (sella)</text>
  </g>
</svg>`;

// ── Molecular / biochemistry figures (MBH) ───────────────────────────────────

export const MICHAELIS_MENTEN = `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Michaelis-Menten curve with Vmax and Km, and inhibitor effects" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="230" rx="10" fill="#fbfbff"/>
  <line x1="54" y1="20" x2="54" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="54" y1="180" x2="416" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M54,180 C120,80 240,54 410,48" fill="none" stroke="#0d9488" stroke-width="2.5"/>
  <line x1="54" y1="48" x2="410" y2="48" stroke="#0d9488" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="360" y="42" font-size="11" font-weight="700" fill="#0d9488">Vmax</text>
  <line x1="54" y1="114" x2="150" y2="114" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="150" y1="114" x2="150" y2="180" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="30" y="118" font-size="10" fill="#475569">½Vmax</text>
  <text x="146" y="196" font-size="11" font-weight="700" fill="#334155">Km</text>
  <text x="200" y="214" text-anchor="middle" font-size="12" fill="#475569">[Substrate] →</text>
  <text x="20" y="100" font-size="12" fill="#475569" transform="rotate(-90 20 100)">Velocity (v) →</text>
  <text x="150" y="30" font-size="10.5" fill="#dc2626">Competitive: ↑Km, Vmax same</text>
  <text x="150" y="44" font-size="10.5" fill="#7c3aed">Noncompetitive: ↓Vmax, Km same</text>
</svg>`;

export const DNA_BASE_PAIRING = `<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="DNA base pairing: A-T two hydrogen bonds, G-C three hydrogen bonds, antiparallel strands" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="210" rx="10" fill="#fbfbff"/>
  <text x="70" y="24" font-size="11" font-weight="700" fill="#334155">5′</text>
  <text x="70" y="196" font-size="11" font-weight="700" fill="#334155">3′</text>
  <text x="360" y="24" font-size="11" font-weight="700" fill="#334155">3′</text>
  <text x="360" y="196" font-size="11" font-weight="700" fill="#334155">5′</text>
  <line x1="90" y1="28" x2="90" y2="188" stroke="#94a3b8" stroke-width="6"/>
  <line x1="350" y1="28" x2="350" y2="188" stroke="#94a3b8" stroke-width="6"/>
  <text x="20" y="112" font-size="10.5" fill="#64748b" transform="rotate(-90 20 112)">antiparallel</text>
  <g font-size="12" font-weight="700">
    <rect x="120" y="48" width="34" height="20" rx="4" fill="#fecaca" stroke="#dc2626"/><text x="137" y="63" text-anchor="middle" fill="#7f1d1d">A</text>
    <rect x="286" y="48" width="34" height="20" rx="4" fill="#bfdbfe" stroke="#2563eb"/><text x="303" y="63" text-anchor="middle" fill="#1e3a8a">T</text>
    <line x1="156" y1="55" x2="284" y2="55" stroke="#64748b"/><line x1="156" y1="61" x2="284" y2="61" stroke="#64748b"/>
    <text x="220" y="44" text-anchor="middle" font-size="9.5" font-weight="400" fill="#475569">2 H-bonds</text>
    <rect x="120" y="120" width="34" height="20" rx="4" fill="#bbf7d0" stroke="#16a34a"/><text x="137" y="135" text-anchor="middle" fill="#14532d">G</text>
    <rect x="286" y="120" width="34" height="20" rx="4" fill="#fde68a" stroke="#d97706"/><text x="303" y="135" text-anchor="middle" fill="#78350f">C</text>
    <line x1="156" y1="124" x2="284" y2="124" stroke="#64748b"/><line x1="156" y1="130" x2="284" y2="130" stroke="#64748b"/><line x1="156" y1="136" x2="284" y2="136" stroke="#64748b"/>
    <text x="220" y="116" text-anchor="middle" font-size="9.5" font-weight="400" fill="#475569">3 H-bonds (stronger)</text>
  </g>
  <text x="220" y="182" text-anchor="middle" font-size="10.5" fill="#0369a1">More G≡C → higher Tm (melting temperature)</text>
</svg>`;

export const CHROMATIN_PACKAGING = `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="DNA packaging levels from double helix to chromosome" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="200" rx="10" fill="#fbfbff"/>
  <text x="16" y="22" font-size="12" font-weight="700" fill="#334155">DNA packaging levels</text>
  <!-- 1 double helix -->
  <path d="M30,70 q10,-16 20,0 q10,16 20,0" fill="none" stroke="#0d9488" stroke-width="2"/>
  <text x="50" y="100" text-anchor="middle" font-size="10" fill="#475569">1. Double</text><text x="50" y="112" text-anchor="middle" font-size="10" fill="#475569">helix</text>
  <text x="82" y="72" font-size="14" fill="#94a3b8">→</text>
  <!-- 2 nucleosome beads -->
  <line x1="102" y1="64" x2="168" y2="64" stroke="#cbd5e1" stroke-width="2"/>
  <circle cx="115" cy="64" r="9" fill="#a78bfa"/><circle cx="135" cy="64" r="9" fill="#a78bfa"/><circle cx="155" cy="64" r="9" fill="#a78bfa"/>
  <text x="135" y="100" text-anchor="middle" font-size="10" fill="#475569">2. Nucleosome</text><text x="135" y="112" text-anchor="middle" font-size="10" fill="#475569">(histone octamer)</text>
  <text x="176" y="72" font-size="14" fill="#94a3b8">→</text>
  <!-- 3 solenoid -->
  <rect x="196" y="52" width="44" height="26" rx="10" fill="#c4b5fd" stroke="#7c3aed"/>
  <text x="218" y="100" text-anchor="middle" font-size="10" fill="#475569">3. 30-nm fiber</text><text x="218" y="112" text-anchor="middle" font-size="10" fill="#475569">(solenoid)</text>
  <text x="248" y="72" font-size="14" fill="#94a3b8">→</text>
  <!-- 4 loops -->
  <path d="M270,64 q12,-20 24,0 q12,20 24,0" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="294" y="100" text-anchor="middle" font-size="10" fill="#475569">4. Looped</text><text x="294" y="112" text-anchor="middle" font-size="10" fill="#475569">domains</text>
  <text x="326" y="72" font-size="14" fill="#94a3b8">→</text>
  <!-- 5 chromosome -->
  <path d="M356,44 q-10,20 0,40 M356,44 q10,20 0,40 M376,44 q-10,20 0,40 M376,44 q10,20 0,40" fill="none" stroke="#6d28d9" stroke-width="4"/>
  <text x="366" y="100" text-anchor="middle" font-size="10" fill="#475569">5. Chromosome</text>
  <text x="16" y="150" font-size="10.5" fill="#0369a1">Euchromatin = open, transcriptionally active · Heterochromatin = condensed, silenced</text>
  <text x="16" y="170" font-size="10.5" fill="#475569">Core histones H2A/H2B/H3/H4 (octamer) + H1 linker; ~200 bp per nucleosome</text>
</svg>`;

export const URIC_ACID_PATHWAY = `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Purine degradation to uric acid with allopurinol block point" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="170" rx="10" fill="#fbfbff"/>
  <g font-size="11.5" fill="#334155">
    <rect x="14" y="30" width="86" height="26" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="57" y="47" text-anchor="middle">Adenosine</text>
    <text x="104" y="47" font-size="11" fill="#94a3b8">→</text><text x="104" y="24" font-size="9.5" fill="#475569">ADA</text>
    <rect x="118" y="30" width="80" height="26" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="158" y="47" text-anchor="middle">Hypoxanth.</text>
    <text x="202" y="47" font-size="11" fill="#94a3b8">→</text>
    <rect x="216" y="30" width="70" height="26" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="251" y="47" text-anchor="middle">Xanthine</text>
    <text x="290" y="47" font-size="11" fill="#94a3b8">→</text>
    <rect x="304" y="30" width="80" height="26" rx="6" fill="#fef9c3" stroke="#fde047"/><text x="344" y="47" text-anchor="middle">Uric acid</text>
  </g>
  <text x="158" y="86" text-anchor="middle" font-size="10" fill="#475569">xanthine oxidase</text>
  <text x="290" y="86" text-anchor="middle" font-size="10" fill="#475569">xanthine oxidase</text>
  <path d="M180,74 L200,60 M312,74 L292,60" stroke="#dc2626" stroke-width="1.4"/>
  <text x="150" y="112" font-size="11" fill="#dc2626">✗ Allopurinol / febuxostat inhibit xanthine oxidase → ↓ uric acid</text>
  <text x="16" y="138" font-size="10.5" fill="#7c3aed">HGPRT deficiency (Lesch-Nyhan) → ↑ de novo purine synthesis → hyperuricemia</text>
  <text x="16" y="156" font-size="10.5" fill="#0369a1">Urate crystals in joints = gout; uricosurics (probenecid) ↑ renal excretion</text>
</svg>`;

export const REPLICATION_FORK = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="DNA replication fork: leading and lagging strand synthesis" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="220" rx="10" fill="#fbfbff"/>
  <!-- parental duplex opening into a fork -->
  <path d="M40,110 L210,110" stroke="#94a3b8" stroke-width="3"/>
  <path d="M210,110 L410,44" stroke="#94a3b8" stroke-width="3"/>
  <path d="M210,110 L410,176" stroke="#94a3b8" stroke-width="3"/>
  <circle cx="210" cy="110" r="12" fill="#fca5a5" stroke="#dc2626"/><text x="210" y="140" text-anchor="middle" font-size="10" fill="#b91c1c">helicase</text>
  <!-- leading strand continuous -->
  <path d="M230,64 L400,64" stroke="#0d9488" stroke-width="3" marker-end="url(#fa)"/>
  <text x="300" y="56" text-anchor="middle" font-size="10.5" fill="#0f766e">Leading — continuous (5′→3′)</text>
  <!-- lagging strand Okazaki -->
  <path d="M300,156 L232,156" stroke="#7c3aed" stroke-width="3"/>
  <path d="M400,178 L332,178" stroke="#7c3aed" stroke-width="3"/>
  <text x="330" y="200" text-anchor="middle" font-size="10.5" fill="#6d28d9">Lagging — Okazaki fragments (discontinuous)</text>
  <defs><marker id="fa" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0d9488"/></marker></defs>
  <g font-size="9.5" fill="#475569">
    <text x="250" y="80">primase (RNA primer)</text>
    <text x="16" y="120">SSB coats ssDNA;</text><text x="16" y="132">topoisomerase relieves</text><text x="16" y="144">supercoiling ahead</text>
  </g>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Replication fork</text>
  <text x="250" y="212" font-size="9.5" fill="#475569">Pol I/RNase H remove primer · ligase seals nicks · proofreading 3′→5′ exo</text>
</svg>`;

export const DOPAMINE_TRACTS = `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Four dopamine pathways and the effect of D2 blockade" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="210" rx="10" fill="#fbfbff"/>
  <text x="16" y="22" font-size="12" font-weight="700" fill="#334155">Dopamine tracts & D2 blockade</text>
  <g font-size="10.5">
    <line x1="16" y1="34" x2="444" y2="34" stroke="#cbd5e1"/>
    <text x="20" y="48" font-weight="700" fill="#7c3aed">Pathway</text><text x="180" y="48" font-weight="700" fill="#7c3aed">Function</text><text x="320" y="48" font-weight="700" fill="#7c3aed">D2 block →</text>
    <text x="20" y="74" fill="#334155">Mesolimbic</text><text x="180" y="74" fill="#475569">reward / positive Sx</text><text x="320" y="74" fill="#16a34a">✓ treats psychosis</text>
    <text x="20" y="100" fill="#334155">Mesocortical</text><text x="180" y="100" fill="#475569">cognition / negative Sx</text><text x="320" y="100" fill="#dc2626">worsens negative Sx</text>
    <text x="20" y="126" fill="#334155">Nigrostriatal</text><text x="180" y="126" fill="#475569">movement</text><text x="320" y="126" fill="#dc2626">EPS</text>
    <text x="20" y="152" fill="#334155">Tuberoinfundib.</text><text x="180" y="152" fill="#475569">inhibits prolactin</text><text x="320" y="152" fill="#dc2626">↑ prolactin</text>
  </g>
  <text x="16" y="182" font-size="10.5" fill="#0369a1">Atypicals block 5-HT2A &gt; D2 → fewer EPS & better negative-symptom balance</text>
  <text x="16" y="199" font-size="10.5" fill="#475569">Schizophrenia: ↑ mesolimbic DA (positive) · ↓ mesocortical DA (negative)</text>
</svg>`;

export const CSF_PROFILES = `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="CSF profiles in bacterial, viral and TB or fungal meningitis" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="200" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">CSF in meningitis</text>
  <g font-size="10.5">
    <line x1="14" y1="30" x2="446" y2="30" stroke="#cbd5e1"/>
    <text x="18" y="46" font-weight="700" fill="#475569"> </text>
    <text x="150" y="46" font-weight="700" fill="#dc2626">Bacterial</text>
    <text x="258" y="46" font-weight="700" fill="#7c3aed">Viral</text>
    <text x="352" y="46" font-weight="700" fill="#b45309">TB / Fungal</text>
    <text x="18" y="74" fill="#334155">Cells</text><text x="150" y="74" fill="#475569">↑↑ neutrophils</text><text x="258" y="74" fill="#475569">↑ lymphocytes</text><text x="352" y="74" fill="#475569">↑ lymphocytes</text>
    <text x="18" y="102" fill="#334155">Protein</text><text x="150" y="102" fill="#475569">↑↑</text><text x="258" y="102" fill="#475569">normal / ↑</text><text x="352" y="102" fill="#475569">↑↑↑</text>
    <text x="18" y="130" fill="#334155">Glucose</text><text x="150" y="130" fill="#dc2626">↓↓ (low)</text><text x="258" y="130" fill="#16a34a">normal</text><text x="352" y="130" fill="#b45309">↓ (low)</text>
    <text x="18" y="158" fill="#334155">Opening P.</text><text x="150" y="158" fill="#475569">↑</text><text x="258" y="158" fill="#475569">normal / ↑</text><text x="352" y="158" fill="#475569">↑↑</text>
  </g>
  <text x="16" y="186" font-size="10" fill="#0369a1">Low glucose = bacterial or TB/fungal; normal glucose + lymphocytes = viral</text>
</svg>`;

export const GENE_EXPRESSION_FLOW = `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Gene expression flow: DNA to RNA processing to protein" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="250" rx="10" fill="#fbfbff"/>
  <g font-size="12" fill="#334155">
    <rect x="150" y="14" width="140" height="26" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="220" y="31" text-anchor="middle">DNA (gene)</text>
    <line x1="220" y1="40" x2="220" y2="58" stroke="#94a3b8"/><text x="228" y="53" font-size="11" fill="#dc2626">Transcription (RNA pol II)</text>
    <rect x="150" y="58" width="140" height="26" rx="6" fill="#f5f3ff" stroke="#ddd6fe"/><text x="220" y="75" text-anchor="middle">pre-mRNA (hnRNA)</text>
    <line x1="220" y1="84" x2="220" y2="102" stroke="#94a3b8"/><text x="228" y="97" font-size="11" fill="#7c3aed">5′ cap · splicing · poly-A</text>
    <rect x="150" y="102" width="140" height="26" rx="6" fill="#eff6ff" stroke="#bfdbfe"/><text x="220" y="119" text-anchor="middle">mature mRNA</text>
    <line x1="220" y1="128" x2="220" y2="146" stroke="#94a3b8"/><text x="228" y="141" font-size="11" fill="#0369a1">Translation (ribosome)</text>
    <rect x="150" y="146" width="140" height="26" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/><text x="220" y="163" text-anchor="middle">polypeptide</text>
    <line x1="220" y1="172" x2="220" y2="190" stroke="#94a3b8"/><text x="228" y="185" font-size="11" fill="#16a34a">Post-translational modification</text>
    <rect x="150" y="190" width="140" height="26" rx="6" fill="#fef9c3" stroke="#fde047"/><text x="220" y="207" text-anchor="middle">functional protein</text>
  </g>
  <text x="16" y="236" font-size="10.5" fill="#475569">Prokaryotes: no cap/splicing/poly-A; transcription & translation coupled</text>
</svg>`;

export const FATTY_ACID_TYPES = `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Saturated, cis-unsaturated and trans-unsaturated fatty acids" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="210" rx="10" fill="#fbfbff"/>
  <text x="16" y="22" font-size="12" font-weight="700" fill="#334155">Fatty-acid types</text>
  <!-- saturated: straight zigzag -->
  <circle cx="30" cy="60" r="7" fill="#fca5a5" stroke="#dc2626"/>
  <polyline points="37,60 55,52 73,60 91,52 109,60 127,52 145,60" fill="none" stroke="#334155" stroke-width="2"/>
  <text x="180" y="56" font-size="11" fill="#334155">Saturated — straight, packs tightly,</text>
  <text x="180" y="70" font-size="11" fill="#475569">solid at RT (higher melting point)</text>
  <!-- cis-unsaturated: kinked -->
  <circle cx="30" cy="118" r="7" fill="#fca5a5" stroke="#dc2626"/>
  <polyline points="37,118 55,110 73,118 88,104 78,90 96,86 114,94 132,86 150,94" fill="none" stroke="#16a34a" stroke-width="2"/>
  <text x="180" y="110" font-size="11" fill="#334155">Cis-unsaturated — kinked, fluid,</text>
  <text x="180" y="124" font-size="11" fill="#475569">liquid at RT (lower melting point)</text>
  <!-- trans-unsaturated: straight-ish -->
  <circle cx="30" cy="170" r="7" fill="#fca5a5" stroke="#dc2626"/>
  <polyline points="37,170 55,162 73,170 91,162 105,170 123,162 141,170" fill="none" stroke="#b45309" stroke-width="2"/>
  <text x="180" y="166" font-size="11" fill="#334155">Trans-unsaturated — straight (artificial),</text>
  <text x="180" y="180" font-size="11" fill="#475569">raises cardiovascular risk</text>
  <text x="16" y="200" font-size="10" fill="#0369a1">ω-number counts double bond from the methyl (ω) end: ω-3, ω-6 essential FAs</text>
</svg>`;

export const LIPOPROTEIN_CLASSES = `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Lipoprotein classes and their roles" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="200" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Lipoproteins (↑ protein = ↑ density)</text>
  <g font-size="10.5">
    <line x1="14" y1="30" x2="446" y2="30" stroke="#cbd5e1"/>
    <text x="18" y="46" font-weight="700" fill="#7c3aed">Class</text><text x="150" y="46" font-weight="700" fill="#7c3aed">Main lipid</text><text x="290" y="46" font-weight="700" fill="#7c3aed">Role</text>
    <text x="18" y="72" fill="#334155">Chylomicron</text><text x="150" y="72" fill="#475569">triglyceride (diet)</text><text x="290" y="72" fill="#475569">dietary fat → tissues</text>
    <text x="18" y="98" fill="#334155">VLDL</text><text x="150" y="98" fill="#475569">triglyceride (liver)</text><text x="290" y="98" fill="#475569">liver TG → tissues</text>
    <text x="18" y="124" fill="#334155">LDL</text><text x="150" y="124" fill="#475569">cholesterol</text><text x="290" y="124" fill="#dc2626">delivers chol (“bad”)</text>
    <text x="18" y="150" fill="#334155">HDL</text><text x="150" y="150" fill="#475569">cholesterol/protein</text><text x="290" y="150" fill="#16a34a">reverse transport (“good”)</text>
  </g>
  <text x="16" y="182" font-size="10.5" fill="#0369a1">Chylomicron = most TG / lowest density; HDL = most protein / highest density</text>
</svg>`;

// ── Musculoskeletal figures (HMS-2) ──────────────────────────────────────────

export const ARACHIDONIC_ACID_PATHWAY = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Arachidonic acid pathway with steroid and NSAID block points" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="250" rx="10" fill="#fbfbff"/>
  <g font-size="12" fill="#334155">
    <rect x="140" y="12" width="180" height="24" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="230" y="29" text-anchor="middle">Membrane phospholipid</text>
    <line x1="230" y1="36" x2="230" y2="54" stroke="#94a3b8"/><text x="238" y="49" font-size="10.5" fill="#475569">phospholipase A₂</text><text x="238" y="62" font-size="10.5" fill="#dc2626">✗ corticosteroids</text>
    <rect x="150" y="66" width="160" height="24" rx="6" fill="#fef9c3" stroke="#fde047"/><text x="230" y="83" text-anchor="middle">Arachidonic acid</text>
    <!-- COX branch -->
    <line x1="200" y1="90" x2="120" y2="118" stroke="#94a3b8"/><text x="70" y="108" font-size="10.5" fill="#475569">COX</text><text x="20" y="121" font-size="10" fill="#dc2626">✗ NSAIDs / aspirin</text>
    <rect x="40" y="124" width="150" height="22" rx="6" fill="#fee2e2" stroke="#fca5a5"/><text x="115" y="139" text-anchor="middle" font-size="11">Prostaglandins / TXA₂</text>
    <text x="40" y="166" font-size="10" fill="#475569">Pain · fever · inflammation ·</text>
    <text x="40" y="180" font-size="10" fill="#475569">gastric protection · platelet TXA₂</text>
    <!-- LOX branch -->
    <line x1="260" y1="90" x2="340" y2="118" stroke="#94a3b8"/><text x="345" y="110" font-size="10.5" fill="#475569">5-LOX</text>
    <rect x="285" y="124" width="130" height="22" rx="6" fill="#dbeafe" stroke="#93c5fd"/><text x="350" y="139" text-anchor="middle" font-size="11">Leukotrienes</text>
    <text x="290" y="166" font-size="10" fill="#475569">Bronchoconstriction,</text><text x="290" y="180" font-size="10" fill="#475569">allergy, chemotaxis</text>
  </g>
  <text x="16" y="212" font-size="10.5" fill="#0369a1">Aspirin = irreversible COX; other NSAIDs = reversible. COX-2-selective (coxibs) spare gastric COX-1.</text>
  <text x="16" y="230" font-size="10.5" fill="#7c3aed">Corticosteroids block PLA₂ → suppress BOTH prostaglandins and leukotrienes.</text>
</svg>`;

export const CRYSTAL_ARTHRITIS = `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Gout versus pseudogout crystal comparison" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="200" rx="10" fill="#fbfbff"/>
  <!-- Gout panel -->
  <rect x="16" y="34" width="200" height="120" rx="8" fill="#fff7ed" stroke="#fdba74"/>
  <text x="116" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#c2410c">Gout (MSU)</text>
  <g stroke="#dc2626" stroke-width="2"><line x1="50" y1="70" x2="90" y2="82"/><line x1="70" y1="110" x2="118" y2="98"/><line x1="120" y1="70" x2="160" y2="84"/><line x1="140" y1="120" x2="185" y2="108"/></g>
  <text x="116" y="140" text-anchor="middle" font-size="10.5" fill="#7c2d12">Needle-shaped ·</text>
  <text x="116" y="152" text-anchor="middle" font-size="10.5" fill="#7c2d12">NEGATIVE birefringence</text>
  <!-- Pseudogout panel -->
  <rect x="244" y="34" width="200" height="120" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="344" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">Pseudogout (CPPD)</text>
  <g fill="#93c5fd" stroke="#2563eb" stroke-width="1.4"><rect x="280" y="66" width="18" height="11" transform="rotate(20 289 71)"/><rect x="330" y="86" width="18" height="11" transform="rotate(-15 339 91)"/><rect x="380" y="70" width="18" height="11" transform="rotate(30 389 75)"/><rect x="320" y="118" width="18" height="11" transform="rotate(10 329 123)"/></g>
  <text x="344" y="140" text-anchor="middle" font-size="10.5" fill="#1e3a8a">Rhomboid ·</text>
  <text x="344" y="152" text-anchor="middle" font-size="10.5" fill="#1e3a8a">POSITIVE birefringence</text>
  <text x="16" y="178" font-size="10" fill="#0369a1">Gout: first MTP (podagra), ↑urate. Pseudogout: knee, chondrocalcinosis, &gt;50 y.</text>
</svg>`;

export const BONE_TUMOR_LOCATIONS = `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Bone tumor locations along a long bone" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="440" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="22" font-size="12" font-weight="700" fill="#334155">Bone tumors by site (long bone)</text>
  <!-- long bone silhouette -->
  <path d="M180,36 q30,-6 60,0 q6,10 -8,18 q-14,6 -14,20 l0,90 q0,14 14,20 q14,8 8,18 q-30,6 -60,0 q-6,-10 8,-18 q14,-6 14,-20 l0,-90 q0,-14 -14,-20 q-14,-8 -8,-18 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.6"/>
  <line x1="176" y1="70" x2="244" y2="70" stroke="#cbd5e1" stroke-dasharray="3 3"/>
  <line x1="176" y1="188" x2="244" y2="188" stroke="#cbd5e1" stroke-dasharray="3 3"/>
  <g font-size="10.5">
    <text x="20" y="52" fill="#7c3aed">Epiphysis → Giant cell tumor</text>
    <circle cx="210" cy="50" r="4" fill="#7c3aed"/>
    <text x="20" y="78" fill="#dc2626">Metaphysis → Osteosarcoma</text><text x="20" y="90" fill="#dc2626">(around the knee), osteochondroma</text>
    <circle cx="210" cy="80" r="4" fill="#dc2626"/>
    <text x="250" y="132" fill="#0891b2">Diaphysis →</text><text x="250" y="144" fill="#0891b2">Ewing sarcoma</text>
    <circle cx="228" cy="130" r="4" fill="#0891b2"/>
  </g>
  <text x="16" y="228" font-size="10" fill="#475569">Osteosarcoma: Codman triangle, ↑young. Ewing: small round blue cells, &lt;15 y.</text>
  <text x="16" y="242" font-size="10" fill="#0369a1">Metastasis = most common malignant bone tumor overall.</text>
</svg>`;

export const HYPOTHALAMIC_PITUITARY_AXIS = `<svg viewBox="0 0 470 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Hypothalamic-pituitary target-gland hormone axes" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Hypothalamus → anterior pituitary → target</text>
  <g font-size="9" font-weight="700" fill="#64748b" text-anchor="middle">
    <text x="88" y="40">Hypothalamus</text><text x="212" y="40">Pituitary</text><text x="330" y="40">Target</text><text x="424" y="40">Effector</text>
  </g>
  <g font-size="10">
    <!-- GH -->
    <text x="88" y="62" text-anchor="middle" fill="#be123c">GHRH(+)/SST(−)</text><text x="212" y="62" text-anchor="middle" font-weight="700" fill="#9f1239">GH</text><text x="330" y="62" text-anchor="middle" fill="#7c2d12">Liver</text><text x="424" y="62" text-anchor="middle" fill="#7c2d12">IGF-1</text>
    <!-- TSH -->
    <text x="88" y="86" text-anchor="middle" fill="#0369a1">TRH(+)</text><text x="212" y="86" text-anchor="middle" font-weight="700" fill="#075985">TSH</text><text x="330" y="86" text-anchor="middle" fill="#0c4a6e">Thyroid</text><text x="424" y="86" text-anchor="middle" fill="#0c4a6e">T3/T4</text>
    <!-- ACTH -->
    <text x="88" y="110" text-anchor="middle" fill="#6d28d9">CRH(+)</text><text x="212" y="110" text-anchor="middle" font-weight="700" fill="#5b21b6">ACTH</text><text x="330" y="110" text-anchor="middle" fill="#4c1d95">Adrenal</text><text x="424" y="110" text-anchor="middle" fill="#4c1d95">Cortisol</text>
    <!-- Gonadotropins -->
    <text x="88" y="134" text-anchor="middle" fill="#b45309">GnRH(+)*</text><text x="212" y="134" text-anchor="middle" font-weight="700" fill="#92400e">LH/FSH</text><text x="330" y="134" text-anchor="middle" fill="#78350f">Gonads</text><text x="424" y="134" text-anchor="middle" fill="#78350f">Sex steroids</text>
    <!-- PRL -->
    <text x="88" y="158" text-anchor="middle" fill="#0f766e">Dopamine(−)</text><text x="212" y="158" text-anchor="middle" font-weight="700" fill="#115e59">Prolactin</text><text x="330" y="158" text-anchor="middle" fill="#134e4a">Breast</text><text x="424" y="158" text-anchor="middle" fill="#134e4a">Milk</text>
  </g>
  <g stroke="#cbd5e1"><line x1="130" y1="58" x2="180" y2="58"/><line x1="130" y1="82" x2="180" y2="82"/><line x1="130" y1="106" x2="180" y2="106"/><line x1="130" y1="130" x2="180" y2="130"/><line x1="130" y1="154" x2="180" y2="154"/></g>
  <line x1="16" y1="172" x2="454" y2="172" stroke="#e2e8f0"/>
  <text x="16" y="192" font-size="10" fill="#475569">*GnRH: PULSATILE stimulates; CONTINUOUS suppresses (leuprolide) → the drug paradox.</text>
  <text x="16" y="208" font-size="10" fill="#475569">Prolactin is the only one under tonic INHIBITION (dopamine) → stalk lesion ↑PRL.</text>
  <text x="16" y="228" font-size="10" fill="#0369a1">Mass effect on optic chiasm → bitemporal hemianopsia; apoplexy = emergency.</text>
</svg>`;

export const ADRENAL_STEROIDOGENESIS = `<svg viewBox="0 0 470 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Adrenal cortex zones and steroidogenesis with 21-hydroxylase block" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Adrenal cortex: GFR — Salt, Sugar, Sex</text>
  <g>
    <rect x="16" y="34" width="150" height="52" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="24" y="52" font-size="10.5" font-weight="700" fill="#1d4ed8">Zona Glomerulosa</text>
    <text x="24" y="68" font-size="10" fill="#1e3a8a">→ Aldosterone (salt)</text>
    <text x="24" y="80" font-size="9" fill="#64748b">RAAS / K⁺ control</text>
    <rect x="16" y="94" width="150" height="52" rx="8" fill="#fff7ed" stroke="#fdba74"/>
    <text x="24" y="112" font-size="10.5" font-weight="700" fill="#c2410c">Zona Fasciculata</text>
    <text x="24" y="128" font-size="10" fill="#7c2d12">→ Cortisol (sugar)</text>
    <text x="24" y="140" font-size="9" fill="#64748b">ACTH control</text>
    <rect x="16" y="154" width="150" height="52" rx="8" fill="#fdf4ff" stroke="#e9a8f0"/>
    <text x="24" y="172" font-size="10.5" font-weight="700" fill="#a21caf">Zona Reticularis</text>
    <text x="24" y="188" font-size="10" fill="#701a75">→ Androgens (sex)</text>
    <text x="24" y="200" font-size="9" fill="#64748b">DHEA</text>
  </g>
  <!-- 21-hydroxylase block -->
  <g>
    <line x1="200" y1="70" x2="200" y2="180" stroke="#94a3b8" stroke-dasharray="4 3"/>
    <text x="212" y="60" font-size="11" font-weight="700" fill="#dc2626">21-hydroxylase deficiency (CAH)</text>
    <line x1="220" y1="78" x2="300" y2="78" stroke="#dc2626" stroke-width="2"/><line x1="256" y1="70" x2="264" y2="86" stroke="#dc2626" stroke-width="2"/>
    <text x="220" y="100" font-size="10" fill="#7f1d1d">✗ Aldosterone → salt wasting</text>
    <line x1="220" y1="118" x2="300" y2="118" stroke="#dc2626" stroke-width="2"/><line x1="256" y1="110" x2="264" y2="126" stroke="#dc2626" stroke-width="2"/>
    <text x="220" y="140" font-size="10" fill="#7f1d1d">✗ Cortisol → ↑ACTH</text>
    <text x="220" y="164" font-size="10" font-weight="700" fill="#15803d">↑↑ Androgens → virilization</text>
    <text x="212" y="192" font-size="9.5" fill="#475569">Precursors shunt to the open pathway (sex steroids).</text>
  </g>
  <text x="16" y="228" font-size="10" fill="#0369a1">"The deeper you go, the sweeter it gets"; only glomerulosa lacks 17α-hydroxylase.</text>
  <text x="16" y="242" font-size="10" fill="#475569">Conn = aldo excess; Cushing = cortisol excess; CAH = 21-OH block.</text>
</svg>`;

export const MEN_SYNDROMES = `<svg viewBox="0 0 470 210" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Multiple endocrine neoplasia syndromes comparison" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="210" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Multiple Endocrine Neoplasia (autosomal dominant)</text>
  <g>
    <rect x="16" y="30" width="140" height="150" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="86" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">MEN 1 (Wermer)</text>
    <text x="86" y="62" text-anchor="middle" font-size="9" fill="#64748b">MEN1 tumor suppressor</text>
    <g font-size="10" fill="#1e3a8a"><text x="26" y="84">• Parathyroid</text><text x="26" y="104">• Pancreas (NET)</text><text x="26" y="124">• Pituitary</text></g>
    <text x="86" y="152" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">"3 P's"</text>
  </g>
  <g>
    <rect x="166" y="30" width="140" height="150" rx="8" fill="#fff7ed" stroke="#fdba74"/>
    <text x="236" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#c2410c">MEN 2A (Sipple)</text>
    <text x="236" y="62" text-anchor="middle" font-size="9" fill="#64748b">RET proto-oncogene</text>
    <g font-size="10" fill="#7c2d12"><text x="176" y="84">• Medullary thyroid</text><text x="176" y="104">• Pheochromocytoma</text><text x="176" y="124">• Parathyroid</text></g>
    <text x="236" y="152" text-anchor="middle" font-size="9.5" fill="#c2410c">MTC + pheo + PTH</text>
  </g>
  <g>
    <rect x="316" y="30" width="138" height="150" rx="8" fill="#fdf4ff" stroke="#e9a8f0"/>
    <text x="385" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#a21caf">MEN 2B</text>
    <text x="385" y="62" text-anchor="middle" font-size="9" fill="#64748b">RET proto-oncogene</text>
    <g font-size="10" fill="#701a75"><text x="326" y="84">• Medullary thyroid</text><text x="326" y="104">• Pheochromocytoma</text><text x="326" y="124">• Mucosal neuromas</text><text x="326" y="140">• Marfanoid habitus</text></g>
    <text x="385" y="162" text-anchor="middle" font-size="9.5" fill="#a21caf">NO parathyroid</text>
  </g>
  <text x="16" y="200" font-size="10" fill="#0369a1">Medullary thyroid carcinoma + pheo → look for RET (MEN 2). Prophylactic thyroidectomy.</text>
</svg>`;

export const CUSHING_WORKUP = `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Cushing syndrome laboratory interpretation of the four causes" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="480" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Cushing syndrome: localizing the source</text>
  <!-- header row -->
  <g font-size="10" font-weight="700" fill="#475569">
    <text x="150" y="46" text-anchor="middle">ACTH</text>
    <text x="270" y="46" text-anchor="middle">Low-dose Dex</text>
    <text x="410" y="46" text-anchor="middle">High-dose Dex</text>
  </g>
  <line x1="16" y1="52" x2="464" y2="52" stroke="#cbd5e1"/>
  <g font-size="10">
    <!-- Cushing disease -->
    <text x="16" y="74" font-size="10.5" font-weight="700" fill="#5b21b6">Cushing disease (pituitary)</text>
    <text x="150" y="90" text-anchor="middle" fill="#15803d">↑ High</text>
    <text x="270" y="90" text-anchor="middle" fill="#dc2626">no suppress</text>
    <text x="410" y="90" text-anchor="middle" font-weight="700" fill="#15803d">SUPPRESSES</text>
    <line x1="16" y1="100" x2="464" y2="100" stroke="#eef2f7"/>
    <!-- Ectopic -->
    <text x="16" y="122" font-size="10.5" font-weight="700" fill="#9f1239">Ectopic ACTH (e.g. SCLC)</text>
    <text x="150" y="138" text-anchor="middle" fill="#15803d">↑↑ Very high</text>
    <text x="270" y="138" text-anchor="middle" fill="#dc2626">no suppress</text>
    <text x="410" y="138" text-anchor="middle" fill="#dc2626">no suppress</text>
    <line x1="16" y1="148" x2="464" y2="148" stroke="#eef2f7"/>
    <!-- Adrenal -->
    <text x="16" y="170" font-size="10.5" font-weight="700" fill="#c2410c">Adrenal (adenoma/ca)</text>
    <text x="150" y="186" text-anchor="middle" fill="#dc2626">↓ Low</text>
    <text x="270" y="186" text-anchor="middle" fill="#dc2626">no suppress</text>
    <text x="410" y="186" text-anchor="middle" fill="#dc2626">no suppress</text>
    <line x1="16" y1="196" x2="464" y2="196" stroke="#eef2f7"/>
    <!-- Exogenous -->
    <text x="16" y="218" font-size="10.5" font-weight="700" fill="#0f766e">Exogenous (iatrogenic)</text>
    <text x="150" y="234" text-anchor="middle" fill="#dc2626">↓ Low</text>
    <text x="270" y="234" text-anchor="middle" font-weight="700" fill="#15803d">SUPPRESSED</text>
    <text x="410" y="234" text-anchor="middle" font-weight="700" fill="#15803d">SUPPRESSED</text>
  </g>
</svg>`;

export const RAIU_PATTERNS = `<svg viewBox="0 0 470 210" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Radioactive iodine uptake patterns in hyperthyroidism" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="210" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Radioactive iodine uptake (RAIU) in thyrotoxicosis</text>
  <!-- Graves: diffuse -->
  <g>
    <rect x="16" y="34" width="140" height="120" rx="8" fill="#fff1f2" stroke="#fda4af"/>
    <text x="86" y="52" text-anchor="middle" font-size="10.5" font-weight="700" fill="#be123c">Diffuse ↑ uptake</text>
    <ellipse cx="66" cy="100" rx="16" ry="26" fill="#fb7185"/><ellipse cx="106" cy="100" rx="16" ry="26" fill="#fb7185"/><rect x="80" y="92" width="12" height="16" fill="#fb7185"/>
    <text x="86" y="140" text-anchor="middle" font-size="10.5" font-weight="700" fill="#9f1239">Graves disease</text>
  </g>
  <!-- Toxic adenoma: focal -->
  <g>
    <rect x="166" y="34" width="140" height="120" rx="8" fill="#fff7ed" stroke="#fdba74"/>
    <text x="236" y="52" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c2410c">Focal ("hot") nodule</text>
    <ellipse cx="216" cy="100" rx="16" ry="26" fill="#fed7aa"/><ellipse cx="256" cy="100" rx="16" ry="26" fill="#fed7aa"/><circle cx="216" cy="100" r="11" fill="#ea580c"/>
    <text x="236" y="140" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c2410c">Toxic adenoma</text>
  </g>
  <!-- Thyroiditis: decreased -->
  <g>
    <rect x="316" y="34" width="138" height="120" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="385" y="52" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d4ed8">↓ uptake</text>
    <ellipse cx="365" cy="100" rx="16" ry="26" fill="#dbeafe" stroke="#93c5fd"/><ellipse cx="405" cy="100" rx="16" ry="26" fill="#dbeafe" stroke="#93c5fd"/>
    <text x="385" y="140" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d4ed8">Thyroiditis</text>
  </g>
  <text x="16" y="180" font-size="10" fill="#475569">Thyroiditis (or exogenous T4) releases preformed hormone → gland uptake is LOW.</text>
  <text x="16" y="196" font-size="10" fill="#0369a1">High T4/T3 with LOW TSH confirms thyrotoxicosis; RAIU pattern gives the cause.</text>
</svg>`;

export const THYROID_MALIGNANCY = `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Thyroid carcinoma types compared" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="480" height="240" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Thyroid carcinomas</text>
  <g>
    <rect x="14" y="30" width="112" height="176" rx="8" fill="#ecfdf5" stroke="#6ee7b7"/>
    <text x="70" y="48" text-anchor="middle" font-size="10.5" font-weight="700" fill="#047857">Papillary (85%)</text>
    <g font-size="8.6" fill="#065f46"><text x="20" y="66">Follicular cell</text><text x="20" y="80">Orphan-Annie</text><text x="20" y="92">nuclei, grooves</text><text x="20" y="106">Psammoma bodies</text><text x="20" y="120">Lymphatic spread</text><text x="20" y="134">Radiation, Hashimoto</text><text x="20" y="148">Cold nodule / FNA</text></g>
    <text x="70" y="196" text-anchor="middle" font-size="9.5" font-weight="700" fill="#047857">BEST prognosis</text>
  </g>
  <g>
    <rect x="130" y="30" width="112" height="176" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="186" y="48" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d4ed8">Follicular (5-15%)</text>
    <g font-size="8.6" fill="#1e3a8a"><text x="136" y="66">Follicular cell</text><text x="136" y="80">Capsular +</text><text x="136" y="92">vascular invasion</text><text x="136" y="106">Hematogenous</text><text x="136" y="120">(bone, lung)</text><text x="136" y="134">FNA can't diagnose</text><text x="136" y="148">(needs capsule)</text></g>
    <text x="186" y="196" text-anchor="middle" font-size="9.5" fill="#1d4ed8">Good prognosis</text>
  </g>
  <g>
    <rect x="246" y="30" width="112" height="176" rx="8" fill="#fff7ed" stroke="#fdba74"/>
    <text x="302" y="48" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c2410c">Medullary (5%)</text>
    <g font-size="8.6" fill="#7c2d12"><text x="252" y="66">Parafollicular</text><text x="252" y="80">C cells</text><text x="252" y="94">↑ Calcitonin</text><text x="252" y="108">Amyloid stroma</text><text x="252" y="122">MEN 2 / RET</text><text x="252" y="136">(sporadic too)</text></g>
    <text x="302" y="196" text-anchor="middle" font-size="9.5" fill="#c2410c">Screen RET</text>
  </g>
  <g>
    <rect x="362" y="30" width="104" height="176" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="414" y="48" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">Anaplastic (&lt;5%)</text>
    <g font-size="8.6" fill="#7f1d1d"><text x="368" y="66">Elderly (&gt;60)</text><text x="368" y="80">Giant &amp; spindle</text><text x="368" y="94">cells</text><text x="368" y="108">Rapid invasion</text><text x="368" y="122">+ metastasis</text></g>
    <text x="414" y="196" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b91c1c">WORST prognosis</text>
  </g>
  <text x="16" y="228" font-size="10" fill="#0369a1">Papillary = commonest &amp; nuclear features; follicular = invasion; medullary = calcitonin/amyloid; anaplastic = lethal.</text>
</svg>`;

export const KARYOTYPE_NOTATION = `<svg viewBox="0 0 470 210" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Reading an ISCN karyotype string" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="210" rx="10" fill="#fbfbff"/>
  <text x="16" y="22" font-size="12" font-weight="700" fill="#334155">Reading a karyotype (ISCN)</text>
  <text x="235" y="66" text-anchor="middle" font-size="20" font-weight="800" fill="#0f172a" font-family="ui-monospace, monospace">46,XY,del(5)(p15)</text>
  <g font-size="10" fill="#475569">
    <line x1="70" y1="76" x2="70" y2="96" stroke="#94a3b8"/><text x="70" y="112" text-anchor="middle" font-weight="700" fill="#0369a1">chromosome #</text>
    <line x1="130" y1="76" x2="130" y2="126" stroke="#94a3b8"/><text x="130" y="142" text-anchor="middle" font-weight="700" fill="#7c3aed">sex chromosomes</text>
    <line x1="205" y1="76" x2="205" y2="96" stroke="#94a3b8"/><text x="205" y="112" text-anchor="middle" font-weight="700" fill="#c2410c">abnormality</text>
    <line x1="258" y1="76" x2="258" y2="126" stroke="#94a3b8"/><text x="258" y="142" text-anchor="middle" font-weight="700" fill="#0891b2">chromosome</text>
    <line x1="300" y1="76" x2="300" y2="96" stroke="#94a3b8"/><text x="320" y="112" text-anchor="middle" font-weight="700" fill="#be123c">band (p=short arm)</text>
  </g>
  <text x="16" y="172" font-size="10" fill="#475569">Order: total number, sex chromosomes, then abnormalities (X before Y before autosomes, ascending).</text>
  <text x="16" y="188" font-size="10" fill="#0369a1">+/− = whole-chromosome gain/loss (47,XY,+21); del/dup/t/inv/r/i = structural; [n] = cell count.</text>
</svg>`;

export const AUTOSOMAL_TRISOMIES = `<svg viewBox="0 0 470 220" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Autosomal trisomies 21, 18, 13 compared" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="220" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Viable autosomal trisomies</text>
  <g>
    <rect x="14" y="30" width="146" height="160" rx="8" fill="#ecfdf5" stroke="#6ee7b7"/>
    <text x="87" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">Trisomy 21 — Down</text>
    <g font-size="9" fill="#065f46"><text x="20" y="66">Commonest; 1/850</text><text x="20" y="80">Hypotonia, flat face</text><text x="20" y="94">Epicanthus, ↑palpebral</text><text x="20" y="108">Brushfield spots</text><text x="20" y="122">Simian crease</text><text x="20" y="136">AV septal / duodenal</text><text x="20" y="150">atresia; ↑leukemia</text><text x="20" y="164">Early Alzheimer</text></g>
    <text x="87" y="182" text-anchor="middle" font-size="8.5" fill="#047857">95% nondisjunction (mat.)</text>
  </g>
  <g>
    <rect x="164" y="30" width="146" height="160" rx="8" fill="#fff7ed" stroke="#fdba74"/>
    <text x="237" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#c2410c">Trisomy 18 — Edwards</text>
    <g font-size="9" fill="#7c2d12"><text x="170" y="66">1/7500; die &lt;1 y</text><text x="170" y="80">Prominent occiput</text><text x="170" y="94">Micrognathia</text><text x="170" y="108">Low-set ears</text><text x="170" y="122">Clenched fists w/</text><text x="170" y="136">overlapping fingers</text><text x="170" y="150">Rocker-bottom feet</text><text x="170" y="164">Heart defects</text></g>
    <text x="237" y="182" text-anchor="middle" font-size="8.5" fill="#c2410c">"Election age 18"</text>
  </g>
  <g>
    <rect x="314" y="30" width="142" height="160" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="385" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">Trisomy 13 — Patau</text>
    <g font-size="9" fill="#7f1d1d"><text x="320" y="66">1/15–25k; die &lt;1 mo</text><text x="320" y="80">Microcephaly</text><text x="320" y="94">Holoprosencephaly</text><text x="320" y="108">Cleft lip/palate</text><text x="320" y="122">Microphthalmia,</text><text x="320" y="136">iris coloboma</text><text x="320" y="150">Polydactyly</text><text x="320" y="164">Rocker-bottom feet</text></g>
    <text x="385" y="182" text-anchor="middle" font-size="8.5" fill="#b91c1c">"Puberty 13"</text>
  </g>
  <text x="16" y="210" font-size="10" fill="#0369a1">All ↑ with maternal age; ~4% of Down is Robertsonian t(14;21) — recurrence risk matters.</text>
</svg>`;

export const SEX_CHROMOSOME_ANEUPLOIDIES = `<svg viewBox="0 0 470 220" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Sex chromosome aneuploidies compared" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="220" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Sex chromosome aneuploidies · Barr bodies = (X count − 1)</text>
  <g>
    <rect x="14" y="30" width="110" height="150" rx="8" fill="#fff1f2" stroke="#fda4af"/>
    <text x="69" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#be123c">Turner</text>
    <text x="69" y="63" text-anchor="middle" font-size="10" font-weight="700" fill="#9f1239">45,X</text>
    <g font-size="8.6" fill="#7f1d1d"><text x="20" y="80">Female, short</text><text x="20" y="93">Webbed neck</text><text x="20" y="106">Cystic hygroma</text><text x="20" y="119">Coarctation aorta</text><text x="20" y="132">Ovarian dysgenesis</text><text x="20" y="145">1° amenorrhea</text><text x="20" y="158">0 Barr bodies</text></g>
  </g>
  <g>
    <rect x="128" y="30" width="110" height="150" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="183" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Klinefelter</text>
    <text x="183" y="63" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">47,XXY</text>
    <g font-size="8.6" fill="#1e3a8a"><text x="134" y="80">Male, tall</text><text x="134" y="93">Small firm testes</text><text x="134" y="106">Gynecomastia</text><text x="134" y="119">Hypogonadism</text><text x="134" y="132">Azoospermia</text><text x="134" y="145">↑ FSH/LH</text><text x="134" y="158">1 Barr body</text></g>
  </g>
  <g>
    <rect x="242" y="30" width="104" height="150" rx="8" fill="#fdf4ff" stroke="#e9a8f0"/>
    <text x="294" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#a21caf">Triple X</text>
    <text x="294" y="63" text-anchor="middle" font-size="10" font-weight="700" fill="#86198f">47,XXX</text>
    <g font-size="8.6" fill="#701a75"><text x="248" y="80">Female</text><text x="248" y="93">Usually normal</text><text x="248" y="106">Tall</text><text x="248" y="119">Mild learning</text><text x="248" y="132">Mostly fertile</text><text x="248" y="145">2 Barr bodies</text></g>
  </g>
  <g>
    <rect x="350" y="30" width="106" height="150" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="403" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">Jacobs (XYY)</text>
    <text x="403" y="63" text-anchor="middle" font-size="10" font-weight="700" fill="#166534">47,XYY</text>
    <g font-size="8.6" fill="#14532d"><text x="356" y="80">Male, tall</text><text x="356" y="93">Normal fertility</text><text x="356" y="106">Normal / mild ↓IQ</text><text x="356" y="119">Behavioral</text><text x="356" y="132">0 Barr bodies</text></g>
  </g>
  <text x="16" y="200" font-size="10" fill="#0369a1">Short stature (Turner) &amp; tall stature (extra X/Y) both trace to SHOX-gene dosage (PAR1).</text>
  <text x="16" y="214" font-size="9.5" fill="#475569">Turner: loss usually paternal; Klinefelter tall + SHOX; XIST coats the inactive X.</text>
</svg>`;

export const INHERITANCE_PATTERNS = `<svg viewBox="0 0 470 220" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Mendelian inheritance patterns quick reference" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="220" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Recognizing the inheritance pattern</text>
  <g>
    <rect x="14" y="30" width="220" height="82" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="24" y="48" font-size="10.5" font-weight="700" fill="#1d4ed8">Autosomal dominant</text>
    <g font-size="9" fill="#1e3a8a"><text x="24" y="64">Every generation (vertical)</text><text x="24" y="78">M = F affected; 50% to offspring</text><text x="24" y="92">Delayed onset, variable expression</text><text x="24" y="104">e.g. Huntington, Marfan</text></g>
  </g>
  <g>
    <rect x="238" y="30" width="218" height="82" rx="8" fill="#ecfdf5" stroke="#6ee7b7"/>
    <text x="248" y="48" font-size="10.5" font-weight="700" fill="#047857">Autosomal recessive</text>
    <g font-size="9" fill="#065f46"><text x="248" y="64">Skips generations (horizontal)</text><text x="248" y="78">Carrier parents; 25% risk</text><text x="248" y="92">↑ with consanguinity</text><text x="248" y="104">e.g. cystic fibrosis, thalassemia</text></g>
  </g>
  <g>
    <rect x="14" y="118" width="220" height="82" rx="8" fill="#fff7ed" stroke="#fdba74"/>
    <text x="24" y="136" font-size="10.5" font-weight="700" fill="#c2410c">X-linked recessive</text>
    <g font-size="9" fill="#7c2d12"><text x="24" y="152">Mainly males; carrier mothers</text><text x="24" y="166">NO male-to-male transmission</text><text x="24" y="180">e.g. hemophilia, G6PD, colour-blind</text></g>
  </g>
  <g>
    <rect x="238" y="118" width="218" height="82" rx="8" fill="#fdf4ff" stroke="#e9a8f0"/>
    <text x="248" y="136" font-size="10.5" font-weight="700" fill="#a21caf">Mitochondrial</text>
    <g font-size="9" fill="#701a75"><text x="248" y="152">Maternal only; all offspring</text><text x="248" y="166">Affected males don't transmit</text><text x="248" y="180">Heteroplasmy → variable</text></g>
  </g>
</svg>`;

export const THALASSEMIA_SCREENING = `<svg viewBox="0 0 470 240" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Thalassemia carrier screening algorithm" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="240" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Thalassemia carrier screening (couple)</text>
  <g font-size="9.5">
    <rect x="150" y="30" width="170" height="30" rx="6" fill="#eef2f7" stroke="#cbd5e1"/>
    <text x="235" y="49" text-anchor="middle" font-weight="700" fill="#334155">MCV &amp; DCIP (OF) screen</text>
    <line x1="235" y1="60" x2="235" y2="74" stroke="#94a3b8"/>
    <!-- MCV branch -->
    <rect x="30" y="74" width="180" height="28" rx="6" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="120" y="92" text-anchor="middle" fill="#1d4ed8">MCV &lt; 80 fL → PCR for α-thal-1</text>
    <line x1="120" y1="102" x2="120" y2="116" stroke="#94a3b8"/>
    <rect x="30" y="116" width="180" height="26" rx="6" fill="#dbeafe" stroke="#93c5fd"/>
    <text x="120" y="133" text-anchor="middle" fill="#1e3a8a">+ → α-thal-1 trait (SEA deletion)</text>
    <!-- DCIP / HbA2 branch -->
    <rect x="258" y="74" width="184" height="28" rx="6" fill="#fff7ed" stroke="#fdba74"/>
    <text x="350" y="92" text-anchor="middle" fill="#c2410c">DCIP + / HbA2 → Hb typing</text>
    <line x1="350" y1="102" x2="350" y2="116" stroke="#94a3b8"/>
    <rect x="258" y="116" width="184" height="26" rx="6" fill="#fed7aa" stroke="#fdba74"/>
    <text x="350" y="133" text-anchor="middle" fill="#7c2d12">HbA2&gt;4% = β-trait; HbE band = HbE</text>
  </g>
  <line x1="120" y1="142" x2="235" y2="160" stroke="#94a3b8"/><line x1="350" y1="142" x2="235" y2="160" stroke="#94a3b8"/>
  <rect x="120" y="160" width="230" height="30" rx="6" fill="#fef2f2" stroke="#fca5a5"/>
  <text x="235" y="179" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b91c1c">Both partners carriers → prenatal diagnosis</text>
  <text x="16" y="210" font-size="9.5" fill="#475569">At-risk severe disease: Hb Bart's hydrops (α-thal-1 × α-thal-1), homozygous β-thal, β-thal/HbE.</text>
  <text x="16" y="226" font-size="9.5" fill="#0369a1">Prenatal Dx: CVS (10–13 wk), amniocentesis (15–20 wk), cordocentesis, or PGT before implantation.</text>
</svg>`;

export const BRACHIAL_PLEXUS = `<svg viewBox="0 0 490 240" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Brachial plexus organization from roots to terminal branches" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="490" height="240" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Brachial plexus (C5–T1)</text>
  <g font-size="9" font-weight="700" fill="#64748b" text-anchor="middle">
    <text x="50" y="38">Roots</text><text x="140" y="38">Trunks</text><text x="228" y="38">Divisions</text><text x="318" y="38">Cords</text><text x="430" y="38">Branches</text>
  </g>
  <!-- roots -->
  <g font-size="9.5" fill="#0369a1" text-anchor="middle"><text x="50" y="60">C5</text><text x="50" y="86">C6</text><text x="50" y="112">C7</text><text x="50" y="138">C8</text><text x="50" y="164">T1</text></g>
  <!-- trunks -->
  <g font-size="9" fill="#7c3aed" text-anchor="middle"><text x="140" y="70">Upper</text><text x="140" y="112">Middle</text><text x="140" y="150">Lower</text></g>
  <g stroke="#cbd5e1"><line x1="66" y1="58" x2="118" y2="66"/><line x1="66" y1="84" x2="118" y2="66"/><line x1="66" y1="110" x2="120" y2="108"/><line x1="66" y1="136" x2="118" y2="146"/><line x1="66" y1="162" x2="118" y2="146"/></g>
  <!-- divisions -->
  <g font-size="8.5" fill="#c2410c" text-anchor="middle"><text x="228" y="92">anterior ×3</text><text x="228" y="128">posterior ×3</text></g>
  <!-- cords -->
  <g font-size="9" fill="#15803d" text-anchor="middle"><text x="318" y="70">Lateral</text><text x="318" y="112">Posterior</text><text x="318" y="150">Medial</text></g>
  <!-- branches -->
  <g font-size="8.8" fill="#334155"><text x="378" y="60">Musculocutaneous (C5-7)</text><text x="378" y="86">Axillary (C5-6)</text><text x="378" y="112">Radial (C5-T1)</text><text x="378" y="138">Median (C5-T1)</text><text x="378" y="162">Ulnar (C8-T1)</text></g>
  <g stroke="#cbd5e1"><line x1="346" y1="66" x2="374" y2="58"/><line x1="346" y1="108" x2="374" y2="84"/><line x1="346" y1="112" x2="374" y2="110"/><line x1="346" y1="112" x2="374" y2="136"/><line x1="346" y1="148" x2="374" y2="160"/></g>
  <text x="16" y="196" font-size="10" fill="#475569">"Real Texans Drink Cold Beer": Roots → Trunks → Divisions → Cords → Branches.</text>
  <text x="16" y="212" font-size="9.5" fill="#0369a1">Upper-trunk (C5-6) injury = Erb palsy ("waiter's tip"); lower-trunk (C8-T1) = Klumpke (claw hand).</text>
  <text x="16" y="228" font-size="9.5" fill="#475569">Posterior cord → axillary + radial ("wrist drop"); lateral+medial cords → median.</text>
</svg>`;

export const HUMERUS_NERVE_INJURY = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Humerus fracture sites and the nerve injured at each" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Humerus fractures → nerve at risk</text>
  <!-- humerus silhouette -->
  <path d="M205,34 q26,-6 42,0 q6,10 2,22 l-4,18 q-2,10 0,20 l0,70 q0,10 -6,18 l-16,22 q-6,8 -16,8 q-10,0 -12,-10 l-2,-18 q-1,-10 5,-16 q8,-8 8,-20 l0,-74 q0,-12 -4,-22 q-4,-12 4,-18 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <g font-size="10.5">
    <circle cx="216" cy="60" r="4" fill="#be123c"/><text x="20" y="56" font-weight="700" fill="#be123c">Surgical neck</text><text x="20" y="70" fill="#7f1d1d">→ Axillary n. (deltoid, ↓shoulder abduction)</text>
    <circle cx="220" cy="120" r="4" fill="#c2410c"/><text x="20" y="112" font-weight="700" fill="#c2410c">Midshaft / radial groove</text><text x="20" y="126" fill="#7c2d12">→ Radial n. (WRIST DROP)</text>
    <circle cx="212" cy="192" r="4" fill="#7c3aed"/><text x="278" y="186" font-weight="700" fill="#7c3aed">Supracondylar</text><text x="270" y="200" fill="#4c1d95">→ Median n. +</text><text x="270" y="213" fill="#4c1d95">brachial artery</text>
    <circle cx="238" cy="206" r="4" fill="#0891b2"/><text x="300" y="228" font-weight="700" fill="#0891b2">Medial epicondyle</text><text x="300" y="241" fill="#155e75">→ Ulnar n. (claw)</text>
  </g>
</svg>`;

export const HAND_NERVE_LESIONS = `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Median, ulnar and radial nerve hand lesions" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="480" height="220" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Upper-limb nerve lesions in the hand</text>
  <g>
    <rect x="14" y="30" width="150" height="150" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="89" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Median nerve</text>
    <g font-size="9" fill="#1e3a8a"><text x="20" y="66">Carpal tunnel (wrist)</text><text x="20" y="80">"Ape / simian hand"</text><text x="20" y="94">Loss of thumb opposition</text><text x="20" y="108">Thenar wasting</text><text x="20" y="122">"Hand of benediction"</text><text x="20" y="136">on making a fist</text><text x="20" y="152">Sensory: lateral 3½</text><text x="20" y="164">digits (palmar)</text></g>
  </g>
  <g>
    <rect x="168" y="30" width="150" height="150" rx="8" fill="#fff7ed" stroke="#fdba74"/>
    <text x="243" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#c2410c">Ulnar nerve</text>
    <g font-size="9" fill="#7c2d12"><text x="174" y="66">Guyon canal / elbow</text><text x="174" y="80">"Claw hand" (4th-5th)</text><text x="174" y="94">Froment sign +</text><text x="174" y="108">Loss of ab/adduction</text><text x="174" y="122">(interossei)</text><text x="174" y="136">Hypothenar wasting</text><text x="174" y="152">Sensory: medial 1½</text><text x="174" y="164">digits</text></g>
  </g>
  <g>
    <rect x="322" y="30" width="144" height="150" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="394" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">Radial nerve</text>
    <g font-size="9" fill="#7f1d1d"><text x="328" y="66">Radial groove / PIN</text><text x="328" y="80">"WRIST DROP"</text><text x="328" y="94">Loss of extension</text><text x="328" y="108">(wrist &amp; fingers)</text><text x="328" y="122">Triceps spared if</text><text x="328" y="136">below groove</text><text x="328" y="152">Sensory: dorsal</text><text x="328" y="164">"snuffbox" web</text></g>
  </g>
  <text x="16" y="202" font-size="9.5" fill="#0369a1">"Ulnar paradox": a more proximal (elbow) ulnar lesion gives LESS clawing than a distal one.</text>
</svg>`;

export const VERTEBRAL_LIGAMENTS = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Intervertebral disc and vertebral column ligaments" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Vertebral joints, disc &amp; ligaments (sagittal)</text>
  <!-- two vertebral bodies -->
  <rect x="120" y="44" width="120" height="46" rx="6" fill="#f1f5f9" stroke="#94a3b8"/>
  <rect x="120" y="140" width="120" height="46" rx="6" fill="#f1f5f9" stroke="#94a3b8"/>
  <!-- disc -->
  <rect x="120" y="94" width="120" height="42" rx="8" fill="#fef9c3" stroke="#fde047"/>
  <ellipse cx="180" cy="115" rx="20" ry="13" fill="#fca5a5" stroke="#ef4444"/>
  <text x="180" y="118" text-anchor="middle" font-size="8" fill="#7f1d1d">nucleus</text>
  <text x="128" y="132" font-size="8" fill="#a16207">annulus fibrosus</text>
  <!-- ALL -->
  <line x1="116" y1="44" x2="116" y2="186" stroke="#2563eb" stroke-width="3"/><text x="20" y="118" font-size="9.5" font-weight="700" fill="#1d4ed8">ALL (anterior)</text>
  <!-- PLL -->
  <line x1="244" y1="44" x2="244" y2="186" stroke="#c2410c" stroke-width="3"/><text x="250" y="86" font-size="9.5" font-weight="700" fill="#c2410c">PLL (posterior,</text><text x="250" y="99" font-size="9.5" fill="#7c2d12">narrow → weak)</text>
  <!-- herniation arrow -->
  <path d="M240,115 q26,2 40,10" stroke="#dc2626" stroke-width="2" fill="none" marker-end="url(#ah)"/>
  <defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker></defs>
  <text x="286" y="128" font-size="9" fill="#b91c1c">postero-lateral</text><text x="286" y="140" font-size="9" fill="#b91c1c">herniation →</text><text x="286" y="152" font-size="9" fill="#b91c1c">nerve root</text>
  <!-- ligamentum flavum + spinous -->
  <text x="286" y="176" font-size="9" fill="#15803d">ligamentum flavum,</text><text x="286" y="188" font-size="9" fill="#15803d">inter/supraspinous lig.</text>
  <text x="16" y="220" font-size="9.5" fill="#475569">Common herniation: L4-L5, L5-S1, C5-C6. Disc herniates postero-laterally (PLL is weak there).</text>
  <text x="16" y="236" font-size="9.5" fill="#0369a1">Atlanto-occipital = "yes" nod (flex/extend); atlanto-axial = "no" rotation (dens + transverse lig).</text>
</svg>`;

export const SCALP_LAYERS = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="The five layers of the scalp (SCALP mnemonic)" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="240" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Layers of the scalp — "SCALP"</text>
  <g>
    <rect x="40" y="34" width="380" height="26" fill="#fde68a" stroke="#f59e0b"/><text x="48" y="51" font-size="10.5" font-weight="700" fill="#92400e">S — Skin</text>
    <rect x="40" y="60" width="380" height="30" fill="#fca5a5" stroke="#ef4444"/><text x="48" y="79" font-size="10.5" font-weight="700" fill="#7f1d1d">C — Connective tissue (dense)</text><text x="230" y="79" font-size="9" fill="#7f1d1d">vessels held open → bleeds profusely</text>
    <rect x="40" y="90" width="380" height="26" fill="#e2e8f0" stroke="#94a3b8"/><text x="48" y="107" font-size="10.5" font-weight="700" fill="#334155">A — Aponeurosis (epicranial/galea)</text>
    <rect x="40" y="116" width="380" height="30" fill="#fbcfe8" stroke="#ec4899"/><text x="48" y="135" font-size="10.5" font-weight="700" fill="#9d174d">L — Loose areolar tissue</text><text x="250" y="135" font-size="9" fill="#9d174d">"DANGER area" (emissary veins)</text>
    <rect x="40" y="146" width="380" height="24" fill="#cbd5e1" stroke="#64748b"/><text x="48" y="162" font-size="10.5" font-weight="700" fill="#1e293b">P — Pericranium (periosteum)</text>
  </g>
  <text x="16" y="192" font-size="10" fill="#475569">First 3 layers (S-C-A) move as one (scalp proper); deep wounds gape when the aponeurosis is cut.</text>
  <text x="16" y="208" font-size="10" fill="#9d174d">Loose layer = "danger area": infection spreads here and can reach the cranial venous sinuses.</text>
  <text x="16" y="224" font-size="10" fill="#0369a1">Emissary veins link scalp veins ↔ dural venous sinuses (route for infection).</text>
</svg>`;

export const NECK_TRIANGLES = `<svg viewBox="0 0 470 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Anterior and posterior triangles of the neck" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="470" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Triangles of the neck (divided by SCM)</text>
  <g>
    <rect x="16" y="30" width="216" height="196" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="124" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Anterior triangle</text>
    <text x="124" y="62" text-anchor="middle" font-size="8.5" fill="#64748b">(SCM · midline · mandible)</text>
    <g font-size="9" fill="#1e3a8a"><text x="24" y="82">• Carotid: common carotid,</text><text x="30" y="94">IJV, vagus, ansa cervicalis</text><text x="24" y="112">• Submandibular: gland,</text><text x="30" y="124">hypoglossal n. (XII)</text><text x="24" y="142">• Submental: mylohyoid</text><text x="24" y="160">• Muscular: infrahyoid,</text><text x="30" y="172">thyroid gland</text></g>
    <text x="124" y="204" text-anchor="middle" font-size="9" fill="#1d4ed8">Contains carotid system</text>
  </g>
  <g>
    <rect x="240" y="30" width="214" height="196" rx="8" fill="#fff7ed" stroke="#fdba74"/>
    <text x="347" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#c2410c">Posterior triangle</text>
    <text x="347" y="62" text-anchor="middle" font-size="8.5" fill="#64748b">(SCM · trapezius · clavicle)</text>
    <g font-size="9" fill="#7c2d12"><text x="248" y="82">• Accessory nerve (CN XI)</text><text x="248" y="100">• Phrenic nerve (C3–C5)</text><text x="248" y="118">• Brachial plexus roots/trunks</text><text x="248" y="136">• Cervical plexus (nerve point)</text><text x="248" y="154">• External jugular vein</text><text x="248" y="172">• Thyrocervical trunk branches</text></g>
    <text x="347" y="204" text-anchor="middle" font-size="9" fill="#c2410c">Floor: scalenes, levator scap.</text>
  </g>
  <text x="16" y="242" font-size="10" fill="#0369a1">SCM = CN XI (accessory); a posterior-triangle lymph-node biopsy risks the accessory nerve.</text>
</svg>`;

export const LUNG_LOBES_FISSURES = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Lobes and fissures of the right and left lungs" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Lungs: lobes &amp; fissures</text>
  <!-- Right lung: 3 lobes -->
  <text x="120" y="40" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">RIGHT (3 lobes)</text>
  <path d="M70,52 q60,-8 96,10 q10,60 -6,150 q-50,14 -96,0 q-8,-80 6,-160 Z" fill="#dbeafe" stroke="#60a5fa"/>
  <line x1="74" y1="108" x2="164" y2="96" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="70" y1="150" x2="164" y2="96" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="110" y="82" font-size="8.5" fill="#1e3a8a">Superior</text>
  <text x="130" y="120" font-size="8.5" fill="#1e3a8a">Middle</text>
  <text x="104" y="185" font-size="8.5" fill="#1e3a8a">Inferior</text>
  <text x="70" y="230" font-size="8" fill="#1d4ed8">Horizontal + oblique fissure · 10 segments</text>
  <!-- Left lung: 2 lobes + cardiac notch -->
  <text x="330" y="40" text-anchor="middle" font-size="10.5" font-weight="700" fill="#be123c">LEFT (2 lobes)</text>
  <path d="M296,52 q60,-8 92,10 q10,60 -6,150 q-46,14 -86,0 q-6,-40 -2,-70 q10,-6 8,-16 q-8,-4 -8,-14 q-4,-30 2,-60 Z" fill="#fee2e2" stroke="#f87171"/>
  <line x1="300" y1="150" x2="384" y2="96" stroke="#be123c" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="326" y="86" font-size="8.5" fill="#7f1d1d">Superior</text>
  <text x="330" y="185" font-size="8.5" fill="#7f1d1d">Inferior</text>
  <text x="288" y="150" font-size="8" fill="#be123c">cardiac</text><text x="288" y="160" font-size="8" fill="#be123c">notch</text>
  <text x="296" y="230" font-size="8" fill="#be123c">Oblique fissure · lingula · 8 segments</text>
  <text x="16" y="246" font-size="9.5" fill="#475569">Right main bronchus = wider, shorter, more vertical → foreign bodies lodge here.</text>
</svg>`;

export const MEDIASTINUM_DIVISIONS = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Divisions of the mediastinum" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="250" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Divisions of the mediastinum (sagittal)</text>
  <!-- superior -->
  <rect x="120" y="30" width="230" height="40" fill="#ede9fe" stroke="#c4b5fd"/>
  <text x="235" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="#6d28d9">Superior</text>
  <text x="235" y="62" text-anchor="middle" font-size="8" fill="#5b21b6">arch of aorta, SVC, trachea, esophagus, thymus, thoracic duct</text>
  <line x1="112" y1="70" x2="358" y2="70" stroke="#94a3b8" stroke-dasharray="4 3"/>
  <text x="60" y="74" font-size="7.5" fill="#64748b">sternal angle (T4–T5)</text>
  <!-- inferior: anterior / middle / posterior -->
  <rect x="120" y="72" width="52" height="150" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="146" y="140" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8" transform="rotate(-90 146 140)">Anterior</text>
  <text x="146" y="212" text-anchor="middle" font-size="7.5" fill="#1e3a8a">thymus</text>
  <rect x="172" y="72" width="96" height="150" fill="#fef2f2" stroke="#fca5a5"/>
  <text x="220" y="120" text-anchor="middle" font-size="10" font-weight="700" fill="#b91c1c">Middle</text>
  <text x="220" y="138" text-anchor="middle" font-size="8" fill="#7f1d1d">HEART +</text><text x="220" y="150" text-anchor="middle" font-size="8" fill="#7f1d1d">pericardium,</text><text x="220" y="162" text-anchor="middle" font-size="8" fill="#7f1d1d">great vessels,</text><text x="220" y="174" text-anchor="middle" font-size="8" fill="#7f1d1d">phrenic n.</text>
  <rect x="268" y="72" width="82" height="150" fill="#ecfdf5" stroke="#6ee7b7"/>
  <text x="309" y="120" text-anchor="middle" font-size="9" font-weight="700" fill="#047857">Posterior</text>
  <text x="309" y="140" text-anchor="middle" font-size="7.5" fill="#065f46">esophagus,</text><text x="309" y="151" text-anchor="middle" font-size="7.5" fill="#065f46">thoracic aorta,</text><text x="309" y="162" text-anchor="middle" font-size="7.5" fill="#065f46">azygos,</text><text x="309" y="173" text-anchor="middle" font-size="7.5" fill="#065f46">sympathetic trunk</text>
  <text x="16" y="240" font-size="10" fill="#0369a1">Sternal angle marks: rib 2, T4–T5 disc, aortic arch, carina, azygos→SVC, thoracic duct cross.</text>
</svg>`;

export const HEART_VALVES_AUSCULTATION = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" width="100%" role="img" aria-label="Cardiac valve auscultation points" font-family="ui-sans-serif, system-ui, sans-serif">
  <rect width="460" height="240" rx="10" fill="#fbfbff"/>
  <text x="16" y="20" font-size="12" font-weight="700" fill="#334155">Valve auscultation points — "APT-M"</text>
  <!-- sternum grid -->
  <rect x="150" y="34" width="70" height="170" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="185" y="30" text-anchor="middle" font-size="8" fill="#64748b">sternum</text>
  <g>
    <circle cx="150" cy="60" r="7" fill="#fca5a5" stroke="#dc2626"/><text x="20" y="56" font-size="10" font-weight="700" fill="#b91c1c">Aortic</text><text x="20" y="68" font-size="8.5" fill="#7f1d1d">2nd R intercostal space</text>
    <circle cx="220" cy="60" r="7" fill="#93c5fd" stroke="#2563eb"/><text x="300" y="56" font-size="10" font-weight="700" fill="#1d4ed8">Pulmonary</text><text x="300" y="68" font-size="8.5" fill="#1e3a8a">2nd L intercostal space</text>
    <circle cx="200" cy="150" r="7" fill="#86efac" stroke="#16a34a"/><text x="290" y="146" font-size="10" font-weight="700" fill="#15803d">Tricuspid</text><text x="290" y="158" font-size="8.5" fill="#166534">L lower sternal border</text>
    <circle cx="270" cy="176" r="7" fill="#f0abfc" stroke="#c026d3"/><text x="300" y="188" font-size="10" font-weight="700" fill="#a21caf">Mitral (apex)</text><text x="300" y="200" font-size="8.5" fill="#86198f">5th L ICS, midclavicular</text>
  </g>
  <text x="16" y="224" font-size="10" fill="#0369a1">"All Physicians Take Money": Aortic, Pulmonary, Tricuspid, Mitral — downstream of each valve.</text>
</svg>`;
