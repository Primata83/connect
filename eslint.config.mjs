import nextPlugin from '@next/eslint-plugin-next'

export default [
  {
    extends: ['next/core-web-vitals'],
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
]