import React, { Component } from "react";
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


export default class welcome extends Component {
   
  render() 
  
  {
    
    return (
      <div style={myStyle.box}>
           <h1 style={myStyle.Titre}> Welcome !!!</h1>
       <img src={logo} alt="" srcset="" />
       <Link to='/'>
        <Button variant="outlined" color="error">
        deconnection
        </Button>
       </Link>
      
      </div>
    );
  }
}

const myStyle = {
  button:{
    top: "10px"
  },
  Titre:{
    color: "#ff7f00",
    fontSize:"50px"
  },
  box:{
    alignItems:'center'
  }
  
};