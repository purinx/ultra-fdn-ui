import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleSwitch } from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  render: () => {
    function ToggleDemo() {
      const [checked, setChecked] = useState(false);
      return (
        <div className="w-[200px]">
          <ToggleSwitch label="Infinite" checked={checked} onChange={setChecked} />
        </div>
      );
    }
    return <ToggleDemo />;
  },
};

export const On: Story = {
  args: { label: "Freeze", checked: true },
};
