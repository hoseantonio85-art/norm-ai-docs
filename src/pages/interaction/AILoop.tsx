import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const AILoop = () => (
  <div>
    <PageHeader title="AI Loop" subtitle="Цикл AI взаимодействия" />
    <DocCard title="AI Loop">
      <p className="text-muted-foreground">
        AI → предлагает → пользователь выбирает → система фиксирует
      </p>
    </DocCard>
  </div>
);

export default AILoop;
