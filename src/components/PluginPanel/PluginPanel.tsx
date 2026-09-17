import { useState } from "react";
import { Knob } from "../Knob/Knob";
import { GroupBox } from "../GroupBox/GroupBox";
import { LevelMeter } from "../LevelMeter/LevelMeter";
import { ModuleLockup } from "../ModuleLockup/ModuleLockup";
import { Dropdown } from "../Dropdown/Dropdown";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { SpectrumAnalyzer } from "../SpectrumAnalyzer/SpectrumAnalyzer";
import { MatrixWeights } from "../MatrixWeights/MatrixWeights";
import { StatReadout } from "../StatReadout/StatReadout";
import { PresetBar, type PresetBarProps } from "../PresetBar/PresetBar";

interface KnobParam {
  key: string;
  label: string;
  min: number;
  max: number;
  defaultValue: number;
  format: (value: number) => string;
}

const KNOB_PARAMS = {
  delay: { key: "delay", label: "Delay", min: 0, max: 100, defaultValue: 50, format: (v: number) => `${v.toFixed(1)}%` },
  predelay: { key: "predelay", label: "Predelay", min: 0, max: 250, defaultValue: 24, format: (v: number) => `${v.toFixed(1)} ms` },
  predelayFeedback: {
    key: "predelayFeedback",
    label: "Predelay\nFeedback",
    min: 0,
    max: 100,
    defaultValue: 0,
    format: (v: number) => `${v.toFixed(1)}%`,
  },
  externalFeedback: {
    key: "externalFeedback",
    label: "External\nFeedback",
    min: 0,
    max: 100,
    defaultValue: 0,
    format: (v: number) => `${v.toFixed(1)}%`,
  },
  modulation: { key: "modulation", label: "Modulation", min: 0, max: 100, defaultValue: 25, format: (v: number) => `${v.toFixed(1)}%` },
  damping: { key: "damping", label: "Damping", min: 0, max: 1, defaultValue: 0.63, format: (v: number) => v.toFixed(2) },
  hpf: { key: "hpf", label: "HPF", min: 20, max: 1000, defaultValue: 120, format: (v: number) => `${Math.round(v)} Hz` },
  lpf: { key: "lpf", label: "LPF", min: 1000, max: 20000, defaultValue: 8000, format: (v: number) => `${Math.round(v)} Hz` },
} satisfies Record<string, KnobParam>;

const MATRIX_OPTIONS = [
  { label: "Random-angle Hadamard", value: "random-angle" },
  { label: "Householder", value: "householder" },
  { label: "Hadamard", value: "hadamard" },
];
const DELAY_LINE_OPTIONS = ["8", "16", "32", "64"].map((v) => ({ label: v, value: v }));
const MATRIX_STAGE_OPTIONS = ["1", "2", "4", "8"].map((v) => ({ label: v, value: v }));

export interface PluginPanelProps
  extends Pick<
    PresetBarProps,
    "presetName" | "onPrevPreset" | "onNextPreset" | "saveName" | "onSaveNameChange" | "onSave" | "onInit" | "bypassed" | "onBypassChange" | "brandName"
  > {
  title?: string;
  subtitle?: string;
  inputLevel?: number;
  outputLevel?: number;
  matrixData?: number[][];
  spectralLossTrend?: number[];
  sparsityLoss?: string;
}

export function PluginPanel({
  title,
  subtitle,
  inputLevel = 0.6,
  outputLevel = 0.45,
  matrixData,
  spectralLossTrend = [0.42, 0.55, 0.3, 0.6, 0.45, 0.52, 0.4, 0.58],
  sparsityLoss = "0.164",
  ...presetBarProps
}: PluginPanelProps) {
  const [decay, setDecay] = useState(3.2);
  const [mix, setMix] = useState(35);
  const [knobValues, setKnobValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(Object.values(KNOB_PARAMS).map((p) => [p.key, p.defaultValue])),
  );
  const setKnob = (key: string, value: number) => setKnobValues((prev) => ({ ...prev, [key]: value }));

  const [matrixType, setMatrixType] = useState(MATRIX_OPTIONS[0].value);
  const [delayLines, setDelayLines] = useState("64");
  const [matrixStages, setMatrixStages] = useState("4");
  const [infinite, setInfinite] = useState(false);
  const [freeze, setFreeze] = useState(false);

  return (
    <div className="max-h-[800px] max-w-[1000px] overflow-auto rounded-panel border border-panel-border bg-[image:var(--gradient-panel-bg)] shadow-[var(--shadow-panel-outer)] [box-shadow:var(--shadow-panel-outer),var(--shadow-panel-inset)]">
      <div className="flex w-[1000px] flex-col gap-5 p-6">
        <div className="flex items-start gap-8">
          <div className="flex shrink-0 gap-8">
            <Knob label="Decay" size="lg" value={decay} min={0.1} max={10} onChange={setDecay} valueLabel={`${decay.toFixed(2)} s`} />
            <Knob label="Mix" size="lg" value={mix} min={0} max={100} onChange={setMix} valueLabel={`${mix.toFixed(1)}%`} />
          </div>
          <div className="flex-1 self-center">
            <SpectrumAnalyzer hpfHz={knobValues.hpf} lpfHz={knobValues.lpf} />
          </div>
          <div className="flex shrink-0 items-start gap-4">
            <div className="flex gap-3">
              <LevelMeter label="I" level={inputLevel} />
              <LevelMeter label="O" level={outputLevel} />
            </div>
            <ModuleLockup title={title} subtitle={subtitle} />
          </div>
        </div>

        <div className="h-px bg-divider" />

        <div className="flex items-start gap-6">
          <GroupBox label="Delay">
            <Knob
              size="md"
              label={KNOB_PARAMS.delay.label}
              value={knobValues.delay}
              min={KNOB_PARAMS.delay.min}
              max={KNOB_PARAMS.delay.max}
              onChange={(v) => setKnob("delay", v)}
              valueLabel={KNOB_PARAMS.delay.format(knobValues.delay)}
            />
            <Knob
              size="md"
              label={KNOB_PARAMS.predelay.label}
              value={knobValues.predelay}
              min={KNOB_PARAMS.predelay.min}
              max={KNOB_PARAMS.predelay.max}
              onChange={(v) => setKnob("predelay", v)}
              valueLabel={KNOB_PARAMS.predelay.format(knobValues.predelay)}
            />
            <Knob
              size="md"
              label={KNOB_PARAMS.predelayFeedback.label}
              value={knobValues.predelayFeedback}
              min={KNOB_PARAMS.predelayFeedback.min}
              max={KNOB_PARAMS.predelayFeedback.max}
              onChange={(v) => setKnob("predelayFeedback", v)}
              valueLabel={KNOB_PARAMS.predelayFeedback.format(knobValues.predelayFeedback)}
            />
            <Knob
              size="md"
              label={KNOB_PARAMS.externalFeedback.label}
              value={knobValues.externalFeedback}
              min={KNOB_PARAMS.externalFeedback.min}
              max={KNOB_PARAMS.externalFeedback.max}
              onChange={(v) => setKnob("externalFeedback", v)}
              valueLabel={KNOB_PARAMS.externalFeedback.format(knobValues.externalFeedback)}
            />
          </GroupBox>

          <GroupBox label="Modulation">
            <Knob
              size="md"
              label={KNOB_PARAMS.modulation.label}
              value={knobValues.modulation}
              min={KNOB_PARAMS.modulation.min}
              max={KNOB_PARAMS.modulation.max}
              onChange={(v) => setKnob("modulation", v)}
              valueLabel={KNOB_PARAMS.modulation.format(knobValues.modulation)}
            />
            <Knob
              size="md"
              label={KNOB_PARAMS.damping.label}
              value={knobValues.damping}
              min={KNOB_PARAMS.damping.min}
              max={KNOB_PARAMS.damping.max}
              onChange={(v) => setKnob("damping", v)}
              valueLabel={KNOB_PARAMS.damping.format(knobValues.damping)}
            />
          </GroupBox>

          <GroupBox label="Filter">
            <Knob
              size="md"
              label={KNOB_PARAMS.hpf.label}
              value={knobValues.hpf}
              min={KNOB_PARAMS.hpf.min}
              max={KNOB_PARAMS.hpf.max}
              onChange={(v) => setKnob("hpf", v)}
              valueLabel={KNOB_PARAMS.hpf.format(knobValues.hpf)}
            />
            <Knob
              size="md"
              label={KNOB_PARAMS.lpf.label}
              value={knobValues.lpf}
              min={KNOB_PARAMS.lpf.min}
              max={KNOB_PARAMS.lpf.max}
              onChange={(v) => setKnob("lpf", v)}
              valueLabel={KNOB_PARAMS.lpf.format(knobValues.lpf)}
            />
          </GroupBox>
        </div>

        <div className="h-px bg-divider" />

        <div className="flex items-start gap-8">
          <div className="flex w-[180px] shrink-0 flex-col gap-3">
            <Dropdown label="Matrix" options={MATRIX_OPTIONS} value={matrixType} onChange={setMatrixType} />
            <Dropdown label="Delay Lines" options={DELAY_LINE_OPTIONS} value={delayLines} onChange={setDelayLines} />
            <Dropdown label="Matrix Stages" options={MATRIX_STAGE_OPTIONS} value={matrixStages} onChange={setMatrixStages} />
          </div>

          <div className="flex-1">
            <MatrixWeights data={matrixData} />
          </div>

          <div className="flex w-[150px] shrink-0 flex-col gap-4">
            <StatReadout label="Spectral Loss" value="" trend={spectralLossTrend} />
            <StatReadout label="Sparsity Loss" value={sparsityLoss} />
            <div className="mt-1 flex flex-col gap-2 border-t border-divider pt-3">
              <ToggleSwitch label="Infinite" checked={infinite} onChange={setInfinite} />
              <ToggleSwitch label="Freeze" checked={freeze} onChange={setFreeze} />
            </div>
          </div>
        </div>
      </div>

      <PresetBar {...presetBarProps} />
    </div>
  );
}
