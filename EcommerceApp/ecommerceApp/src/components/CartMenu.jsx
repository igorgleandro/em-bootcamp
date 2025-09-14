import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CartMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        aria-controls={open ? 'cart-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
        sx={{ color: 'inherit' }}
      >
        <ShoppingCartIcon />
      </IconButton>

      <Menu
        id="cart-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
       
      >

        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle1" fontWeight={700}>
            Your Cart
          </Typography>
          <Typography variant="caption" color="text.secondary">
            number Itens
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleClose}>Select Item</MenuItem>
        
        <Divider />

        <MenuItem
          onClick={handleClose}
          sx={{ justifyContent: 'center', fontWeight: 700, color: 'orange' }}
        >
          Go to Checkout Link
        </MenuItem>
      </Menu>
    </>
  );
}
