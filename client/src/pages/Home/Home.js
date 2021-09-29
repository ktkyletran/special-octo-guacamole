import React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Logo from '../../assets/Logo.png';
import './Home.css';


const Home = () => {
  return (
    <div className="main">
      <div className="brand">
        <img src={Logo} alt="NuBee Logo"></img>
        <p className="brand-desc">Tailored for those entering a new field of work</p>
      </div>
      <div className="main-search">
        <TextField id="search" label="Search By Title" name="search" autoComplete="search" style={{ width: '350px' }} size="medium" />
        <TextField id="location" label="Location" name="location" autoComplete="location" style={{ width: '200px' }} size="medium" />
        <Button variant="contained" className="search-btn" style={{ backgroundColor: "#FFF240", color: "black", fontWeight: "bold", width: "125px"}} size="medium">
          Search
        </Button>
      </div>
    </div>
  )
}

export default Home
