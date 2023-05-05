import typescriptEslintParser from '@typescript-eslint/parser'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'

export default
[
  {
    files: ["**/*.ts"],
    ignores: ["**/*.spec.ts"],
    languageOptions:
    {
      parser: typescriptEslintParser,
      parserOptions:
      {
        'project': 'tsconfig.json',
      },
    },
    plugins:
    {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules:
    {
      ...typescriptEslintPlugin.configs["recommended"].rules,
      ...typescriptEslintPlugin.configs["recommended-requiring-type-checking"].rules,
    },
  },
]
