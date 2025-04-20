import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Avatar, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './AlertDialog.css'
import { AddCircle } from '@mui/icons-material';
import { blackTheme } from './Theme';



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FullScreenDialogProps {
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  onSave?: () => void;
  icon?: React.ReactNode;
  label_button?: string;
}

export default function FullScreenDialog({ title = 'Default Title', children, icon, onClose, onSave, label_button }: FullScreenDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={blackTheme}>
      <React.Fragment>
        {label_button ? (
          <Button onClick={handleClickOpen} variant="outlined" color='secondary' startIcon={icon}>
            {label_button}
          </Button>
        ) : (
          <IconButton
            onClick={handleClickOpen}
            size="small"
            sx={{
              ml: 0,
              color: '#bdbdbd', // Color claro
              '&:hover': { bgcolor: '#33334c' } // Fondo al pasar el mouse
            }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 20, height: 20, bgcolor: 'transparent' }}>{icon}</Avatar>
          </IconButton>
        )}
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar sx={{ position: 'relative', bgcolor: 'background.paper', color: 'text.primary' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="content-dialog" style={{ padding: '16px', color: 'text.primary' }}>
            {children}
          </div>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}
