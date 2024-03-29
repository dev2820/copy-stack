import { resolve } from "path";
import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import zipPack from "vite-plugin-zip-pack";
import manifest from "./manifest";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@mock": resolve(__dirname, "__mocks__"),
    },
  },
  plugins: [crx({ manifest }), zipPack()],
});
