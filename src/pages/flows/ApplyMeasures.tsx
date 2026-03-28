import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const ApplyMeasures = () => (
  <div>
    <PageHeader title="Применение мер" subtitle="Сценарий применения мер" />
    <DocCard title="Применение мер">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Выбор риска</li>
        <li>Выбор меры</li>
        <li>Подтверждение</li>
        <li>Применение</li>
      </ol>
    </DocCard>
  </div>
);

export default ApplyMeasures;
