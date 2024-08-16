import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInContainer = styled(Container)`
  animation: ${fadeIn} 1.5s ease-in;
  padding-top: 20px;
`;

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
}));

const RemoveButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart(); // Get cart items and removeFromCart function

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    if (item.price !== undefined) {
      // Ensure item.price is a string
      const priceString = item.price.toString();
      const priceNumber = parseFloat(priceString.replace(/[^0-9.]/g, ''));
      return total + priceNumber;
    }
    return total;
  }, 0);

  // Handle checkout button click
  const handleCheckout = () => {
    navigate('/checkout', { state: { total: totalPrice } }); // Navigate to checkout page with total price
  };

  return (
    <div>
      {/* AppBar with navigation */}
      <AppBar position="static" style={{ backgroundColor: '#808080' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <FadeInContainer maxWidth="lg" mt={4}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Your Shopping Cart
          </Typography>

          {/* Display Cart Items */}
          <Grid container spacing={3}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <StyledCard>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.image}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: ${item.price}
                      </Typography>
                      {/* Remove Button */}
                      <RemoveButton
                        variant="outlined"
                        color="secondary"
                        onClick={() => removeFromCart(item.id)} // Remove item from cart
                      >
                        Remove
                      </RemoveButton>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" align="center">
                Your cart is empty.
              </Typography>
            )}
          </Grid>

          {/* Total Price */}
          {cart.length > 0 && (
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Typography variant="h6">
                Total: ${totalPrice.toFixed(2)} {/* Ensure 2 decimal places */}
              </Typography>
            </Box>
          )}

          {/* Checkout Button */}
          {cart.length > 0 && (
            <Box mt={3} display="flex" justifyContent="center">
              <Button variant="contained" color="primary" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </Box>
          )}
        </Container>
      </FadeInContainer>
    </div>
  );
};

export default Cart;
