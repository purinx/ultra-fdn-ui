import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatReadout } from "./StatReadout";

const meta: Meta<typeof StatReadout> = {
  title: "Components/StatReadout",
  component: StatReadout,
};

export default meta;
type Story = StoryObj<typeof StatReadout>;

export const WithValue: Story = {
  args: { label: "Sparsity Loss", value: "0.164" },
};

export const WithTrend: Story = {
  args: { label: "Spectral Loss", value: "", trend: [0.4, 0.55, 0.3, 0.6, 0.45, 0.5, 0.42] },
};
