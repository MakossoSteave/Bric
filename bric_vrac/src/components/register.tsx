import React, {useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import {Users } from '../model/user'

const Register =() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


const submitValue = (event :React.ChangeEvent<any>) => {
  event.preventDefault();
console.log()
    const data = {
        'username' : username,
        'password' : password,
        'email' :email
    }
    if(data.username != '' && data.password !='' && data.email != ''){
      const user_valid ={
        "id":1,
        "email":data.email,
        "username":data.username,
        "password":data.password,
        "userToken":"abbc"
      }
      Users.push(user_valid)
    }else{
      alert("veuilliez remplir tous les champs")
    }
}

return(
    <form  onSubmit={submitValue}>
  <Link to="/" style={{textDecoration: 'none'}}>
  <img src={logo} alt=""  style={myStyle.image} />
  </Link>
<div>
  <TextField id="outlined-required"label="username" value={username}
      onChange={(event) => setUsername(event.target.value)} />
</div>
<div style={myStyle.div}>
  <TextField id="outlined-password-input" label="Password"type="password" value={password}
      onChange={(event) => setPassword(event.target.value)}/>
</div>
<div style={myStyle.div}>
  <TextField id="outlined-email-input"label="email" type="email" value={email}
   onChange={(event) => setEmail(event.target.value)}/>
</div>
<div style={myStyle.div} >
  <Fab variant="extended" type="submit" style={myStyle.div} >
          Inscription
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

export default Register