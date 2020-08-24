module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb/hooks",
    "prettier",
    "prettier/babel",
    "prettier/react"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "React": "writable"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "no-restricted-globals": "off",
    "arrow-parens": ["error", "always"],
    "function-paren-newline": ["error", "consistent"],
    "import/no-named-default": ["off"],
    "no-confusing-arrow": ["off"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "no-underscore-dangle": ["off"],
    "object-curly-newline": ["error", { "consistent": true }],
    "prefer-promise-reject-errors": ["off"],
    "jsx-a11y/anchor-is-valid": ["off"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    // "jsx-a11y/label-has-for": ["error", { "required": { "every": ["id"] }, "allowChildren": true }],
    "jsx-a11y/no-noninteractive-element-interactions": ["off"],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "react/forbid-prop-types": ["error", { "forbid": ["any"] }],
    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
    "react/require-default-props": ["off"],
    "import/prefer-default-export": ["off"],
    "react/prefer-stateless-function": ["off"],
    "react/prop-types": ["off"],
    // "no-tabs": 0,
    // "indent": [2, "tab", { "SwitchCase": 1 }],
    // "react/jsx-indent": [1, "tab"],
    "class-methods-use-this": 0,
    "lines-between-class-members": ["error", "always"],
    "max-params": ["error", 4],
    "no-lonely-if": ["error"],
    "arrow-body-style": ["error", "as-needed"],
    "react/jsx-indent-props": [0],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "func-names": ["off"],
    "import/no-extraneous-dependencies": ["off"]
  }
};