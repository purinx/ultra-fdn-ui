export interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function ToggleSwitch({ label, checked, onChange, disabled = false }: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[11px] font-medium text-text-secondary">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className="h-5 w-9 shrink-0 rounded-full border p-0.5 transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] disabled:opacity-50"
        style={{
          background: checked ? "var(--color-accent-mint-dim)" : "var(--color-toggle-track-off)",
          borderColor: checked ? "var(--color-accent-mint)" : "var(--color-control-border)",
          boxShadow: checked ? "var(--glow-accent)" : undefined,
        }}
      >
        <span
          className="block h-3.5 w-3.5 rounded-full transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            background: checked ? "var(--color-accent-mint)" : "var(--color-text-muted)",
            transform: checked ? "translateX(15px)" : "translateX(0)",
          }}
        />
      </button>
    </div>
  );
}
