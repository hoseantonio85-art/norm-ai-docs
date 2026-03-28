import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const Orchestration = () => (
  <div className="space-y-6">
    <PageHeader title="Orchestration" subtitle="Главный паттерн системы" />

    <PatternSection title="Когда" variant="when">
      <p>Любое сложное взаимодействие внутри объекта</p>
    </PatternSection>

    <PatternSection title="Роль" variant="structure">
      <p>Управляет всеми слоями интерфейса</p>
    </PatternSection>

    <PatternSection title="Включает" variant="includes">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>object modal (основной контейнер)</li>
        <li>signals (состояние)</li>
        <li>AI state (процесс)</li>
        <li>drawer (контекст)</li>
        <li>navigation (связи)</li>
      </ul>
    </PatternSection>

    <PatternSection title="Правила" variant="rules">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>один главный контекст (object)</li>
        <li>остальные слои подчинены ему</li>
        <li>пользователь всегда понимает, где он</li>
      </ul>
    </PatternSection>

    <PatternSection title="Поведение" variant="behavior">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>слои могут добавляться, но не ломают основной контекст</li>
        <li>AI не перехватывает управление</li>
        <li>пользователь остаётся центром принятия решений</li>
      </ul>
    </PatternSection>
  </div>
);

export default Orchestration;
