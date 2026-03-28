import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";
import WireframeSlot from "@/components/WireframeSlot";

const ObjectModal = () => (
  <div>
    <PageHeader title="Object Modal" subtitle="Открытие сущности (риск, событие)" />
    <DocCard title="Object Modal">
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>Открытие сущности (риск, событие)</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Состав:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>контент (слева)</li>
          <li>мета (справа)</li>
          <li>действия (снизу)</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Поведение:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>view / edit переключение</li>
          <li>вложенные модалки</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Состояния:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>draft</li>
          <li>in progress</li>
          <li>approved</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Включает:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>signals (alerts, AI)</li>
          <li>связь с субъектами</li>
        </ul>
      </div>
    </DocCard>
    <WireframeSlot label="OBJECT_MODAL" />
  </div>
);

export default ObjectModal;
