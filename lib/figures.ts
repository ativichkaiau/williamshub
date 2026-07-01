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
