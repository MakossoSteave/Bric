import * as React from 'react';
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import { useEffect , useState} from "react";
import Alert from '@mui/material/Alert';
import { profile } from 'console';







const welcome = () => {
  const [name , setName]= useState('')
  const [email , setEmail]= useState('')
  const [succes, setSucces]=useState(false)
  const [open, setOpen] = React.useState(true);
  
  useEffect(() => {
    const profileName = JSON.parse(localStorage.getItem('username') || '{}');
    setName(profileName)
    if(profileName !=''){
      setSucces(true)
    }
    
 });
 const SuccesMessage = succes && <Alert  severity="success">
 {name}
</Alert>


  return(
  <div>
    {SuccesMessage}
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