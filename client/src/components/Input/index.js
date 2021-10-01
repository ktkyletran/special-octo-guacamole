import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = ({ half, name, label, handleChange, autoFocus, type, handlePassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name} 
        variant="outlined"
        required
        fullWidth 
        label={label} 
        handleChange={handleChange} 
        autoFocus={autoFocus}
        type={type}
        inputProps={ name==='password' && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handlePassword}>
                { type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon /> }
              </IconButton>
            </InputAdornment>
          )}
        } 
      />
    </Grid>
  )
};

export default Input;
