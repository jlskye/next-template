import "../styles/globals.css";
import "ui-components/style.css"

import type { AppProps } from "next/app";

import ErrorBoundary from "src/components/ErrorBoundary";

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default App;
