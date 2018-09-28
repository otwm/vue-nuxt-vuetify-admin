module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "only-multiline"],
        "no-unused-vars": ["error", {"vars": "all", "args": "after-used"}],
        "max-len": ["error", { "code": 120 }],
        "no-cond-assign": "error",
        "no-duplicate-case": "error",
        "no-invalid-regexp": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "error",
        "no-unsafe-finally": "error",
        "no-unreachable": "error",
        "use-isnan": "error",
        "no-empty": "warn",
        "no-func-assign": "warn",
        "no-inner-declarations": "warn",
        "no-sparse-arrays": "warn",
    },
    globals: {}
}
