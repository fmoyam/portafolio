import { Typography } from '@mui/material'

export const Titulo = ({ variante = 'h2', componente = 'h2', children, ...props }) => (
  <Typography variant={variante} component={componente} {...props}>
    {children}
  </Typography>
)
