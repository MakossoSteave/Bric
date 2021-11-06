import React, { Component } from "react";
import { logo } from '../constant/global';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Users } from '../model/user'


export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        
    }
    handleSubmit(event){
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        let email = this.state.email;
        console.log(this.state)
        if(username != '' && password != '' && email != ''){
              Users.push(this.state)
        console.log(Users)
        }else{
            console.log("veuilliez remplir tous les champs")
        }
      
    }


    render(){
        const {username,email,password}=this.state;
        return (
            <div>
                <h1 style={myStyle.Titre}>Register</h1>
               <Link to='/'><img src={logo} alt="" style={myStyle.image} />
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
            label="email"
            name="email"
            value={email}
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
        color="error" 
        type="submit"
        
        >
         Inscription
        </Button>
      </form> 
            </div>
        );
    }
}

const myStyle = {
    Titre:{
        color:'#ff7f00',
    },
    image:{
        weight:100,
        width: 200
    }
}