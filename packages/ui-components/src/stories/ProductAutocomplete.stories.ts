import type { Meta, StoryObj } from "@storybook/react";
import ProductAutocomplete from "src/client/ProductAutocomplete";

const meta = {
  title: "Client/Autocomplete",
  component: ProductAutocomplete,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductAutocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
