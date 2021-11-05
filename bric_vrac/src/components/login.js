import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { logo } from '../constant/global';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { useFormControl } from '@mui/material/FormControl';
import {Users } from '../model/user'





export default class login extends Component {


  constructor(props) {
    
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {

    this.setState({ [event.target.name]: event.target.value });
    
  }

  handleSubmit(event) {
    event.preventDefault();

   
    let username = this.state.username;
    let password = this.state.password;
    console.log(Users)
    if(username !='' && password != ''){
      console.log("pas vide ")
      let result = Users.filter(t=>t.username === username && t.password === password);
      console.log(result);
      if(result != ''){
        console.log("bienvenue")
      }else{
        alert("email ou mots de passe mauvais")
      }
    }else{
      alert("veuilliez remplir tous les champs")
    }
  }

  render() {
    const { username, password} = this.state;

    
    return (
      
       <Box
      sx={{
        alignItems: 'center',
        '& > :not(style)': { m: 0 },
      }}
    >  
           <h1 style={myStyle.Titre}> Login</h1>
           <Link to="/">
           <img src={logo} alt="" />
           </Link>
       
       <form onSubmit={this.handleSubmit}>

       <div class="form-group">
        <TextField
            helperText="veuilliez renseigné votre identifiant"
            id="demo-helper-text-aligned"
            label="identifiant"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>

       <div class="form-group">
        <TextField
            helperText="veuilliez renseignez votre mot de passe"
            id="demo-helper-text-aligned"
            label="mot de passe"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            styles={myStyle.styling}
          />
        </div>
        <Button 
        variant="outlined" 
        color="info" 
        type="submit"
        
        >
         connection
        </Button>
      </form> 
      </Box>
     
    

    );
  }
}

const myStyle = {
  button:{
  },
  Titre:{
    color: "#a8a399",
    fontSize:"50px"
  },
  styling:{
   
  }
  
};