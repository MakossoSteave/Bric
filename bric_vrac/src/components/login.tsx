import * as React from 'react';
import TextField from '@mui/material/TextField';
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import {Users } from '../model/user'


const Login = () => (
  

  <form
  onSubmit={(e: React.SyntheticEvent) => {
    const createHistory = require("history").createBrowserHistory;

    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    const username = target.username.value; 
    const password = target.password.value; 
    if( username != '' && password != ''){
      let result = Users.filter(t=>t.username === username && t.password === password);
    if(result[0]!= null){
      console.log(result[0])
      console.log("bienvenue")
      localStorage.setItem('username' ,JSON.stringify(username));
      let history = createHistory();
        history.push('/welcome');
        let pathUrl = window.location.href;
        window.location.href = pathUrl;
    }else{
      alert("username ou password incorrect ")
    }
  }else{
    alert("veuilliez à remplir tous les champs ")
  }
  }}
>    
  <Link to="/" style={{textDecoration: 'none'}}>
  <img src={logo} alt=""  />
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
  <div style={myStyle.button}>
  <Fab variant="extended" type="submit" >
           Connection
  </Fab>
  </div>
</form>
)
const myStyle = {
  button:{
    paddingTop: '10px'
  },
  Titre:{
    color: "#ff7f00",
    fontSize:"50px"
  },
  div:{
      paddingTop: '5px'
  },
 
}

export default Login;