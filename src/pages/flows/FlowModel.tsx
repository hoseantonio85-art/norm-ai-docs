import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const FlowModel = () => (
  <div>
    <PageHeader title="Flow Model" subtitle="Нелинейная модель потоков" />
    <DocCard title="Flow Model — нелинейный">
      <p className="mb-3 text-muted-foreground">
        Flow не является последовательностью шагов. Это сеть переходов.
      </p>
      <div className="mb-3">
        <span className="font-semibold">Пользователь может:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>переходить между объектами</li>
          <li>открывать новые слои (modal, drawer)</li>
          <li>возвращаться без потери состояния</li>
        </ul>
      </div>
      <p className="text-sm font-mono p-2 border border-border rounded bg-muted/50 text-muted-foreground">
        <span className="font-semibold text-foreground">Правило: </span>
        Flow = сеть, а не линейный сценарий
      </p>
    </DocCard>
  </div>
);

export default FlowModel;
