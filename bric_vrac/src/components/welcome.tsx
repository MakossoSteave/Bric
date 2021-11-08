import * as React from 'react';
import TextField from '@mui/material/TextField';
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';



const welcome = () => (
  <div>
    <h1 style={myStyle.Titre}> Welcome !!! </h1>
       <img src={logo} alt=""  style={myStyle.image}/>
       <br></br>
       <Link to='/'>
        <Button variant="outlined" color="error">
        deconnection
        </Button>
       </Link>
  </div>
)
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

export default welcome;