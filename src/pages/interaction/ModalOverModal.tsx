import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const ModalOverModal = () => (
  <div>
    <PageHeader title="Modal over Modal" subtitle="Модель вложенных модалок" />
    <DocCard title="Modal over Modal">
      <p>Разрешено открытие модалок поверх модалок</p>
    </DocCard>
  </div>
);

export default ModalOverModal;
