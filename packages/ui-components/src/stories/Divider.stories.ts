import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "src/client";

const meta = {
  title: "Server/Divider",
  component: Divider,
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
