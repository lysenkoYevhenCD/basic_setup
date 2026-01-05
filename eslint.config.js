import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  // Global ignores
  {
    ignores: ["dist", "build", "node_modules", "*.js", "esm", "cjs"],
  },

  // Base config for all TypeScript files
  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.build.json"],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        JSX: false,
        NodeJS: false,
      },
    },

    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      "prettier": prettier,
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/extensions": ["*.js", "*.ts", "*.tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["tsconfig.json"],
        },
      },
    },

    rules: {
      // Recommended rules
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // TypeScript rules
      "@typescript-eslint/brace-style": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/indent": ["warn", 2],
      "@typescript-eslint/keyword-spacing": "warn",
      "@typescript-eslint/lines-between-class-members": "off",
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
          selector: "variable",
        },
        {
          format: ["camelCase", "PascalCase"],
          selector: "function",
        },
        {
          format: ["PascalCase"],
          selector: "typeLike",
        },
      ],
      "@typescript-eslint/no-extra-semi": "warn",
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-useless-constructor": "warn",
      "@typescript-eslint/object-curly-spacing": "off",
      "@typescript-eslint/quotes": ["warn", "double"],
      "@typescript-eslint/semi": "warn",
      "@typescript-eslint/space-before-function-paren": [
        "warn",
        { named: "never" },
      ],

      // General rules
      "array-bracket-spacing": "warn",
      "arrow-body-style": "off",
      "arrow-parens": "off",
      "block-spacing": "warn",
      "class-methods-use-this": "off",
      "comma-dangle": "off",
      "consistent-return": "off",
      "default-case": "off",
      "eol-last": "warn",
      eqeqeq: "warn",
      "function-paren-newline": "off",
      "global-require": "off",
      "guard-for-in": "off",
      "implicit-arrow-linebreak": "off",
      "key-spacing": "warn",
      "linebreak-style": "warn",
      "max-classes-per-file": "off",
      "max-len": "off",
      "no-async-promise-executor": "off",
      "no-await-in-loop": "off",
      "no-case-declarations": "off",
      "no-confusing-arrow": "off",
      "no-console": "off",
      "no-continue": "off",
      "no-else-return": "warn",
      "no-empty": "warn",
      "no-empty-pattern": "warn",
      "no-extra-boolean-cast": "warn",
      "no-lonely-if": "warn",
      "no-loop-func": "warn",
      "no-mixed-operators": "off",
      "no-mixed-spaces-and-tabs": "warn",
      "no-multi-spaces": "off",
      "no-multiple-empty-lines": "warn",
      "no-nested-ternary": "off",
      "no-param-reassign": "off",
      "no-plusplus": "off",
      "no-prototype-builtins": "off",
      "no-restricted-globals": "off",
      "no-restricted-properties": "off",
      "no-restricted-syntax": "off",
      "no-return-await": "warn",
      "no-shadow": "off",
      "no-tabs": "warn",
      "no-trailing-spaces": "warn",
      "no-underscore-dangle": "off",
      "no-useless-computed-key": "warn",
      "object-curly-newline": "off",
      "object-curly-spacing": ["warn", "always"],
      "object-property-newline": "off",
      "object-shorthand": "warn",
      "operator-linebreak": "off",
      "prefer-arrow-callback": "warn",
      "prefer-const": "warn",
      "prefer-destructuring": "off",
      "prefer-template": "off",
      "quote-props": "off",
      quotes: "off",
      radix: "off",
      "space-in-parens": "warn",
      "space-infix-ops": "warn",
      "space-unary-ops": "warn",
      "spaced-comment": "off",
      "switch-colon-spacing": "warn",

      // Import rules
      "import/default": "off",
      "import/first": "error",
      "import/named": "off",
      "import/namespace": "off",
      "import/newline-after-import": "error",
      "import/no-cycle": "off",
      "import/no-duplicates": "error",
      "import/no-dynamic-require": "off",
      "import/no-extraneous-dependencies": "error",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "error",
      "import/prefer-default-export": "off",

      // React rules
      "react/button-has-type": "off",
      "react/destructuring-assignment": "off",
      "react/jsx-boolean-value": "warn",
      "react/jsx-closing-bracket-location": ["warn", "line-aligned"],
      "react/jsx-closing-tag-location": "warn",
      "react/jsx-curly-brace-presence": "warn",
      "react/jsx-curly-newline": "off",
      "react/jsx-curly-spacing": "warn",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-fragments": "warn",
      "react/jsx-indent": ["warn", 2, { indentLogicalExpressions: false }],
      "react/jsx-indent-props": ["warn", 2],
      "react/jsx-max-props-per-line": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-wrap-multilines": "off",
      "react/no-array-index-key": "off",
      "react/no-did-update-set-state": "warn",
      "react/prefer-stateless-function": "off",
      "react/prop-types": "off",
      "react/require-default-props": "off",
      "react/self-closing-comp": "warn",
      "react/sort-comp": "off",
      "react/state-in-constructor": "warn",
      "react/static-property-placement": "off",

      // JSX A11y rules
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/aria-role": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/tabindex-no-positive": "off",

      // Simple import sort
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^\\u0000"],
            ["^node:"],
            ["^react", "^@?\\w"],
            ["^"],
            ["^\\."],
          ],
        },
      ],

      // React Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
