import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#EEEEF2",
      "100": "#D1D2DC",
      "200": "#B3B5C6",
      "300": "#9699B0",
      "400": "#797D9A",
      "500": "#616480",
      "600": "#4B4D63",
      "700": "#2f3036",
      "800": "#171717",
      "900": "#101010"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
        'input, textarea': {
          _placeholder: {
            color: 'gray.200'
          }
        },
        'button, a': {
          'WebkitTapHighlightColor': 'rgba(0,0,0,0)'
        },
        '&::-webkit-scrollbar': {
          h: '6px',
          w: '6px'
        },
        '&::-webkit-scrollbar-thumb': {
          bg: 'gray.700'
        },
        '&::-webkit-scrollbar-corner': {
          bg: 'gray.900'
        },
        textarea: {
          '&::-webkit-scrollbar': {
            w: '6px',
            '&::hover': {
              cursor: 'pointer',
              w: '12px'
            }
          },
          '&::-webkit-scrollbar-thumb': {
            bg: 'gray.700',
            '&::hover': {
              bg: 'pink.500'
            }
          }
        }
      }
    }
  }
});