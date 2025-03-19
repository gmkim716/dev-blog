// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  // plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    include: ["**/*.{test,spec}.{ts,tsx}"],
  },
});
