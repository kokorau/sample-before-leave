import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        sample1: resolve(root, "index", "index.html"),
        sample2: resolve(root, "modal", "index.html"),
      },
    },
  },
});
