import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const ApplyMeasures = () => (
  <div className="space-y-6">
    <PageHeader title="Применение мер" subtitle="Сценарий применения мер" />

    <PatternSection title="Шаги" variant="structure">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Выбор риска</li>
        <li>Выбор меры</li>
        <li>Подтверждение</li>
        <li>Применение</li>
      </ol>
    </PatternSection>
  </div>
);

export default ApplyMeasures;
