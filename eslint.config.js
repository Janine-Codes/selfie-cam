import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: prettier
    },
    rules: {
      "prettier/prettier": "error" 
    }
  }
];
