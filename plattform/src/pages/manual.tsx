import { Box, Button, Container, Modal, Paper, Typography } from '@mui/material'
import { useState } from 'react'

export default function ManualPage() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="title">Manual</Typography>

        <Paper>
          <Typography variant="h2">Modal</Typography>

          <Button variant="contained" color="primary" onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{mt: 2, mb: 3}}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              <Button variant="contained" color="primary" onClick={handleClose} fullWidth>I agree</Button>
            </Box>
          </Modal>
        </Paper>

        <Paper>
          <Typography variant="h2">Typography</Typography>

          <Typography variant="h1">Heading 1</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
            Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Adipiscing elit ut aliquam purus sit
            amet luctus venenatis lectus. Sed vulputate mi sit amet mauris commodo quis imperdiet. Dolor magna eget est
            lorem ipsum dolor sit. Tincidunt ornare massa eget egestas purus. Urna et pharetra pharetra massa massa.
            Egestas congue quisque egestas diam in. Consectetur adipiscing elit pellentesque habitant morbi tristique
            senectus et netus. Nam aliquam sem et tortor consequat. Consequat interdum varius sit amet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
          </Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
            Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Adipiscing elit ut aliquam purus sit
            amet luctus venenatis lectus. Sed vulputate mi sit amet mauris commodo quis imperdiet. Dolor magna eget est
            lorem ipsum dolor sit. Tincidunt ornare massa eget egestas purus. Urna et pharetra pharetra massa massa.
            Egestas congue quisque egestas diam in. Consectetur adipiscing elit pellentesque habitant morbi tristique
            senectus et netus. Nam aliquam sem et tortor consequat. Consequat interdum varius sit amet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
          </Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
            Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Adipiscing elit ut aliquam purus sit
            amet luctus venenatis lectus. Sed vulputate mi sit amet mauris commodo quis imperdiet. Dolor magna eget est
            lorem ipsum dolor sit. Tincidunt ornare massa eget egestas purus. Urna et pharetra pharetra massa massa.
            Egestas congue quisque egestas diam in. Consectetur adipiscing elit pellentesque habitant morbi tristique
            senectus et netus. Nam aliquam sem et tortor consequat. Consequat interdum varius sit amet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
          </Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
            Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Adipiscing elit ut aliquam purus sit
            amet luctus venenatis lectus. Sed vulputate mi sit amet mauris commodo quis imperdiet. Dolor magna eget est
            lorem ipsum dolor sit. Tincidunt ornare massa eget egestas purus. Urna et pharetra pharetra massa massa.
            Egestas congue quisque egestas diam in. Consectetur adipiscing elit pellentesque habitant morbi tristique
            senectus et netus. Nam aliquam sem et tortor consequat. Consequat interdum varius sit amet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
          </Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
            Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Adipiscing elit ut aliquam purus sit
            amet luctus venenatis lectus. Sed vulputate mi sit amet mauris commodo quis imperdiet. Dolor magna eget est
            lorem ipsum dolor sit. Tincidunt ornare massa eget egestas purus. Urna et pharetra pharetra massa massa.
            Egestas congue quisque egestas diam in. Consectetur adipiscing elit pellentesque habitant morbi tristique
            senectus et netus. Nam aliquam sem et tortor consequat. Consequat interdum varius sit amet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
          </Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
            Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Adipiscing elit ut aliquam purus sit
            amet luctus venenatis lectus. Sed vulputate mi sit amet mauris commodo quis imperdiet. Dolor magna eget est
            lorem ipsum dolor sit. Tincidunt ornare massa eget egestas purus. Urna et pharetra pharetra massa massa.
            Egestas congue quisque egestas diam in. Consectetur adipiscing elit pellentesque habitant morbi tristique
            senectus et netus. Nam aliquam sem et tortor consequat. Consequat interdum varius sit amet.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas. Id
            volutpat lacus laoreet non curabitur gravida arcu ac tortor. Id faucibus nisl tincidunt eget nullam non.
          </Typography>
        </Paper>

        <Paper>


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
        </Paper>
      </Container>
    </>
  )
}
