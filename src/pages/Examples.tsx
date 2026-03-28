import PageHeader from "@/components/PageHeader";
import WireframeSlot from "@/components/WireframeSlot";

const examples = [
  { label: "EVENT_MODAL", title: "Event Modal" },
  { label: "RISK_MODAL", title: "Risk Modal" },
  { label: "ANALYSIS_MODAL", title: "Analysis Modal" },
  { label: "DRAWER_EXAMPLE", title: "Drawer Example" },
];

const Examples = () => (
  <div>
    <PageHeader title="Examples" subtitle="Здесь будут реальные интерфейсы и wireframes" />
    <div className="space-y-6">
      {examples.map((ex) => (
        <WireframeSlot key={ex.label} label={ex.label} height="240px" />
      ))}
    </div>
  </div>
);

export default Examples;
