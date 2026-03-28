import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const FlowModel = () => (
  <div className="space-y-6">
    <PageHeader title="Flow Model" subtitle="Нелинейная модель потоков" />

    <PatternSection title="Поведение" variant="behavior">
      <p className="mb-3 text-muted-foreground">
        Flow не является последовательностью шагов. Это сеть переходов.
      </p>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>переходить между объектами</li>
        <li>открывать новые слои (modal, drawer)</li>
        <li>возвращаться без потери состояния</li>
      </ul>
    </PatternSection>

    <PatternSection title="Правила" variant="rules">
      <p className="text-muted-foreground">Flow = сеть, а не линейный сценарий</p>
    </PatternSection>
  </div>
);

export default FlowModel;
