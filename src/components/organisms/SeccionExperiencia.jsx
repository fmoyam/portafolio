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
      descripcion="Algunos de los trabajos que he desempeñado a lo largo de los años, tanto en el área de soporte técnico como en atención al cliente."
    />

    <Stack spacing={3} sx={{ mt: { xs: 5, md: 7 } }}>
      {datosExperiencia.map((experiencia) => (
        <TarjetaExperiencia key={experiencia.id} experiencia={experiencia} />
      ))}
    </Stack>
  </Seccion>
)
