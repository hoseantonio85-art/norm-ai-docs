import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const CreateEvent = () => (
  <div>
    <PageHeader title="Создание события" subtitle="Сценарий создания события" />
    <DocCard title="Создание события">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Пользователь инициирует создание</li>
        <li>Заполнение полей</li>
        <li>Сохранение</li>
      </ol>
    </DocCard>
  </div>
);

export default CreateEvent;
