import { Box, Stack } from '@mui/material'
import { Link } from '../atoms/Link'
import { Icono } from '../atoms/Icono'
import { Texto } from '../atoms/Texto'

export const DatoContacto = ({ icono, etiqueta, valor, href }) => (
  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        width: 44,
        height: 44,
        borderRadius: 2,
        flexShrink: 0,
        color: 'primary.main',
        bgcolor: 'action.hover',
      }}
    >
      <Icono nombre={icono} fontSize="small" />
    </Box>
    <Box>
      <Texto variante="overline" color="text.secondary" componente="span" sx={{ display: 'block' }}>
        {etiqueta}
      </Texto>
      {href ? (
        <Link href={href} color="text.primary" sx={{ fontWeight: 600 }}>
          {valor}
        </Link>
      ) : (
        <Texto color="text.primary" sx={{ fontWeight: 600 }}>
          {valor}
        </Texto>
      )}
    </Box>
  </Stack>
)
