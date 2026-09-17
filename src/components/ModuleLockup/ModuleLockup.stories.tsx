import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModuleLockup } from "./ModuleLockup";

const meta: Meta<typeof ModuleLockup> = {
  title: "Components/ModuleLockup",
  component: ModuleLockup,
};

export default meta;
type Story = StoryObj<typeof ModuleLockup>;

export const Default: Story = {
  args: { title: "Module Name", subtitle: "Subtitle" },
};

export const Empty: Story = {
  args: {},
};
