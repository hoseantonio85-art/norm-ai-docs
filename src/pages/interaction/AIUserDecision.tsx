import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const AIUserDecision = () => (
  <div className="space-y-6">
    <PageHeader title="AI → User → Decision" subtitle="Модель принятия решений" />

    <PatternSection title="Поведение" variant="behavior">
      <p className="text-muted-foreground">
        AI предоставляет анализ → пользователь оценивает → пользователь принимает решение.
      </p>
    </PatternSection>
  </div>
);

export default AIUserDecision;
