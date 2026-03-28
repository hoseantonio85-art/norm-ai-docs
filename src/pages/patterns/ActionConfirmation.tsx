import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";
import WireframeSlot from "@/components/WireframeSlot";

const ActionConfirmation = () => (
  <div className="space-y-6">
    <PageHeader title="Action Confirmation" subtitle="Подтверждение действия" />

    <PatternSection title="Состав" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>одно действие → popover</li>
        <li>несколько → модалка</li>
      </ul>
    </PatternSection>

    <WireframeSlot label="ACTION_CONFIRMATION" />
  </div>
);

export default ActionConfirmation;
