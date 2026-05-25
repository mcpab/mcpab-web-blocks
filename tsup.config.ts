import { defineConfig } from 'tsup';
export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'mui-augment': 'src/mui-augment.ts',
    banner: 'src/entries/banner.ts',
    typography: 'src/components/typography/index.ts',
    image: 'src/core/image/index.ts',
    header: 'src/components/header/index.ts',
  },
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  target: 'es2019',
  esbuildOptions(o) {
    o.jsx = 'automatic';
  },
});
