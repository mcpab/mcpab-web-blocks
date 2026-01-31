// ladle-vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: [
      "hoist-non-react-statics",
      "react-is",
      "prop-types",
    ],
    // force default-export interop for CJS deps
    needsInterop: [
      "hoist-non-react-statics",
      "prop-types",
    ],
  },
});
