import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { 
      globals: {
        ...globals.browser, 
        ...globals.node
      } 
    }
  },
  {
    "env": {
      "jest/globals": true
    }
  },
  pluginJs.configs.recommended,
];