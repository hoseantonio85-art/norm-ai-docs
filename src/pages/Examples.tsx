import PageHeader from "@/components/PageHeader";
import WireframeSlot from "@/components/WireframeSlot";

const Examples = () => (
  <div>
    <PageHeader title="Examples" subtitle="Здесь будут реальные интерфейсы и wireframes" />
    <div className="space-y-6">
      <WireframeSlot label="EVENT_MODAL" height="240px" />
      <WireframeSlot label="RISK_MODAL" height="240px" />
      <WireframeSlot label="ANALYSIS_MODAL" height="240px" />
    </div>
  </div>
);

export default Examples;
