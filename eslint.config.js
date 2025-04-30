import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node,  // Use Node.js globals, not browser globals
      parserOptions: {
        sourceType: "module",  // Tell ESLint that you're using ES modules (import/export)
      },
    },
  },
]);
