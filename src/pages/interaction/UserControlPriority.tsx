import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const UserControlPriority = () => (
  <div>
    <PageHeader title="User Control Priority" subtitle="Базовый принцип системы" />
    <DocCard title="User Control Priority — базовый принцип системы">
      <p className="mb-2">
        <span className="font-semibold">Правило: </span>
        <span className="text-muted-foreground">AI предлагает → пользователь принимает решение → система исполняет</span>
      </p>
      <p>
        <span className="font-semibold">Ограничение: </span>
        <span className="text-muted-foreground">AI не принимает финальных решений без пользователя</span>
      </p>
    </DocCard>
  </div>
);

export default UserControlPriority;
