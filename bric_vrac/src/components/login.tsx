import React, {useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import {Users } from '../model/user'

const Login =() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


const submitValue = () => {
    const data = {
        'username' : username,
        'password' : password,
    }
    if(data.username !='' && data.password !=''){
      const createHistory = require("history").createBrowserHistory;
      let result = Users.filter(t=>t.username === data.username && t.password === data.password);
          if(result[0]!= null){
            localStorage.setItem('username' ,JSON.stringify(data.username));
            const history = createHistory();
              history.push('/welcome');
            const pathUrl = window.location.href;
              window.location.href = pathUrl;
    }else{
      alert("les informations reçus sont incorrect")
    }
  }else{
    alert("veuilliez remplir tous les champs")
  }
}

return(
    <form onSubmit={submitValue}>
            <Link to="/" >
                  <img src={logo} alt="logo bric à vrac"style={myStyle.image}/>
            </Link>
        <div>
            <TextField  id="outlined-required" label="username"
            onChange={e => setUsername(e.target.value)}  />
        </div>
        <div style={myStyle.div}>
            <TextField id="outlined-password-input"label="Password"type="password"
              onChange={e => setPassword(e.target.value)}/>
        </div>
        <div style={myStyle.button}>
            <Fab variant="extended" type="submit" >
                    Connection
            </Fab>
        </div>
    </form>
    )
}
const myStyle = {
  button:{
    paddingTop:"5px"
  },
  Titre:{
    color: "#ff7f00",
    fontSize:"50px"
  },
  div:{
      paddingTop: '5px'
  },
  image:{
    weight:300,
    width:500
}
}

export default Login