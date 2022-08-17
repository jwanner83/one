import { createTheme, Shadows } from '@mui/material'

export const theme = createTheme({
  palette: {
    background: {
      default: '#dee1e7',
      paper: '#f6f7ff'
    },
    primary: {
      main: '#a1e598'
    },
    secondary: {
      main: '#000'
    }
  },
  shadows: Array(25).fill('none') as Shadows,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '6px 60px 5px',
          fontWeight: 'bold',
          transition: '200ms',
          ':active': {
            transform: 'scale(0.95)'
          }
        }
      }
    }
  }
})
