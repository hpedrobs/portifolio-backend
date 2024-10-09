import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
    {files: ['**/*.{js,mjs,cjs,ts}']},
    {
        languageOptions: { globals: globals.node },
        rules: {
            indent: ['error', 4], // Definindo indentação de 4 espaços
            semi: ['error', 'never'], // Desabilita o uso de ponto e vírgula
        },
    },
    ...tseslint.configs.recommended,
]
