import PageHeader from "@/components/PageHeader";
import PatternSection from "@/components/PatternSection";

const ModalOverModal = () => (
  <div className="space-y-6">
    <PageHeader title="Modal over Modal" subtitle="Модель вложенных модалок" />

    <PatternSection title="Поведение" variant="behavior">
      <p className="text-muted-foreground">Разрешено открытие модалок поверх модалок</p>
    </PatternSection>
  </div>
);

export default ModalOverModal;
