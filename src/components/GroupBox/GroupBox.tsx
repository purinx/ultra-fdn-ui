import type { ReactNode } from "react";

export interface GroupBoxProps {
  label: string;
  children: ReactNode;
}

export function GroupBox({ label, children }: GroupBoxProps) {
  return (
    <div
      className="relative rounded-groupbox border border-groupbox-border"
      style={{
        paddingTop: "var(--space-groupbox-pad-top)",
        paddingBottom: "var(--space-groupbox-pad-bottom)",
        paddingLeft: "var(--space-groupbox-pad-x)",
        paddingRight: "var(--space-groupbox-pad-x)",
      }}
    >
      <span className="absolute -top-2 left-3 bg-[var(--color-groupbox-label-bg)] px-1 text-[14px] uppercase tracking-wider text-groupbox-label">
        {label}
      </span>
      <div className="flex items-start" style={{ gap: "var(--space-knob-gap-inner)" }}>
        {children}
      </div>
    </div>
  );
}
