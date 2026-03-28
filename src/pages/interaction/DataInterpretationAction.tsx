import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const DataInterpretationAction = () => (
  <div className="space-y-6">
    <PageHeader title="Data → Interpretation → Action" subtitle="Модель обработки данных" />

    <PatternSection title="Поведение" variant="behavior">
      <p className="text-muted-foreground">
        Данные поступают → AI интерпретирует → пользователь принимает решение и действует.
      </p>
    </PatternSection>
  </div>
);

export default DataInterpretationAction;
