import { Metadata, ResolvingMetadata } from "next";
import ThemeRegistry from "src/components/theme/ThemeRegistry";

type Props = {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params, searchParams }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  // const product = await fetch(`https://SEO.com`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    // base url of all metadata assets like images and videos
    metadataBase: new URL("https://acme.com"),
    title: "product.title",
    description: "product.description",
    openGraph: {
      type: "website",
      images: ["/some-specific-page-image.jpg", ...previousImages],
      url: "canonical",
      title: "title",
      description: "description",
      siteName: "Electrolux",
      locale: params.lang,
      videos: "OGVideoUrl",
      countryName: "Thailand",
    },
    other: {
      "product:price:amount": "100",
      "product:price:currency": "USD",
      // "og:type": "product",
    },
  };
}

export default function Root({ children, params: { lang } }: { children: React.ReactNode; params: { lang: string } }) {
  console.log(lang);

  return (
    <html>
      <head>
        <title>test</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
