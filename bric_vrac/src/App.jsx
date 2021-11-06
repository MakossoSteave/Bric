import React, { Component } from 'react'
import './App.css';
import { logo } from './constant/global';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import Welcome from './components/welcome';
import Register from './components/register';


class App extends Component {
  render()
  {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/welcome' element={<Welcome />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>    
    </div>
  );
  }
}

export default App;
