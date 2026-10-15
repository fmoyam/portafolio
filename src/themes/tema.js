import { createTheme } from '@mui/material/styles'

export const paletaCobalto = {
  cobalto: '#0047AB',
  cobaltoClaro: '#3E76D0',
  cobaltoOscuro: '#00327A',
  cobaltoSuave: '#5B8DEF',
  negro: '#0A0B0D',
  gris900: '#14161A',
  gris800: '#1F2329',
  gris700: '#2B3038',
  gris600: '#454C57',
  gris500: '#6B7480',
  gris400: '#9AA2AD',
  gris300: '#C3C8D0',
  gris200: '#E1E4E9',
  gris100: '#EEF0F3',
  gris50: '#F7F8FA',
  blanco: '#FFFFFF',
}

const FUENTES = [
  '"Inter"',
  '"Segoe UI"',
  'system-ui',
  '-apple-system',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(', ')

export const crearTema = (modo) => {
  const esClaro = modo === 'claro'

  return createTheme({
    palette: {
      mode: esClaro ? 'light' : 'dark',
      primary: {
        main: esClaro ? paletaCobalto.cobalto : paletaCobalto.cobaltoSuave,
        light: paletaCobalto.cobaltoClaro,
        dark: paletaCobalto.cobaltoOscuro,
        contrastText: paletaCobalto.blanco,
      },
      secondary: {
        main: paletaCobalto.gris700,
        contrastText: paletaCobalto.blanco,
      },
      background: {
        default: esClaro ? paletaCobalto.gris50 : paletaCobalto.negro,
        paper: esClaro ? paletaCobalto.blanco : paletaCobalto.gris900,
      },
      text: {
        primary: esClaro ? paletaCobalto.gris900 : paletaCobalto.gris100,
        secondary: esClaro ? paletaCobalto.gris500 : paletaCobalto.gris400,
      },
      divider: esClaro ? paletaCobalto.gris200 : paletaCobalto.gris800,
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: FUENTES,
      h1: { fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 },
      h2: { fontSize: 'clamp(1.9rem, 3.4vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.12 },
      h3: { fontSize: 'clamp(1.25rem, 2vw, 1.6rem)', fontWeight: 600, letterSpacing: '-0.01em' },
      h4: { fontSize: '1.15rem', fontWeight: 600 },
      subtitle1: { fontWeight: 500 },
      body1: { fontSize: '1.02rem', lineHeight: 1.7 },
      body2: { fontSize: '0.94rem', lineHeight: 1.65 },
      button: { fontWeight: 600, letterSpacing: '0.01em', textTransform: 'none' },
      overline: { fontWeight: 700, letterSpacing: '0.22em' },
    },
    components: {
      CssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth' },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 10, paddingInline: 20, paddingBlock: 10 },
          containedPrimary: {
            boxShadow: 'none',
            '&:hover': { boxShadow: '0 8px 24px -12px rgba(0, 71, 171, 0.75)' },
          },
        },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            border: `1px solid ${esClaro ? paletaCobalto.gris200 : paletaCobalto.gris800}`,
            transition: 'transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 600, borderRadius: 8 },
        },
      },
      MuiTextField: {
        defaultProps: { variant: 'outlined' },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: { borderRadius: 10, backgroundColor: esClaro ? paletaCobalto.blanco : paletaCobalto.gris800 },
        },
      },
      MuiAppBar: {
        defaultProps: { elevation: 0, color: 'transparent' },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: { fontSize: '0.8rem', borderRadius: 8 },
        },
      },
    },
  })
}
