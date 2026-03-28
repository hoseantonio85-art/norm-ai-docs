import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";
import WireframeSlot from "@/components/WireframeSlot";

const DrawerPattern = () => (
  <div>
    <PageHeader title="Drawer" subtitle="Открытие дополнительного контекста без потери фокуса" />
    <DocCard title="Drawer">
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>Открытие дополнительного контекста без потери фокуса (история, мета, версии, меры)</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Состав:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>панель справа (overlay)</li>
          <li>заголовок</li>
          <li>контент</li>
          <li>действия</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Типы:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>contextual (из объекта)</li>
          <li>nested (внутри объекта)</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Поведение:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>не блокирует основной объект</li>
          <li>может открываться поверх модалки</li>
          <li>закрывается без потери состояния</li>
        </ul>
      </div>
    </DocCard>
    <WireframeSlot label="DRAWER" />
  </div>
);

export default DrawerPattern;
