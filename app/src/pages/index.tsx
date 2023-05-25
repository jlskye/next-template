import { NextSeo, SiteLinksSearchBoxJsonLd } from "next-seo";
import type { GetStaticProps } from "next";
import storeConfig from "../../store.config";
import { Button } from "ui-components"

export default function Page() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title={"title from cms"}
        description={"title from cms"}
        titleTemplate={"title from cms"}
        canonical={"title from cms"}
        openGraph={{
          type: "website",
          url: storeConfig.storeUrl,
          title: "title from cms",
          description: "title from cms",
        }}
      />
      <SiteLinksSearchBoxJsonLd
        url={storeConfig.storeUrl}
        potentialActions={[
          {
            target: `${storeConfig.storeUrl}/s/?q`,
            queryInput: "search_term_string",
          },
        ]}
      />
      <main>
        <h1>Hello World</h1>
        <Button label={"test"} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // get cms content here

  return {
    props: { test: "test" },
  };
};
