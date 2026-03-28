import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const SignalsPage = () => (
  <div className="space-y-6">
    <PageHeader title="Signals" subtitle="Отображение состояния системы и событий" />

    <PatternSection title="Типы" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>Blocking — ошибка, нельзя продолжить</li>
        <li>Warning — требуется внимание</li>
        <li>Info — контекст</li>
        <li>AI — действие агента</li>
      </ul>
    </PatternSection>

    <PatternSection title="Поведение" variant="behavior">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>сигнал всегда привязан к контексту (объекту или действию)</li>
        <li>не блокирует действия пользователя</li>
        <li>сигнал не должен ломать поток пользователя</li>
      </ul>
    </PatternSection>
  </div>
);

export default SignalsPage;
