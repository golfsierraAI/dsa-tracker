import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envDir: "./src/env",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      thresholds: {
        functions: 80,
      },
      include: ["src/**/*"],
      exclude: [
        "src/main.tsx",
        "src/router/*",
        "src/services/**",
        "src/types",
        "src/vite-env.d.ts",
      ],
    },
  },
});
