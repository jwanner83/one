import { Button, Typography } from '@mui/material'

export default function ManualPage() {
  return (
    <>
      <Typography variant="h1">Manual</Typography>

      <Typography variant="h2">Typography</Typography>

      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>

      <Typography variant="h2">Buttons</Typography>

      <Typography variant="h3">Primary</Typography>
      <Button color="primary" variant="contained">
        Contained
      </Button>
      <Button color="primary" variant="outlined">
        Outlined
      </Button>
      <Button color="primary" variant="text">
        Text
      </Button>

      <Typography variant="h3">Secondary</Typography>
      <Button color="secondary" variant="contained">
        Contained
      </Button>
      <Button color="secondary" variant="outlined">
        Outlined
      </Button>
      <Button color="secondary" variant="text">
        Text
      </Button>

      <Typography variant="h3">Success</Typography>
      <Button color="success" variant="contained">
        Contained
      </Button>
      <Button color="success" variant="outlined">
        Outlined
      </Button>
      <Button color="success" variant="text">
        Text
      </Button>

      <Typography variant="h3">Warning</Typography>
      <Button color="warning" variant="contained">
        Contained
      </Button>
      <Button color="warning" variant="outlined">
        Outlined
      </Button>
      <Button color="warning" variant="text">
        Text
      </Button>

      <Typography variant="h3">Error</Typography>
      <Button color="error" variant="contained">
        Contained
      </Button>
      <Button color="error" variant="outlined">
        Outlined
      </Button>
      <Button color="error" variant="text">
        Text
      </Button>

      <Typography variant="h3">Info</Typography>
      <Button color="info" variant="contained">
        Contained
      </Button>
      <Button color="info" variant="outlined">
        Outlined
      </Button>
      <Button color="info" variant="text">
        Text
      </Button>
    </>
  )
}
