import { Box, Card, CardContent, Stack } from '@mui/material'
import { Icono } from '../atoms/Icono'
import { TagTech } from '../atoms/TagTech'
import { Titulo } from '../atoms/Titulo'
import { Texto } from '../atoms/Texto'

export const TarjetaEstudio = ({ estudio }) => {
  const { institucion, titulo, periodo, anio, descripcion } = estudio

  return (
    <Card
      sx={{
        height: '100%',
        '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
          <Box
            sx={{
              display: 'grid',
              placeItems: 'center',
              width: 48,
              height: 48,
              borderRadius: 2,
              flexShrink: 0,
              color: 'primary.main',
              bgcolor: 'action.hover',
            }}
          >
            <Icono nombre="graduacion" />
          </Box>
          <Box>
            <Titulo variante="h3" componente="h3">
              {titulo}
            </Titulo>
            <Texto variante="subtitle1" color="text.primary" sx={{ fontWeight: 500 }}>
              {institucion}
            </Texto>
          </Box>
        </Stack>

        <Texto sx={{ mt: 2 }}>{descripcion}</Texto>

        <Stack direction="row" spacing={1.5} sx={{ mt: 2.5, alignItems: 'center' }}>
          <Texto variante="body2" componente="span">
            {periodo}
          </Texto>
          {anio ? <TagTech color="primary">{anio}</TagTech> : null}
        </Stack>
      </CardContent>
    </Card>
  )
}
