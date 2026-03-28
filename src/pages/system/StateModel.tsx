import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const StateModel = () => (
  <div className="space-y-6">
    <PageHeader title="State Model" subtitle="Любое взаимодействие с объектами и AI" />

    <PatternSection title="Типы" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>Object state: draft, in progress, approved</li>
        <li>AI state: idle, processing, result, failed</li>
        <li>UI state: viewing, editing, navigating</li>
      </ul>
    </PatternSection>

    <PatternSection title="Правила" variant="rules">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>состояния существуют параллельно и не конфликтуют</li>
      </ul>
    </PatternSection>

    <div className="p-3 border border-border rounded bg-muted/50 font-mono text-sm text-muted-foreground">
      <span className="font-semibold text-foreground">Пример: </span>
      object = in progress · AI = processing · UI = viewing
    </div>
  </div>
);

export default StateModel;
