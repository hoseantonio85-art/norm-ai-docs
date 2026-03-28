import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const CreateEvent = () => (
  <div className="space-y-6">
    <PageHeader title="Создание события" subtitle="Сценарий создания события" />

    <PatternSection title="Шаги" variant="structure">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Пользователь инициирует создание</li>
        <li>Заполнение полей</li>
        <li>Сохранение</li>
      </ol>
    </PatternSection>
  </div>
);

export default CreateEvent;
