import { Chip } from '@mui/material'

export const TagTech = ({ children, ...props }) => (
  <Chip label={children} size="small" variant="outlined" {...props} />
)
