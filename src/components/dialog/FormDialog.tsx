import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Check, Close, DeleteForever, Edit, InfoOutlined } from '@mui/icons-material';
import './AlertDialog.css';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { AppBar, createTheme, ThemeProvider, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { blackTheme } from './Theme';
import { useTheme } from '@mui/material/styles';

interface FormDialogProps {
  title?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  icon?: React.ReactNode;
}

export default function FormDialog({ title = 'Default Title', children, icon, onConfirm, onCancel }: FormDialogProps) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
        <Dialog
          fullScreen={fullScreen}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          open={open}
          aria-describedby="alert-dialog-description"
        >
          <AppBar sx={{ position: 'relative', bgcolor: 'background.paper', color: 'text.primary' }}>
            <Toolbar>
              <InfoOutlined color="info" />
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            <div className="form-dialog-buttons">
              <div className="dialog-btn">
                {' '}
                <Button variant="contained" color="error" onClick={handleClose} startIcon={<Close />}>
                  Cancel
                </Button>
              </div>
              <div className="dialog-btn">
                {' '}
                <Button variant="contained" color="info" startIcon={<Check />} onClick={handleConfirm} autoFocus>
                  Confirm
                </Button>
              </div>
            </div>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}
