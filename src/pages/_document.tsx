import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>{/* add scripts here */}</Head>
      <body className="theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
