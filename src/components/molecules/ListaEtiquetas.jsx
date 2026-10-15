import { Box } from '@mui/material'
import { TagTech } from '../atoms/TagTech'

export const ListaEtiquetas = ({ elementos, ...props }) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }} {...props}>
    {elementos.map((elemento) => (
      <TagTech key={elemento}>{elemento}</TagTech>
    ))}
  </Box>
)
