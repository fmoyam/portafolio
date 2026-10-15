import { Box, Typography } from '@mui/material'

export const Tag = ({ children, ...props }) => (
  <Typography
    variant="overline"
    component="span"
    color="primary.main"
    sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25 }}
    {...props}
  >
    <Box component="span" sx={{ width: 26, height: 2, borderRadius: 1, bgcolor: 'primary.main' }} />
    {children}
  </Typography>
)
