import { defineConfig } from 'tsup';
export default defineConfig({
  entry: ['src/index.ts', 'src/mui-augment.ts'],
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  target: 'es2019',
  esbuildOptions(o) { o.jsx = 'automatic'; },
});
