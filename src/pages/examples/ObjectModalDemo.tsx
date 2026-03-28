import { useState, useEffect } from "react";
import {
  AlertTriangle,
  Bot,
  ChevronRight,
  Clock,
  FileText,
  History,
  Link2,
  MapPin,
  Paperclip,
  Shield,
  X,
  Trash2,
  MoreHorizontal,
  Sparkles,
  CheckCircle2,
  XCircle,
  Loader2,
  Search,
  ExternalLink,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

/* ─── Types ─── */

type ObjectStatus = "draft" | "in_progress" | "approved";
type AISearchState = "idle" | "searching" | "found_one" | "found_many" | "not_found";

const statusConfig: Record<ObjectStatus, { label: string; className: string }> = {
  draft: { label: "Draft", className: "bg-muted text-muted-foreground" },
  in_progress: { label: "In Progress", className: "bg-foreground/10 text-foreground" },
  approved: { label: "Approved", className: "bg-foreground text-primary-foreground" },
};

/* ─── Sub-components ─── */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
    {children}
  </h4>
);

const ContentRow = ({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-3 py-3 border-b border-border/50 last:border-0">
    <Icon className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
    <div className="min-w-0">
      <span className="text-xs font-medium text-muted-foreground block mb-0.5">{label}</span>
      <div className="text-sm text-foreground">{children}</div>
    </div>
  </div>
);

const Signal = ({
  type,
  text,
}: {
  type: "warning" | "ai";
  text: string;
}) => (
  <div
    className={cn(
      "flex items-center gap-2 px-3 py-2 rounded text-xs",
      type === "warning"
        ? "bg-muted border border-border text-foreground"
        : "bg-accent/50 border border-accent text-foreground"
    )}
  >
    {type === "warning" ? (
      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
    ) : (
      <Bot className="h-3.5 w-3.5 shrink-0" />
    )}
    {text}
  </div>
);

/* ─── AI State Block ─── */

const AIStateBlock = ({
  state,
  onAction,
}: {
  state: AISearchState;
  onAction?: (action: string) => void;
}) => {
  const configs: Record<
    Exclude<AISearchState, "idle">,
    { icon: React.ReactNode; title: string; desc: string; cta?: string; ctaAction?: string }
  > = {
    searching: {
      icon: <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />,
      title: "Ищу связанные риски…",
      desc: "AI анализирует контекст события",
    },
    found_one: {
      icon: <CheckCircle2 className="h-5 w-5 text-foreground" />,
      title: "Найден связанный риск",
      desc: "Операционный риск · OR-2024-017 · Высокий",
      cta: "Связать",
      ctaAction: "link",
    },
    found_many: {
      icon: <Search className="h-5 w-5 text-foreground" />,
      title: "Найдено 3 возможных риска",
      desc: "AI нашёл несколько кандидатов. Требуется выбор.",
      cta: "Выбрать",
      ctaAction: "select",
    },
    not_found: {
      icon: <XCircle className="h-5 w-5 text-muted-foreground" />,
      title: "Связанный риск не найден",
      desc: "AI не обнаружил подходящего риска в базе",
      cta: "Создать риск",
      ctaAction: "create",
    },
  };

  if (state === "idle") return null;

  const cfg = configs[state];

  return (
    <div className="border-2 border-accent/40 bg-accent/10 rounded-lg p-4 ring-1 ring-accent/10">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{cfg.icon}</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">{cfg.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{cfg.desc}</p>
          {cfg.cta && (
            <Button
              size="sm"
              variant="outline"
              className="mt-3 h-7 text-xs"
              onClick={() => onAction?.(cfg.ctaAction!)}
            >
              {cfg.cta}
              <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Drawer ─── */

const DrawerOverlay = ({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  if (!open) return null;

  return (
    <div className="absolute inset-y-0 right-0 w-[320px] bg-card border-l border-border shadow-lg z-20 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="text-sm font-semibold">{title}</span>
        <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1 p-4">{children}</ScrollArea>
    </div>
  );
};

/* ─── Main Component ─── */

const ObjectModalDemo = () => {
  const [status, setStatus] = useState<ObjectStatus>("in_progress");
  const [aiState, setAiState] = useState<AISearchState>("idle");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<"history" | "measures">("history");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [nestedModalOpen, setNestedModalOpen] = useState(false);

  // AI state cycle
  const runAiCycle = () => {
    setAiState("searching");
    const states: AISearchState[] = ["found_one", "found_many", "not_found"];
    setTimeout(() => {
      setAiState(states[Math.floor(Math.random() * states.length)]);
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(runAiCycle, 1500);
    return () => clearTimeout(timer);
  }, []);

  const openDrawer = (content: "history" | "measures") => {
    setDrawerContent(content);
    setDrawerOpen(true);
  };

  const statuses: ObjectStatus[] = ["draft", "in_progress", "approved"];

  return (
    <div className="space-y-6">
      {/* Page context */}
      <div className="mb-4">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
          Reference · v3
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">Object Modal</h1>
        <p className="text-muted-foreground mt-1">Эталонный экран системы принятия решений</p>
      </div>

      {/* ─── MODAL SIMULATION ─── */}
      <div className="relative border border-border rounded-lg bg-card shadow-sm overflow-hidden">
        {/* ── HEADER ── */}
        <div className="px-5 py-4 border-b border-border">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge
                  variant="secondary"
                  className={cn("text-[10px] font-mono", statusConfig[status].className)}
                >
                  {statusConfig[status].label}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">EV-2024-0042</span>
              </div>
              <h2 className="text-lg font-semibold tracking-tight truncate">
                Инцидент: несанкционированный доступ к данным
              </h2>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Signals */}
          <div className="flex gap-2 mt-3 flex-wrap">
            <Signal type="warning" text="Требуется классификация" />
            <Signal type="ai" text="AI: анализ завершён" />
          </div>
        </div>

        {/* ── BODY: two columns ── */}
        <div className="flex min-h-[520px]">
          {/* LEFT: content */}
          <div className="flex-1 px-5 py-4 overflow-y-auto border-r border-border">
            <SectionLabel>Описание события</SectionLabel>

            <ContentRow icon={FileText} label="Что произошло">
              Зафиксирован несанкционированный доступ к базе данных клиентов через скомпрометированный API-ключ
            </ContentRow>
            <ContentRow icon={MapPin} label="Где произошло">
              Подразделение: IT Operations · Система: CRM Backend
            </ContentRow>
            <ContentRow icon={Clock} label="Когда произошло">
              14 марта 2026, 03:42 UTC
            </ContentRow>
            <ContentRow icon={AlertTriangle} label="Причина">
              Утечка API-ключа через публичный репозиторий
            </ContentRow>
            <ContentRow icon={Shield} label="Последствия">
              Потенциальный доступ к 12,400 записям клиентов
            </ContentRow>

            <Separator className="my-4" />

            {/* ── RELATION BLOCK ── */}
            <SectionLabel>Связь с риском</SectionLabel>
            <AIStateBlock
              state={aiState}
              onAction={(action) => {
                if (action === "link") setNestedModalOpen(true);
                if (action === "select") setNestedModalOpen(true);
                if (action === "create") setNestedModalOpen(true);
              }}
            />
            {aiState === "idle" && (
              <Button
                variant="outline"
                size="sm"
                className="mt-2 text-xs"
                onClick={runAiCycle}
              >
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Найти связанный риск
              </Button>
            )}

            <Separator className="my-4" />

            {/* Measures */}
            <SectionLabel>Меры</SectionLabel>
            <div className="space-y-2">
              {["Отозвать скомпрометированный ключ", "Аудит доступа за 30 дней", "Уведомить регулятора"].map(
                (m, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm py-2 px-3 rounded border border-border/50 bg-muted/20"
                  >
                    <CheckCircle2
                      className={cn(
                        "h-3.5 w-3.5 shrink-0",
                        i === 0 ? "text-foreground" : "text-muted-foreground/40"
                      )}
                    />
                    <span className={i === 0 ? "text-foreground" : "text-muted-foreground"}>
                      {m}
                    </span>
                  </div>
                )
              )}
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground"
                onClick={() => openDrawer("measures")}
              >
                Все меры
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </div>

            <Separator className="my-4" />

            {/* Attachments */}
            <SectionLabel>Вложения</SectionLabel>
            <div className="space-y-1.5">
              {["incident_report.pdf", "access_log_march.csv"].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-xs text-muted-foreground py-1.5 px-2 rounded bg-muted/30"
                >
                  <Paperclip className="h-3 w-3 shrink-0" />
                  <span className="font-mono">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: meta/control */}
          <div className="w-[240px] shrink-0 px-4 py-4 bg-muted/20 flex flex-col">
            {/* Info */}
            <SectionLabel>Информация</SectionLabel>
            <div className="space-y-2 text-xs mb-5">
              {[
                ["Создал", "Иванов А.С."],
                ["Дата", "14.03.2026"],
                ["Категория", "Информационная безопасность"],
                ["Приоритет", "Высокий"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium text-foreground">{v}</span>
                </div>
              ))}
            </div>

            <Separator className="mb-4" />

            {/* Status control */}
            <SectionLabel>Статус</SectionLabel>
            <div className="flex gap-1 mb-5 flex-wrap">
              {statuses.map((s) => (
                <Button
                  key={s}
                  variant={s === status ? "default" : "outline"}
                  size="sm"
                  className="h-7 text-[11px]"
                  onClick={() => setStatus(s)}
                >
                  {statusConfig[s].label}
                </Button>
              ))}
            </div>

            <Separator className="mb-4" />

            {/* Actions */}
            <SectionLabel>Действия</SectionLabel>
            <div className="space-y-1.5 mb-5">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-xs h-8"
                onClick={() => openDrawer("history")}
              >
                <History className="h-3.5 w-3.5 mr-2" />
                История
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-xs h-8"
                onClick={() => openDrawer("measures")}
              >
                <Shield className="h-3.5 w-3.5 mr-2" />
                Меры
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-xs h-8"
                onClick={() => setNestedModalOpen(true)}
              >
                <Link2 className="h-3.5 w-3.5 mr-2" />
                Связать
              </Button>

              {/* Delete with popover (action confirmation) */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs h-8 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-3.5 w-3.5 mr-2" />
                    Удалить
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-60 p-3" side="left">
                  <p className="text-sm font-medium mb-1">Удалить событие?</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Действие нельзя отменить
                  </p>
                  <div className="flex gap-2">
                    <Button variant="destructive" size="sm" className="h-7 text-xs flex-1">
                      Удалить
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* AI entry */}
            <div className="mt-auto">
              <Separator className="mb-4" />
              <div className="rounded border border-accent/40 bg-accent/10 p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-foreground" />
                  <span className="text-xs font-medium">AI</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Есть вопросы по событию? AI может помочь с классификацией и связями.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 h-6 text-[10px] w-full"
                  onClick={runAiCycle}
                >
                  Запустить анализ
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ── DECISION LAYER ── */}
        <div className="px-5 py-3 border-t border-border bg-muted/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Info className="h-3.5 w-3.5" />
            <span>Требуется решение</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs"
              onClick={() => setStatus("in_progress")}
            >
              Взять в работу
            </Button>
            <Button
              size="sm"
              className="h-8 text-xs"
              onClick={() => {
                setDeleteDialogOpen(true);
              }}
            >
              Утвердить
            </Button>
          </div>
        </div>

        {/* ── DRAWER OVERLAY ── */}
        <DrawerOverlay
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          title={drawerContent === "history" ? "История" : "Меры"}
        >
          {drawerContent === "history" ? (
            <div className="space-y-3">
              {[
                { time: "14.03 · 15:20", text: "Статус изменён → In Progress", author: "Иванов А.С." },
                { time: "14.03 · 12:01", text: "AI: анализ завершён", author: "System" },
                { time: "14.03 · 11:45", text: "AI: запущен поиск рисков", author: "System" },
                { time: "14.03 · 10:30", text: "Событие создано", author: "Иванов А.С." },
              ].map((entry, i) => (
                <div key={i} className="border-l-2 border-border pl-3 py-1">
                  <p className="text-xs font-mono text-muted-foreground">{entry.time}</p>
                  <p className="text-sm text-foreground">{entry.text}</p>
                  <p className="text-xs text-muted-foreground">{entry.author}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {[
                { name: "Отозвать скомпрометированный ключ", status: "done" },
                { name: "Аудит доступа за 30 дней", status: "pending" },
                { name: "Уведомить регулятора", status: "pending" },
                { name: "Обновить политику ротации ключей", status: "pending" },
                { name: "Провести обучение команды", status: "pending" },
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-2 py-2 px-2 rounded border border-border/50">
                  <CheckCircle2
                    className={cn(
                      "h-4 w-4 mt-0.5 shrink-0",
                      m.status === "done" ? "text-foreground" : "text-muted-foreground/30"
                    )}
                  />
                  <span className={cn("text-sm", m.status === "done" ? "text-foreground" : "text-muted-foreground")}>
                    {m.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </DrawerOverlay>
      </div>

      {/* ── MODAL OVER MODAL (nested) ── */}
      <Dialog open={nestedModalOpen} onOpenChange={setNestedModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Связать с риском</DialogTitle>
            <DialogDescription>
              Выберите риск для установки связи с событием
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-2">
            {[
              { id: "OR-2024-017", name: "Утечка данных через API", level: "Высокий" },
              { id: "OR-2024-023", name: "Несанкционированный доступ", level: "Критический" },
              { id: "OR-2024-031", name: "Нарушение политики доступа", level: "Средний" },
            ].map((risk) => (
              <div
                key={risk.id}
                className="flex items-center justify-between p-3 rounded border border-border hover:bg-accent/30 cursor-pointer transition-colors"
              >
                <div>
                  <p className="text-sm font-medium">{risk.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{risk.id} · {risk.level}</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" size="sm" onClick={() => setNestedModalOpen(false)}>
              Отмена
            </Button>
            <Button size="sm" onClick={() => setNestedModalOpen(false)}>
              Связать
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── APPROVAL CONFIRMATION (complex action → modal) ── */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Утвердить событие?</DialogTitle>
            <DialogDescription>
              После утверждения событие будет зафиксировано в реестре. Изменение статуса потребует дополнительного согласования.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" size="sm" onClick={() => setDeleteDialogOpen(false)}>
              Отмена
            </Button>
            <Button
              size="sm"
              onClick={() => {
                setStatus("approved");
                setDeleteDialogOpen(false);
              }}
            >
              Утвердить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ObjectModalDemo;
