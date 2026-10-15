import { Link as MuiLink } from '@mui/material'

export const Link = ({ href, children, ...props }) => {
  const esExterno = typeof href === 'string' && href.startsWith('http')

  return (
    <MuiLink
      href={href}
      underline="none"
      {...(esExterno ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </MuiLink>
  )
}
