import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const UILayers = () => (
  <div>
    <PageHeader title="UI Layers" subtitle="Уровни интерфейса" />
    <DocCard title="UI Layers">
      <p className="mb-2 text-muted-foreground">Уровни:</p>
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>page</li>
        <li>modal</li>
        <li>drawer</li>
        <li>popover</li>
        <li>notification</li>
      </ol>
      <p className="mt-3 text-muted-foreground">
        Правило: каждый уровень не ломает предыдущий
      </p>
    </DocCard>
  </div>
);

export default UILayers;
