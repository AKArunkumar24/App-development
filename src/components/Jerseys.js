import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ShoppingCart, Favorite, Help } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart
import { useWishList } from '../contexts/WishListContext'; // Import useWishList

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

const CardContentStyled = styled(CardContent)({
  textAlign: 'center',
});

const StyledCardMedia = styled(CardMedia)({
  height: 250,
  objectFit: 'cover',
});

const Jerseys = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the custom hook to get addToCart function
  const { addToWishList } = useWishList(); // Use the custom hook to get addToWishList function

  // Enhanced data for jerseys
  const jerseys = [
    { id: 1, title: 'Jersey 1', image: 'https://imgecart.com/wp-content/uploads/2023/03/DA105.jpg', price: '₹999', description: 'Premium quality jersey with moisture-wicking fabric.', material: '100% Polyester', rating: 4.5 },
    { id: 2, title: 'Jersey 2', image: 'https://rointernational.in/wp-content/uploads/2020/10/CRICKET-SHIRTS-4-scaled.jpg', price: '₹1199', description: 'Lightweight jersey perfect for hot weather.', material: 'Cotton Blend', rating: 4.0 },
    { id: 3, title: 'Jersey 3', image: 'https://www.thesportstuff.in/cdn/shop/products/QuadraWhiteCustomizedCricketTeamJerseyDesign_1024x1024.jpg?v=1642505358', price: '₹1299', description: 'Customized jersey with advanced stretch fabric.', material: 'Spandex Blend', rating: 4.3 },
    { id: 4, title: 'Jersey 4', image: 'https://tse3.mm.bing.net/th?id=OIP.7As_2CWBUapwI9ZQeobA6wHaHa&pid=Api&P=0&h=180', price: '₹1399', description: 'Stylish jersey with breathable mesh panels.', material: 'Mesh Polyester', rating: 4.2 },
    { id: 5, title: 'Jersey 5', image: 'https://tse2.mm.bing.net/th?id=OIP.vTKaeu3pyXMzKW7Snuuo6AHaHa&pid=Api&P=0&h=180', price: '₹999', description: 'Comfortable jersey for everyday use.', material: 'Cotton', rating: 4.1 },
    { id: 6, title: 'Jersey 6', image: 'https://tse1.mm.bing.net/th?id=OIP.ql69NfvNC0ybtbfF9ZfnhwHaHa&pid=Api&P=0&h=180', price: '₹1199', description: 'High-performance jersey for sports enthusiasts.', material: 'Polyester Blend', rating: 4.6 },
    { id: 7, title: 'Jersey 7', image: 'https://imgecart.com/wp-content/uploads/2023/03/DA129.jpg', price: '₹1299', description: 'Durable jersey with moisture management technology.', material: 'Nylon', rating: 4.4 },
    { id: 8, title: 'Jersey 8', image: 'https://imgecart.com/wp-content/uploads/2023/03/DA061.jpg', price: '₹1399', description: 'Elegant design with anti-odor properties.', material: 'Polyester', rating: 4.7 },
  ];

  const handleAddToCart = (jersey) => {
    addToCart(jersey);
    navigate('/cart');
  };

  const handleAddToWishList = (jersey) => {
    addToWishList(jersey);
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

  return (
    <div>
      {/* AppBar with navigation */}
      <AppBar position="static" style={{ backgroundColor: '#808080' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/')} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Jerseys Collection
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
          Men's Jerseys
        </Typography>
        <Grid container spacing={3}>
          {jerseys.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardContainer>
                <StyledCardMedia
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
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)}>
                      Add to Cart
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => handleAddToWishList(item)} style={{ marginLeft: '10px' }}>
                      Add to Wishlist
                    </Button>
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

export default Jerseys;
