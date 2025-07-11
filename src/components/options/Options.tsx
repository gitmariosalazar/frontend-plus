import * as React from 'react';
import './Options.css'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Add, AddCircle, Check, CheckBox, Edit, Payment, Print } from '@mui/icons-material';

export default function Options() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
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
          <Avatar sx={{ width: 20, height: 20, bgcolor: 'transparent' }}>
            <AddCircle style={{ width: '14px', height: '14px', color: 'aqua' }} />
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.5))',
              mt: 1.5,
              bgcolor: '#2c2c3f', // Fondo del menú
              color: '#ffffff', // Texto claro
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: '#2c2c3f', // Fondo del triángulo
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} sx={{ '&:hover': { bgcolor: '#171f27', color: 'magenta' } }}>
          <ListItemIcon sx={{ color: '#bdbdbd' }}>
            <Payment fontSize="small" />
          </ListItemIcon>
          Pay Invoice
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ '&:hover': { bgcolor: '#171f27', color: 'magenta' } }}>
          <ListItemIcon sx={{ color: '#bdbdbd' }}>
            <CheckBox fontSize="small" />
          </ListItemIcon>
          Change Status
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ '&:hover': { bgcolor: '#171f27', color: 'magenta' } }}>
          <ListItemIcon sx={{ color: '#bdbdbd' }}>
            <Print fontSize="small"  />
          </ListItemIcon>
          Print Invoice
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
