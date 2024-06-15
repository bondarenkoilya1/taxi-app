import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

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
      constants: "/src/constants"
    }
  }
});
