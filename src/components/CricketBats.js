import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ShoppingCart, Favorite, Help, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart
import { useWishList } from '../contexts/WishListContext'; // Import useWishList

const CricketBats = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the custom hook to get addToCart function
  const { addToWishList } = useWishList(); // Use the custom hook to get addToWishList function

  const cricketBats = [
    {
      id: 1,
      name: 'Kookaburra Kahuna',
      image: 'https://www.talentcricket.co.uk/images/custom/KOOKKAHUNABIGBAT19__size-800-0.jpg',
      price: '$250',
      description: 'High-quality bat with excellent balance and power.',
      material: 'English Willow',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Gray-Nicolls Legend',
      image: 'https://tse4.mm.bing.net/th?id=OIP.z2ZEiBYRdmB7oyvmwldgnAHaHa&pid=Api&P=0&h=180',
      price: '$350',
      description: 'Premium bat designed for professional players.',
      material: 'Grade 1 English Willow',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'GM Diamond',
      image: 'https://tse1.mm.bing.net/th?id=OIP.47NaerFqGScpRN-vm8aSfQHaHa&pid=Api&P=0&h=180',
      price: '$200',
      description: 'A durable and reliable bat for all levels of play.',
      material: 'Kashmir Willow',
      rating: 4.3,
    },
    {
      id: 4,
      name: 'SS Ton Gladiator',
      image: 'https://5.imimg.com/data5/UY/MY/MY-63580758/ss-ton-gladiator-english-willow-cricket-bat-500x500.jpg',
      price: '$220',
      description: 'Offers excellent power and performance for aggressive players.',
      material: 'English Willow',
      rating: 4.4,
    },
    {
      id: 5,
      name: 'MRF Genius',
      image: 'https://tse4.mm.bing.net/th?id=OIP.lniwgctJwCBkjY1LNVl7TAHaH3&pid=Api&P=0&h=180',
      price: '$300',
      description: 'Popular choice among top cricketers for its lightweight feel.',
      material: 'Grade 1 English Willow',
      rating: 4.6,
    },
  ];

  const handleAddToCart = (bat) => {
    addToCart(bat); // Add item to the cart using the context hook
    alert(`${bat.name} added to cart!`); // Optionally show a confirmation
  };

  const handleAddToWishList = (bat) => {
    addToWishList(bat); // Add item to the wishlist using the context hook
    alert(`${bat.name} added to wishlist!`); // Optionally show a confirmation
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
            Cricket Bats Collection
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
          Cricket Bats Collection
        </Typography>
        <Typography variant="body1" gutterBottom>
          Discover our wide range of cricket bats suitable for all levels of play.
        </Typography>
        <Grid container spacing={3}>
          {cricketBats.map((bat) => (
            <Grid item xs={12} sm={6} md={4} key={bat.id}>
              <Card>
                <CardMedia component="img" height="200" image={bat.image} alt={bat.name} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {bat.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {bat.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {bat.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Material: {bat.material}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {bat.rating} ★
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleAddToCart(bat)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      onClick={() => handleAddToWishList(bat)}
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

export default CricketBats;
