const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                'wheelfit': {
                    300: '#ff3333',
                    400: '#ff4444',
                    500: '#ff5555',
                    600: '#ff6666',
                    700: '#ff7777',
                },
                'secondary': {
                    400: '#695A5A',
                    500: '#564A4A',
                }
            },
            fontFamily: {
                'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
                'open-sans': ['OpenSans', ...defaultTheme.fontFamily.sans],
                'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans]
            },
            gridTemplateColumns: {
                '20': 'repeat(20, minmax(0, 1fr))',
            }
        },
    },
    plugins: [],
}
