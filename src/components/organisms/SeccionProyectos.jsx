import { useMemo, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Boton } from '../atoms/Boton'
import { Seccion } from '../atoms/Seccion'
import { Texto } from '../atoms/Texto'
import { EncabezadoSeccion } from '../molecules/EncabezadoSeccion'
import { TarjetaProyecto } from '../molecules/TarjetaProyecto'
import { datosProyectos } from '../../data/datosPortafolio'

const FILTROS = [
  { id: 'todos', etiqueta: 'Todos' },
  { id: 'destacados', etiqueta: 'Destacados' },
]

export const SeccionProyectos = () => {
  const [filtro, setFiltro] = useState('todos')

  const proyectosVisibles = useMemo(
    () =>
      filtro === 'destacados'
        ? datosProyectos.filter((proyecto) => proyecto.destacado)
        : datosProyectos,
    [filtro],
  )

  return (
    <Seccion id="proyectos" sx={(tema) => ({ bgcolor: tema.palette.action.hover })}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' } }}
      >
        <EncabezadoSeccion
          etiqueta="Portafolio"
          titulo="Proyectos Desarrollados"
          descripcion="Aquí una pequeña muestra de los proyectos de los cuales he formado parte e iniciado de forma autónoma."
        />
        <Stack direction="row" spacing={1}>
          {FILTROS.map((opcion) => (
            <Boton
              key={opcion.id}
              size="small"
              variante={filtro === opcion.id ? 'contained' : 'outlined'}
              onClick={() => setFiltro(opcion.id)}
            >
              {opcion.etiqueta}
            </Boton>
          ))}
        </Stack>
      </Stack>

      {proyectosVisibles.length > 0 ? (
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fill, minmax(320px, 1fr))' },
            gap: 3,
          }}
        >
          {proyectosVisibles.map((proyecto) => (
            <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
          ))}
        </Box>
      ) : (
        <Texto sx={{ mt: 5 }}>No hay proyectos para mostrar con el filtro seleccionado.</Texto>
      )}
    </Seccion>
  )
}
