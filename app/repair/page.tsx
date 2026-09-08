import RepairQueuePanel from '../../components/repair/RepairQueuePanel';
import RepairSyncDemo from '../../components/repair/RepairSyncDemo';
import PodConnectPanel from '../../components/repair/PodConnectPanel';
import LiverySlashes from '../../components/LiverySlashes';

export const metadata = { title: 'Repair Queue — WilliamsHub' };

export default function RepairPage() {
  const dev = process.env.NODE_ENV !== 'production';
  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <header className="mb-6">
        <div className="flex items-center gap-3">
          <LiverySlashes />
          <span className="eyebrow">WilliamsSync</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">Repair Queue</h1>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Your personalised fix-list. WilliamsPod mistakes flow in through WilliamsSync and are prioritised by
          error type — each links back to the module and the recommended repair action.
        </p>
      </header>

      <PodConnectPanel />

      <RepairQueuePanel />

      {dev ? (
        <div className="mt-4 flex items-center gap-2">
          <RepairSyncDemo />
          <span className="text-[11px] text-[var(--muted)]">dev-only — seeds sample data</span>
        </div>
      ) : null}

      <footer className="mt-10 text-center text-xs text-[var(--muted)]">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
