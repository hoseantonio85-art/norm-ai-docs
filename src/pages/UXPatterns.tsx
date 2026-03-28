import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";
import WireframeSlot from "@/components/WireframeSlot";

interface PatternProps {
  id: string;
  name: string;
  when: string;
  composition?: string[];
  behavior?: string[];
}

const patterns: PatternProps[] = [
  {
    id: "OBJECT_MODAL",
    name: "Object Modal",
    when: "Открытие сущности (риск, событие)",
    composition: ["контент (слева)", "мета (справа)", "действия (снизу)"],
    behavior: ["view / edit переключение", "вложенные модалки"],
  },
  {
    id: "SUBJECT_MODAL",
    name: "Subject Modal",
    when: "Открытие источника (документ, новость)",
    composition: ["описание", "влияние на риски", "список рисков"],
    behavior: ["переход в объект", "действия над влиянием"],
  },
  {
    id: "AI_STATE_BLOCK",
    name: "AI State Block",
    when: "AI выполняет действие или не может выполнить",
    composition: ["статус (ищу / нашёл / не нашёл)", "объяснение", "CTA"],
    behavior: ["динамическое обновление"],
  },
  {
    id: "ACTION_CONFIRMATION",
    name: "Action Confirmation",
    when: "Подтверждение действия",
    composition: ["одно действие → popover", "несколько → модалка"],
    behavior: [],
  },
  {
    id: "ANALYSIS_RESULT",
    name: "Analysis Result",
    when: "Показ результата анализа",
    composition: ["summary", "количество изменений", "список рисков", "AI вывод"],
    behavior: [],
  },
];

const UXPatterns = () => (
  <div>
    <PageHeader title="UX Patterns" subtitle="Паттерны взаимодействия" />
    <div className="space-y-8">
      {patterns.map((p) => (
        <div key={p.id}>
          <DocCard title={p.name}>
            <p className="mb-3">
              <span className="font-semibold">Когда: </span>
              <span>{p.when}</span>
            </p>
            {p.composition && p.composition.length > 0 && (
              <div className="mb-3">
                <span className="font-semibold">Состав:</span>
                <ul className="list-disc list-inside mt-1 text-muted-foreground">
                  {p.composition.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
            {p.behavior && p.behavior.length > 0 && (
              <div className="mb-3">
                <span className="font-semibold">Поведение:</span>
                <ul className="list-disc list-inside mt-1 text-muted-foreground">
                  {p.behavior.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </DocCard>
          <WireframeSlot label={p.id} />
        </div>
      ))}
    </div>
  </div>
);

export default UXPatterns;
