import RepairQueuePanel from '../../components/repair/RepairQueuePanel';
import RepairSyncDemo from '../../components/repair/RepairSyncDemo';
import PodConnectPanel from '../../components/repair/PodConnectPanel';

export const metadata = { title: 'Repair Queue — WilliamsHub' };

export default function RepairPage() {
  const dev = process.env.NODE_ENV !== 'production';
  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <header className="mb-6">
        <div className="mb-4 h-1.5 w-full rounded-full bg-gradient-to-r from-rose-400 to-amber-500" />
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Repair Queue</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Your personalised fix-list. WilliamsPod mistakes flow in through WilliamsSync and are prioritised by
          error type — each links back to the module and the recommended repair action.
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
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
