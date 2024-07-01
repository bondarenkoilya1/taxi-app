import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      styled: "/src/styled.ts",
      components: "/src/components",
      pages: "/src/pages",
      config: "/src/config",
      layout: "/src/layout",
      types: "/src/types",
      constants: "/src/constants",
      themes: "/src/themes",
      utils: "/src/utils"
    }
  }
});
