import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";
import WireframeSlot from "@/components/WireframeSlot";

const ActionConfirmation = () => (
  <div>
    <PageHeader title="Action Confirmation" subtitle="Подтверждение действия" />
    <DocCard title="Action Confirmation">
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>Подтверждение действия</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Состав:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>одно действие → popover</li>
          <li>несколько → модалка</li>
        </ul>
      </div>
    </DocCard>
    <WireframeSlot label="ACTION_CONFIRMATION" />
  </div>
);

export default ActionConfirmation;
