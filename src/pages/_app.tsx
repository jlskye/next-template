import '../styles/globals.css'

import type { AppProps } from 'next/app'

import ErrorBoundary from "src/components/ErrorBoundary";
import AnalyticsHandler from "src/analytics";

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <AnalyticsHandler />

      {/*<UIProvider>*/}
      {/*  <Layout>*/}
          <Component {...pageProps} />
        {/*</Layout>*/}
      {/*</UIProvider>*/}
    </ErrorBoundary>
  )
}

export default App
