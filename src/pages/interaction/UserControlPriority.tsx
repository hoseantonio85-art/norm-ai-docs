import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const UserControlPriority = () => (
  <div className="space-y-6">
    <PageHeader title="User Control Priority" subtitle="Базовый принцип системы" />

    <PatternSection title="Правила" variant="rules">
      <p className="mb-2 text-muted-foreground">
        AI предлагает → пользователь принимает решение → система исполняет
      </p>
    </PatternSection>

    <PatternSection title="Ограничение" variant="behavior">
      <p className="text-muted-foreground">
        AI не принимает финальных решений без пользователя
      </p>
    </PatternSection>
  </div>
);

export default UserControlPriority;
