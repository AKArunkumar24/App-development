import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { AccountCircle, ShoppingCart, Store, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, showBackButton }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#808080', width: '100%' }}>
      <Toolbar>
        {showBackButton && (
          <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          {title}
        </Typography>
        <Button color="inherit" onClick={() => navigate('/my-store')} startIcon={<Store />}>
          My Store
        </Button>
        <Button color="inherit" onClick={() => navigate('/si')} startIcon={<AccountCircle />}>
          Sign In
        </Button>
        <Button color="inherit" startIcon={<ShoppingCart />} onClick={() => navigate('/cart')}>
          Cart
        </Button>
        <Button color="inherit" startIcon={<AccountCircle />} onClick={() => navigate('/profile')}>
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
