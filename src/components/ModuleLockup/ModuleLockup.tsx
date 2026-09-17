export interface ModuleLockupProps {
  title?: string;
  subtitle?: string;
}

export function ModuleLockup({ title, subtitle }: ModuleLockupProps) {
  if (!title && !subtitle) return null;

  return (
    <div className="flex flex-col items-end text-right font-display">
      {title && (
        <span className="text-[28px] font-bold leading-none tracking-wide text-text-primary">{title}</span>
      )}
      {subtitle && (
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-text-secondary">
          {subtitle}
        </span>
      )}
    </div>
  );
}
