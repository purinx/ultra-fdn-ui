import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PluginPanel } from "./PluginPanel";

const meta: Meta<typeof PluginPanel> = {
  title: "Components/PluginPanel",
  component: PluginPanel,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof PluginPanel>;

const PRESETS = ["Init", "Vocal Hall", "Drum Room", "Ambient Wash"];

export const Default: Story = {
  render: () => {
    function PluginPanelDemo() {
      const [index, setIndex] = useState(0);
      const [bypassed, setBypassed] = useState(false);
      const [saveName, setSaveName] = useState("");
      return (
        <PluginPanel
          presetName={PRESETS[index]}
          onPrevPreset={() => setIndex((i) => (i - 1 + PRESETS.length) % PRESETS.length)}
          onNextPreset={() => setIndex((i) => (i + 1) % PRESETS.length)}
          saveName={saveName}
          onSaveNameChange={setSaveName}
          onInit={() => setIndex(0)}
          bypassed={bypassed}
          onBypassChange={setBypassed}
          inputLevel={0.65}
          outputLevel={0.5}
        />
      );
    }
    return <PluginPanelDemo />;
  },
};
