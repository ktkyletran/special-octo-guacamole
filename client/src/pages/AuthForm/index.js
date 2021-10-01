import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from '../../components/Input';
import './styles.css'

const AuthForm = () => {
  const [password, setPassword] = useState(false)
  const [signUp, setSignUp] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    e.preventDefault();
  }

  const switchForms = () => {
    setSignUp((prevState) => !prevState);
    handlePassword(false)
  }

  const handlePassword = () => setPassword((prevState) => !prevState)

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="paper" elevation={6}>
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" style={{ marginBottom: '1rem' }}>
          {signUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form className="form" onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            { signUp && (
              <>
                <Input name="firstName" label="First name" handleChange={handleChange} autoFocus half/>
                <Input name="lastName" label="Last name" handleChange={handleChange} half/>
              </>
            )}
              <Input name="email" label="Email address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} handlePassword={handlePassword} type={password ? 'text' : 'password'} />
              { signUp && <Input name="confirmPassword" label="Confirm password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button variant="contained" type="submit" color="primary" fullWidth style={{ marginTop: '1rem' }}>
              { signUp ? 'Sign Up' : 'Sign In' }
          </Button>
        </form>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button onClick={switchForms} style={{ fontSize: '12px', marginLeft: '-5px', marginTop: '5px' }} disableRipple>
              { signUp ? 'Already have an account? Sign in' : "Don't have an account yet?" }
            </Button>
          </Grid>
        </Grid>
      </Paper>      
    </Container>
  )
}

export default AuthForm
