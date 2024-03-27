module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    rules: {
        "react/display-name": "off",
        "no-var": "error",
        "prefer-const": "warn",
        "no-unused-vars": "warn",
        "no-console": "warn",
        "quotes": ["error", "single"],
        "no-useless-concat": 0,
        "jsx-quotes": ["warn", "prefer-single"],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never"
            }
        ],
        "semi": ["error", "always"],
        "linebreak-style": 0,
        "default-param-last": 0,
        "max-len": ["warn", {"code": 140, "ignoreComments": true}],
        "strict": [
            2,
            "global"
        ],
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1,
                "outerIIFEBody": 1,
                "FunctionDeclaration": {
                    "parameters": 1,
                },
                "FunctionExpression": {
                    "parameters": 1,
                },
                "ignoredNodes": [
                    "JSXAttribute",
                    "JSXSpreadAttribute"
                ]
            }
        ],
        "object-curly-spacing": [
            1,
            "never"
        ],
        "no-underscore-dangle": 0,
        "arrow-body-style": [
            "error",
            "as-needed",
            {
                "requireReturnForObjectLiteral": false
            }
        ],
        "spaced-comment": "off",
        "global-require": 0,
        "array-callback-return": 0,
        "no-bitwise": 0,
        "consistent-return": 0,
        "new-cap": [
            2,
            {
                "properties": false
            }
        ],
        "no-param-reassign": [
            2,
            {
                "props": false
            }
        ],
        "no-plusplus": 0,
        "no-restricted-syntax": 0,
        "no-useless-escape": 0,
        "no-prototype-builtins": 0,
        "no-extra-boolean-cast": 0,
        "no-mixed-operators": 0,
        "camelcase": 0,
        "no-multiple-empty-lines": [
            2,
            {
                "max": 1,
                "maxEOF": 1
            }
        ],
        "block-spacing": [
            "error",
            "never"
        ],
        "no-continue": 0,
        "react/jsx-pascal-case": [
            1,
            {
                "allowLeadingUnderscore": true
            }
        ],
        "react/jsx-indent-props": [
            2,
            "first"
        ],
        "object-curly-newline": 0,
        "class-methods-use-this": 0
    }
}
