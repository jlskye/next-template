import type { Meta, StoryObj } from "@storybook/react";
import Autocomplete from "src/client/Autocomplete";

const meta = {
  title: "Client/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
