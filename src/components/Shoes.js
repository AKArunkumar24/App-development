import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ShoppingCart, Favorite, Help, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart
import { useWishList } from '../contexts/WishListContext'; // Import useWishList
import { styled } from '@mui/system';

const CardContainer = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
}));

const Shoes = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the custom hook to get addToCart function
  const { addToWishList } = useWishList(); // Use the custom hook to get addToWishList function

  // Expanded data for shoes
  const shoes = [
    { id: 1, name: 'Nike Air Max', image: 'https://tse1.mm.bing.net/th?id=OIP.9yn_VWSRybgjt-tofXmxlwHaFP&pid=Api&rs=1&c=1&qlt=95&w=171&h=120', price: 120, description: 'A classic Air Max design with superior cushioning.', material: 'Synthetic', rating: 4.5 },
    { id: 2, name: 'Adidas Ultraboost', image: 'https://tse1.mm.bing.net/th?id=OIP.GQ2J9esKKk43pr_yipyhzwHaE8&pid=Api&P=0&h=180', price: 140, description: 'Ultra-responsive cushioning for an unbeatable running experience.', material: 'Primeknit', rating: 4.7 },
    { id: 3, name: 'Puma Running Shoes', image: 'https://tse3.mm.bing.net/th?id=OIP.aZhIba8CRww0yYPH-hOiJAHaHa&pid=Api&P=0&h=180', price: 100, description: 'Lightweight running shoes designed for comfort and durability.', material: 'Mesh', rating: 4.3 },
    { id: 4, name: 'Reebok Classic', image: 'https://tse4.mm.bing.net/th?id=OIP.2fM1_huan4PEiZdycZxVJgHaJT&pid=Api&P=0&h=180', price: 110, description: 'Iconic retro design with modern comfort.', material: 'Leather', rating: 4.4 },
    { id: 5, name: 'New Balance 990', image: 'https://tse1.mm.bing.net/th?id=OIP.1b-vVNVGaVNEl9n7Q37X7wHaFS&pid=Api&P=0&h=180', price: 130, description: 'A high-performance shoe with excellent cushioning and stability.', material: 'Suede', rating: 4.6 },
    { id: 6, name: 'ASICS Gel-Kayano', image: 'https://tse1.mm.bing.net/th?id=OIP.s8-dXaP9Ta_8YQ7CCuDbNgHaFZ&pid=Api&P=0&h=180', price: 125, description: 'Reliable and durable with Gel cushioning for a smooth ride.', material: 'Synthetic', rating: 4.5 },
  ];

  const handleAddToCart = (shoe) => {
    addToCart(shoe); // Add item to the cart using the context hook
    alert(`${shoe.name} added to cart!`); // Optionally show a confirmation
  };

  const handleAddToWishList = (shoe) => {
    addToWishList(shoe); // Add item to the wishlist using the context hook
    alert(`${shoe.name} added to wishlist!`); // Optionally show a confirmation
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
            Shoes Collection
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
      <Container style={{ marginTop: '32px' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Shoes Collection
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore our wide range of shoes.
        </Typography>
        <Grid container spacing={3}>
          {shoes.map((shoe) => (
            <Grid item xs={12} sm={6} md={4} key={shoe.id}>
              <CardContainer>
                <CardMedia
                  component="img"
                  height="200"
                  image={shoe.image}
                  alt={shoe.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {shoe.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${shoe.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {shoe.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Material: {shoe.material}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {shoe.rating} ★
                  </Typography>
                  <Box mt={2}>
                    <ActionButton
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleAddToCart(shoe)}
                    >
                      Add to Cart
                    </ActionButton>
                    <ActionButton
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      onClick={() => handleAddToWishList(shoe)}
                    >
                      Add to Wish List
                    </ActionButton>
                  </Box>
                </CardContent>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Shoes;
