import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, previewAnnotations) => {
    // disable whatever is already set to load SVGs
    config.module.rules
      .filter((rule) => (rule["test"] && rule["test"].test(".svg")))
      .forEach((rule) => (rule["exclude"] = /\.svg$/i));

    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};
export default config;
