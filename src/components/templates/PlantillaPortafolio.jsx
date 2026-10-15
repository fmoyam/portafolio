import { Box } from '@mui/material'
import { EncabezadoNavegacion } from '../organisms/EncabezadoNavegacion'
import { PieDePagina } from '../organisms/PieDePagina'

export const PlantillaPortafolio = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <EncabezadoNavegacion />
    <Box component="main" sx={{ flexGrow: 1 }}>
      {children}
    </Box>
    <PieDePagina />
  </Box>
)
