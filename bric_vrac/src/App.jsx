import React, { Component } from 'react'
import './App.css';
import { logo } from './constant/global';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import Welcome from './components/welcome';


class App extends Component {
  render()
  {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/welcome' element={<Welcome />}></Route>


        </Routes>    
    </div>
  );
  }
}

export default App;
