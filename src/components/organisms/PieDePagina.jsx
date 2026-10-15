import { Box, Container, Divider, Stack } from '@mui/material'
import { Link } from '../atoms/Link'
import { Icono } from '../atoms/Icono'
import { Texto } from '../atoms/Texto'
import { Titulo } from '../atoms/Titulo'
import { EnlaceRedSocial } from '../molecules/EnlaceRedSocial'
import { datosPerfil, datosPiePagina, datosRedesSociales } from '../../data/datosPortafolio'
import { desplazarASeccion, obtenerAnioActual } from '../../utils/dom'

const COLOR_FONDO = '#0A0B0D'
const COLOR_TEXTO = 'rgba(255, 255, 255, 0.66)'
const COLOR_TITULO = 'rgba(255, 255, 255, 0.92)'

const iniciales = datosPerfil.nombre
  .split(' ')
  .map((palabra) => palabra.charAt(0))
  .join('')
  .slice(0, 2)
  .toUpperCase()

export const PieDePagina = () => {
  const anio = obtenerAnioActual()

  const irASeccion = (id) => (evento) => {
    evento.preventDefault()
    desplazarASeccion(id)
  }

  return (
    <Box component="footer" sx={{ bgcolor: COLOR_FONDO, color: COLOR_TEXTO, pt: { xs: 7, md: 9 }, pb: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: '1.5fr 1fr 1fr' },
            gap: { xs: 5, md: 6 },
          }}
        >
          <Stack spacing={2} sx={{ maxWidth: 360 }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Box
                aria-hidden
                sx={{
                  display: 'grid',
                  placeItems: 'center',
                  width: 38,
                  height: 38,
                  borderRadius: 2,
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 700,
                }}
              >
                {iniciales}
              </Box>
              <Titulo variante="h3" componente="p" sx={{ color: COLOR_TITULO }}>
                {datosPerfil.nombre}
              </Titulo>
            </Stack>
            <Texto variante="body2" sx={{ color: COLOR_TEXTO }}>
              {datosPiePagina.descripcion}
            </Texto>
            <Stack direction="row" spacing={1.5}>
              {datosRedesSociales.map((red) => (
                <EnlaceRedSocial key={red.id} red={red} />
              ))}
            </Stack>
          </Stack>

          <Stack spacing={1.5}>
            <Titulo variante="h4" componente="p" sx={{ color: COLOR_TITULO }}>
              Navegación
            </Titulo>
            {datosPiePagina.enlaces.map((enlace) => (
              <Link
                key={enlace.id}
                href={`#${enlace.id}`}
                onClick={irASeccion(enlace.id)}
                sx={{
                  color: COLOR_TEXTO,
                  width: 'fit-content',
                  '&:hover': { color: 'primary.light' },
                }}
              >
                {enlace.etiqueta}
              </Link>
            ))}
          </Stack>

          <Stack spacing={1.5}>
            <Titulo variante="h4" componente="p" sx={{ color: COLOR_TITULO }}>
              Contacto
            </Titulo>
            <Link
              href={`mailto:${datosPerfil.correo}`}
              sx={{ color: COLOR_TEXTO, width: 'fit-content', '&:hover': { color: 'primary.light' } }}
            >
              {datosPerfil.correo}
            </Link>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Icono nombre="ubicacion" fontSize="small" />
              <Texto variante="body2" sx={{ color: COLOR_TEXTO }}>
                {datosPerfil.ubicacion}
              </Texto>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Icono nombre="telefono" fontSize="small" />
              <Texto variante="body2" sx={{ color: COLOR_TEXTO }}>
                {datosPerfil.telefono}
              </Texto>
            </Stack>
          </Stack>
        </Box>

        <Divider sx={{ my: { xs: 4, md: 5 }, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}
        >
          <Texto variante="body2" sx={{ color: COLOR_TEXTO }}>
            © {anio} {datosPerfil.nombre}. Todos los derechos reservados.
          </Texto>
          <Texto variante="body2" sx={{ color: COLOR_TEXTO }}>
            {datosPiePagina.lema}
          </Texto>
        </Stack>
      </Container>
    </Box>
  )
}
