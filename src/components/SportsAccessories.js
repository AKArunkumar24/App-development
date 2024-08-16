import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ShoppingCart, Favorite, Help, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart
import { useWishList } from '../contexts/WishListContext'; // Corrected import

const SportsAccessories = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the custom hook to get addToCart function
  const { addToWishList } = useWishList(); // Use the custom hook to get addToWishList function

  const accessories = [
    {
      id: 1,
      name: 'Sports Water Bottle',
      image: 'https://tse4.mm.bing.net/th?id=OIP.KfU4iwAFKKobR_UIILgsDgHaHa&pid=Api&P=0&h=180',
      price: '$15',
      description: 'Durable and lightweight water bottle to keep you hydrated.',
      material: 'Plastic',
      rating: 4.3,
    },
    {
      id: 2,
      name: 'Yoga Mat',
      image: 'https://tse3.mm.bing.net/th?id=OIP.Y2BASB2KPYLTv8ihVpMYQgHaE8&pid=Api&P=0&h=180',
      price: '$25',
      description: 'Non-slip mat for comfort and stability during yoga sessions.',
      material: 'Foam',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Resistance Bands',
      image: 'https://fitnessactivist.com/wp-content/uploads/2015/03/resistance-tube-bands-pdt-img.jpg',
      price: '$20',
      description: 'Versatile bands for strength training and rehabilitation.',
      material: 'Latex',
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Fitness Tracker',
      image: 'https://tse2.mm.bing.net/th?id=OIP.TmZHRsZRGGFoBePNNAnISwHaI_&pid=Api&P=0&h=180',
      price: '$60',
      description: 'Track your workouts and monitor your health metrics.',
      material: 'Silicone',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Boxing Gloves',
      image: 'https://i5.walmartimages.com/asr/2f540480-443d-4524-b7fb-5f68f0f3cd58_1.c6f93e5ccc860c2019b912fb63d180e4.jpeg',
      price: '$50',
      description: 'High-quality gloves for optimal protection and performance.',
      material: 'Leather',
      rating: 4.4,
    },
    {
      id: 6,
      name: 'Jump Rope',
      image: 'https://tse1.mm.bing.net/th?id=OIP.CZjRRudQeJh1uBBXN_fyqwHaF7&pid=Api&P=0&h=180',
      price: '$12',
      description: 'Efficient tool for cardio workouts and improving coordination.',
      material: 'PVC',
      rating: 4.2,
    },
    {
      id: 7,
      name: 'Dumbbell Set',
      image: 'https://i5.walmartimages.com/asr/0d2b0aec-3c0d-49d0-a112-e28d70d36703.509188299c485ce14310c65825a8cbe2.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      price: '$100',
      description: 'Complete set of dumbbells for a comprehensive strength training.',
      material: 'Cast Iron',
      rating: 4.8,
    },
    {
      id: 8,
      name: 'Gym Towel',
      image: 'https://tse2.mm.bing.net/th?id=OIP.nDSQ0Ut1aqZMEcfbwa5gAwHaGV&pid=Api&P=0&h=180',
      price: '$10',
      description: 'Soft and absorbent towel for use during workouts.',
      material: 'Cotton',
      rating: 4.0,
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
            Sports Accessories Collection
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
          Sports Accessories Collection
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore our wide range of sports accessories for all your needs.
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
                      style={{ marginTop: '8px' }}
                      onClick={() => handleAddToWishList(accessory)}
                    >
                      Add to Wishlist
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

export default SportsAccessories;
