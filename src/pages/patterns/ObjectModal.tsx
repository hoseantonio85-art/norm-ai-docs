import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";
import StructureWireframe from "@/components/StructureWireframe";

const ObjectModal = () => (
  <div className="space-y-6">
    <PageHeader title="Object Modal" subtitle="Открытие сущности (риск, событие)" />

    <PatternSection title="Состав" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>контент (слева)</li>
        <li>мета (справа)</li>
        <li>действия (снизу)</li>
      </ul>
    </PatternSection>

    <PatternSection title="Включает" variant="includes">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>signals (alerts, AI)</li>
        <li>связь с субъектами</li>
      </ul>
    </PatternSection>

    <PatternSection title="Поведение" variant="behavior">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>view / edit переключение</li>
        <li>вложенные модалки</li>
      </ul>
    </PatternSection>

    <PatternSection title="Состояния" variant="states">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>draft</li>
        <li>in progress</li>
        <li>approved</li>
      </ul>
    </PatternSection>

    <StructureWireframe
      zones={[
        { label: "Header", height: "40px" },
        {
          label: "Body",
          direction: "row",
          children: [
            { label: "Main Content", height: "180px" },
            { label: "Meta / Control", height: "180px" },
          ],
        },
        { label: "Relation Block", height: "60px" },
        { label: "Decision Layer", height: "48px" },
      ]}
    />
  </div>
);

export default ObjectModal;
