import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const NavigationFlow = () => (
  <div className="space-y-6">
    <PageHeader title="Навигация" subtitle="Сценарий навигации" />

    <PatternSection title="Шаги" variant="structure">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Пользователь открывает объект</li>
        <li>Переходит в субъект</li>
        <li>Возвращается или открывает новый слой</li>
      </ol>
    </PatternSection>
  </div>
);

export default NavigationFlow;
