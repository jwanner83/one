import AdminLayoutTitle from '@/components/core/layout/AdminLayoutTitle'
import Navigation from '@/components/core/navigation/Navigation'
import { Box, useTheme } from '@mui/material'
import { ReactNode } from 'react'

type AdminLayoutProps = {
  title?: string
  children: ReactNode
}

export default function AdminLayout({ title, children }: AdminLayoutProps) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gridGap: '20px',
        p: 2,
        m: 3
      }}
    >
      <Box>
        <Navigation />
      </Box>
      <Box>
        {title ? <AdminLayoutTitle title={title} /> : <></>}
        {children}
      </Box>
    </Box>
  )
}
