import { defineConfig } from 'tsup';

const sharedOptions = {
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  treeshake: true,
  splitting: false,
  target: 'es2019',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
} as const;

export default defineConfig((options) => ({
  ...sharedOptions,
  entry: {
    index: 'src/index.ts',
    'mui-augment': 'src/mui-augment.ts',
    client: 'src/client.ts',
  },
  clean: !options.watch,
  onSuccess: 'node scripts/prepend-use-client.mjs',
}));
