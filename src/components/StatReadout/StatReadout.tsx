export interface StatReadoutProps {
  label: string;
  value: string;
  /** Optional 0..1 trend samples rendered as a small sparkline under the label. */
  trend?: number[];
}

function trendToPath(trend: number[], width: number, height: number) {
  return trend
    .map((v, i) => {
      const x = (i / (trend.length - 1)) * width;
      const y = height - Math.max(0, Math.min(1, v)) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

const TREND_VIEW_W = 220;
const TREND_VIEW_H = 44;

export function StatReadout({ label, value, trend }: StatReadoutProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5">
        <span className="text-[16px] font-semibold uppercase tracking-wider text-text-secondary">{label}</span>
        <svg width={16} height={16} viewBox="0 0 16 16" className="text-text-muted">
          <circle cx={8} cy={8} r={7} fill="none" stroke="currentColor" strokeWidth={1.2} />
          <line x1={8} y1={7} x2={8} y2={11.5} stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
          <circle cx={8} cy={4.7} r={0.9} fill="currentColor" />
        </svg>
      </div>
      {trend ? (
        <svg
          viewBox={`0 0 ${TREND_VIEW_W} ${TREND_VIEW_H}`}
          preserveAspectRatio="none"
          className="h-11 w-full text-accent-mint"
          style={{ filter: "drop-shadow(0 0 2px var(--color-accent-mint-glow))" }}
        >
          <path
            d={trendToPath(trend, TREND_VIEW_W, TREND_VIEW_H)}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <span className="text-[28px] font-bold text-accent-mint">{value}</span>
      )}
    </div>
  );
}
