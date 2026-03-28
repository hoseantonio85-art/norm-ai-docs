import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const flows = [
  {
    title: "Создание события",
    steps: ["Пользователь инициирует создание", "Заполнение полей", "Сохранение"],
  },
  {
    title: "Связь с риском",
    steps: ["Выбор объекта", "Выбор субъекта", "Установка связи"],
  },
  {
    title: "Анализ",
    steps: ["Запуск анализа", "AI обрабатывает данные", "Отображение результата"],
  },
  {
    title: "Применение мер",
    steps: ["Выбор риска", "Выбор меры", "Подтверждение", "Применение"],
  },
];

const Flows = () => (
  <div>
    <PageHeader title="Flows" subtitle="Основные пользовательские сценарии" />
    <div className="space-y-4">
      {flows.map((f) => (
        <DocCard key={f.title} title={f.title}>
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
            {f.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </DocCard>
      ))}
    </div>
  </div>
);

export default Flows;
