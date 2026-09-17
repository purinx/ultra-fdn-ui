import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

export type KnobSize = "lg" | "md" | "sm";

export interface KnobProps {
  label: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  size?: KnobSize;
  /** Pre-formatted value text rendered below the knob (e.g. "3.20 s", "120 Hz"). */
  valueLabel?: string;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

const START_ANGLE = -135;
const END_ANGLE = 135;
const SWEEP = END_ANGLE - START_ANGLE;
const DOT_COUNT = 25;
const DRAG_RANGE_PX = 180;

const SIZE_PX: Record<KnobSize, number> = { lg: 64, md: 56, sm: 48 };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function polarToXY(radius: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: radius * Math.cos(angleRad), y: radius * Math.sin(angleRad) };
}

export function Knob({
  label,
  value: controlledValue,
  defaultValue,
  min = 0,
  max = 100,
  size = "lg",
  valueLabel,
  onChange,
  disabled = false,
}: KnobProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? min + (max - min) / 2);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const dragState = useRef<{ startY: number; startValue: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const commitValue = useCallback(
    (next: number) => {
      const clamped = clamp(next, min, max);
      if (!isControlled) setInternalValue(clamped);
      onChange?.(clamped);
    },
    [isControlled, min, max, onChange],
  );

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (disabled) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = { startY: event.clientY, startValue: value };
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current) return;
    const dy = dragState.current.startY - event.clientY;
    const ratio = dy / DRAG_RANGE_PX;
    commitValue(dragState.current.startValue + ratio * (max - min));
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current) return;
    dragState.current = null;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const t = (value - min) / (max - min);
  const angle = START_ANGLE + t * SWEEP;
  const px = SIZE_PX[size];
  const ringRadius = px / 2 - 3;
  const bodyDiameter = Math.round(px * 0.72);
  const pointerLength = bodyDiameter / 2 - 6;

  const dots = Array.from({ length: DOT_COUNT }, (_, i) => {
    const dotAngle = START_ANGLE + (i / (DOT_COUNT - 1)) * SWEEP;
    const { x, y } = polarToXY(ringRadius, dotAngle);
    return { x, y, active: dotAngle <= angle + 0.01, key: i };
  });

  const pointer = polarToXY(pointerLength, angle);

  return (
    <div className="flex flex-col items-center gap-2 select-none" style={{ width: px }}>
      <div
        className="relative touch-none"
        style={{
          width: px,
          height: px,
          cursor: disabled ? "default" : isDragging ? "ns-resize" : "pointer",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <svg
          width={px}
          height={px}
          viewBox={`${-px / 2} ${-px / 2} ${px} ${px}`}
          className="pointer-events-none absolute inset-0"
        >
          {dots.map((dot) => (
            <circle
              key={dot.key}
              cx={dot.x}
              cy={dot.y}
              r={1.4}
              fill={dot.active ? "var(--color-accent-mint)" : "var(--color-accent-mint-dim)"}
              style={
                dot.active ? { filter: "drop-shadow(0 0 2px var(--color-accent-mint-glow))" } : undefined
              }
            />
          ))}
        </svg>

        <div
          className="absolute rounded-full bg-[image:var(--gradient-knob-body)] shadow-[var(--shadow-knob)]"
          style={{
            width: bodyDiameter,
            height: bodyDiameter,
            left: (px - bodyDiameter) / 2,
            top: (px - bodyDiameter) / 2,
            border: "1px solid var(--color-knob-bezel)",
            opacity: disabled ? 0.5 : 1,
          }}
        >
          <svg
            width={bodyDiameter}
            height={bodyDiameter}
            viewBox={`${-bodyDiameter / 2} ${-bodyDiameter / 2} ${bodyDiameter} ${bodyDiameter}`}
            className="pointer-events-none absolute inset-0"
          >
            <line
              x1={0}
              y1={0}
              x2={pointer.x}
              y2={pointer.y}
              stroke={disabled ? "var(--color-text-muted)" : "var(--color-accent-mint)"}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ height: "var(--size-knob-label-height)" }}
      >
        <span className="whitespace-pre-line text-center text-[11px] font-medium leading-tight tracking-wide text-text-secondary">
          {label}
        </span>
      </div>
      {valueLabel && (
        <span className="text-[11px] font-semibold text-accent-mint">{valueLabel}</span>
      )}
    </div>
  );
}
