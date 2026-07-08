import GarageView from '../../components/GarageView';

export const metadata = { title: 'Saved — WilliamsHub' };

export default function GaragePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <header className="mb-6">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Saved</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Your starred modules and notes — saved on this device.
        </p>
      </header>

      <GarageView />

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
