module.exports = {
    plugins: [
        'react',
    ],
    rules: {
        'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx', '.tsx'] }],
        'react/static-property-placement': ['error', 'static public field'],
    },
};