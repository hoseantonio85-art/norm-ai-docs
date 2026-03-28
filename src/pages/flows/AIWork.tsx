import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const AIWork = () => (
  <div className="space-y-6">
    <PageHeader title="Работа AI" subtitle="Сценарий работы AI" />

    <PatternSection title="Шаги" variant="structure">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>AI запускается</li>
        <li>Показывает статус</li>
        <li>Даёт результат или CTA</li>
        <li>Пользователь принимает решение</li>
      </ol>
    </PatternSection>
  </div>
);

export default AIWork;
