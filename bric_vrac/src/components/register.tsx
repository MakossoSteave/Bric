import { useForm, SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import {Users } from '../model/user'

type Inputs = {
    Username: string,
    Password: string,
    Email: string

};

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<Inputs> = data => {
    if(data.Username != '' && data.Password !='' && data.Email != ''){
        const user_valid ={
          "id":1,
          "email":data.Email,
          "username":data.Username,
          "password":data.Password,
          "userToken":"abbc"
        }
        Users.push(user_valid)
        console.log(Users)

    }else{
      alert("veuilliez remplir tous les champs")
    }
   
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
                  <Link to="/" style={{textDecoration: 'none'}}>
                  <img src={logo} alt=""  style={myStyle.image} />
                  </Link>
            <div>
                  <TextField id="outlined-required"label="username"
                      {...register("Username")} />
            </div>
            <div style={myStyle.div}>
                  <TextField id="outlined-password-input" label="Password"type="password"
                        {...register("Password")}/>
            </div>
            <div style={myStyle.div}>
                  <TextField id="outlined-email-input"label="email" type="email"
                        {...register("Email")}/>
            </div>
            <div style={myStyle.div}>
                  <Fab variant="extended" type="submit" style={myStyle.div}>
                          Inscription
                  </Fab>
            </div>
    </form>
  );
}
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

