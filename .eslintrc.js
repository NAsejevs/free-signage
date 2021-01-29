module.exports = {
    root: true,
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "import",
        "@typescript-eslint/eslint-plugin",
        "react-hooks",
    ],
    "settings": {
        "react": {
            "version": "16.8",
        },
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "rules": {
        "block-spacing": [2, "always"],
        "camelcase": ["warn", { "properties": "never", "ignoreDestructuring": true }],
        "comma-spacing": ["error"],
        "semi-spacing": 2,
        "max-len": ["error", {
            "code": 140,
            "comments": 0,
            "ignorePattern": `^import |//|"[^"]{100,}"`,
        }],
        "eqeqeq": ["error", "smart"],

        "no-case-declarations": "off",
        "no-console": "error",
        "no-empty": ["error", { "allowEmptyCatch": true }],
        "no-irregular-whitespace": ["error", { skipStrings: false }],
        "no-prototype-builtins": "off", // we don't use `Object.create`
        "no-dupe-class-members": "off", // ensured by TypeScript
        "no-new": "error",
        "no-bitwise": "error",
        "no-undef": "off", // ensured by TypeScript
        "no-unused-vars": "off", // ensured by TypeScript
        "guard-for-in": "error",
        "keyword-spacing": "error",
        "key-spacing": ["error"],
        "quotes": ["error", "double", { "allowTemplateLiterals": true, "avoidEscape": true }],
        "no-control-regex": "off",
        "no-extra-boolean-cast": "off",
        "object-curly-spacing": ["error", "always"],
        "eol-last": "error",
        "no-trailing-spaces": "error",
        "no-var": "error",
        "no-multiple-empty-lines": ["error", { "max": 1, maxBOF: 0 }],
        "no-multi-spaces": ["error"],
        "no-whitespace-before-property": ["error"],
        "space-before-blocks": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "arrow-spacing": ["error"],
        "no-restricted-properties": [2, {
            "object": "process",
            "property": "env",
            "message": "Use strongly typed BUILD_OPTIONS instead. See MOBREF-1628",
        }],
        "no-restricted-globals": [
            "warn",
            {
                name: "require",
                message: "Use `import xx from \"./module\";` instead",
            },
        ],
        "radix": "error",

        // using @typescript-eslint instead
        "brace-style": "off",
        "comma-dangle": "off",
        "func-call-spacing": "off",
        "indent": "off",
        "no-extra-semi": "off",
        "no-redeclare": "off",
        "no-shadow": "off",
        "semi": "off",
        "space-before-function-paren": "off",

        // @typescript-eslint
        "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        "@typescript-eslint/func-call-spacing": ["error"],
        "@typescript-eslint/no-explicit-any": ["warn"],
        // TODO: configure all indents
        // "@typescript-eslint/indent": ["warn"],
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always",
        }],
        "@typescript-eslint/type-annotation-spacing": ["error"],
        "@typescript-eslint/triple-slash-reference": ["error", { "path": "never", "types": "never", "lib": "never" }],
        "@typescript-eslint/member-delimiter-style": ["error", {
            multiline: {
                requireLast: true,
                delimiter: "semi",
            },
            singleline: {
                requireLast: true,
                delimiter: "semi",
            },
        }],
        "@typescript-eslint/prefer-for-of": ["error"],
        "@typescript-eslint/no-extra-semi": ["error"],
        "@typescript-eslint/no-namespace": ["error"],
        "@typescript-eslint/no-redeclare": "error",
        // TODO: switch to error @typescript-eslint/eslint-plugin version newer than 4.0.1 is released
        "@typescript-eslint/no-shadow": "warn",
        // "@typescript-eslint/no-shadow": ["error", { ignoreFunctionTypeParameterNameValueShadow: true }],
        "@typescript-eslint/no-this-alias": ["error"],
        "@typescript-eslint/no-unused-expressions": ["error", { allowTernary: true }],
        "@typescript-eslint/member-ordering": ["error", {
            default: [
                "public-static-field",
                "public-static-method",

                "protected-static-field",
                "protected-static-method",

                "private-static-field",
                "private-static-method",

                "public-abstract-field",
                "protected-abstract-field",
                "private-abstract-field",

                "public-instance-field",
                "protected-instance-field",
                "private-instance-field",

                "constructor",

                "public-abstract-method",
                "protected-abstract-method",
                "private-abstract-method",

                "public-instance-method",
                "protected-instance-method",
                "private-instance-method",

                "method",
            ],
            interfaces: "never",
            typeLiterals: "never",
        }],

        // "import" plugin
        "import/no-default-export": "warn",
        "import/no-unassigned-import": ["error", { "allow": ["react", "**/*.css"] }],

        // "react" plugin
        "react/prop-types": "off",
        "react/no-find-dom-node": "off",
        "react/display-name": "off",

        // TODO: switch back to "error" once all instances are fixed. This was switched to "warn" as the updated
        // version of this rule started to detect when arrow function is declared not only inline but also as a
        // variable and thus triggered a lot of error messages all across the codebase.
        "react/jsx-no-bind": "warn",

        "react/jsx-boolean-value": ["error", "always"],
        "react/jsx-tag-spacing": ["error", {
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never",
            "beforeClosing": "never",
        }],
        "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
        "react/no-children-prop": "off",

        // "react-hooks" plugin
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
    overrides: [{
        files: ["*.d.ts"],
        rules: {
            "@typescript-eslint/triple-slash-reference": "off",
        },
    }, {
        files: ["*.pcss.d.ts"],
        rules: {
            "import/no-default-export": "off",
        },
    }, {
        files: ["*.js", "*.spec.*", "**/scripts/*.*"],
        rules: {
            "no-restricted-globals": "off",
        },
    }],
};
