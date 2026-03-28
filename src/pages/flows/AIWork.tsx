import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const AIWork = () => (
  <div>
    <PageHeader title="Работа AI" subtitle="Сценарий работы AI" />
    <DocCard title="Работа AI">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>AI запускается</li>
        <li>Показывает статус</li>
        <li>Даёт результат или CTA</li>
        <li>Пользователь принимает решение</li>
      </ol>
    </DocCard>
  </div>
);

export default AIWork;
