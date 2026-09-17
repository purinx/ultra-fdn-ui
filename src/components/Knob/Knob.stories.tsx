import type { Meta, StoryObj } from "@storybook/react-vite";
import { Knob } from "./Knob";

const meta: Meta<typeof Knob> = {
  title: "Components/Knob",
  component: Knob,
  argTypes: {
    size: { control: "radio", options: ["lg", "md"] },
  },
};

export default meta;
type Story = StoryObj<typeof Knob>;

export const Large: Story = {
  args: { label: "Mix", defaultValue: 50, size: "lg" },
};

export const Medium: Story = {
  args: { label: "Pre Delay", defaultValue: 20, size: "md" },
};

export const Disabled: Story = {
  args: { label: "Width", defaultValue: 70, disabled: true },
};

export const Row: Story = {
  render: () => (
    <div className="flex gap-8">
      <Knob label="Size" defaultValue={60} />
      <Knob label="Width" defaultValue={70} />
      <Knob label="Mix" defaultValue={50} />
    </div>
  ),
};
