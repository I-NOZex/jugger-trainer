import colors from 'windicss/colors';

const customPallet = {
    green: {
        50: '#EDF7EE',
        100: '#DBF0DC',
        200: '#BFFFC2', // secondary
        300: '#94D196',
        400: '#6DC070',
        500: '#4CAF50', // primary
        600: '#3C8B3F',
        700: '#2E6B30',
        800: '#1F4720',
        900: '#0F2410'
    },
}


export default {
    theme: {
        extend: {
            colors: {
                ...customPallet,

                primary: customPallet.green[500],
                secondary: customPallet.green[200],

                dark: {
                    ...colors.dark,
                    primaryBg: colors.neutral[900],
                    secondaryBg: colors.neutral[800],
                    primaryText: colors.neutral[300],
                    secondaryText: colors.neutral[400],
                },
            },
            backgroundSize: {
                "size-200": "200% 200%",
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
                'pos-n100': '-100% -100%',
              },
        }
    },
    plugins: [
        require('windicss/plugin/scroll-snap'),
    ],
};
