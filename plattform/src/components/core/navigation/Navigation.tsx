import { Box, Typography, useTheme } from '@mui/material'

export default function Navigation() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        p: 4
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        one
      </Typography>
    </Box>
  )
}
