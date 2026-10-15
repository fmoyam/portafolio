import { Button } from '@mui/material'

export const Boton = ({ variante = 'contained', color = 'primary', children, ...props }) => (
  <Button variant={variante} color={color} {...props}>
    {children}
  </Button>
)
