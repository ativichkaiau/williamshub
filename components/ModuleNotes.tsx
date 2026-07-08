'use client';

import { useEffect, useState } from 'react';
import { getNote, setNote } from '../lib/user/bookmarks';

// Personal notes for a module (localStorage, this device only). Auto-saves.
export default function ModuleNotes({ moduleId }: { moduleId: string }) {
  const [text, setText] = useState('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setText(getNote(moduleId));
    setReady(true);
  }, [moduleId]);

  const onChange = (v: string) => {
    setText(v);
    setNote(moduleId, v);
  };

  return (
    <section className="clay clay-surface mt-5 p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#2e5bff] to-[#0a1a7a]" />
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">Notes</h3>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
          {ready && text.trim() ? 'saved · this device' : 'this device'}
        </span>
      </div>
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        placeholder="Jot your own notes for this module — mnemonics, links, things you keep missing…"
        className="clay-inset w-full resize-y bg-white/60 px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#2e5bff]/30 dark:bg-white/5 dark:text-slate-100"
      />
    </section>
  );
}
