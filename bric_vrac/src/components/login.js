import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { logo } from '../constant/global';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';




export default class home extends Component {

  

 
  render() {
    return (
      <div>
           <h1 style={myStyle.Titre}> Login</h1>
       <img src={logo} alt="" srcset="" />
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="identifiant" variant="standard" />
      <TextField id="standard-basic"  type="password" label="password" variant="standard" />
      <Button variant="contained" color="success" style={myStyle.button} >connection</Button>
        
    </Box>
      </div>
    

    );
  }
}

const myStyle = {
  button:{
    top: "10px"
  },
  Titre:{
    color: "#dbc091",
    fontSize:"50px"
  }
  
};