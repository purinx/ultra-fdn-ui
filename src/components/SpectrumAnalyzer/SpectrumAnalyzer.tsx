const FREQ_MIN = 20;
const FREQ_MAX = 20000;
const DB_MIN = -100;
const DB_MAX = 0;
const FREQ_TICKS = [20, 50, 100, 500, 1000, 5000, 10000, 20000];
const DB_TICKS = [0, -20, -40, -60, -80, -100];

const VIEW_W = 600;
const VIEW_H = 148;
const PLOT_LEFT = 34;
const PLOT_RIGHT = VIEW_W - 26;
const PLOT_TOP = 22;
const PLOT_BOTTOM = VIEW_H - 22;

function freqToX(freq: number) {
  const t = Math.log10(freq / FREQ_MIN) / Math.log10(FREQ_MAX / FREQ_MIN);
  return PLOT_LEFT + t * (PLOT_RIGHT - PLOT_LEFT);
}

function dbToY(db: number) {
  const t = (db - DB_MAX) / (DB_MIN - DB_MAX);
  return PLOT_TOP + t * (PLOT_BOTTOM - PLOT_TOP);
}

function formatFreqLabel(freq: number) {
  return freq >= 1000 ? `${freq / 1000}k` : `${freq}`;
}

function samplesToPath(samples: number[], close: boolean) {
  const points = samples.map((db, i) => {
    const x = PLOT_LEFT + (i / (samples.length - 1)) * (PLOT_RIGHT - PLOT_LEFT);
    const y = dbToY(db);
    return { x, y };
  });
  const line = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  if (!close) return line;
  return `${line} L ${PLOT_RIGHT} ${PLOT_BOTTOM} L ${PLOT_LEFT} ${PLOT_BOTTOM} Z`;
}

/** Decorative default envelope derived from the HPF/LPF cutoffs (4th-order rolloff approximation). */
function defaultCurve(hpfHz: number, lpfHz: number, points = 120): number[] {
  return Array.from({ length: points }, (_, i) => {
    const freq = FREQ_MIN * Math.pow(FREQ_MAX / FREQ_MIN, i / (points - 1));
    const hp = 1 / Math.sqrt(1 + (hpfHz / freq) ** 4);
    const lp = 1 / Math.sqrt(1 + (freq / lpfHz) ** 4);
    const db = 20 * Math.log10(Math.max(hp * lp, 1e-4));
    return Math.max(db, DB_MIN);
  });
}

/** Deterministic decorative noise floor (seeded hash, stable across renders). */
function defaultNoise(points = 160): number[] {
  return Array.from({ length: points }, (_, i) => {
    const seed = Math.sin(i * 12.9898 + 4.1414) * 43758.5453;
    const frac = seed - Math.floor(seed);
    return -35 - frac * 45;
  });
}

export interface SpectrumAnalyzerProps {
  hpfHz: number;
  lpfHz: number;
  /** dB samples (DB_MIN..0), evenly spaced across the log-frequency axis. Defaults to a curve derived from hpfHz/lpfHz. */
  curve?: number[];
  /** dB samples for the jagged noise-floor fill behind the curve. */
  noise?: number[];
  legendLabel?: string;
  title?: string;
}

export function SpectrumAnalyzer({
  hpfHz,
  lpfHz,
  curve,
  noise,
  legendLabel = "HPF + LPF",
  title = "Spectrum Analyzer",
}: SpectrumAnalyzerProps) {
  const curveSamples = curve ?? defaultCurve(hpfHz, lpfHz);
  const noiseSamples = noise ?? defaultNoise();

  const hpfX = freqToX(hpfHz);
  const lpfX = freqToX(lpfHz);
  const hpfIndex = Math.round((Math.log10(hpfHz / FREQ_MIN) / Math.log10(FREQ_MAX / FREQ_MIN)) * (curveSamples.length - 1));
  const lpfIndex = Math.round((Math.log10(lpfHz / FREQ_MIN) / Math.log10(FREQ_MAX / FREQ_MIN)) * (curveSamples.length - 1));
  const hpfY = dbToY(curveSamples[Math.min(Math.max(hpfIndex, 0), curveSamples.length - 1)]);
  const lpfY = dbToY(curveSamples[Math.min(Math.max(lpfIndex, 0), curveSamples.length - 1)]);

  return (
    <div className="flex h-full w-full flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold uppercase tracking-wider text-groupbox-label">{title}</span>
        <span className="flex items-center gap-1.5 text-[13px] font-medium text-text-secondary">
          Preview spectrum
          <span className="inline-block h-[2px] w-4 bg-accent-mint" />
          {legendLabel}
        </span>
      </div>

      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full flex-1" preserveAspectRatio="none">
        {DB_TICKS.map((db) => (
          <g key={db}>
            <line
              x1={PLOT_LEFT}
              x2={PLOT_RIGHT}
              y1={dbToY(db)}
              y2={dbToY(db)}
              stroke="var(--color-divider)"
              strokeWidth={1}
            />
            <text x={0} y={dbToY(db) + 3} fontSize={12} fill="var(--color-text-muted)">
              {db}
            </text>
          </g>
        ))}
        <text x={0} y={PLOT_TOP - 0} fontSize={12} fill="var(--color-text-muted)">
          dB
        </text>

        {FREQ_TICKS.map((freq) => (
          <text
            key={freq}
            x={freqToX(freq)}
            y={VIEW_H - 6}
            fontSize={12}
            fill="var(--color-text-muted)"
            textAnchor="middle"
          >
            {formatFreqLabel(freq)}
          </text>
        ))}

        <path d={samplesToPath(noiseSamples, false)} fill="none" stroke="var(--color-divider)" strokeWidth={1} />
        <path d={samplesToPath(curveSamples, true)} fill="url(#spectrum-fill)" stroke="none" />
        <path d={samplesToPath(curveSamples, false)} fill="none" stroke="var(--color-accent-mint)" strokeWidth={2} />

        <defs>
          <linearGradient id="spectrum-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent-mint)" stopOpacity={0.25} />
            <stop offset="100%" stopColor="var(--color-accent-mint)" stopOpacity={0.02} />
          </linearGradient>
        </defs>

        <circle cx={hpfX} cy={hpfY} r={3} fill="var(--color-accent-mint)" style={{ filter: "drop-shadow(0 0 3px var(--color-accent-mint-glow))" }} />
        <text x={Math.max(hpfX, PLOT_LEFT + 2)} y={12} fontSize={12} fill="var(--color-text-secondary)" textAnchor="start">
          HPF {hpfHz} Hz
        </text>
        <circle cx={lpfX} cy={lpfY} r={3} fill="var(--color-accent-mint)" style={{ filter: "drop-shadow(0 0 3px var(--color-accent-mint-glow))" }} />
        <text x={Math.min(lpfX, PLOT_RIGHT - 2)} y={12} fontSize={12} fill="var(--color-text-secondary)" textAnchor="end">
          LPF {lpfHz >= 1000 ? `${lpfHz / 1000}kHz` : `${lpfHz}Hz`}
        </text>
      </svg>
    </div>
  );
}
