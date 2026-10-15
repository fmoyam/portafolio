import { Button } from '@mui/material'

export const EnlaceNavegacion = ({ etiqueta, href, activo, alHacerClic }) => (
  <Button
    href={href}
    onClick={alHacerClic}
    sx={(tema) => ({
      minWidth: 'auto',
      px: 1.5,
      py: 0.75,
      borderRadius: 8,
      backgroundColor: 'transparent',
      color: activo ? tema.palette.primary.main : tema.palette.text.secondary,
      fontWeight: activo ? 700 : 500,
      '&:hover': { backgroundColor: 'transparent', color: tema.palette.primary.main },
    })}
  >
    {etiqueta}
  </Button>
)
