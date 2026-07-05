import RepairQueuePanel from '../../components/repair/RepairQueuePanel';
import RepairSyncDemo from '../../components/repair/RepairSyncDemo';
import PodConnectPanel from '../../components/repair/PodConnectPanel';

export const metadata = { title: 'Pit Box — WilliamsHub' };

export default function RepairPage() {
  const dev = process.env.NODE_ENV !== 'production';
  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <header className="mb-6">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Pit Box</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Your personalised fix-list. Every WilliamsPod mistake rolls into the box through WilliamsSync,
          gets triaged by error type, and comes back out with the repair to run — each links back to its module.
        </p>
      </header>

      <PodConnectPanel />

      <RepairQueuePanel />

      {dev ? (
        <div className="mt-4 flex items-center gap-2">
          <RepairSyncDemo />
          <span className="text-[11px] text-slate-400 dark:text-slate-500">dev-only — seeds sample telemetry</span>
        </div>
      ) : null}

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · Round M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
