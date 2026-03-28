import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";
import WireframeSlot from "@/components/WireframeSlot";

const SubjectModal = () => (
  <div>
    <PageHeader title="Subject Modal" subtitle="Открытие источника (документ, новость)" />
    <DocCard title="Subject Modal">
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>Открытие источника (документ, новость)</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Состав:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>описание</li>
          <li>влияние на риски</li>
          <li>список рисков</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Поведение:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>переход в объект</li>
          <li>действия над влиянием</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Включает:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>влияние на объекты</li>
          <li>действия над влиянием (исключить, пересчитать)</li>
        </ul>
      </div>
    </DocCard>
    <WireframeSlot label="SUBJECT_MODAL" />
  </div>
);

export default SubjectModal;
