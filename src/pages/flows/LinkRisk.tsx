import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const LinkRisk = () => (
  <div className="space-y-6">
    <PageHeader title="Связь с риском" subtitle="Сценарий связывания с риском" />

    <PatternSection title="Шаги" variant="structure">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Выбор объекта</li>
        <li>Выбор субъекта</li>
        <li>Установка связи</li>
      </ol>
    </PatternSection>
  </div>
);

export default LinkRisk;
