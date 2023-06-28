import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "src/client";

const meta = {
  title: "Client/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  },
};
