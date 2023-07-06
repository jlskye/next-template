import type { Meta, StoryObj } from "@storybook/react";
import ProductAutocomplete, { AutocompleteOption } from "src/client/ProductAutocomplete";

const meta = {
  title: "Client/Autocomplete",
  component: ProductAutocomplete,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductAutocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchOptions: async ({ input }: { input: string }): Promise<AutocompleteOption[] | undefined> => {
      return Promise.resolve(top100Films);
    },
    searchResultUrl: "/search",
  },
};

const top100Films: AutocompleteOption[] = [
  {
    productModelId: "123",
    productName: "The Shawshank Redemption",
    value: "1994",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
    url: "/product/1",
  },
  {
    productModelId: "345",
    productName: "The Godfather",
    value: "1972",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
    url: "/product/1",
  },
  {
    productModelId: "456",
    productName: "The Godfather: Part II",
    value: "1974",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
    url: "/product/1",
  },
];
