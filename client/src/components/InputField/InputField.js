import React from 'react';
import TextField from '@mui/material/TextField';


const InputField = ({id, label, name, autoComplete, width}) => {
  
  return (
    <div>
      <TextField
        id={id}
        label={label}
        name={name}
        autoComplete={autoComplete}
        InputProps={{
          style: { width: width }
        }}
      />
    </div>
  );
};

export default InputField;