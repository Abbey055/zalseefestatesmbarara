import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  breakpoints,
  colors: {
    brand: {
      50: '#edf9f4',
      100: '#d3efe3',
      200: '#aadfca',
      300: '#7dceb0',
      400: '#4ebd95',
      500: '#2f9f79',
      600: '#237d5f',
      700: '#195b45',
      800: '#103a2d',
      900: '#081d17',
    },
    accent: {
      50: '#fff7ed',
      100: '#ffe9cf',
      200: '#ffd3a2',
      300: '#ffbb74',
      400: '#f7a04b',
      500: '#dd7f22',
      600: '#af6117',
      700: '#82450f',
      800: '#552b08',
      900: '#2b1302',
    },
    ink: {
      50: '#f5f7f8',
      100: '#dbe3e7',
      200: '#b8c7cf',
      300: '#93a9b6',
      400: '#6f8797',
      500: '#506878',
      600: '#3c4f5d',
      700: '#283844',
      800: '#17232c',
      900: '#0b1318',
    },
  },
  fonts: {
    heading: `'Nunito Sans', ${base.fonts.heading}`,
    body: `'Nunito Sans', sans-serif`,
    mono: `'Roboto Mono', ${base.fonts.mono}`,
  },
  styles: {
    global: (props) => ({
      html: {
        bg: mode('#f3f5f7', '#081117')(props),
        scrollBehavior: 'smooth',
      },
      body: {
        bg: mode('#f3f5f7', '#081117')(props),
        color: mode('#1e2b33', '#edf5f3')(props),
        transitionProperty: 'background-color, border-color, color, box-shadow, fill, stroke',
        transitionDuration: '0.25s',
        lineHeight: '1.6',
      },
      '#root': {
        minHeight: '100vh',
      },
      '::selection': {
        background: mode('rgba(47, 159, 121, 0.24)', 'rgba(125, 206, 176, 0.28)')(props),
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '0',
        fontWeight: '700',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        transition: 'all 0.25s ease',
      },
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: '0',
        },
      },
      defaultProps: {
        focusBorderColor: 'brand.500',
      },
    },
    Select: {
      baseStyle: {
        field: {
          borderRadius: '0',
          _focus: {
            borderColor: 'brand.500',
            boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        borderRadius: '0',
      },
      defaultProps: {
        focusBorderColor: 'brand.500',
      },
    },
    Drawer: {
      baseStyle: (props) => ({
        dialog: {
          bg: mode('rgba(255,255,255,0.96)', 'rgba(9, 26, 33, 0.96)')(props),
          color: mode('#14353d', '#edf5f3')(props),
          backdropFilter: 'blur(18px)',
        },
      }),
    },
  },
});
