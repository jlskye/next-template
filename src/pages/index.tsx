import { NextSeo, SiteLinksSearchBoxJsonLd } from "next-seo";
import type { GetStaticProps } from "next";

import storeConfig from "../../store.config";

function Page() {
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
      Hello World
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // get cms content here

  return {
    props: { test: "test" },
  };
};
