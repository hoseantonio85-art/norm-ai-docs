interface Zone {
  label: string;
  height?: string;
  children?: Zone[];
  direction?: "row" | "col";
}

interface StructureWireframeProps {
  zones: Zone[];
  direction?: "row" | "col";
}

const ZoneBlock = ({ zone }: { zone: Zone }) => {
  if (zone.children) {
    return (
      <div
        className={`flex ${zone.direction === "row" ? "flex-row" : "flex-col"} gap-2 flex-1`}
        style={{ minHeight: zone.height }}
      >
        {zone.children.map((child) => (
          <ZoneBlock key={child.label} zone={child} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="border-2 border-dashed border-muted-foreground/30 bg-muted/40 flex items-center justify-center rounded flex-1"
      style={{ minHeight: zone.height || "48px" }}
    >
      <span className="text-muted-foreground/60 font-mono text-[11px] uppercase tracking-wider">
        {zone.label}
      </span>
    </div>
  );
};

const StructureWireframe = ({ zones, direction = "col" }: StructureWireframeProps) => (
  <div className="mt-6 space-y-2">
    <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-wider">
      Wireframe
    </span>
    <div
      className={`border-2 border-dashed border-muted-foreground/20 rounded-lg p-3 flex ${
        direction === "row" ? "flex-row" : "flex-col"
      } gap-2 bg-muted/20`}
    >
      {zones.map((zone) => (
        <ZoneBlock key={zone.label} zone={zone} />
      ))}
    </div>
  </div>
);

export default StructureWireframe;
