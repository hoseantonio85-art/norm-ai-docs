import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const SignalsPage = () => (
  <div>
    <PageHeader title="Signals" subtitle="Отображение состояния системы и событий" />
    <DocCard title="Signals">
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>Отображение состояния системы и событий</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Типы:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>Blocking — ошибка, нельзя продолжить</li>
          <li>Warning — требуется внимание</li>
          <li>Info — контекст</li>
          <li>AI — действие агента</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Поведение:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>сигнал всегда привязан к контексту (объекту или действию)</li>
          <li>не блокирует действия пользователя</li>
          <li>сигнал не должен ломать поток пользователя</li>
        </ul>
      </div>
    </DocCard>
  </div>
);

export default SignalsPage;
