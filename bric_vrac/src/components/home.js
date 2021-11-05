import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logo } from '../constant/global';
import Button from '@mui/material/Button';
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
 
  render() {
   
    return (
      <ThemeProvider theme={theme}>

      <div>
              <h1 color="neutral"><Button disabled>Bienvenue sur bric à vrac </Button>
              </h1>  
              
              <Link to="/login" style={{textDecoration: 'none'}}>
                    <Button>Login</Button>
              </Link>
             <img src={logo} alt="" srcset="" />
              <Link  to ="/login"style={{textDecoration: 'none'}}>
                    <Button color="secondary">Register</Button>
              </Link>
      </div>
      </ThemeProvider>

    );
  }
}
export default Home;
