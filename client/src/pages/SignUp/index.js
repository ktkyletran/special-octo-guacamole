import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="left" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        NuBee
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <div component="main" className="login-container"> 
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left'
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container columnSpacing="1rem">
              <Grid item xs={6} columnSpacing="50px">
                <TextField
                  margin="normal"
                  required
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6} column="2">
                <TextField
                  margin="normal"
                  required
                  id="last"
                  label="Last Name"
                  name="last"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2, backgroundColor: '#fff240', color: 'black', fontWeight: 'bold', '&:hover': { backgroundColor: '#353535', color: 'white' } }}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {"Already have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 6, mb: 4 }} />
      </div>
  );
}