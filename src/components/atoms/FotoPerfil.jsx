import { Avatar, Box } from '@mui/material'

export const FotoPerfil = ({ src, alt = 'Fotografía de perfil', tamano = 300 }) => (
  <Box sx={{ position: 'relative', width: tamano, height: tamano, maxWidth: '100%', flexShrink: 0 }}>
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        border: '2px solid',
        borderColor: 'primary.main',
        transform: 'translate(16px, -16px)',
        opacity: 0.9,
      }}
    />
    <Avatar
      src={src}
      alt={alt}
      variant="circular"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        border: '5px solid',
        borderColor: 'background.paper',
        boxShadow: '0 24px 60px -30px rgba(10, 11, 13, 0.55)',
      }}
    />
  </Box>
)
