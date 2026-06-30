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
