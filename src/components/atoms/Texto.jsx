import { Typography } from '@mui/material'

export const Texto = ({ variante = 'body1', componente = 'p', children, ...props }) => (
  <Typography variant={variante} component={componente} color="text.secondary" {...props}>
    {children}
  </Typography>
)
