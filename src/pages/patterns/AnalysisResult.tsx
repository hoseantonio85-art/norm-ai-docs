import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";
import StructureWireframe from "@/components/StructureWireframe";

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

    <StructureWireframe
      zones={[
        { label: "Summary", height: "48px" },
        { label: "Changes Count", height: "36px" },
        { label: "Risk List", height: "100px" },
        { label: "AI Output", height: "60px" },
        { label: "Recommendations", height: "60px" },
      ]}
    />
  </div>
);

export default AnalysisResult;
