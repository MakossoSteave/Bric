import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logo } from '../constant/global';
import Button from '@mui/material/Button';
import {Users } from '../model/user'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#dbc091',
    },
    secondary: {
      main: '#b0db91',
    },
   
  },
});

class Home extends Component {
 componentDidMount() {
     localStorage.setItem('Users_Data' ,JSON.stringify(Users));
for(let i = 0 ; i < Users.length;i++){
  localStorage.setItem('Users_Data' ,JSON.stringify(Users[i]));

}

 }
  render() {
   
    return (
      <ThemeProvider theme={theme}>

      <div>
              <h1 style={myStyle.Titre}>Bienvenue sur bric à vrac
              </h1>  
              
              <Link to="/login" style={{textDecoration: 'none'}}>
                    <Button>Login</Button>
              </Link>
             <img src={logo} alt=""  />
              <Link  to ="/register"style={{textDecoration: 'none'}}>
                    <Button color="secondary">Register</Button>
              </Link>
      </div>
      </ThemeProvider>

    );
  }
}
const myStyle = {
 
  Titre:{
    color: "#ff7f00",
    fontSize:"50px"
  }
  
};
export default Home;
