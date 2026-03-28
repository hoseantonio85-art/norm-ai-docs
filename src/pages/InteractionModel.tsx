import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const InteractionModel = () => (
  <div>
    <PageHeader title="Interaction Model" subtitle="Модели взаимодействия" />

    <div className="space-y-4">
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

      <DocCard title="UI Layers">
        <p className="mb-2 text-muted-foreground">Уровни:</p>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
          <li>page</li>
          <li>modal</li>
          <li>drawer</li>
          <li>popover</li>
          <li>notification</li>
        </ol>
        <p className="mt-3 text-muted-foreground">
          Правило: каждый уровень не ломает предыдущий
        </p>
      </DocCard>

      <DocCard title="AI Loop">
        <p className="text-muted-foreground">
          AI → предлагает → пользователь выбирает → система фиксирует
        </p>
      </DocCard>

      <DocCard title="Non Blocking">
        <p className="text-muted-foreground">
          UI не должен блокировать пользователя ожиданием AI
        </p>
      </DocCard>

      <DocCard title="User Control Priority — базовый принцип системы">
        <p className="mb-2">
          <span className="font-semibold">Правило: </span>
          <span className="text-muted-foreground">AI предлагает → пользователь принимает решение → система исполняет</span>
        </p>
        <p>
          <span className="font-semibold">Ограничение: </span>
          <span className="text-muted-foreground">AI не принимает финальных решений без пользователя</span>
        </p>
      </DocCard>
    </div>
  </div>
);

export default InteractionModel;
