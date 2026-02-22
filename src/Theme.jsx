import { extendTheme, theme as base } from "@chakra-ui/react"

const breakpoints = {
  sm: '320px',
  md: '500px',
  lg: '720px',
  xl: '960px',
  '2xl': '1200px',
}

export const theme = extendTheme({
  breakpoints, 
  fonts: {
    heading: `'Roboto Slab', ${base.fonts.heading}`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
        body: {
            bg: 'green.50'
        }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'green', // changed to green for land theme
      }
    },
    Input:{
      defaultProps: {
        focusBorderColor: 'green.500'
      }
    },
    Select:{
      baseStyle: {
        _focus: {
          borderColor: 'green.500'
        }
      }
    },
    Textarea:{
      defaultProps: {
        focusBorderColor: 'green.500'
      }
    }
  }
});