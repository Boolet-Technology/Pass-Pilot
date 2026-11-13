import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// React Compiler rules added in eslint-config-next 16. Existing code predates them,
// so report as warnings until those components are refactored.
const compilerRulesAsWarnings = {
  "react-hooks/set-state-in-effect": "warn",
  "react-hooks/refs": "warn",
  "react-hooks/static-components": "warn",
};

const eslintConfig = [
  ...nextCoreWebVitals.map((config) =>
    config.plugins?.["react-hooks"]
      ? { ...config, rules: { ...config.rules, ...compilerRulesAsWarnings } }
      : config,
  ),
  {
    ignores: [".next/**", "node_modules/**", "public/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
