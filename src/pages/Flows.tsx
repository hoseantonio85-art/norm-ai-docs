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
  {
    title: "Работа AI",
    steps: ["AI запускается", "Показывает статус", "Даёт результат или CTA", "Пользователь принимает решение"],
  },
  {
    title: "Навигация",
    steps: ["Пользователь открывает объект", "Переходит в субъект", "Возвращается или открывает новый слой"],
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

      <DocCard title="Flow Model — нелинейный">
        <p className="mb-3 text-muted-foreground">
          Flow не является последовательностью шагов. Это сеть переходов.
        </p>
        <div className="mb-3">
          <span className="font-semibold">Пользователь может:</span>
          <ul className="list-disc list-inside mt-1 text-muted-foreground">
            <li>переходить между объектами</li>
            <li>открывать новые слои (modal, drawer)</li>
            <li>возвращаться без потери состояния</li>
          </ul>
        </div>
        <p className="text-sm font-mono p-2 border border-border rounded bg-muted/50 text-muted-foreground">
          <span className="font-semibold text-foreground">Правило: </span>
          Flow = сеть, а не линейный сценарий
        </p>
      </DocCard>
    </div>
  </div>
);

export default Flows;
