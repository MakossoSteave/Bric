import React, { Component } from "react";
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";



export default class welcome extends Component {

  
   constructor(props){
    super(props);
    this.state ={
      username:""
    }

   }
   componentDidMount(){
    let nom = localStorage.getItem("username");
    console.log(nom)
    this.setState({
      username: nom
    })
  }
  render() 
  
  { 
   
    return (
      <div>
           <h1 style={myStyle.Titre}> Welcome !!! {this.state.username}</h1>
       <img src={logo} alt="" srcset="" style={myStyle.image}/>
       <br></br>
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
 
  image:{
    weight:100,
    width: 200
}
  
};