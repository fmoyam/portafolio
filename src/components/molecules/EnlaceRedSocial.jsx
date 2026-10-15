import { IconButton, Tooltip } from '@mui/material'
import { Icono } from '../atoms/Icono'

export const EnlaceRedSocial = ({ red }) => {
  const esExterno = red.url.startsWith('http')

  return (
    <Tooltip title={red.nombre}>
      <IconButton
        component="a"
        href={red.url}
        aria-label={red.nombre}
        {...(esExterno ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        sx={(tema) => ({
          border: '1px solid',
          borderColor: tema.palette.divider,
          borderRadius: 2,
          color: tema.palette.text.secondary,
          transition: 'all 200ms ease',
          '&:hover': {
            color: tema.palette.primary.main,
            borderColor: tema.palette.primary.main,
            transform: 'translateY(-2px)',
          },
        })}
      >
        <Icono nombre={red.icono} />
      </IconButton>
    </Tooltip>
  )
}
