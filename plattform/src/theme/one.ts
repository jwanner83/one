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
    MuiTypography: {
      styleOverrides: {
        root: {
          marginTop: '20px',
          marginBottom: '14px',
          fontWeight: 500,
          '&.MuiTypography-paragraph': {
            margin: 0,
            '+ .MuiTypography-paragraph': {
              marginTop: '12px'
            }
          }
        },
        title: {
          margin: '40px 0 60px'
        },
        h1: {
          marginTop: '26px',
          fontSize: '46px',
        },
        h2: {
          marginTop: '24px',
          fontSize: '40px'
        },
        h3: {
          fontSize: '36px'
        },
        h4: {
          fontSize: '30px'
        },
        h5: {
          fontWeight: 600,
        },
        h6: {
          fontWeight: 600,
          marginBottom: '6px'
        }
      }
    },
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
        },
        containedPrimary: {
          ':hover': {
            background: '#a1e598',
            opacity: '0.7'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '30px',
          marginBottom: '12px',
          borderRadius: '24px',
          '.MuiTypography-root:first-child': {
            marginTop: '2px'
          }
        }
      }
    },
    MuiModal: {
      styleOverrides: {
        root: {
          '.MuiBox-root': {
            background: 'white',
            borderRadius: '24px',
            padding: '30px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            '.MuiTypography-root:first-child': {
              marginTop: '6px'
            }
          }
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, transparent, black)'
        }
      }
    }
  }
})
