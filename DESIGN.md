---
version: alpha
name: Ultra FDN Dark
description: >-
  A dark, hardware/plugin-inspired visual identity for reverb (FDN) UI
  components — graphite panels with a single mint-green accent and an
  amber counterpoint for negative/matrix values.
colors:
  primary: "#5eead4"
  primary-dim: "rgba(94, 234, 212, 0.25)"
  primary-glow: "rgba(94, 234, 212, 0.45)"
  accent-amber: "#f0b86e"
  accent-amber-dim: "rgba(240, 184, 110, 0.25)"
  neutral-canvas: "#15171a"
  neutral-panel-top: "#3c3f3d"
  neutral-panel-bottom: "#2c2e2c"
  neutral-panel-border: "rgba(255, 255, 255, 0.06)"
  neutral-control-bg: "#26282a"
  neutral-control-border: "rgba(255, 255, 255, 0.08)"
  neutral-toggle-track-off: "#26282a"
  neutral-divider: "rgba(255, 255, 255, 0.08)"
  neutral-knob-inner: "#1c1d1c"
  neutral-knob-outer: "#3d3f3d"
  neutral-knob-bezel: "rgba(255, 255, 255, 0.08)"
  neutral-meter-track: "#232523"
  on-neutral-primary: "#e8ebe9"
  on-neutral-secondary: "#9aa19d"
  on-neutral-muted: "#6b716e"
  on-neutral-groupbox-label: "#a9b0ac"
  on-neutral-groupbox-label-bg: "#333533"
  meter-fill-top: "#99f6e4"
  meter-fill-bottom: "#0d9488"
  groupbox-border: "rgba(94, 234, 212, 0.35)"
typography:
  display:
    fontFamily: "Barlow Condensed, Oswald, sans-serif"
    fontSize: 30px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -0.01em
  mono-caption:
    fontFamily: "IBM Plex Mono, SFMono-Regular, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.25em
  headline-lg:
    fontFamily: "Inter, Helvetica Neue, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.2
  headline-md:
    fontFamily: "Inter, Helvetica Neue, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: "Inter, Helvetica Neue, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
  body-sm:
    fontFamily: "Inter, Helvetica Neue, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
  label-caps:
    fontFamily: "Inter, Helvetica Neue, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.08em
  label-sm:
    fontFamily: "Inter, Helvetica Neue, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3
  caption:
    fontFamily: "Inter, Helvetica Neue, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
rounded:
  sm: 4px
  md: 8px
  lg: 16px
spacing:
  panel-padding-x: 32px
  panel-padding-y: 40px
  section-gap-x: 48px
  section-gap-y: 28px
  side-column-width: 340px
  knob-row-gap-x: 36px
  knob-gap-inner: 32px
  groupbox-pad-top: 22px
  groupbox-pad-x: 24px
  groupbox-pad-bottom: 18px
components:
  page:
    backgroundColor: "{colors.neutral-canvas}"
  panel:
    backgroundColor: "{colors.neutral-panel-top}"
    backgroundColorEnd: "{colors.neutral-panel-bottom}"
    borderColor: "{colors.neutral-panel-border}"
    rounded: "{rounded.lg}"
    padding: "{spacing.panel-padding-x}"
  groupbox:
    borderColor: "{colors.groupbox-border}"
    textColor: "{colors.on-neutral-groupbox-label}"
    labelBackgroundColor: "{colors.on-neutral-groupbox-label-bg}"
    rounded: "{rounded.md}"
    padding: "{spacing.groupbox-pad-x}"
  divider:
    backgroundColor: "{colors.neutral-divider}"
  button:
    backgroundColor: "{colors.neutral-control-bg}"
    borderColor: "{colors.neutral-control-border}"
    textColor: "{colors.on-neutral-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-hover:
    textColor: "{colors.on-neutral-primary}"
  button-disabled:
    textColor: "{colors.on-neutral-muted}"
  input:
    backgroundColor: "{colors.neutral-control-bg}"
    borderColor: "{colors.neutral-control-border}"
    textColor: "{colors.on-neutral-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
  toggle-off:
    backgroundColor: "{colors.neutral-toggle-track-off}"
  toggle-on:
    backgroundColor: "{colors.primary-dim}"
    glowColor: "{colors.primary-glow}"
  knob:
    backgroundColor: "{colors.neutral-knob-inner}"
    backgroundColorEnd: "{colors.neutral-knob-outer}"
    borderColor: "{colors.neutral-knob-bezel}"
  knob-track:
    backgroundColor: "{colors.primary-dim}"
  knob-active:
    backgroundColor: "{colors.primary}"
  level-meter:
    backgroundColor: "{colors.neutral-meter-track}"
    fillStartColor: "{colors.meter-fill-bottom}"
    fillEndColor: "{colors.meter-fill-top}"
  matrix-weights-negative:
    backgroundColor: "{colors.accent-amber}"
    dimColor: "{colors.accent-amber-dim}"
---

## Overview

A pro-audio hardware aesthetic: dark graphite panels with beveled controls, evoking a physical rack unit rather than a flat mobile app. The UI is information-dense (many parameters, small controls) so restraint matters — a single mint-green accent (`primary`) carries every interactive and "active" signal, and every other color stays desaturated graphite. Amber is reserved exclusively for one meaning: negative values in the matrix-weights heatmap. Nothing else should ever be amber. The overall feel should read as precise and technical, not playful — this is an instrument panel, not a consumer app.

## Colors

The palette is almost monochrome by design: near-black graphite surfaces and grays, with exactly one accent hue doing all of the interactive signaling.

- **Primary (`#5eead4`, mint):** The sole driver of interaction and "active" state — knob value arcs and pointers, focused/hover borders, lit meter segments, toggle-on state, positive matrix-weight cells. If something is clickable, adjustable, or "on," it is mint. Nothing else uses this color.
- **Accent Amber (`#f0b86e`):** A single-purpose counterpoint to `primary`, used only for negative values in the Matrix Weights heatmap's diverging color scale (amber ↔ dark ↔ mint). Do not use amber for warnings, errors, or any other UI meaning.
- **Neutral surfaces:** A tight range of near-black grays forms every background — page canvas (`neutral-canvas`), the panel body (`neutral-panel-top`/`neutral-panel-bottom`, a subtle top-to-bottom gradient), and recessed controls (`neutral-control-bg`, `neutral-toggle-track-off`). Borders and dividers are white at very low opacity (6–8%) rather than a separate gray, so they read as a hairline highlight on the dark surface, not a hard line.
- **Text on neutral:** Three steps of desaturated off-white/gray — `on-neutral-primary` for headings and primary labels, `on-neutral-secondary` for parameter labels and body text, `on-neutral-muted` for disabled/inactive text.

## Typography

Two type families split by role: a wide geometric display face for the module logo, and a standard grotesque (Inter) for everything functional. A monospace face is used once, deliberately, for the tracked-out subtitle under the logo — its mechanical rhythm reinforces the "technical instrument" feel.

- **Display:** `Barlow Condensed`/`Oswald`, used only for the module name lockup — heavy weight (900), tight line-height, slightly negative tracking.
- **Body/label scale (Inter):** A compact ramp from `headline-lg` (22px, knob values on the hero `Decay`/`Mix` controls) down to `caption` (12px, small legend/axis text). `label-caps` (14px, uppercase, wide tracking) is reserved specifically for section titles (`GroupBox`, `SpectrumAnalyzer`, `MatrixWeights` headers) — uppercase+tracking is what visually marks something as a section heading rather than a value.
- **Mono caption:** Used exactly once, for the module subtitle, set in wide tracked-out uppercase to read like a serial number or spec line.

## Layout

A single fixed-width panel (1200px, internal design size — see Elevation & Depth for how it's presented at half scale) laid out as four horizontal bands separated by hairline dividers: a header band (loss stats, spectrum analyzer, meters), a dense "knob row" band, a matrix-configuration band, and a footer preset bar. Two of these bands share a common left-column width (`side-column-width`) so their left edges align vertically down the panel — this alignment is load-bearing for the design and must never drift by a few pixels between rows.

Rows generally fill the panel's full width via `justify-content: space-between` rather than left-packing content and leaving a trailing gap on one side; a fixed minimum gap (`knob-row-gap-x`) only kicks in as a fallback when a row must wrap. Padding and gaps step down through three tiers: `section-gap-x`/`section-gap-y` between unrelated bands, `knob-row-gap-x` between blocks within the dense knob row, and `knob-gap-inner`/`groupbox-pad-*` for the tightest internal spacing inside a single `GroupBox`. Every pair of adjacent elements must use an explicit, deliberate alignment (`start`, `center`, `end`, or `stretch`) — an element left top-aligned next to a taller sibling, leaving dead space beneath it, is treated as a bug, not a style choice.

## Elevation & Depth

Depth comes from soft ambient shadow plus a one-pixel inset bevel, not from strong drop shadows or borders. The panel itself sits on a subtle radial mint glow (in the page background, not the panel) and casts a large, soft, low-opacity black shadow (`0 24px 60px rgba(0,0,0,0.5)`) with a paper-thin inset highlight on its top edge and inset shadow on its bottom edge — the classic "beveled hardware panel" trick. Knobs repeat the same idea at a smaller scale: a soft outer shadow plus an inset highlight to suggest a slightly domed, physical cap. Interactive "active" state is communicated with a mint glow (`box-shadow` blur using `primary-glow`) rather than elevation change — nothing lifts on hover/focus, it lights up instead.

**Presentation scale:** the panel is authored at its true 1200px-wide size (so every token above is at its real, readable value) and then the whole panel — border, shadow, radius, text, everything — is shrunk uniformly with a single `transform: scale(0.5)` on the outermost panel element, wrapped in a fixed-size `overflow: hidden` container sized to match. This keeps every part of the design proportionally identical to the unscaled version; it is a presentation detail, not a separate "compact" design system, and the wrapper's pixel dimensions must be re-measured whenever panel content changes size.

## Shapes

Corner rounding is minimal and three-tier: `rounded.sm` (4px) for small interactive controls (buttons, inputs, preset-nav buttons), `rounded.md` (8px) for `GroupBox` containers, and `rounded.lg` (16px) for the outer panel itself. Knobs and toggle tracks/thumbs are fully circular/pill-shaped (not part of the `rounded` scale). There is no sharp-cornered element anywhere in the system — even the densest control clusters use at least `rounded.sm`.

## Components

- **Panel:** The outer container. Gradient background (`neutral-panel-top` → `neutral-panel-bottom`), `rounded.lg`, outer shadow + inset bevel (see Elevation).
- **GroupBox:** A thin mint-tinted-border (`groupbox-border`) container that clusters related knobs, with a small uppercase label cut into the top border. `rounded.md`; padding per `groupbox-pad-*`.
- **Knob:** A circular rotary control. Track is a 270°-sweep arc in `primary-dim`/`primary` (see `knob-track`/`knob-active`); the knob face itself is a radial gradient (`neutral-knob-inner` → `neutral-knob-outer`) with a thin `neutral-knob-bezel` rim and a mint pointer line. Comes in four sizes (`xl` 80px down to `sm` 48px); label and value typography scale with knob size so a bigger knob never has disproportionately small text.
- **ToggleSwitch:** Pill track (`neutral-toggle-track-off` → `primary-dim` when on) with a circular thumb that slides and changes color on toggle; a mint glow appears only when on.
- **Dropdown / Input:** Flat `neutral-control-bg` field, `neutral-control-border` outline, `rounded.sm`. Border brightens to `primary` on hover/focus. No fill-color change on focus — border + text color carry the affordance.
- **Button:** Same flat neutral surface as inputs; text goes from `on-neutral-secondary` to `on-neutral-primary` on hover (see `button`/`button-hover`). An active/engaged button (e.g. Bypass engaged) adds the mint glow instead of changing its background.
- **LevelMeter:** Vertical segmented bar, unlit segments in `neutral-meter-track`, lit segments in a `meter-fill-bottom` → `meter-fill-top` gradient with a mint glow on the topmost lit segment.

## Do's and Don'ts

- Do reserve `primary` (mint) exclusively for interactive/active signaling — never use it as decoration on static content.
- Don't introduce a second accent hue; `accent-amber` exists for exactly one purpose (negative matrix-weight values) and should not be reused elsewhere.
- Do keep every adjacent-element alignment explicit and intentional (start/center/end/stretch) — an accidental gap under a shorter sibling is a defect, not a style.
- Don't let a row's content overflow or wrap unexpectedly; prefer `justify-between` to fill available width, and only fall back to a fixed gap when wrapping is unavoidable.
- Do scale a `Knob`'s label/value typography together with its `size` variant — never leave large-knob text at small-knob size.
- Don't use a fixed pixel `width` on text that can grow (e.g. a knob's `valueLabel`); use `min-width` and `white-space: nowrap` so longer values never wrap.
- Do keep shared-width columns (the `side-column-width` left columns) numerically identical across rows so they stay vertically aligned — never eyeball two "close enough" widths.
