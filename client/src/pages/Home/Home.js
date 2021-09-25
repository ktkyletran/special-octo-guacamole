import React from 'react';
import InputField from '../../components/InputField/InputField';
// import Navbar from '../../components/Navbar/Navbar';
import { Button } from '@mui/material';
import Logo from '../../assets/Logo.png';
import './Home.css';


const Home = () => {
  return (
    <div className="main">
      {/* <Navbar /> */}
      <div className="brand">
        <img src={Logo} alt="NuBee Logo"></img>
        <p className="brand-desc">Tailored for those entering a new field of work</p>
      </div>
      <div className="main-search">
        <InputField width="350px" id="search" label="Search By Title" name="search" autoComplete="search" />
        <InputField width="150px" id="location" label="Location" name="location" autoComplete="location" />
        <Button variant="contained" className="search-btn" style={{ backgroundColor: "#FFF240", color: "black", fontWeight: "bold", width: "125px"}}>
          Search
        </Button>
      </div>
    </div>
  )
}

export default Home
