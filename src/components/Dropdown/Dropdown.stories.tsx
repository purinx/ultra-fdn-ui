import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const MATRIX_OPTIONS = [
  { label: "Random-angle Hadamard", value: "random-angle" },
  { label: "Householder", value: "householder" },
  { label: "Hadamard", value: "hadamard" },
];

export const Default: Story = {
  render: () => {
    function DropdownDemo() {
      const [value, setValue] = useState(MATRIX_OPTIONS[0].value);
      return (
        <div className="w-[220px]">
          <Dropdown label="Matrix" options={MATRIX_OPTIONS} value={value} onChange={setValue} />
        </div>
      );
    }
    return <DropdownDemo />;
  },
};
