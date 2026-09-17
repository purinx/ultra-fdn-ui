import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpectrumAnalyzer } from "./SpectrumAnalyzer";

const meta: Meta<typeof SpectrumAnalyzer> = {
  title: "Components/SpectrumAnalyzer",
  component: SpectrumAnalyzer,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof SpectrumAnalyzer>;

export const Default: Story = {
  args: { hpfHz: 120, lpfHz: 8000 },
  decorators: [(Story) => <div className="w-[560px]"><Story /></div>],
};

export const NarrowBand: Story = {
  args: { hpfHz: 400, lpfHz: 3000 },
  decorators: [(Story) => <div className="w-[560px]"><Story /></div>],
};
