module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  settings: { react: { version: "detect" } },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/consistent-type-imports": "warn",
        "no-restricted-imports": [
          "warn",
          {
            "paths": [
              { "name": "next/navigation", "message": "Avoid hard Next deps in the lib. Pass pathname as a prop or use adapters." }
            ]
          }
        ]
      }
    }
  ]
}
