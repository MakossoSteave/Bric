import { useForm, SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import {Users } from '../model/user'


type Inputs = {
    Username: string,
    Password: string,
};

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<Inputs> = data => {
    const createHistory = require("history").createBrowserHistory;
    let username = data.Username
    let password = data.Password

    if(username != '' && password != ''){
          let result = Users.filter(t=>t.username === username && t.password === password);
          if(result[0]!= null){
            localStorage.setItem('username' ,JSON.stringify(username));
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
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" >
                  <img src={logo} alt="logo bric à vrac"style={myStyle.image}/>
            </Link>
            <div>
                <TextField  id="outlined-required" label="username"
                  {...register("Username")} />
            </div>
            <div style={myStyle.div}>
                <TextField id="outlined-password-input"label="Password"type="password"
                    {...register("Password")} />
            </div>
            <div style={myStyle.button}>
                <Fab variant="extended" type="submit" >
                        Connection
                </Fab>
            </div>
    </form>
  );
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

