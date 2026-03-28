import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";
import StructureWireframe from "@/components/StructureWireframe";

const ActionConfirmation = () => (
  <div className="space-y-6">
    <PageHeader title="Action Confirmation" subtitle="Подтверждение действия" />

    <PatternSection title="Состав" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>одно действие → popover</li>
        <li>несколько → модалка</li>
      </ul>
    </PatternSection>

    <StructureWireframe
      direction="row"
      zones={[
        {
          label: "Popover",
          direction: "col",
          children: [
            { label: "Message", height: "40px" },
            { label: "Confirm", height: "36px" },
          ],
        },
        {
          label: "Modal",
          direction: "col",
          children: [
            { label: "Title", height: "32px" },
            { label: "Action List", height: "80px" },
            { label: "Actions", height: "36px" },
          ],
        },
      ]}
    />
  </div>
);

export default ActionConfirmation;
