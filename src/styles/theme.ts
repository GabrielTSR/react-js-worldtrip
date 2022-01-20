import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            '600': '#47585B',
            '400': '#999999',
        },

        white: {
            '800': '#F5F8FA',
            '600': '#DADADA',
        },

        yellow: {
            '700': '#FFBA08',
        },
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
        Cities: 'Barlow',
    },
    styles: {
        global: {
            body: {
                bg: 'white.800',
                color: 'gray.600',
            },
        },
    },
});
