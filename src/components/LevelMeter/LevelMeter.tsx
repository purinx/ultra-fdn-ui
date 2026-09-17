export interface LevelMeterProps {
  level: number;
  label: string;
  segments?: number;
  height?: number;
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

const SEGMENT_GAP_PX = 2;

export function LevelMeter({ level, label, segments = 20, height = 160 }: LevelMeterProps) {
  const litPercent = clamp01(level) * 100;
  const segmentMask = `repeating-linear-gradient(
    0deg,
    transparent 0,
    transparent ${SEGMENT_GAP_PX}px,
    black ${SEGMENT_GAP_PX}px,
    black ${height / segments}px
  )`;

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative w-[10px] overflow-hidden rounded-[2px] bg-meter-track"
        style={{ height, WebkitMaskImage: segmentMask, maskImage: segmentMask }}
      >
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: `${litPercent}%`,
            background: "var(--gradient-meter-fill)",
            backgroundSize: `100% ${height}px`,
            backgroundPosition: "left bottom",
            boxShadow: litPercent > 0 ? "0 0 6px var(--color-accent-mint-glow)" : undefined,
          }}
        />
      </div>
      <span className="text-[14px] font-medium uppercase tracking-wide text-text-secondary">{label}</span>
    </div>
  );
}
