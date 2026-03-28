import PageHeader from "@/components/PageHeader";
import DocCard from "@/components/DocCard";

const RelationNavigation = () => (
  <div>
    <PageHeader title="Relation Navigation" subtitle="Переход между объектом и источником" />
    <DocCard title="Relation Navigation">
      <p className="mb-3">
        <span className="font-semibold">Роль: </span>
        <span>Связывает систему в единое пространство</span>
      </p>
      <p className="mb-3">
        <span className="font-semibold">Когда: </span>
        <span>Переход между объектом и источником</span>
      </p>
      <div className="mb-3">
        <span className="font-semibold">Состав:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>ссылка</li>
          <li>список связанных сущностей</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Типы:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>object → subject</li>
          <li>subject → object</li>
          <li>object → object</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Правила:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>переход не сбрасывает контекст пользователя</li>
          <li>поддерживает modal over modal</li>
        </ul>
      </div>
      <div className="mb-3">
        <span className="font-semibold">Поведение:</span>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li>открытие нового слоя (modal)</li>
          <li>возврат сохраняет состояние</li>
        </ul>
      </div>
    </DocCard>
  </div>
);

export default RelationNavigation;
