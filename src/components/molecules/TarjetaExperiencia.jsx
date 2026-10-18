import { Box, Card, CardContent, Stack } from '@mui/material'
import { Icono } from '../atoms/Icono'
import { Titulo } from '../atoms/Titulo'
import { Texto } from '../atoms/Texto'

export const TarjetaExperiencia = ({ experiencia }) => {
  const { empresa, cargo, inicio, termino, actual, descripcion, logros } = experiencia

  const mostrarTermino = () => {
    if (actual) return 'Actualidad'
    if (!termino || termino === 'null') return '—'
    return termino
  }

  return (
    <Card
      sx={{
        '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}
        >
          <Box>
            <Titulo variante="h3" componente="h3">
              {cargo}
            </Titulo>
            <Texto variante="subtitle1" color="primary.main" sx={{ fontWeight: 600 }}>
              {empresa}
            </Texto>
          </Box>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'text.secondary' }}>
            <Icono nombre="calendario" fontSize="small" />
            <Texto variante="body2" componente="span" sx={{ whiteSpace: 'nowrap' }}>
              {inicio} — {mostrarTermino()}
            </Texto>
          </Stack>
        </Stack>

        <Texto sx={{ mt: 2 }}>{descripcion}</Texto>

        {logros?.length ? (
          <Box
            component="ul"
            sx={{
              mt: 2,
              mb: 0,
              pl: 2.5,
              display: 'grid',
              gap: 0.75,
              '& li::marker': { color: 'primary.main' },
            }}
          >
            {logros.map((logro) => (
              <Box component="li" key={logro}>
                <Texto variante="body2" componente="span">
                  {logro}
                </Texto>
              </Box>
            ))}
          </Box>
        ) : null}
      </CardContent>
    </Card>
  )
}
