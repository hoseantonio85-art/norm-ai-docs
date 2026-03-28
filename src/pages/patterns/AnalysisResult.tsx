import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";
import WireframeSlot from "@/components/WireframeSlot";

const AnalysisResult = () => (
  <div>
    <PageHeader title="Analysis Result" subtitle="Показ результата анализа" />
    <DocCard title="Analysis Result">
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>Показ результата анализа</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Состав:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>summary</li>
          <li>количество изменений</li>
          <li>список рисков</li>
          <li>AI вывод</li>
          <li>рекомендации</li>
          <li>группировка рисков</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Поведение:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>переход в риск</li>
        </ul>
      </div>
    </DocCard>
    <WireframeSlot label="ANALYSIS_RESULT" />
  </div>
);

export default AnalysisResult;
