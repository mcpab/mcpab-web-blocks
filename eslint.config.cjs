const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const tseslint = require('typescript-eslint');

const restrictedImportPaths = [
  {
    name: 'next/navigation',
    message: 'Avoid hard Next deps in the lib. Pass pathname as a prop or use adapters.',
  },
  {
    name: '@mui/material',
    message: "Use direct MUI imports, e.g. import Button from '@mui/material/Button'.",
  },
  {
    name: '@mui/icons-material',
    message: "Use direct icon imports, e.g. import HomeIcon from '@mui/icons-material/Home'.",
  },
];

const restrictedImportPatterns = [
  {
    regex:
      '^(src/index|src/(components|core|lib|design)(/index)?|(\\.\\.?/)+(components|core|lib|design|menus|navigation|menus/(drawer|dropDown)|navigation/Breadcrumbs)(/index)?)$',
    message: 'Use direct internal imports instead of broad source barrels.',
  },
];

module.exports = [
  {
    ignores: ['build/**', 'dist/**', 'docs/api/**', 'node_modules/**', 'packages/*/dist/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-control-regex': 'warn',
      'no-useless-escape': 'warn',
      'prefer-const': 'warn',
      'react/no-children-prop': 'warn',
      'react-hooks/immutability': 'warn',
      'react-hooks/refs': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'no-restricted-imports': [
        'warn',
        {
          paths: restrictedImportPaths,
          patterns: restrictedImportPatterns,
        },
      ],
    },
  },
  {
    files: ['src/index.ts', 'src/components/index.ts', 'src/core/index.ts', 'src/lib/index.ts'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
];
