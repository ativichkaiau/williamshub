import GarageView from '../../components/GarageView';
import LiverySlashes from '../../components/LiverySlashes';

export const metadata = { title: 'Saved — WilliamsHub' };

export default function GaragePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <header className="mb-6">
        <div className="flex items-center gap-3">
          <LiverySlashes />
          <span className="eyebrow">On this device</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">Saved</h1>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Your starred modules and notes — saved on this device.
        </p>
      </header>

      <GarageView />

      <footer className="mt-10 text-center text-xs text-[var(--muted)]">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
