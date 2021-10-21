module.exports = {
  env: {
    jest: true,
  },
  extends: ["@humanoids/eslint-config", "plugin:cypress/recommended"],
  rules: { "@typescript-eslint/no-explicit-any": "warn" },
};
