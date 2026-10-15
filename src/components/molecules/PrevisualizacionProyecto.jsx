import { Box } from '@mui/material'
import { Icono } from '../atoms/Icono'

export const PrevisualizacionProyecto = ({ titulo, acento = '#0047AB' }) => (
  <Box
    role="img"
    aria-label={`Previsualización de ${titulo}`}
    sx={{
      position: 'relative',
      aspectRatio: '16 / 10',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${acento} 0%, #0A0B0D 100%)`,
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)',
        backgroundSize: '18px 18px',
        opacity: 0.5,
      },
    }}
  >
    <Icono
      nombre="codigo"
      sx={{ fontSize: 54, color: 'common.white', opacity: 0.9, position: 'relative', zIndex: 1 }}
    />
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 16,
        textAlign: 'center',
        color: 'common.white',
        opacity: 0.7,
        fontSize: 12,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        zIndex: 1,
      }}
    >
      {titulo}
    </Box>
  </Box>
)
