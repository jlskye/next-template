import type { Meta, StoryObj } from "@storybook/react";
import CustomizedBadges from "../server/Badge";

const meta = {
  title: "Server/Badge",
  component: CustomizedBadges,
  tags: ["autodocs"],
} satisfies Meta<typeof CustomizedBadges>;

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
