import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const AILoop = () => (
  <div className="space-y-6">
    <PageHeader title="AI Loop" subtitle="Цикл AI взаимодействия" />

    <PatternSection title="Поведение" variant="behavior">
      <p className="text-muted-foreground">
        AI → предлагает → пользователь выбирает → система фиксирует
      </p>
    </PatternSection>
  </div>
);

export default AILoop;
