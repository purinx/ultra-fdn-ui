import type { Meta, StoryObj } from "@storybook/react-vite";
import { LevelMeter } from "./LevelMeter";

const meta: Meta<typeof LevelMeter> = {
  title: "Components/LevelMeter",
  component: LevelMeter,
  argTypes: {
    level: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
  },
};

export default meta;
type Story = StoryObj<typeof LevelMeter>;

export const Default: Story = {
  args: { label: "I", level: 0.6 },
};

export const Low: Story = {
  args: { label: "I", level: 0.15 },
};

export const Full: Story = {
  args: { label: "O", level: 1 },
};

export const InputOutputPair: Story = {
  render: () => (
    <div className="flex gap-3">
      <LevelMeter label="I" level={0.65} />
      <LevelMeter label="O" level={0.5} />
    </div>
  ),
};
