import { useState } from "react";
import { PluginPanel } from "./components/PluginPanel/PluginPanel";

const PRESETS = ["Init", "Vocal Hall", "Drum Room", "Ambient Wash"];

export default function App() {
  const [presetIndex, setPresetIndex] = useState(0);
  const [bypassed, setBypassed] = useState(false);
  const [saveName, setSaveName] = useState("");

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-canvas p-10">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-bg-canvas-glow)" }}
      />
      <div className="relative">
        <PluginPanel
          presetName={PRESETS[presetIndex]}
          onPrevPreset={() => setPresetIndex((i) => (i - 1 + PRESETS.length) % PRESETS.length)}
          onNextPreset={() => setPresetIndex((i) => (i + 1) % PRESETS.length)}
          saveName={saveName}
          onSaveNameChange={setSaveName}
          onSave={() => console.log("save preset", saveName)}
          onInit={() => setPresetIndex(0)}
          bypassed={bypassed}
          onBypassChange={setBypassed}
          inputLevel={0.65}
          outputLevel={0.5}
        />
      </div>
    </div>
  );
}
