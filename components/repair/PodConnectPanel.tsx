'use client';

import { useEffect, useState } from 'react';
import {
  getLastSync,
  getPodConnection,
  savePodConnection,
  syncFromPod,
} from '../../lib/sync/podConnector';

const DEFAULT_ORIGIN = 'https://williamspod.vercel.app';

export default function PodConnectPanel() {
  const [baseUrl, setBaseUrl] = useState(DEFAULT_ORIGIN);
  const [token, setToken] = useState('');
  const [lastSync, setLastSync] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    const c = getPodConnection();
    if (c) {
      setBaseUrl(c.baseUrl);
      setToken(c.token);
    } else {
      setShowConfig(true);
    }
    setLastSync(getLastSync());
  }, []);

  const sync = async () => {
    const conn = { baseUrl, token };
    savePodConnection(conn);
    setBusy(true);
    setStatus('Syncing…');
    const r = await syncFromPod(conn);
    setBusy(false);
    if (r.ok) {
      setStatus(`✓ Synced ${r.attempts} run(s) → ${r.queued} new repair item(s).`);
      setLastSync(new Date().toISOString());
      if (r.queued > 0) setTimeout(() => window.location.reload(), 700);
    } else {
      setStatus(`⚠ ${r.error}`);
    }
  };

  const tokenUrl = `${(baseUrl || DEFAULT_ORIGIN).replace(/\/+$/, '')}/api/sync/token`;

  return (
    <section className="clay clay-surface mb-4 p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
            Connect WilliamsPod
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {lastSync ? (
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              last sync {new Date(lastSync).toLocaleString()}
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setShowConfig((s) => !s)}
            className="clay-pill px-2.5 py-1 text-[11px] font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          >
            {showConfig ? 'Hide' : 'Configure'}
          </button>
        </div>
      </div>

      {showConfig ? (
        <div className="mb-3 space-y-2">
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              WilliamsPod origin
            </span>
            <input
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder={DEFAULT_ORIGIN}
              className="mt-1 w-full rounded-lg border border-black/10 bg-white/70 px-3 py-1.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-sky-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            />
          </label>
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Export token
            </span>
            <input
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="exp1.…"
              className="mt-1 w-full rounded-lg border border-black/10 bg-white/70 px-3 py-1.5 font-mono text-xs text-slate-800 outline-none focus:ring-2 focus:ring-sky-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            />
          </label>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Get your token: log into WilliamsPod, then open{' '}
            <a href={tokenUrl} target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-sky-600">
              {tokenUrl}
            </a>{' '}
            and copy the <code className="rounded bg-black/5 px-1 dark:bg-white/10">token</code> value.
          </p>
        </div>
      ) : null}

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={sync}
          disabled={busy || !token}
          className="clay-pill px-4 py-1.5 text-xs font-bold text-[#1e5bd6] transition active:translate-y-px disabled:opacity-40 dark:text-[#7AA0FF]"
        >
          {busy ? 'Pulling…' : '⤓ Pull telemetry'}
        </button>
        {status ? <span className="text-xs text-slate-500 dark:text-slate-400">{status}</span> : null}
      </div>
    </section>
  );
}
