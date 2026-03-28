import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";
import StructureWireframe from "@/components/StructureWireframe";

const DrawerPattern = () => (
  <div className="space-y-6">
    <PageHeader title="Drawer" subtitle="Открытие дополнительного контекста без потери фокуса" />

    <PatternSection title="Состав" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>панель справа (overlay)</li>
        <li>заголовок</li>
        <li>контент</li>
        <li>действия</li>
      </ul>
    </PatternSection>

    <PatternSection title="Типы" variant="includes">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>contextual (из объекта)</li>
        <li>nested (внутри объекта)</li>
      </ul>
    </PatternSection>

    <PatternSection title="Поведение" variant="behavior">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>не блокирует основной объект</li>
        <li>может открываться поверх модалки</li>
        <li>закрывается без потери состояния</li>
      </ul>
    </PatternSection>

    <StructureWireframe
      direction="row"
      zones={[
        { label: "Main Context (behind)", height: "240px" },
        {
          label: "Drawer Panel",
          direction: "col",
          height: "240px",
          children: [
            { label: "Header", height: "40px" },
            { label: "Content", height: "140px" },
            { label: "Actions", height: "48px" },
          ],
        },
      ]}
    />
  </div>
);

export default DrawerPattern;
