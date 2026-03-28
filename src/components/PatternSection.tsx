import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "when" | "structure" | "includes" | "rules" | "behavior" | "states" | "default";

interface PatternSectionProps {
  title: string;
  variant?: SectionVariant;
  children: ReactNode;
}

const variantStyles: Record<SectionVariant, string> = {
  when: "bg-muted/40 border border-border",
  structure: "bg-card border border-border shadow-sm",
  includes: "bg-muted/20 border border-border/60",
  rules: "bg-accent/10 border-2 border-accent/40 ring-1 ring-accent/10",
  behavior: "border border-border/40",
  states: "bg-muted/30 border border-border/60",
  default: "border border-border",
};

const titleStyles: Record<SectionVariant, string> = {
  when: "text-muted-foreground",
  structure: "text-foreground",
  includes: "text-muted-foreground",
  rules: "text-foreground",
  behavior: "text-muted-foreground",
  states: "text-muted-foreground",
  default: "text-muted-foreground",
};

const PatternSection = ({ title, variant = "default", children }: PatternSectionProps) => (
  <div className={cn("rounded-lg p-5", variantStyles[variant])}>
    <h3
      className={cn(
        "text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2",
        titleStyles[variant]
      )}
    >
      {variant === "rules" && (
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground" />
      )}
      {title}
    </h3>
    <div className="text-sm leading-relaxed text-card-foreground">{children}</div>
  </div>
);

export default PatternSection;
