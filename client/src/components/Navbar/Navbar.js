import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import BeeLogo from '../../assets/Bee.svg';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', paddingTop: '0.75rem' }}>
      <Toolbar>
        <Link to="/" className="logo-btn">
          <img src={BeeLogo} className="navbar-logo" alt="NuBee logo"></img>
        </Link>
        <Button 
          href="/signup" 
          className="nav-btn" 
          variant="contained"
          sx={{
            fontSize: '0.75rem',
            backgroundColor: '#353535',
            color: 'white',
            fontWeight: '900',
            marginRight: '1rem',
            '&:hover': {
              backgroundColor: '#FFF240',
              color: 'black'
            }
          }}
        >
          Sign up
        </Button>
        <Link to="/signin" className="nav-link">
          Sign in
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;