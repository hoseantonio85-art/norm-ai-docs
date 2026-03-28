import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const UILayers = () => (
  <div className="space-y-6">
    <PageHeader title="UI Layers" subtitle="Уровни интерфейса" />

    <PatternSection title="Уровни" variant="structure">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>page</li>
        <li>modal</li>
        <li>drawer</li>
        <li>popover</li>
        <li>notification</li>
      </ol>
    </PatternSection>

    <PatternSection title="Правила" variant="rules">
      <p className="text-muted-foreground">
        Каждый уровень не ломает предыдущий
      </p>
    </PatternSection>
  </div>
);

export default UILayers;
