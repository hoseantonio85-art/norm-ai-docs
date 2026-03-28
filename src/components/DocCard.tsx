import { ReactNode } from "react";

interface DocCardProps {
  title?: string;
  children: ReactNode;
}

const DocCard = ({ title, children }: DocCardProps) => (
  <div className="rounded border border-border bg-card p-5 mb-4">
    {title && <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">{title}</h3>}
    <div className="text-sm leading-relaxed text-card-foreground">{children}</div>
  </div>
);

export default DocCard;
