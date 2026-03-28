import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const NavigationFlow = () => (
  <div>
    <PageHeader title="Навигация" subtitle="Сценарий навигации" />
    <DocCard title="Навигация">
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Пользователь открывает объект</li>
        <li>Переходит в субъект</li>
        <li>Возвращается или открывает новый слой</li>
      </ol>
    </DocCard>
  </div>
);

export default NavigationFlow;
