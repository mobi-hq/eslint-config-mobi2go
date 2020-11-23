module.exports = {
    plugins: ['import'],
    rules: {
        'import/no-extraneous-dependencies': 'error',
        'import/namespace': ['error', { allowComputed: true }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            },
        },
    },
};
