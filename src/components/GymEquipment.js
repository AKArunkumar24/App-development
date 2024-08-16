import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ShoppingCart, Favorite, Help, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart
import { useWishList } from '../contexts/WishListContext'; // Import useWishList

const GymEquipment = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Get the addToCart function from CartContext
  const { addToWishList } = useWishList(); // Get the addToWishList function from WishListContext

  const equipment = [
    {
      id: 1,
      name: 'Dumbbell Set',
      image: 'https://i5.walmartimages.com/asr/0d2b0aec-3c0d-49d0-a112-e28d70d36703.509188299c485ce14310c65825a8cbe2.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      price: '$100',
      description: 'Complete set of durable dumbbells for a comprehensive workout.',
      material: 'Cast Iron',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Treadmill',
      image: 'https://tse4.mm.bing.net/th?id=OIP.svJJ-fRpVabdI1lJophd5QHaG5&pid=Api&P=0&h=180',
      price: '$800',
      description: 'High-performance treadmill with adjustable speed and incline.',
      material: 'Steel, Plastic',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Kettlebells',
      image: 'https://i5.walmartimages.com/asr/b7bcc34a-4257-43db-a6c2-b29943f60529_1.b525d220f150546a260dc6921def9a0a.jpeg',
      price: '$120',
      description: 'Versatile kettlebells for dynamic strength training exercises.',
      material: 'Cast Iron',
      rating: 4.6,
    },
    {
      id: 4,
      name: 'Exercise Bike',
      image: 'https://tse1.mm.bing.net/th?id=OIP.ycDlYgv1WwajrSwFIT6G2gHaLH&pid=Api&P=0&h=180',
      price: '$400',
      description: 'Indoor exercise bike with adjustable resistance and comfortable seat.',
      material: 'Steel, Plastic',
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Resistance Bands Set',
      image: 'https://tse4.mm.bing.net/th?id=OIP.Cw8mx4CpWdlFZPjpR4XhmAHaHa&pid=Api&P=0&h=180',
      price: '$30',
      description: 'Set of resistance bands with varying levels of resistance for versatile workouts.',
      material: 'Latex',
      rating: 4.3,
    },
    {
      id: 6,
      name: 'Ab Roller',
      image: 'https://fitnessfighters.co.uk/wp-content/uploads/2021/02/JLL-Ab-Roller-Abdominal-Trainer-2048x1676.png',
      price: '$25',
      description: 'Effective ab roller for strengthening your core and improving stability.',
      material: 'Steel, Foam',
      rating: 4.4,
    },
    {
      id: 7,
      name: 'Yoga Ball',
      image: 'https://tse3.mm.bing.net/th?id=OIP.oNPSj5aIWORInz3g1tlowAHaHa&pid=Api&P=0&h=180',
      price: '$20',
      description: 'Durable yoga ball for balance, stability, and flexibility exercises.',
      material: 'PVC',
      rating: 4.2,
    },
    {
      id: 8,
      name: 'Jump Rope',
      image: 'https://i5.walmartimages.com/asr/5ef4243b-1613-485d-9e19-84db9bf14ad3_1.e95614a488d1be5ff13daa1bd24d8a96.jpeg',
      price: '$12',
      description: 'Lightweight jump rope for effective cardio workouts and coordination.',
      material: 'PVC',
      rating: 4.1,
    },
  ];

  const handleAddToCart = (item) => {
    addToCart(item); // Add item to cart using the context hook
    alert(`${item.name} added to cart!`); // Optionally show a confirmation
  };

  const handleAddToWishList = (item) => {
    addToWishList(item); // Add item to wishlist using the context hook
    alert(`${item.name} added to wishlist!`); // Optionally show a confirmation
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
            Gym Equipment Collection
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
          Gym Equipment Collection
        </Typography>
        <Typography variant="body1" gutterBottom>
          Discover our comprehensive range of gym equipment for all your fitness needs.
        </Typography>
        <Grid container spacing={3}>
          {equipment.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia component="img" height="200" image={item.image} alt={item.name} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Material: {item.material}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {item.rating} ★
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      style={{ marginTop: '8px' }}
                      onClick={() => handleAddToWishList(item)}
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

export default GymEquipment;
