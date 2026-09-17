import type { ButtonHTMLAttributes, ReactNode } from "react";

function Button({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      type="button"
      className={`rounded-control border border-control-border bg-control-bg px-3 py-1.5 text-[15px] font-semibold tracking-wide text-text-secondary transition-colors duration-[var(--transition-control)] hover:text-text-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function NavButton({
  direction,
  onClick,
  "aria-label": ariaLabel,
}: {
  direction: "prev" | "next";
  onClick?: () => void;
  "aria-label": string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex h-7 w-7 items-center justify-center rounded-control border border-control-border bg-control-bg text-text-secondary transition-colors duration-[var(--transition-control)] hover:text-accent-mint"
    >
      {direction === "prev" ? "◀" : "▶"}
    </button>
  );
}

export interface PresetBarProps {
  presetName: string;
  onPrevPreset?: () => void;
  onNextPreset?: () => void;
  saveName?: string;
  onSaveNameChange?: (value: string) => void;
  onSave?: () => void;
  onInit?: () => void;
  bypassed?: boolean;
  onBypassChange?: (bypassed: boolean) => void;
  brandName?: string;
}

export function PresetBar({
  presetName,
  onPrevPreset,
  onNextPreset,
  saveName = "",
  onSaveNameChange,
  onSave,
  onInit,
  bypassed = false,
  onBypassChange,
  brandName,
}: PresetBarProps) {
  return (
    <div className="flex items-center gap-3 rounded-b-panel border-t border-panel-border bg-[#232523] px-4 py-2.5">
      <span className="text-[15px] font-medium text-text-secondary">Preset</span>

      <NavButton direction="prev" onClick={onPrevPreset} aria-label="Previous preset" />
      <div className="flex min-w-[140px] flex-1 items-center justify-center rounded-control border border-control-border bg-control-bg px-3 py-1.5">
        <span className="text-[18px] font-semibold text-accent-mint">{presetName}</span>
      </div>
      <NavButton direction="next" onClick={onNextPreset} aria-label="Next preset" />

      <input
        type="text"
        value={saveName}
        onChange={(event) => onSaveNameChange?.(event.target.value)}
        placeholder="Preset name"
        className="w-[130px] rounded-control border border-control-border bg-control-bg px-3 py-1.5 text-[15px] text-text-primary placeholder:text-text-muted"
      />

      <Button onClick={onSave}>Save</Button>
      <Button onClick={onInit}>Init</Button>

      <Button
        onClick={() => onBypassChange?.(!bypassed)}
        className={bypassed ? "text-accent-mint shadow-[var(--glow-accent)]" : ""}
      >
        Bypass
      </Button>

      {brandName && (
        <span className="ml-auto font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
          {brandName}
        </span>
      )}
    </div>
  );
}
