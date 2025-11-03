import { defineConfig } from 'tsup';
export default defineConfig({
  entry: ['src/index.ts'],   // <-- root barrel is the entry
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  target: 'es2019',
  esbuildOptions(o) { o.jsx = 'automatic'; },
});
