import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const Overview = () => (
  <div>
    <PageHeader
      title="Norm AI UX System"
      subtitle="Система взаимодействия пользователя, AI и объектов риска"
    />
    <DocCard>
      <p className="font-mono text-base">UI = не CRUD. UI = система принятия решений</p>
    </DocCard>
  </div>
);

export default Overview;
