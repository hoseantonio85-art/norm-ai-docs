import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const concepts = [
  { term: "Объект", desc: "то, что управляется (риск, событие)" },
  { term: "Субъект", desc: "источник или инициатор (документ, новость, агент)" },
  { term: "Действие", desc: "изменение состояния (создать, связать, удалить)" },
  { term: "Анализ", desc: "результат работы AI" },
  { term: "Связь", desc: "отношение объект ↔ субъект" },
  { term: "Контекст", desc: "окружение (модалка, слой)" },
];

const CoreConcepts = () => (
  <div>
    <PageHeader title="Core Concepts" subtitle="Базовые термины системы" />
    <div className="space-y-3">
      {concepts.map((c) => (
        <DocCard key={c.term}>
          <p>
            <span className="font-semibold font-mono">{c.term}</span>
            <span className="text-muted-foreground"> — {c.desc}</span>
          </p>
        </DocCard>
      ))}
    </div>
  </div>
);

export default CoreConcepts;
