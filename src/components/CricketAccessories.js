import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ShoppingCart, Favorite, Help, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart
import { useWishList } from '../contexts/WishListContext'; // Import useWishList

const CricketAccessories = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the custom hook to get addToCart function
  const { addToWishList } = useWishList(); // Use the custom hook to get addToWishList function

  const accessories = [
    {
      id: 1,
      name: 'Cricket Gloves',
      image: 'https://tse4.mm.bing.net/th?id=OIP.rwMv8s4g5KN0vJVA2HfBYQHaHa&pid=Api&P=0&h=180',
      price: '$45',
      description: 'Comfortable and durable gloves for better grip and protection.',
      material: 'Leather',
      rating: 4.4,
    },
    {
      id: 2,
      name: 'Cricket Pads',
      image: 'https://tse1.mm.bing.net/th?id=OIP.SOGcBuMaADK-HfptTf9j0wHaHa&pid=Api&P=0&h=180',
      price: '$80',
      description: 'High-quality pads offering maximum protection for the legs.',
      material: 'Polyfoam',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Cricket Helmet',
      image: 'https://tse1.mm.bing.net/th?id=OIP.HS_nyseblZl4oEs8YfPuIQHaHa&pid=Api&P=0&h=180',
      price: '$120',
      description: 'Protective helmet with advanced padding and ventilation.',
      material: 'ABS Plastic',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Cricket Bat Cover',
      image: 'https://tse2.mm.bing.net/th?id=OIP.S5esc52XtvON-u49ycrcMwHaHa&pid=Api&P=0&h=180',
      price: '$30',
      description: 'Durable cover to keep your bat safe and in good condition.',
      material: 'Synthetic Fabric',
      rating: 4.2,
    },
    {
      id: 5,
      name: 'Cricket Bag',
      image: 'https://tse1.mm.bing.net/th?id=OIP.I3d1dTJdC2dndTGWPtfrFAHaGW&pid=Api&P=0&h=180',
      price: '$50',
      description: 'Spacious bag with compartments for all your cricket gear.',
      material: 'Polyester',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Cricket Thigh Pad',
      image: 'https://cdn.shopify.com/s/files/1/1255/8535/products/Ultimate_Combo_Thighguard_580x.jpg?v=1469661041',
      price: '$25',
      description: 'Provides extra protection for the thighs during play.',
      material: 'EVA Foam',
      rating: 4.3,
    },
    {
      id: 7,
      name: 'Cricket Arm Guard',
      image: 'https://tse1.mm.bing.net/th?id=OIP.41pe3GkIsy_IHXMfIM2YsgHaHa&pid=Api&P=0&h=180',
      price: '$20',
      description: 'Lightweight guard to protect your forearm from impact.',
      material: 'Polycarbonate',
      rating: 4.1,
    },
    {
      id: 8,
      name: 'Cricket Shoe',
      image: 'https://tse2.mm.bing.net/th?id=OIP.vil2hU1zAi4nYLkeqtBnwAHaHa&pid=Api&P=0&h=180',
      price: '$90',
      description: 'High-performance shoes for optimal grip and comfort.',
      material: 'Synthetic',
      rating: 4.5,
    },
  ];

  const handleAddToCart = (accessory) => {
    addToCart(accessory); // Add item to the cart using the context hook
    alert(`${accessory.name} added to cart!`); // Optionally show a confirmation
  };

  const handleAddToWishList = (accessory) => {
    addToWishList(accessory); // Add item to the wishlist using the context hook
    alert(`${accessory.name} added to wishlist!`); // Optionally show a confirmation
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
    navigate('/'); // Navigate to homepage or previous page
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
            Cricket Accessories Collection
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
          Cricket Accessories Collection
        </Typography>
        <Typography variant="body1" gutterBottom>
          Browse through our extensive range of cricket accessories.
        </Typography>
        <Grid container spacing={3}>
          {accessories.map((accessory) => (
            <Grid item xs={12} sm={6} md={4} key={accessory.id}>
              <Card>
                <CardMedia component="img" height="200" image={accessory.image} alt={accessory.name} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {accessory.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {accessory.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {accessory.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Material: {accessory.material}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {accessory.rating} ★
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleAddToCart(accessory)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      onClick={() => handleAddToWishList(accessory)}
                    >
                      Add to Wish List
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CricketAccessories;
