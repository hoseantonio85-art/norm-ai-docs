import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";
import WireframeSlot from "@/components/WireframeSlot";

interface PatternProps {
  id: string;
  name: string;
  when: string;
  role?: string;
  composition?: string[];
  behavior?: string[];
  states?: string[];
  includes?: string[];
  types?: string[];
  rules?: string[];
  relation?: string;
}

const patterns: PatternProps[] = [
  {
    id: "OBJECT_MODAL",
    name: "Object Modal",
    when: "Открытие сущности (риск, событие)",
    composition: ["контент (слева)", "мета (справа)", "действия (снизу)"],
    behavior: ["view / edit переключение", "вложенные модалки"],
    states: ["draft", "in progress", "approved"],
    includes: ["signals (alerts, AI)", "связь с субъектами"],
  },
  {
    id: "SUBJECT_MODAL",
    name: "Subject Modal",
    when: "Открытие источника (документ, новость)",
    composition: ["описание", "влияние на риски", "список рисков"],
    behavior: ["переход в объект", "действия над влиянием"],
    includes: ["влияние на объекты", "действия над влиянием (исключить, пересчитать)"],
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
    composition: ["summary", "количество изменений", "список рисков", "AI вывод", "рекомендации", "группировка рисков"],
    behavior: ["переход в риск"],
  },
  {
    id: "DRAWER",
    name: "Drawer",
    when: "Открытие дополнительного контекста без потери фокуса (история, мета, версии, меры)",
    composition: ["панель справа (overlay)", "заголовок", "контент", "действия"],
    types: ["contextual (из объекта)", "nested (внутри объекта)"],
    behavior: ["не блокирует основной объект", "может открываться поверх модалки", "закрывается без потери состояния"],
  },
  {
    id: "PAGE_OBJECT",
    name: "Page Object",
    when: "Работа с сущностью вне модалки (реестр, список, сервис)",
    composition: ["список объектов", "фильтры", "действия", "переход в объект (modal)"],
    behavior: ["страница = контейнер объектов", "объект открывается в модалке"],
  },
  {
    id: "DUAL_MODE",
    name: "Dual Mode",
    when: "Переключение между представлениями (список / аналитика)",
    composition: ["toggle (list / analytics)", "контент"],
    behavior: ["переключение без потери контекста", "фильтры сохраняются"],
  },
  {
    id: "SIGNALS",
    name: "Signals",
    when: "Отображение состояния системы и событий",
    types: ["alert (внутри контекста)", "notification (глобально)", "AI message (действие агента)", "status (inline)"],
    behavior: ["сигнал всегда привязан к контексту", "не блокирует действия пользователя"],
  },
  {
    id: "ASYNC_STATE",
    name: "Async State",
    when: "AI выполняет действие",
    composition: ["статус (ищу / нашёл / не нашёл)", "пояснение", "CTA"],
    behavior: ["обновляется динамически", "может перейти в результат"],
    relation: "использует AI STATE BLOCK",
  },
  {
    id: "RELATION_NAVIGATION",
    name: "Relation Navigation",
    when: "Переход между объектом и источником",
    composition: ["ссылка", "список связанных сущностей"],
    behavior: ["переход открывает новую модалку", "допускается modal over modal"],
  },
  {
    id: "ORCHESTRATION",
    name: "Orchestration",
    when: "Любое сложное взаимодействие внутри объекта",
    includes: [
      "object modal (основной контейнер)",
      "signals (состояние)",
      "AI state (процесс)",
      "drawer (контекст)",
      "navigation (связи)",
    ],
    behavior: [
      "слои могут добавляться, но не ломают основной контекст",
      "AI не перехватывает управление",
      "пользователь остаётся центром принятия решений",
    ],
  },
];

const wireframePatterns = ["OBJECT_MODAL", "SUBJECT_MODAL", "AI_STATE_BLOCK", "ACTION_CONFIRMATION", "ANALYSIS_RESULT", "DRAWER", "ASYNC_STATE"];

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
            {p.types && p.types.length > 0 && (
              <div className="mb-3">
                <span className="font-semibold">Типы:</span>
                <ul className="list-disc list-inside mt-1 text-muted-foreground">
                  {p.types.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
            {p.states && p.states.length > 0 && (
              <div className="mb-3">
                <span className="font-semibold">Состояния:</span>
                <ul className="list-disc list-inside mt-1 text-muted-foreground">
                  {p.states.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            {p.includes && p.includes.length > 0 && (
              <div className="mb-3">
                <span className="font-semibold">Включает:</span>
                <ul className="list-disc list-inside mt-1 text-muted-foreground">
                  {p.includes.map((inc) => (
                    <li key={inc}>{inc}</li>
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
            {p.relation && (
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold">Связь: </span>
                {p.relation}
              </p>
            )}
          </DocCard>
          {wireframePatterns.includes(p.id) && <WireframeSlot label={p.id} />}
        </div>
      ))}
    </div>
  </div>
);

export default UXPatterns;
