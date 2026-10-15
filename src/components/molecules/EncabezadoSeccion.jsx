import { Stack } from '@mui/material'
import { Tag } from '../atoms/Tag'
import { Titulo } from '../atoms/Titulo'
import { Texto } from '../atoms/Texto'

export const EncabezadoSeccion = ({
  etiqueta,
  titulo,
  descripcion,
  alineado = 'izquierda',
  ...props
}) => {
  const centrado = alineado === 'centro'

  return (
    <Stack
      spacing={2}
      sx={{
        maxWidth: 720,
        mx: centrado ? 'auto' : 0,
        textAlign: centrado ? 'center' : 'left',
        alignItems: centrado ? 'center' : 'flex-start',
      }}
      {...props}
    >
      {etiqueta ? <Tag>{etiqueta}</Tag> : null}
      <Titulo variante="h2" componente="h2">
        {titulo}
      </Titulo>
      {descripcion ? <Texto>{descripcion}</Texto> : null}
    </Stack>
  )
}
