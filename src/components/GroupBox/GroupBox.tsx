import type { ReactNode } from "react";

export interface GroupBoxProps {
  label: string;
  children: ReactNode;
}

export function GroupBox({ label, children }: GroupBoxProps) {
  return (
    <div className="relative rounded-groupbox border border-groupbox-border px-4 pb-3 pt-4">
      <span className="absolute -top-2 left-3 bg-[#333533] px-1 text-[10px] uppercase tracking-wider text-groupbox-label">
        {label}
      </span>
      <div className="flex gap-6">{children}</div>
    </div>
  );
}
