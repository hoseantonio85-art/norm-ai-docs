import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const NonBlocking = () => (
  <div className="space-y-6">
    <PageHeader title="Non Blocking" subtitle="Неблокирующий интерфейс" />

    <PatternSection title="Правила" variant="rules">
      <p className="text-muted-foreground">
        UI не должен блокировать пользователя ожиданием AI
      </p>
    </PatternSection>
  </div>
);

export default NonBlocking;
