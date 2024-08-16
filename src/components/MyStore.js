import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const StoreInfoContainer = styled(Container)({
  marginTop: '32px',
  textAlign: 'center',
});

const InfoBox = styled(Box)({
  marginTop: '16px',
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  textAlign: 'left',
  width: '100%',
  maxWidth: '600px',
  margin: '16px auto',
});

const StoreInfo = () => {
  const [city, setCity] = useState('');
  const [mapCenter, setMapCenter] = useState([40.7128, -74.0060]); // Default to New York
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: city,
          format: 'json',
        },
      });

      const result = response.data[0];
      if (result) {
        setMapCenter([result.lat, result.lon]);
      } else {
        setError('City not found. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <StoreInfoContainer maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Our Store Locations
      </Typography>

      <InfoBox>
        <Typography variant="h6">Main Store</Typography>
        <Typography>123 Main Street, City, Country</Typography>
        <Typography>Phone: (123) 456-7890</Typography>
        <Typography>Email: info@store.com</Typography>
      </InfoBox>

      <InfoBox>
        <Typography variant="h6">Nearby Location 1</Typography>
        <Typography>456 Nearby Lane, City, Country</Typography>
        <Typography>Phone: (234) 567-8901</Typography>
      </InfoBox>

      {/* Search Bar */}
      <Box display="flex" flexDirection="column" alignItems="center" marginTop="32px">
        <TextField
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ marginBottom: '16px', width: '300px' }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Search'}
        </Button>
      </Box>

      {error && (
        <Box marginTop="16px" width="100%" maxWidth="600px" margin="16px auto">
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {/* Map */}
      <Box marginTop="24px" height="400px">
        <MapContainer center={mapCenter} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapCenter} />
        </MapContainer>
      </Box>
    </StoreInfoContainer>
  );
};

export default StoreInfo;
