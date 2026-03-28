import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const InteractionModel = () => (
  <div>
    <PageHeader title="Interaction Model" subtitle="Модели взаимодействия" />

    <DocCard title="Modal over Modal">
      <p>Разрешено открытие модалок поверх модалок</p>
    </DocCard>

    <DocCard title="Data → Interpretation → Action">
      <p className="text-muted-foreground">
        Данные поступают → AI интерпретирует → пользователь принимает решение и действует.
      </p>
    </DocCard>

    <DocCard title="AI → User → Decision">
      <p className="text-muted-foreground">
        AI предоставляет анализ → пользователь оценивает → пользователь принимает решение.
      </p>
    </DocCard>
  </div>
);

export default InteractionModel;
