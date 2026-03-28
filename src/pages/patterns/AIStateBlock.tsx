import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";
import WireframeSlot from "@/components/WireframeSlot";

const AIStateBlock = () => (
  <div className="space-y-6">
    <PageHeader title="AI State Block" subtitle="AI выполняет действие или не может выполнить" />

    <PatternSection title="Когда" variant="when">
      <p>AI выполняет действие или не может выполнить</p>
    </PatternSection>

    <PatternSection title="Состав" variant="structure">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>статус (ищу / нашёл / не нашёл)</li>
        <li>объяснение</li>
        <li>CTA</li>
      </ul>
    </PatternSection>

    <PatternSection title="Поведение" variant="behavior">
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>динамическое обновление</li>
      </ul>
    </PatternSection>

    <WireframeSlot label="AI_STATE_BLOCK" />
  </div>
);

export default AIStateBlock;
