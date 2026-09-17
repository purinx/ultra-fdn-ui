import type { Meta, StoryObj } from "@storybook/react-vite";
import { GroupBox } from "./GroupBox";
import { Knob } from "../Knob/Knob";

const meta: Meta<typeof GroupBox> = {
  title: "Components/GroupBox",
  component: GroupBox,
};

export default meta;
type Story = StoryObj<typeof GroupBox>;

export const EarlyReflections: Story = {
  args: { label: "Early Reflections" },
  render: (args) => (
    <GroupBox {...args}>
      <Knob label="Size" size="md" defaultValue={35} />
      <Knob label="Level" size="md" defaultValue={55} />
    </GroupBox>
  ),
};
