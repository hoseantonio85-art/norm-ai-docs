import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";
import WireframeSlot from "@/components/WireframeSlot";

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

    <WireframeSlot label="OBJECT_MODAL" />
  </div>
);

export default ObjectModal;
