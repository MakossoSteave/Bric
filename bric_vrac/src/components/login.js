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

    alert('Un essai a été envoyé : ' + this.state.username);
    alert('Un essai a été envoyé : ' + this.state.password);
    let username = this.state.username;
    let password = this.state.password;
    console.log(Users)

  }


 
  render() {
    const { username, password} = this.state;

    
    return (
      <div>
           <h1 style={myStyle.Titre}> Login</h1>
       <img src={logo} alt="" srcset="" />
       <form onSubmit={this.handleSubmit}>
        <label>
          Identifiant
        </label>
        <input name='username'value={username} onChange={this.handleChange} />
        <label>
          Password
        </label>
        <input name='password' type='password' value={password} onChange={this.handleChange} />

        <input type="submit" value="Envoyer" />
      </form>
      </div>
    

    );
  }
}

const myStyle = {
  button:{
    top: "10px"
  },
  Titre:{
    color: "#a8a399",
    fontSize:"50px"
  }
  
};