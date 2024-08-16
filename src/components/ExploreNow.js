import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { ShoppingCart, Favorite, Help, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart

const ExploreNow = () => {
  const navigate = useNavigate();
  const { addToCart, addToWishList } = useCart(); // Get the addToCart and addToWishList functions from CartContext

  const products = [
    {
      id: 1,
      name: 'Adidas Predator Soccer Shoes',
      image: 'https://images.prodirectsport.com/ProductImages/Main/258125_Main_Thumb_1043872.jpg',
      price: '$220',
      description: 'High-performance soccer shoes designed for agility and control on the field.',
      brand: 'Adidas',
      rating: 4.7,
    },
    {
      id: 2,
      name: 'Wilson Pro Staff Tennis Racket',
      image: 'https://media.newitts.com/cdn/images/products/new-design/800x800/it096946.jpg',
      price: '$250',
      description: 'Professional tennis racket offering superior control and precision.',
      brand: 'Wilson',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Head Graphene 360+ Speed Tennis Racket',
      image: 'https://www.tennisexpress.com/prodimages/alt_images/234000-x.jpg',
      price: '$220',
      description: 'Advanced tennis racket with Graphene 360+ technology for enhanced speed.',
      brand: 'Head',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Nike Air Zoom Vapor X Tennis Shoes',
      image: 'https://www.tennisnuts.com/images/product/full/Nike-Air-Vapor-Advantage-Mens-Tennis-Shoe-599359_414_E_PREM.jpg',
      price: '$180',
      description: 'Tennis shoes designed for comfort and durability on the court.',
      brand: 'Nike',
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Babolat Pure Drive Tennis Racket',
      image: 'https://tse3.mm.bing.net/th?id=OIP.jCK5mygI_KTz6NIerNByegHaHa&pid=Api&P=0&h=180',
      price: '$230',
      description: 'Powerful tennis racket for players seeking a balance of power and control.',
      brand: 'Babolat',
      rating: 4.7,
    },
    {
      id: 6,
      name: 'Asics Gel-Kayano 27 Running Shoes',
      image: 'https://tse2.mm.bing.net/th?id=OIP.IsoFeWJpujT-XVnQ1_fUEQHaHa&pid=Api&P=0&h=180',
      price: '$160',
      description: 'Running shoes with superior cushioning and support for long-distance runs.',
      brand: 'Asics',
      rating: 4.6,
    },
    {
      id: 7,
      name: 'New Balance Fresh Foam 1080v10',
      image: 'https://tse4.mm.bing.net/th?id=OIP.noXZ6hKetVwRdSkc9TAoxAAAAA&pid=Api&P=0&h=180',
      price: '$150',
      description: 'Comfortable running shoes featuring Fresh Foam cushioning for a smooth ride.',
      brand: 'New Balance',
      rating: 4.4,
    },
    {
      id: 8,
      name: 'Puma RS-X Softcase Sneakers',
      image: 'https://cdna.lystit.com/photos/puma/8d7a8ce4/puma-04-Rs-x-Softcase-Mens-Sneakers.jpeg',
      price: '$140',
      description: 'Stylish sneakers with a cushioned sole and sleek design.',
      brand: 'Puma',
      rating: 4.3,
    },
  ];


  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishList = (product) => {
    addToWishList(product);
    alert(`${product.name} added to wish list!`);
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
    navigate(-1);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#808080' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBackClick}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Explore Now
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

      <Container style={{ marginTop: '32px' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Explore Now
        </Typography>
        <Typography variant="body1" gutterBottom>
          Discover exciting new products and adventures from around the world!
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Brand: {product.brand}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating} ★
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      onClick={() => handleAddToWishList(product)}
                      style={{ marginTop: '8px' }}
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

export default ExploreNow;
