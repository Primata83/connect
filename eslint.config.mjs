import nextPlugin from '@next/eslint-plugin-next'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      '@next/next': nextPlugin
    },
    parser: typescriptEslintParser,
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off'
    }
  }
]