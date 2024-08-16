import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CartProvider } from './contexts/CartContext'; // Import the CartProvider
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import RegisterPage from './components/RegistrationPage';
import WishList from './components/WishList';
import ChatWithUs from './components/ChatWithUs';
import Men from './components/Men';
import Jerseys from './components/Jerseys';
import Kids from './components/Kids';
import Cart from './components/Cart';
import Shoes from './components/Shoes';
import CricketBats from './components/CricketBats';
import CricketAccessories from './components/CricketAccessories';
import SportsAccessories from './components/SportsAccessories';
import ExploreNow from './components/ExploreNow';
import GymEquipment from './components/GymEquipment';
import NewArrivals from './components/NewArrivals';
import MyStore from './components/MyStore';
import Payment from './components/Payment';
import CustomerReviews from './components/CustomerReviews';
import Profile from './components/Profile';
import theme from './components/Theme';
import RegistrationPage from './components/Registration';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider> {/* Wrap your component tree with CartProvider */}
        <BrowserRouter> {/* Wrap the routing configuration with BrowserRouter */}
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/men' element={<Men />} />
            <Route path='/jerseys' element={<Jerseys />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/wish-list' element={<WishList />} />
            <Route path='/shoes' element={<Shoes />} />
            <Route path='/cricket-bats' element={<CricketBats />} />
            <Route path='/cricket-accessories' element={<CricketAccessories />} />
            <Route path='/sports-accessories' element={<SportsAccessories />} />
            <Route path='/gym-equipment' element={<GymEquipment />} />
            <Route path='/explore-now' element={<ExploreNow />} />
            <Route path='/new-arrivals' element={<NewArrivals />} />
            <Route path="/my-store" element={<MyStore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Payment />} />
            <Route path='/customer-reviews' element={<CustomerReviews />} />
            <Route path='/chat-with-us' element={<ChatWithUs />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/si' element={<Signin />} />
            <Route path='/re' element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;