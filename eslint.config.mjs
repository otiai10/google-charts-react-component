import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["src/*.{js,mjs,cjs,ts,jsx,tsx}", "demo/src/**/*.tsx"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: { "react/react-in-jsx-scope": "off" },
    settings: { react: { version: "detect" } },
  },
  { ignores: ["dist/", "node_modules/", "coverage/", "demo/build/"] },
];