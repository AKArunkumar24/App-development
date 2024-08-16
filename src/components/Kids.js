import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ArrowBack, ShoppingCart, Favorite, Help } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart
import { useWishList } from '../contexts/WishListContext'; // Import useWishList

// Styled Card with hover effect and button
const CardContainer = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
}));

const AddToWishListButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
  marginLeft: theme.spacing(1),
}));

const CardContentStyled = styled(CardContent)({
  textAlign: 'center',
});

const Kids = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the custom hook to get addToCart function
  const { addToWishList } = useWishList(); // Use the custom hook to get addToWishList function

  // Enhanced data for kids sportswear
  const kidsWear = [
    { id: 1, title: 'Kids Sportswear 1', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9511e462-1974-4c8f-9627-6b451c4df23e/sportswear-tech-fleece-big-kids-boys-full-zip-hoodie-wWxMjD.png', price: '₹799', description: 'Comfortable and warm hoodie ideal for cold weather.', material: '100% Polyester', rating: 4.5 },
    { id: 2, title: 'Kids Sportswear 2', image: 'https://i8.amplience.net/i/jpl/jd_400666_a?qlt=92', price: '₹899', description: 'Breathable and lightweight jacket for active kids.', material: 'Nylon Blend', rating: 4.2 },
    { id: 3, title: 'Kids Sportswear 3', image: 'https://i.pinimg.com/originals/be/93/68/be93680190986bbd4a07549a2fd3fec6.jpg', price: '₹999', description: 'Stylish sportswear with excellent flexibility.', material: 'Cotton Spandex', rating: 4.6 },
    { id: 4, title: 'Kids Sportswear 4', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/13b02989-84db-4722-9640-892b55d64b5c/sportswear-club-fleece-big-kids-boys-pullover-hoodie-extended-size-XrCvKR.png', price: '₹1099', description: 'Cozy and warm fleece hoodie for winter.', material: 'Cotton Fleece', rating: 4.4 },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  const handleAddToWishList = (item) => {
    addToWishList(item);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleWishListClick = () => {
    navigate('/wish-list');
  };

  const handleChatClick = () => {
    navigate('/chat-with-us');
  };

  const handleBackClick = () => {
    navigate('/'); // Navigate to homepage
  };

  return (
    <div>
      {/* AppBar with back arrow and navigation */}
      <AppBar position="static" style={{ backgroundColor: '#808080' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBackClick}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Kids Sportswear
          </Typography>
          <Button color="inherit" onClick={() => navigate('/signin')}>
            Sign In
          </Button>
          <Button color="inherit" startIcon={<ShoppingCart />} onClick={handleCartClick}>
            Cart
          </Button>
          <Button color="inherit" startIcon={<Favorite />} onClick={handleWishListClick}>
            Wish List
          </Button>
          <Button color="inherit" startIcon={<Help />} onClick={handleChatClick}>
            Chat With Us
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Kids Sportswear Collection
        </Typography>
        <Grid container spacing={3}>
          {kidsWear.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardContainer>
                <CardMedia
                  style={{ height: 250 }}
                  image={item.image}
                  title={item.title}
                />
                <CardContentStyled>
                  <Typography variant="h6" component="h2" align="center">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" align="center" color="textSecondary">
                    {item.price}
                  </Typography>
                  <Typography variant="body2" align="center" color="textSecondary" paragraph>
                    {item.description}
                  </Typography>
                  <Typography variant="body2" align="center" color="textSecondary">
                    Material: {item.material}
                  </Typography>
                  <Typography variant="body2" align="center" color="textSecondary">
                    Rating: {item.rating} ★
                  </Typography>
                  <Box mt={2}>
                    <AddToCartButton
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </AddToCartButton>
                    <AddToWishListButton
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleAddToWishList(item)}
                    >
                      Add to Wishlist
                    </AddToWishListButton>
                  </Box>
                </CardContentStyled>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Kids;
