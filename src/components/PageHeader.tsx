interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="mb-8 border-b border-border pb-6">
    <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
    {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
  </div>
);

export default PageHeader;
