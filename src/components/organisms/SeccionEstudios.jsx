import { Box } from '@mui/material'
import { Seccion } from '../atoms/Seccion'
import { EncabezadoSeccion } from '../molecules/EncabezadoSeccion'
import { TarjetaEstudio } from '../molecules/TarjetaEstudio'
import { datosEstudios } from '../../data/datosPortafolio'

export const SeccionEstudios = () => (
  <Seccion id="estudios">
    <EncabezadoSeccion
      etiqueta="Formación"
      titulo="Estudios"
      descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Detalle de la formación académica y certificaciones."
    />

    <Box
      sx={{
        mt: { xs: 5, md: 7 },
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(320px, 1fr))' },
        gap: 3,
      }}
    >
      {datosEstudios.map((estudio) => (
        <TarjetaEstudio key={estudio.id} estudio={estudio} />
      ))}
    </Box>
  </Seccion>
)
