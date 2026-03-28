import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";
import WireframeSlot from "@/components/WireframeSlot";

const AIStateBlock = () => (
  <div>
    <PageHeader title="AI State Block" subtitle="AI выполняет действие или не может выполнить" />
    <DocCard title="AI State Block">
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>AI выполняет действие или не может выполнить</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Состав:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>статус (ищу / нашёл / не нашёл)</li>
          <li>объяснение</li>
          <li>CTA</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Поведение:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>динамическое обновление</li>
        </ul>
      </div>
    </DocCard>
    <WireframeSlot label="AI_STATE_BLOCK" />
  </div>
);

export default AIStateBlock;
