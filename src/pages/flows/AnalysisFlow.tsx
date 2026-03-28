import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const AnalysisFlow = () => (
  <div>
    <PageHeader title="Анализ" subtitle="Сценарий анализа" />
    <DocCard title="Анализ">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Запуск анализа</li>
        <li>AI обрабатывает данные</li>
        <li>Отображение результата</li>
      </ol>
    </DocCard>
  </div>
);

export default AnalysisFlow;
