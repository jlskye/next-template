import type {Meta, StoryObj} from "@storybook/react";
import {BasicCarousel, BasicCarouselProps} from "src/client";

const meta = {
  title: "Client/BasicCarousel",
  component: BasicCarousel,
  tags: ["autodocs"],
} satisfies Meta<typeof BasicCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;
const productList: BasicCarouselProps[] = [
  {
    id: 1,
    imageUrl:
        "https://www.electrolux.co.th/contentassets/9cb68b5883954795b9a293fe94c904aa/bannerweb_kv_taste_new_2560x500.jpg?preset=h500",
    cardTitle: "New french door refrigerator UltimateTaste 700 seals in flavours & nutrients",
  },
  {
    id: 2,
    imageUrl:
        "https://www.electrolux.co.th/contentassets/184a9dbecc7d439d8c84a61fe34d9b69/bannerweb-kv-npd-sakura-751x731-2.jpg",
    cardTitle: "New UltimateHome 700 Lightweight handstick vacuum cleaner",
  },
  {
    id: 3,
    imageUrl:
        "https://www.electrolux.co.th/contentassets/edf76e941d8340b3ad37679c2089a33b/supercleanx2-750x730.1.jpg",
    cardTitle: "Super clean",
    cardContent: "1 May 2023 - 30 June 2023",
  },
  {
    id: 4,
    imageUrl:
        "https://www.electrolux.co.th/contentassets/3fc3eda64fee49f79db5be4ad6731c2b/laundryday-750x730.jpg",
    cardTitle: "Super Clean for Rainy Season",
    cardContent: "1 June 2023 - 30 September 2023",
  },
  {
    id: 5,
    imageUrl:
        "https://www.electrolux.co.th/globalassets/d2c-th/better-living/make--it-last-taste-care/website-make-it-last-care-750x730-min.jpg",
    cardTitle: "MAKE IT LAST",
    cardContent: "With Electrolux UltimateCare, you can give your clothes a longer life, for a more sustainable future",
  },
  {
    id: 6,
    imageUrl:
        "https://www.electrolux.co.th/globalassets/d2c-th/better-living/make--it-last-taste-care/elx-mb-750x730.jpg",
    cardTitle: "MAKE IT LAST",
    cardContent: "With Electrolux UltimateTaste, you can eat more sustainably without compromising on flavour."
  },
];

export const Primary: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    productList,
  },
};

