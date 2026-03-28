interface WireframeSlotProps {
  label: string;
  height?: string;
}

const WireframeSlot = ({ label, height = "200px" }: WireframeSlotProps) => (
  <div
    className="border-2 border-dashed border-wireframe-border bg-wireframe-bg flex items-center justify-center rounded"
    style={{ height }}
  >
    <span className="text-wireframe-fg font-mono text-sm">[WireframeSlot: {label}]</span>
  </div>
);

export default WireframeSlot;
