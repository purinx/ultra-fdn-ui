const NEG_RGB = [240, 184, 110]; // amber
const MID_RGB = [35, 37, 35]; // near-black (matches meter-track)
const POS_RGB = [94, 234, 212]; // mint

function lerpChannel(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function weightToColor(value: number) {
  const v = Math.max(-1, Math.min(1, value));
  const [from, to] = v >= 0 ? [MID_RGB, POS_RGB] : [MID_RGB, NEG_RGB];
  const t = Math.abs(v);
  const [r, g, b] = from.map((c, i) => lerpChannel(c, to[i], t));
  return `rgb(${r} ${g} ${b})`;
}

/** Deterministic decorative weights (seeded hash, stable across renders). */
function defaultMatrix(rows = 16, cols = 26): number[][] {
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => {
      const seed = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
      return (seed - Math.floor(seed)) * 2 - 1;
    }),
  );
}

export interface MatrixWeightsProps {
  /** Weight values in the range -1..1. Defaults to a decorative deterministic pattern. */
  data?: number[][];
  title?: string;
}

export function MatrixWeights({ data, title = "Matrix Weights" }: MatrixWeightsProps) {
  const matrix = data ?? defaultMatrix();
  const cols = matrix[0]?.length ?? 1;

  return (
    <div className="flex h-full w-full flex-col gap-1.5">
      <span className="text-[15px] font-semibold uppercase tracking-wider text-groupbox-label">{title}</span>
      <div className="flex flex-1 gap-2">
        <div
          className="grid flex-1 gap-px overflow-hidden rounded-[3px] border border-divider"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${matrix.length}, 1fr)` }}
        >
          {matrix.flatMap((row, r) =>
            row.map((value, c) => <div key={`${r}-${c}`} style={{ background: weightToColor(value) }} />),
          )}
        </div>

        <div className="flex items-stretch gap-1.5">
          <div className="w-2 rounded-full" style={{ background: "var(--gradient-matrix-scale)" }} />
          <div className="flex flex-col justify-between py-0.5 text-[13px] font-medium text-text-muted">
            <span>+1</span>
            <span>0</span>
            <span>-1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
