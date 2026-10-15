import { useMemo } from 'react'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { ContextoTema } from './ContextoTema'
import { useModoTema } from '../hooks/useModoTema'
import { crearTema } from '../themes/tema'

const estilosGlobales = (tema) => ({
  '::selection': {
    backgroundColor: tema.palette.primary.main,
    color: tema.palette.primary.contrastText,
  },
  'body::-webkit-scrollbar': { width: 10 },
  'body::-webkit-scrollbar-thumb': {
    backgroundColor: tema.palette.divider,
    borderRadius: 999,
  },
  '*::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
})

export const ProveedorTema = ({ children }) => {
  const { modo, alternarModo } = useModoTema()
  const tema = useMemo(() => crearTema(modo), [modo])
  const valorContexto = useMemo(() => ({ modo, alternarModo }), [modo, alternarModo])

  return (
    <ContextoTema.Provider value={valorContexto}>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        <GlobalStyles styles={estilosGlobales(tema)} />
        {children}
      </ThemeProvider>
    </ContextoTema.Provider>
  )
}
