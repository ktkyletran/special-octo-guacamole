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
        <Button href="/" disableRipple disableFocusRipple disableElevation variant="string" className="logo-btn">
          <img src={BeeLogo} className="navbar-logo"></img>
        </Button>
        <Button 
          href="/login" 
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
          Sign in
        </Button>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;