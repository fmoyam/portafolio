import { Box, Paper, Stack } from '@mui/material'
import { Seccion } from '../atoms/Seccion'
import { Texto } from '../atoms/Texto'
import { Titulo } from '../atoms/Titulo'
import { DatoContacto } from '../molecules/DatoContacto'
import { EncabezadoSeccion } from '../molecules/EncabezadoSeccion'
import { EnlaceRedSocial } from '../molecules/EnlaceRedSocial'
import { FormularioContacto } from '../molecules/FormularioContacto'
import { datosPerfil, datosRedesSociales } from '../../data/datosPortafolio'

export const SeccionContacto = () => (
  <Seccion id="contacto">
    <EncabezadoSeccion
      etiqueta="Contacto"
      titulo="Trabajemos juntos"
      descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Completa el formulario y me pondré en contacto contigo."
    />

    <Box
      sx={{
        mt: { xs: 5, md: 7 },
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
        gap: { xs: 5, md: 6 },
        alignItems: 'start',
      }}
    >
      <Stack spacing={3}>
        <Texto>{datosPerfil.descripcionSecundaria}</Texto>

        <Stack spacing={2}>
          <DatoContacto
            icono="correo"
            etiqueta="Correo"
            valor={datosPerfil.correo}
            href={`mailto:${datosPerfil.correo}`}
          />
          <DatoContacto
            icono="telefono"
            etiqueta="Teléfono"
            valor={datosPerfil.telefono}
            href={`tel:${datosPerfil.telefono.replace(/\s/g, '')}`}
          />
          <DatoContacto icono="ubicacion" etiqueta="Ubicación" valor={datosPerfil.ubicacion} />
        </Stack>

        <Stack direction="row" spacing={1.5}>
          {datosRedesSociales.map((red) => (
            <EnlaceRedSocial key={red.id} red={red} />
          ))}
        </Stack>
      </Stack>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
        }}
      >
        <Titulo variante="h3" componente="h2">
          Envíame un mensaje
        </Titulo>
        <Box sx={{ mt: 3 }}>
          <FormularioContacto />
        </Box>
      </Paper>
    </Box>
  </Seccion>
)
