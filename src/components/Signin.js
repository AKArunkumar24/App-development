import React, { useState } from 'react';
import { Container, TextField, Button, Avatar, Typography, Box, Link, Snackbar, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup } from '../components/firebase'; // Adjust the import path

const theme = createTheme();

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    let errors = { email: '', password: '' };

    if (!form.email) {
      errors.email = 'Email Address is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Email Address is invalid';
      valid = false;
    }
    if (!form.password) {
      errors.password = 'Password is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }

    try {
      const response = await fetch(`http://localhost:8080/user/login/${form.email}/${form.password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
      if (response.ok) {
        const user = await response.json();
        console.log(user);
        console.log(form.password);
        console.log(form.email);
        if (user) {
          setSnackbarMessage('Sign In successful!');
          setOpenSnackbar(true);
          setTimeout(() => navigate('/'), 1500); // Redirect to homepage after success
        } else {
          setSnackbarMessage('Invalid email or password');
          setOpenSnackbar(true);
        }
      } else {
        setSnackbarMessage('Invalid email or password');
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error('Error connecting to server:', error);
      setSnackbarMessage('Error connecting to server');
      setOpenSnackbar(true);
    }
  };

  const handleSignUpClick = () => {
    navigate('/re'); // Programmatic navigation to RegisterPage
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Handle the user object as needed
      console.log('Google Sign In successful!', user);
      setSnackbarMessage('Google Sign In successful!');
      setOpenSnackbar(true);
      setTimeout(() => navigate('/'), 1500); // Redirect to homepage after success
    } catch (error) {
      console.error('Error with Google Sign In:', error);
      setSnackbarMessage('Error with Google Sign In');
      setOpenSnackbar(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'background.paper',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={form.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={form.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 2, mb: 2 }}
              onClick={handleGoogleSignIn}
            >
              Sign In with Google
            </Button>
            <Link
              onClick={handleSignUpClick}
              variant="body2"
              sx={{ cursor: 'pointer', display: 'block', textAlign: 'center' }}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
          >
            <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarMessage.includes('successful') ? 'success' : 'error'}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
