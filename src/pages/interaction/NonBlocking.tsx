import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const NonBlocking = () => (
  <div>
    <PageHeader title="Non Blocking" subtitle="Неблокирующий интерфейс" />
    <DocCard title="Non Blocking">
      <p className="text-muted-foreground">
        UI не должен блокировать пользователя ожиданием AI
      </p>
    </DocCard>
  </div>
);

export default NonBlocking;
