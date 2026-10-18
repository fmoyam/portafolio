import { Box, Button, Card, CardContent, Stack } from '@mui/material'
import { TagTech } from '../atoms/TagTech'
import { Icono } from '../atoms/Icono'
import { Titulo } from '../atoms/Titulo'
import { Texto } from '../atoms/Texto'
import { PrevisualizacionProyecto } from './PrevisualizacionProyecto'
import guauMiauImg from '../../assets/guaumiau.png'
import decoHogarImg from '../../assets/deco.png'
import dimacImg from '../../assets/dimac.png'
import pcer2Img from '../../assets/pcer2.png'

const imagenesPorProyecto = {
  'proyecto-1': guauMiauImg,
  'proyecto-2': decoHogarImg,
  'proyecto-3': dimacImg,
  'proyecto-4': pcer2Img,
}

export const TarjetaProyecto = ({ proyecto }) => {
  const { id, titulo, categoria, descripcion, tecnologias, repositorio, demo, acento } = proyecto
  const tieneDemo = Boolean(demo && demo !== 'null')
  const imagenPreview = imagenesPorProyecto[id]

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
      }}
    >
      <PrevisualizacionProyecto titulo={titulo} acento={acento} imagen={imagenPreview} />

      <CardContent sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', gap: 1.5, flexGrow: 1 }}>
        <Texto variante="overline" color="primary.main">
          {categoria}
        </Texto>
        <Titulo variante="h3" componente="h3">
          {titulo}
        </Titulo>
        <Texto variante="body2">{descripcion}</Texto>

        <Stack direction="row" useFlexGap sx={{ mt: 0.5, flexWrap: 'wrap', gap: 1 }}>
          {tecnologias.map((tecnologia) => (
            <TagTech key={tecnologia}>{tecnologia}</TagTech>
          ))}
        </Stack>

        <Box sx={{ mt: 'auto', pt: 1.5, display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          <Button
            href={repositorio}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            startIcon={<Icono nombre="github" fontSize="small" />}
          >
            Repositorio
          </Button>
          <Button
            href={tieneDemo ? demo : undefined}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="inherit"
            endIcon={<Icono nombre="enlaceExterno" fontSize="small" />}
            disabled={!tieneDemo}
            aria-disabled={!tieneDemo}
          >
            Demo
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
