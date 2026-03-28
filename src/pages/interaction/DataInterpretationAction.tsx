import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const DataInterpretationAction = () => (
  <div>
    <PageHeader title="Data → Interpretation → Action" subtitle="Модель обработки данных" />
    <DocCard title="Data → Interpretation → Action">
      <p className="text-muted-foreground">
        Данные поступают → AI интерпретирует → пользователь принимает решение и действует.
      </p>
    </DocCard>
  </div>
);

export default DataInterpretationAction;
