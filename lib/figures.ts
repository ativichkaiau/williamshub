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

export const STARLING_FORCES = '';
