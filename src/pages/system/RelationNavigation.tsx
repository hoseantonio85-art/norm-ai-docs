import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const RelationNavigation = () => (
  <div className="space-y-6">
    <PageHeader title="Relation Navigation" subtitle="Переход между объектом и источником" />

    <PatternSection title="Роль" variant="when">
      <p>Связывает систему в единое пространство</p>
    </PatternSection>

    <PatternSection title="Состав" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>ссылка</li>
        <li>список связанных сущностей</li>
      </ul>
    </PatternSection>

    <PatternSection title="Типы" variant="includes">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>object → subject</li>
        <li>subject → object</li>
        <li>object → object</li>
      </ul>
    </PatternSection>

    <PatternSection title="Правила" variant="rules">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>переход не сбрасывает контекст пользователя</li>
        <li>поддерживает modal over modal</li>
      </ul>
    </PatternSection>

    <PatternSection title="Поведение" variant="behavior">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>открытие нового слоя (modal)</li>
        <li>возврат сохраняет состояние</li>
      </ul>
    </PatternSection>
  </div>
);

export default RelationNavigation;
