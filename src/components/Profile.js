import React, { useState } from 'react';
import { Container, Typography, Box, Avatar, Card, CardContent, Grid, Button, Divider, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const PageBackground = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default, // Background color for the whole page
  minHeight: '100vh',
  padding: theme.spacing(2),
}));

const ProfileContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper, // Background color for the profile container
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const ProfileAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  marginBottom: '16px',
});

const SectionTitle = styled(Typography)({
  marginBottom: '16px',
  fontWeight: 600,
});

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Spidey!',
    email: 'Spidey.Pete@gmail.com',
    address: '123 Main St, 1st Broadway, NY',
    phone: '(123) 456-7890',
    avatar: 'https://wallup.net/wp-content/uploads/2019/09/339312-amazing-spider-man-2-action-adventure-fantasy-comics-movie-spider-spiderman-marvel-superhero-49.jpg',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleViewOrdersClick = () => {
    navigate('/cart'); // Navigate to the Cart page
  };

  return (
    <PageBackground>
      <ProfileContainer maxWidth="md">
        <Box display="flex" flexDirection="column" alignItems="center">
          <ProfileAvatar
            alt="Profile Picture"
            src={profile.avatar}
          />
          <Typography variant="h4" gutterBottom>
            {isEditing ? (
              <TextField
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                fullWidth
              />
            ) : (
              profile.name
            )}
          </Typography>
          {isEditing && (
            <Button
              variant="contained"
              color="primary"
              component="label"
              style={{ marginBottom: '16px' }}
            >
              Change Profile Picture
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleAvatarChange}
              />
            </Button>
          )}
          <Button variant="contained" color="primary" onClick={handleEditClick}>
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </Box>

        <Grid container spacing={3} style={{ marginTop: '24px' }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <SectionTitle variant="h6">Personal Information</SectionTitle>
                {isEditing ? (
                  <>
                    <TextField
                      name="email"
                      label="Email"
                      value={profile.email}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="address"
                      label="Address"
                      value={profile.address}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="phone"
                      label="Phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                    />
                  </>
                ) : (
                  <>
                    <Typography variant="body1" color="textSecondary" paragraph>
                      <strong>Email:</strong> {profile.email}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                      <strong>Address:</strong> {profile.address}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                      <strong>Phone:</strong> {profile.phone}
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <SectionTitle variant="h6">Recent Orders</SectionTitle>
                <Typography variant="body1" color="textSecondary" paragraph>
                  <strong>Order #12345:</strong> Ordered on July 15, 2024 - Total: $120.00
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  <strong>Order #12346:</strong> Ordered on August 1, 2024 - Total: $75.00
                </Typography>
                <Button variant="outlined" color="primary" onClick={handleViewOrdersClick}>
                  View All Orders
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider style={{ margin: '24px 0' }} />

        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="secondary" style={{ marginTop: '16px' }}>
            Delete Account
          </Button>
        </Box>
      </ProfileContainer>
    </PageBackground>
  );
};

export default Profile;
