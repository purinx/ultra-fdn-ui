export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export function Dropdown({ label, options, value, onChange, disabled = false }: DropdownProps) {
  return (
    <label className="flex flex-col gap-1">
      {label && (
        <span className="text-[10px] font-medium uppercase tracking-wider text-text-secondary">{label}</span>
      )}
      <div className="relative">
        <select
          className="w-full appearance-none rounded-control border border-control-border bg-control-bg py-1.5 pl-3 pr-8 text-[12px] font-medium text-text-primary transition-colors duration-[var(--transition-control)] hover:border-[var(--color-accent-mint)] disabled:opacity-50"
          value={value}
          disabled={disabled}
          onChange={(event) => onChange?.(event.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-text-secondary"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </label>
  );
}
