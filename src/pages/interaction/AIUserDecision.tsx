import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const AIUserDecision = () => (
  <div>
    <PageHeader title="AI → User → Decision" subtitle="Модель принятия решений" />
    <DocCard title="AI → User → Decision">
      <p className="text-muted-foreground">
        AI предоставляет анализ → пользователь оценивает → пользователь принимает решение.
      </p>
    </DocCard>
  </div>
);

export default AIUserDecision;
