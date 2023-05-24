import { AnalyticsEvent } from "@faststore/sdk";

declare global {
  interface Window {
    dataLayer: (
      | { event: AnalyticsEvent["name"]; ecommerce: AnalyticsEvent["params"] }
      | { ecommerce: null }
    )[];
  }

  declare module "*.svg?url" {
    const content: string;
    export default content;
  }
}
