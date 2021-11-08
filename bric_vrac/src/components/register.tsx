import * as React from 'react';
import TextField from '@mui/material/TextField';
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import {Users } from '../model/user'



const Register= () => (
  

  <form
  onSubmit={(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
      email: {value :string}
    };

    const username = target.username.value; 
    const password = target.password.value; 
    const email = target.password.value; 
   


    const user_valid ={
        "id":1,
        "email":email,
        "username":username,
        "password":password,
        "userToken":"abbc"
    }

    if(username != '' && password != '' && email != ''){
        Users.push(user_valid)
  console.log(Users)
  }
    console.log(username)
    console.log(password)
  }}
>

    
  <Link to="/" style={{textDecoration: 'none'}}>
  <img src={logo} alt=""  style={myStyle.image} />
  </Link>

  <div>
    <TextField
        
          id="outlined-required"
          label="username"
          name="username"
        />
  </div>
  <div style={myStyle.div}>
  <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
        />
  </div>
  <div style={myStyle.div}>
  <TextField
          id="outlined-email-input"
          label="email"
          type="email"
          name="email"
        />
  </div>
  <div style={myStyle.div}>
  <Fab variant="extended" type="submit" style={myStyle.div}>
           Connection
  </Fab>
  </div>
</form>
)
const myStyle = {
    button:{
    },
    Titre:{
      color: "#ff7f00",
      fontSize:"50px"
    },
    div:{
        paddingTop: '5px'
    },
    image:{
      weight:100,
      width: 200
  }
}

export default Register;