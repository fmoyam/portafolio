import { Stack } from '@mui/material'
import { Seccion } from '../atoms/Seccion'
import { EncabezadoSeccion } from '../molecules/EncabezadoSeccion'
import { TarjetaExperiencia } from '../molecules/TarjetaExperiencia'
import { datosExperiencia } from '../../data/datosPortafolio'

export const SeccionExperiencia = () => (
  <Seccion id="experiencia" sx={(tema) => ({ bgcolor: tema.palette.action.hover })}>
    <EncabezadoSeccion
      etiqueta="Trayectoria"
      titulo="Experiencia Laboral"
      descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Listado cronológico de experiencias profesionales."
    />

    <Stack spacing={3} sx={{ mt: { xs: 5, md: 7 } }}>
      {datosExperiencia.map((experiencia) => (
        <TarjetaExperiencia key={experiencia.id} experiencia={experiencia} />
      ))}
    </Stack>
  </Seccion>
)
