import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ShoppingCart, Favorite, Help, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart
import { styled } from '@mui/system';

// Styled components
const CardContainer = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
  },
}));

const CardMediaStyled = styled(CardMedia)({
  height: 280,
});

const ContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const NewArrivals = () => {
  const navigate = useNavigate();
  const { addToCart, addToWishList } = useCart(); // Get functions from CartContext

  const newArrivals = [
    {
      id: 1,
      title: 'New Arrival 1',
      image: 'https://m.media-amazon.com/images/I/51DFbiAEHPL.jpg',
      description: 'Elegant and stylish watch with a sleek design and durable build.',
      brand: 'LuxuryBrand',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'New Arrival 2',
      image: 'https://tse3.mm.bing.net/th?id=OIP.MhexTeAoAmiwe2sb6c_g3QHaHa&pid=Api&P=0&h=180',
      description: 'High-quality headphones offering superb sound quality and comfort.',
      brand: 'AudioTech',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'New Arrival 3',
      image: 'https://3.bp.blogspot.com/-emJUPcUFt2c/VOb0rx1YemI/AAAAAAAAeac/Lnw5ctBdLGo/s1600/Nike-Mercurial-Superfly-CR7-Rare-Gold%2B(1).jpg',
      description: 'Top-tier soccer cleats designed for maximum speed and agility.',
      brand: 'Nike',
      rating: 4.7,
    },
    {
      id: 4,
      title: 'New Arrival 4',
      image: 'https://tse2.mm.bing.net/th?id=OIP.PI7AyELpa74UQiP9WOgQ-wHaGN&pid=Api&P=0&h=180',
      description: 'Stylish and comfortable sneakers with a modern design.',
      brand: 'Adidas',
      rating: 4.6,
    },
    {
      id: 5,
      title: 'New Arrival 5',
      image: 'https://tse2.mm.bing.net/th?id=OIP.f_SKWkWig2vEcPPTIRjjqQHaEj&pid=Api&P=0&h=180',
      description: 'Advanced fitness tracker with heart rate monitoring and GPS.',
      brand: 'FitTrack',
      rating: 4.4,
    },
    {
      id: 6,
      title: 'New Arrival 6',
      image: 'https://tse4.mm.bing.net/th?id=OIP.y8T3W2cIt5_cgvMD0Bc3BgHaFM&pid=Api&P=0&h=180',
      description: 'Ergonomic office chair designed for all-day comfort and support.',
      brand: 'OfficePro',
      rating: 4.6,
    },
    {
      id: 7,
      title: 'New Arrival 7',
      image: 'https://tse2.mm.bing.net/th?id=OIP.VeFsR0VS2olvPsm3W1Q3MAHaFS&pid=Api&P=0&h=180',
      description: 'Compact and powerful portable speaker with impressive sound quality.',
      brand: 'SoundWave',
      rating: 4.7,
    },
    {
      id: 8,
      title: 'New Arrival 8',
      image: 'https://tse1.mm.bing.net/th?id=OIP.KOZ_u_dmEjoijBY1yl-SEAHaEZ&pid=Api&P=0&h=180',
      description: 'Stylish and durable backpack with multiple compartments.',
      brand: 'TravelMate',
      rating: 4.5,
    },
  ];

  const handleAddToCart = (item) => {
    addToCart(item); // Add product to cart using the context hook
    alert(`${item.title} added to cart!`); // Optionally show a confirmation
  };

  const handleAddToWishList = (item) => {
    addToWishList(item); // Add product to wishlist using the context hook
    alert(`${item.title} added to wishlist!`); // Optionally show a confirmation
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
    navigate(-1); // Navigate to the previous page
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
            New Arrivals
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
        <Typography variant="h3" align="center" gutterBottom>
          Discover Our New Arrivals
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Check out the latest additions to our collection! From cutting-edge designs to innovative features, our new arrivals are sure to impress. Find the perfect fit for your needs and style.
        </Typography>
        <Grid container spacing={4}>
          {newArrivals.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardContainer>
                <CardMediaStyled image={item.image} title={item.title} />
                <ContentContainer>
                  <CardContent>
                    <Typography variant="h6" component="h2" align="center" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Brand: {item.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rating: {item.rating} ★
                    </Typography>
                  </CardContent>
                  <Box textAlign="center" padding={2} display="flex" flexDirection="column" gap={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      onClick={() => handleAddToWishList(item)}
                    >
                      Add to Wishlist
                    </Button>
                  </Box>
                </ContentContainer>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default NewArrivals;
