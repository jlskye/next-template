import svgrPlugin from "esbuild-plugin-svgr";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...options,
  splitting: false,
  entry: ["src/index.ts"],
  format: ["esm"],
  minify: true,
  clean: true,
  dts: true,
  esbuildPlugins: [svgrPlugin({ template })],
  external: ["react", "react-dom"],
  treeshake: true,
}));

function template(variables, { tpl }) {
  return tpl`
      ${variables.imports};
      ${variables.interfaces};
      const ${variables.componentName} = (${variables.props}) => (
        ${variables.jsx}
      );
      ${variables.exports};
      export const ReactComponent = ${variables.componentName};
    `;
}
