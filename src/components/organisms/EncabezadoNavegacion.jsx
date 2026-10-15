import { useMemo, useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Icono } from '../atoms/Icono'
import { EnlaceNavegacion } from '../molecules/EnlaceNavegacion'
import { datosPerfil, enlacesNavegacion } from '../../data/datosPortafolio'
import { useSeccionActiva } from '../../hooks/useSeccionActiva'
import { useTema } from '../../context/ContextoTema'
import { desplazarASeccion } from '../../utils/dom'

const iniciales = datosPerfil.nombre
  .split(' ')
  .map((palabra) => palabra.charAt(0))
  .join('')
  .slice(0, 2)
  .toUpperCase()

export const EncabezadoNavegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const { modo, alternarModo } = useTema()
  const identificadores = useMemo(() => enlacesNavegacion.map((enlace) => enlace.id), [])
  const seccionActiva = useSeccionActiva(identificadores)

  const irASeccion = (id) => (evento) => {
    evento.preventDefault()
    desplazarASeccion(id)
    setMenuAbierto(false)
  }

  const alternarMenu = () => setMenuAbierto((abierto) => !abierto)
  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <AppBar
      position="sticky"
      sx={(tema) => ({
        backdropFilter: 'blur(12px)',
        backgroundColor: alpha(tema.palette.background.default, 0.78),
        borderBottom: '1px solid',
        borderColor: tema.palette.divider,
        color: tema.palette.text.primary,
      })}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 2 }}>
          <Stack
            component="a"
            href="#personal"
            onClick={irASeccion('personal')}
            direction="row"
            spacing={1.5}
            sx={{ color: 'inherit', textDecoration: 'none', mr: 'auto', alignItems: 'center' }}
          >
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
                letterSpacing: '0.02em',
              }}
            >
              {iniciales}
            </Box>
            <Typography component="span" sx={{ fontWeight: 700, letterSpacing: '-0.01em' }}>
              {datosPerfil.nombre}
            </Typography>
          </Stack>

          <Stack
            component="nav"
            aria-label="Navegación principal"
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {enlacesNavegacion.map((enlace) => (
              <EnlaceNavegacion
                key={enlace.id}
                etiqueta={enlace.etiqueta}
                href={`#${enlace.id}`}
                activo={seccionActiva === enlace.id}
                alHacerClic={irASeccion(enlace.id)}
              />
            ))}
          </Stack>

          <Tooltip title={modo === 'oscuro' ? 'Tema claro' : 'Tema oscuro'}>
            <IconButton onClick={alternarModo} aria-label="Cambiar tema" color="inherit">
              <Icono nombre={modo === 'oscuro' ? 'sol' : 'luna'} />
            </IconButton>
          </Tooltip>

          <IconButton
            onClick={alternarMenu}
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
            color="inherit"
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <Icono nombre={menuAbierto ? 'cerrar' : 'menu'} />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={menuAbierto} onClose={cerrarMenu}>
        <Box sx={{ width: 260, p: 2 }} role="presentation">
          <Typography variant="overline" color="text.secondary" sx={{ px: 1 }}>
            Navegación
          </Typography>
          <Divider sx={{ my: 1.5 }} />
          <Stack spacing={0.5}>
            {enlacesNavegacion.map((enlace) => (
              <EnlaceNavegacion
                key={enlace.id}
                etiqueta={enlace.etiqueta}
                href={`#${enlace.id}`}
                activo={seccionActiva === enlace.id}
                alHacerClic={irASeccion(enlace.id)}
              />
            ))}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  )
}
