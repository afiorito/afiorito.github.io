module.exports = {
    parser: 'babel-eslint',
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'eslint:recommended'],
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
};
