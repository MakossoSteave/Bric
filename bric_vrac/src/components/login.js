import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logo } from '../constant/global';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Users } from '../model/user'
import { useHistory } from "react-router-dom";




const createHistory = require("history").createBrowserHistory;


export default class login extends Component {


  constructor(props) {
    
    super(props);

    
    this.state = {
      username: "",
      password: "",
      redirect: false

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

        let history = createHistory();
        history.push("/welcome");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;  
        
       
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
            helperText=" "
            id="demo-helper-text-aligned"
            label="identifiant"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>

       <div class="form-group">
        <TextField
            helperText=" "
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
    color: "#ff7f00",
    fontSize:"50px"
  },
  styling:{
   
  }
  
};