import type { Meta, StoryObj } from "@storybook/react-vite";
import { MatrixWeights } from "./MatrixWeights";

const meta: Meta<typeof MatrixWeights> = {
  title: "Components/MatrixWeights",
  component: MatrixWeights,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof MatrixWeights>;

export const Default: Story = {
  decorators: [(Story) => <div className="w-[260px]"><Story /></div>],
};
