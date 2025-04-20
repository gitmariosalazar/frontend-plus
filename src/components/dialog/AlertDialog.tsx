import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Check, Close, DeleteForever, Warning } from '@mui/icons-material';
import './AlertDialog.css';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { AppBar, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { blackTheme } from './Theme';

interface AlertDialogProps {
  title?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  icon?: React.ReactNode;
  icon_header?: React.ReactNode;
}

export default function AlertDialog({ title = 'Default Title', children,icon, onConfirm, onCancel }: AlertDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (onCancel) onCancel();
  };

  const handleConfirm = () => {
    setOpen(false);
    if (onConfirm) onConfirm();
  };
  return (
    <ThemeProvider theme={blackTheme}>
      <React.Fragment>
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
        <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title" aria-describedby="alert-dialog-description">
          <AppBar sx={{ position: 'relative', bgcolor: 'background.paper', color: 'text.primary' }}>
            <Toolbar>
                <Warning color='warning' />
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} color="error" startIcon={<Close />}>
              Cancel
            </Button>
            <Button onClick={handleConfirm} autoFocus variant="contained" color="success" startIcon={<Check />}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}
