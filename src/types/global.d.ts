import { AnalyticsEvent } from "@faststore/sdk";

export {};

declare global {
  interface Window {
    dataLayer: (
      | { event: AnalyticsEvent["name"]; ecommerce: AnalyticsEvent["params"] }
      | { ecommerce: null }
    )[];
  }
}
