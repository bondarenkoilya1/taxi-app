import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";

const { publicVars } = loadEnv({ prefixes: ["REACT_APP_"] });

export default defineConfig({
  plugins: [pluginReact(), pluginImageCompress()],
  html: {
    template: "./public/index.html"
  },
  source: {
    define: publicVars,
    alias: {
      "@config": "./src/config",
      "@layout": "./src/layout",
      "@pages": "./src/pages",
      "@components": "./src/components",
      "@styled": "./src/styled.js"
    }
  }
});
