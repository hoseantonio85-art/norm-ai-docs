import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";
import StructureWireframe from "@/components/StructureWireframe";

const SubjectModal = () => (
  <div className="space-y-6">
    <PageHeader title="Subject Modal" subtitle="Открытие источника (документ, новость)" />

    <PatternSection title="Состав" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>описание</li>
        <li>влияние на риски</li>
        <li>список рисков</li>
      </ul>
    </PatternSection>

    <PatternSection title="Включает" variant="includes">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>влияние на объекты</li>
        <li>действия над влиянием (исключить, пересчитать)</li>
      </ul>
    </PatternSection>

    <PatternSection title="Поведение" variant="behavior">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>переход в объект</li>
        <li>действия над влиянием</li>
      </ul>
    </PatternSection>

    <StructureWireframe
      zones={[
        { label: "Header", height: "40px" },
        { label: "Description", height: "80px" },
        { label: "Risk Impact", height: "100px" },
        { label: "Risk List", height: "80px" },
        { label: "Actions", height: "48px" },
      ]}
    />
  </div>
);

export default SubjectModal;
