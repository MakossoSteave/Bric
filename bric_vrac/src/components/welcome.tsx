import * as React from 'react';
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import { useEffect , useState} from "react";




const welcome = () => {
  const [name , setName]= useState('')
  useEffect(() => {
    let profile = JSON.parse(localStorage.getItem('username') || '{}');
    console.log(profile)
    setName(profile)
 });


  return(
  <div>
       <h1 style={myStyle.Titre}> Welcome !!! {name}</h1>
       <img src={logo} alt=""  style={myStyle.image}/>
       <div>
          <Link to='/'>
            <Button variant="outlined" color="error">
            deconnection
            </Button>
          </Link>
       </div>
      
  </div>
  )
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
    width: 200,
    paddingTop:20
}
  
};

export default welcome;