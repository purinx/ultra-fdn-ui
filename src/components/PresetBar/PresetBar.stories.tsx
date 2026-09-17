import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PresetBar } from "./PresetBar";

const meta: Meta<typeof PresetBar> = {
  title: "Components/PresetBar",
  component: PresetBar,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof PresetBar>;

const PRESETS = ["Init", "Vocal Hall", "Drum Room", "Ambient Wash"];

export const Interactive: Story = {
  render: () => {
    function PresetBarDemo() {
      const [index, setIndex] = useState(0);
      const [bypassed, setBypassed] = useState(false);
      return (
        <div className="w-[600px]">
          <PresetBar
            presetName={PRESETS[index]}
            onPrevPreset={() => setIndex((i) => (i - 1 + PRESETS.length) % PRESETS.length)}
            onNextPreset={() => setIndex((i) => (i + 1) % PRESETS.length)}
            onSave={() => console.log("save preset")}
            onInit={() => setIndex(0)}
            bypassed={bypassed}
            onBypassChange={setBypassed}
          />
        </div>
      );
    }
    return <PresetBarDemo />;
  },
};

export const Static: Story = {
  args: { presetName: "Init" },
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
};
