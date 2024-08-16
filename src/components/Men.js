import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box, IconButton } from '@mui/material';
import { ShoppingCart, Favorite, Help, ArrowBack } from '@mui/icons-material';
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

const Men = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the custom hook to get addToCart function
  const { addToWishList } = useWishList(); // Use the custom hook to get addToWishList function

  // Example products (replace with actual data or fetch from an API)
  const products = [
    { id: 1, name: 'Men\'s Running Shoes Adidas', image: 'https://tse4.mm.bing.net/th?id=OIP.kqXix0CEoKjrutppY4NGLQHaHa&pid=Api&P=0&h=180', price: '$120', description: 'Comfortable running shoes with a sleek design.', rating: 4.5 },
    { id: 2, name: 'Men\'s Sports Jacket', image: 'https://tse4.mm.bing.net/th?id=OIP.nIK91GUc43NWpVoE9WWBvQAAAA&pid=Api&P=0&h=180', price: '$80', description: 'Stylish sports jacket with breathable fabric.', rating: 4.0 },
    { id: 3, name: 'Men\'s Training Pants', image: 'https://tse3.mm.bing.net/th?id=OIP.x_tnDWaflFS41wi3xTp5fwHaJQ&pid=Api&P=0&h=180', price: '$60', description: 'Flexible training pants for optimal movement.', rating: 4.3 },
    { id: 4, name: 'Men\'s Running Shoes Nike', image: 'https://tse3.mm.bing.net/th?id=OIP.Fe4qZfZ1KwwDirwGsumOeQHaG1&pid=Api&P=0&h=180', price: '$120', description: 'High-performance running shoes with advanced cushioning.', rating: 4.7 },
    { id: 5, name: 'Men\'s Sports Jacket', image: 'https://tse3.mm.bing.net/th?id=OIP.F_KcMzS87uLEXyrvVW2aPgHaJo&pid=Api&P=0&h=180', price: '$70', description: 'Durable sports jacket ideal for outdoor activities.', rating: 4.2 },
    { id: 6, name: 'Men\'s Training Jacket & Pants', image: 'https://i.factcool.com/catalog/products/63/63809222_xxl.jpg?impolicy=1400x1400', price: '$60', description: 'Matching jacket and pants set for training.', rating: 4.6 },
    { id: 7, name: 'Men\'s Pullover Hoodie', image: 'https://tse2.mm.bing.net/th?id=OIP.JkV7gTO6ob8Fpy95ZDlyAQHaHa&pid=Api&P=0&h=180', price: '$130', description: 'Comfortable pullover hoodie with a modern design.', rating: 4.8 },
    { id: 8, name: 'Men\'s Training Jacket & Pants', image: 'https://fshop.oss-accelerate.aliyuncs.com/20210428210031392091652.png', price: '$80', description: 'High-quality training jacket and pants set.', rating: 4.4 },
    { id: 9, name: 'Men\'s Athletic Wear', image: 'https://tse1.mm.bing.net/th?id=OIP.oGLD-UPFL4MSznF87hL8mgHaK9&pid=Api&P=0&h=180', price: '$60', description: 'Versatile athletic wear for various sports.', rating: 4.1 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  const handleAddToWishList = (product) => {
    addToWishList(product);
    console.log(`Added to wishlist: ${product.name}`);
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
      {/* AppBar with navigation */}
      <AppBar position="static" style={{ backgroundColor: '#808080' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBackClick} style={{ marginRight: '16px' }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Men Sportswear
          </Typography>
          <StyledButton color="inherit" onClick={() => navigate('/signin')}>
            Sign In
          </StyledButton>
          <StyledButton color="inherit" startIcon={<ShoppingCart />} onClick={handleCartClick}>
            Cart
          </StyledButton>
          <StyledButton color="inherit" startIcon={<Favorite />} onClick={handleWishListClick}>
            Wish List
          </StyledButton>
          <StyledButton color="inherit" startIcon={<Help />} onClick={handleChatClick}>
            Chat With Us
          </StyledButton>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container maxWidth="lg" style={{ marginTop: '32px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Men’s Sportswear
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Discover our exclusive range of sportswear designed for comfort and style. From performance-driven running shoes to casual jackets, find your perfect fit here.
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
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
                    onClick={() => handleAddToCart(product)}
                    startIcon={<ShoppingCart />}
                  >
                    Add to Cart
                  </StyledButton>
                  <StyledButton
                    variant="contained"
                    color="secondary"
                    onClick={() => handleAddToWishList(product)}
                    startIcon={<Favorite />}
                  >
                    Add to Wishlist
                  </StyledButton>
                </CardContentStyled>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Men;
