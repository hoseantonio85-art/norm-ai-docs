import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const Orchestration = () => (
  <div>
    <PageHeader title="Orchestration" subtitle="Главный паттерн системы" />
    <DocCard title="Orchestration — главный паттерн системы">
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>Любое сложное взаимодействие внутри объекта</span>
      </p>
      <p className="mb-3">
        <span className="font-semibold">Роль: </span>
        <span>Управляет всеми слоями интерфейса</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Включает:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>object modal (основной контейнер)</li>
          <li>signals (состояние)</li>
          <li>AI state (процесс)</li>
          <li>drawer (контекст)</li>
          <li>navigation (связи)</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Правила:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>один главный контекст (object)</li>
          <li>остальные слои подчинены ему</li>
          <li>пользователь всегда понимает, где он</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Поведение:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>слои могут добавляться, но не ломают основной контекст</li>
          <li>AI не перехватывает управление</li>
          <li>пользователь остаётся центром принятия решений</li>
        </ul>
      </div>
    </DocCard>
  </div>
);

export default Orchestration;
