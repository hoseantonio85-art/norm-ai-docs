import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const LinkRisk = () => (
  <div>
    <PageHeader title="Связь с риском" subtitle="Сценарий связывания с риском" />
    <DocCard title="Связь с риском">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Выбор объекта</li>
        <li>Выбор субъекта</li>
        <li>Установка связи</li>
      </ol>
    </DocCard>
  </div>
);

export default LinkRisk;
