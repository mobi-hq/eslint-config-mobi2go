module.exports = {
    plugins: [
        'react',
    ],
    rules: {
        'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
        'react/static-property-placement': ['error', 'static public field'],
    },
};