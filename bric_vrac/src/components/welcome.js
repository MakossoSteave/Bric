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




export default class welcome extends Component {
   
  render() 
  
  {
    
    return (
      <div>
           <h1 style={myStyle.Titre}> Welcome !!!</h1>
       <img src={logo} alt="" srcset="" />
      
      </div>
    

    );
  }
}

const myStyle = {
  button:{
    top: "10px"
  },
  Titre:{
    color: "#a8a399",
    fontSize:"50px"
  }
  
};