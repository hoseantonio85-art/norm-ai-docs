import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";
import WireframeSlot from "@/components/WireframeSlot";

const AnalysisResult = () => (
  <div className="space-y-6">
    <PageHeader title="Analysis Result" subtitle="Показ результата анализа" />

    <PatternSection title="Состав" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>summary</li>
        <li>количество изменений</li>
        <li>список рисков</li>
        <li>AI вывод</li>
        <li>рекомендации</li>
        <li>группировка рисков</li>
      </ul>
    </PatternSection>

    <PatternSection title="Поведение" variant="behavior">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>переход в риск</li>
      </ul>
    </PatternSection>

    <WireframeSlot label="ANALYSIS_RESULT" />
  </div>
);

export default AnalysisResult;
