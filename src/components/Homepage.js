import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, Box, Link as MuiLink, Divider } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, ShoppingCart, Facebook, Twitter, Instagram, LinkedIn, Chat, Store } from '@mui/icons-material';
import { display, styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { getAccountBalance, sendMessage } from '../geminiService';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInContainer = styled(Container)`
  animation: ${fadeIn} 1.5s ease-in;
  padding-top: 20px;
`;

const CardContainer = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const CardMediaStyled = styled(CardMedia)({
  height: 250,
});

const FeaturedCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  position: 'relative',
  height: 400,
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const FeaturedCardMedia = styled(CardMedia)({
  height: '100%',
  objectFit: 'cover',
});

const FeaturedCardContent = styled(CardContent)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '16px',
  background: 'rgba(0,0,0,0.5)',
  color: 'white',
  textAlign: 'center',
});

const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6),
  marginTop: theme.spacing(4),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const FooterGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const FooterLink = styled(MuiLink)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SupportIcon = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Homepage = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(null);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const balanceData = await getAccountBalance();
        setBalance(balanceData);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  const categories = [
    { title: 'Men', image: 'https://www.tennisnuts.com/images/product/full/708097-010.jpg', route: '/men' },
    { title: 'Jerseys', image: 'https://m.media-amazon.com/images/I/51Zsv-sDHXL.jpg', route: '/jerseys' },
    { title: 'Kids', image: 'https://5.imimg.com/data5/TB/CJ/MY-24014740/kids-sports-wear-500x500.jpg', route: '/kids' },
    { title: 'Shoes', image: 'https://guhaha.com/wp-content/uploads/2020/06/He5f00c726d3745e7bdd33fca39d3cea9m-1.jpg', route: '/shoes' },
    { title: 'Cricket Bats', image: 'https://www.sportscounty.com/wp-content/uploads/2020/04/best-cricket-bats-in-the-world.jpg', route: '/cricket-bats' },
    { title: 'Cricket Accessories', image: 'https://cdn2.bigcommerce.com/server1600/2ff27/products/800/images/3292/combo__17597.1580073314.1280.1280.jpg?c=2', route: '/cricket-accessories' },
    { title: 'Sports Accessories', image: 'https://winnerssportswear.com/wp-content/uploads/2020/02/Sporting-Equipment-1.jpg', route: '/sports-accessories' },
    { title: 'Gym Equipment', image: 'https://images-na.ssl-images-amazon.com/images/I/81XNzjmXi%2BL._SL1500_.jpg', route: '/gym-equipment' },
  ];

  const carouselImages = [
    'https://static.vecteezy.com/system/resources/previews/011/603/835/non_2x/cricket-sport-equipments-bat-ball-gloves-on-green-lawn-blurred-green-grass-cricket-field-concept-for-using-cricket-sport-equipment-in-training-free-photo.jpg',
    'https://sportsaddicted.in/wp-content/uploads/2023/02/IPL-Winners-Team-all.png',
    'https://www.liveabout.com/thmb/PF5uxLcJcAnTDl55VUPfWU-X4K4=/1500x786/filters:fill(auto,1)/GettyImages-641856992-5bb5018346e0fb002653a98f.jpg',
    'https://wallpapercave.com/wp/wp4012091.jpg',
  ];

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  const handleExploreNowClick = () => {
    navigate('/explore-now');
  };

  const handleNewArrivalsClick = () => {
    navigate('/new-arrivals');
  };

  const handleCustomerReviewsClick = () => {
    navigate('/customer-reviews');
  };

  const handleSupportClick = () => {
    setChatbotOpen(!chatbotOpen);
  };

  const handleSendMessage = async (message) => {
    try {
      const response = await sendMessage(message);
      setChatMessages([...chatMessages, { text: message, type: 'user' }, { text: response.choices[0].text, type: 'bot' }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const CarouselImage = styled('img')({
    width: '100%',
    height: '400px', // Adjust the height as needed
    objectFit: 'cover',
  });
  

  return (
    <div>
      {/* AppBar with navigation */}
      <AppBar position="static" style={{ backgroundColor: '#808080' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            SportsLand
          </Typography>
          <Button color="inherit" onClick={() => navigate('/my-store')} startIcon={<Store />}>
            My Store
          </Button>
          <Button color="inherit" onClick={() => navigate('/si')} startIcon={<AccountCircle />}>
            Sign In
          </Button>
          <Button color="inherit" startIcon={<ShoppingCart />} onClick={handleCartClick}>
            Cart
          </Button>
          <Button color="inherit" startIcon={<AccountCircle />} onClick={handleProfileClick}>
            Profile
          </Button>
        </Toolbar>
      </AppBar>

       {/* Slick carousel */}
    <Slider {...carouselSettings}>
      {carouselImages.map((image, index) => (
        <div key={index}>
          <CarouselImage src={image} alt={`carousel-${index}`} />
        </div>
      ))}
    </Slider>

      {/* Main content */}
      <FadeInContainer maxWidth="lg" mt={4}>
        {/* Promotion section */}
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Enjoy Free Shipping on Orders Above ₹999
          </Typography>
          <Divider style={{ margin: '16px 0' }} />
        </Container>

        {/* Categories grid */}
        <Grid container spacing={3} style={{ marginTop: '16px' }}>
          {categories.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <CardContainer onClick={() => handleCategoryClick(item.route)}>
                <CardMediaStyled image={item.image} title={item.title} />
                <CardContent>
                  <Typography variant="h6" component="h2" align="center">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardContainer>
            </Grid>
          ))}
        </Grid>

        {/* Featured section */}
        <Container>
          <FeaturedCard>
            <FeaturedCardMedia
              component="img"
              alt="Featured"
              height="400"
              image="https://www.vykingship.com/wp-content/uploads/2021/06/Basic-Sports-Accessories-You-Should-Have-for-Sporting-Activities-980x551.jpg"
              title="Featured"
            />
            <FeaturedCardContent>
              <Typography variant="h5" component="div">
                Discover Our Latest Collection
              </Typography>
              <Button variant="contained" color="primary" onClick={handleExploreNowClick} style={{ marginTop: '8px' }}>
                Explore Now
              </Button>
            </FeaturedCardContent>
          </FeaturedCard>
        </Container>

        {/* New Arrivals section */}
        <Container>
          <CardContainer>
            <CardContent>
              <Typography variant="h5" component="div" align="center">
                Check Out Our New Arrivals
              </Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button variant="contained" color="secondary" onClick={handleNewArrivalsClick}>
                  New Arrivals
                </Button>
              </Box>
            </CardContent>
          </CardContainer>
        </Container>

        {/* Customer Reviews section */}
        <Container>
          <CardContainer>
            <CardContent>
              <Typography variant="h5" component="div" align="center">
                See What Our Customers Are Saying
              </Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button variant="contained" color="secondary" onClick={handleCustomerReviewsClick}>
                  Customer Reviews
                </Button>
              </Box>
            </CardContent>
          </CardContainer>
        </Container>
      </FadeInContainer>

      {/* Footer */}
      
      <Footer>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <FooterGrid item xs={6} sm={3}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Quick Links
              </Typography>
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </FooterGrid>
            <FooterGrid item xs={6} sm={3}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Categories
              </Typography>
              <FooterLink href="/men">Men</FooterLink>
              <FooterLink href="/jerseys">Jerseys</FooterLink>
              <FooterLink href="/kids">Kids</FooterLink>
              <FooterLink href="/shoes">Shoes</FooterLink>
            </FooterGrid>
            <FooterGrid item xs={6} sm={3}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Contact
              </Typography>
              <Typography>123 SportsLand St.</Typography>
              <Typography>City, State, ZIP</Typography>
              <Typography>Email: info@sportsland.com</Typography>
              <Typography>Phone: (123) 456-7890</Typography>
            </FooterGrid>
            <FooterGrid item xs={6} sm={3}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Follow Us

              </Typography>
              <div style={{display:'flex'}}>

              <FooterLink href="https://www.facebook.com">
                <Facebook />
              </FooterLink>
              <FooterLink href="https://www.twitter.com">
                <Twitter />
              </FooterLink>
              <FooterLink href="https://www.instagram.com">
                <Instagram />
              </FooterLink>
              <FooterLink href="https://www.linkedin.com">
                <LinkedIn />
              </FooterLink>
              </div>
            </FooterGrid>
          </Grid>
        </Container>
      </Footer>
     

      {/* Support Icon */}
      <SupportIcon onClick={handleSupportClick}>
        <Chat />
      </SupportIcon>
    </div>
  );
};

export default Homepage;
