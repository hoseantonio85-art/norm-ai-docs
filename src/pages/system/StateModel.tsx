import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const StateModel = () => (
  <div>
    <PageHeader title="State Model" subtitle="Любое взаимодействие с объектами и AI" />
    <DocCard title="State Model">
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>Любое взаимодействие с объектами и AI</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Типы:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>Object state: draft, in progress, approved</li>
          <li>AI state: idle, processing, result, failed</li>
          <li>UI state: viewing, editing, navigating</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Правила:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>состояния существуют параллельно и не конфликтуют</li>
        </ul>
      </div>
      <div className="mt-3 p-3 border border-border rounded bg-muted/50 font-mono text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">Пример: </span>
        object = in progress · AI = processing · UI = viewing
      </div>
    </DocCard>
  </div>
);

export default StateModel;
