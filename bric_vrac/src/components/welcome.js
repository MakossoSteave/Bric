import React, { Component } from "react";
import { logo } from '../constant/global';

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