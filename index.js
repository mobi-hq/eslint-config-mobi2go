module.exports = {
    extends: [
        'eslint-config-airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:compat/recommended',
        'plugin:jest/recommended',
        './rules/base',
        './rules/import',
        './rules/react',
        './rules/react-hooks',
        'eslint-config-prettier',
        'eslint-config-prettier/react',
    ],
};