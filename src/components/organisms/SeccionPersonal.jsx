import { Box, Divider, Stack } from '@mui/material'
import { Boton } from '../atoms/Boton'
import { Tag } from '../atoms/Tag'
import { FotoPerfil } from '../atoms/FotoPerfil'
import { Icono } from '../atoms/Icono'
import { Seccion } from '../atoms/Seccion'
import { Texto } from '../atoms/Texto'
import { Titulo } from '../atoms/Titulo'
import { EnlaceRedSocial } from '../molecules/EnlaceRedSocial'
import { ListaEtiquetas } from '../molecules/ListaEtiquetas'
import { datosPerfil, datosRedesSociales } from '../../data/datosPortafolio'
import { desplazarASeccion } from '../../utils/dom'
import fotoPerfil from '../../assets/yo.jpg'

export const SeccionPersonal = () => (
  <Seccion id="personal">
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
        gap: { xs: 6, md: 8 },
        alignItems: 'center',
      }}
    >
      <Stack spacing={3}>
        <Tag>¿Quién soy?</Tag>

        <Stack spacing={1}>
          <Titulo variante="h1" componente="h1">
            {datosPerfil.nombre}
          </Titulo>
          <Titulo variante="h3" componente="p" color="primary.main">
            {datosPerfil.rol}
          </Titulo>
        </Stack>

        <Stack spacing={2}>
          <Texto>{datosPerfil.descripcion}</Texto>
          <Texto>{datosPerfil.descripcionSecundaria}</Texto>
        </Stack>

        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Boton
            onClick={() => desplazarASeccion('contacto')}
            startIcon={<Icono nombre="correo" fontSize="small" />}
          >
            Hablemos
          </Boton>
          <Boton
            variante="outlined"
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Felipe_Moya_Molina.pdf"
            startIcon={<Icono nombre="descargar" fontSize="small" />}
          >
            Descargar CV
          </Boton>
        </Stack>

        <Divider />

        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'text.secondary' }}>
            <Icono nombre="ubicacion" fontSize="small" />
            <Texto variante="body2" componente="span">
              {datosPerfil.ubicacion}
            </Texto>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'text.secondary' }}>
            <Icono nombre="exito" fontSize="small" color="primary" />
            <Texto variante="body2" componente="span">
              {datosPerfil.disponibilidad}
            </Texto>
          </Stack>
        </Stack>

        <ListaEtiquetas elementos={datosPerfil.habilidades} />

        <Stack direction="row" spacing={1.5}>
          {datosRedesSociales.map((red) => (
            <EnlaceRedSocial key={red.id} red={red} />
          ))}
        </Stack>
      </Stack>

      <Box sx={{ display: 'grid', placeItems: 'center' }}>
        <FotoPerfil src={fotoPerfil} alt={`Fotografía de ${datosPerfil.nombre}`} tamano={320} />
      </Box>
    </Box>
  </Seccion>
)
