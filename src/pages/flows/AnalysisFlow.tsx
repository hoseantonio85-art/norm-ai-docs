import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const AnalysisFlow = () => (
  <div className="space-y-6">
    <PageHeader title="Анализ" subtitle="Сценарий анализа" />

    <PatternSection title="Шаги" variant="structure">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Запуск анализа</li>
        <li>AI обрабатывает данные</li>
        <li>Отображение результата</li>
      </ol>
    </PatternSection>
  </div>
);

export default AnalysisFlow;
