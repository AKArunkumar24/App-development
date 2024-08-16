import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box, IconButton } from '@mui/material';
import { Favorite, ArrowBack, AddShoppingCart } from '@mui/icons-material'; // Import AddShoppingCart icon
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useWishList } from '../contexts/WishListContext'; // Import useWishList
import { useCart } from '../contexts/CartContext'; // Import useCart

// Styled components
const CardContainer = styled(Card)(({ theme }) => ({
  boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 250,
  objectFit: 'cover',
});

const CardContentStyled = styled(CardContent)({
  textAlign: 'center',
});

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const WishList = () => {
  const navigate = useNavigate();
  const { wishListItems, removeFromWishList } = useWishList(); // Use the custom hook to get wishListItems and removeFromWishList function
  const { addToCart } = useCart(); // Use the custom hook to add items to the cart

  const handleBackClick = () => {
    navigate('/'); // Navigate to homepage
  };

  return (
    <div>
      {/* AppBar with navigation */}
      <AppBar position="static" style={{ backgroundColor: '#808080' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBackClick} style={{ marginRight: '16px' }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Wish List
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Your Wishlist
        </Typography>
        {wishListItems.length > 0 ? (
          <Grid container spacing={3}>
            {wishListItems.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <CardContainer>
                  <StyledCardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContentStyled>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.primary" style={{ fontWeight: 'bold' }}>
                      {product.price}
                    </Typography>
                    <StyledButton
                      variant="contained"
                      color="primary"
                      onClick={() => addToCart(product)} // Add to cart functionality
                      startIcon={<AddShoppingCart />}
                    >
                      Add to Cart
                    </StyledButton>
                    <StyledButton
                      variant="contained"
                      color="secondary"
                      onClick={() => removeFromWishList(product.id)}
                      startIcon={<Favorite />}
                    >
                      Remove from Wishlist
                    </StyledButton>
                  </CardContentStyled>
                </CardContainer>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" align="center" paragraph>
            Your wishlist is empty.
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default WishList;
