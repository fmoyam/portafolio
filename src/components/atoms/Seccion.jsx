import { Box, Container } from '@mui/material'

export const Seccion = ({ id, children, sx, ...props }) => (
  <Box
    component="section"
    id={id}
    sx={{
      py: { xs: 8, md: 12 },
      scrollMarginTop: { xs: 72, md: 88 },
      ...sx,
    }}
    {...props}
  >
    <Container maxWidth="lg">{children}</Container>
  </Box>
)
