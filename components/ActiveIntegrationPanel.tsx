import { buildModuleGraph } from '../lib/integrations/graphView';
import IntegrationExplorer from './IntegrationExplorer';

// Active Integration — treats the module as a node in the knowledge graph and
// shows its prerequisite / forward / horizontal / vertical / trap / repair links
// as an interactive map (+ list). Server component: the graph is resolved at
// build time and handed to the client explorer as plain, serializable data.

export default function ActiveIntegrationPanel({ moduleId }: { moduleId: string }) {
  const view = buildModuleGraph(moduleId);

  return (
    <section className="clay clay-surface mt-5 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
            Active Integration
          </h3>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
          knowledge graph
        </span>
      </div>

      {view.hasAny ? (
        <IntegrationExplorer view={view} />
      ) : (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          No integrations mapped yet — cross-module links will appear here as related content is added.
        </p>
      )}
    </section>
  );
}
