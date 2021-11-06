import React, { Component } from "react";
import { logo } from '../constant/global';
import { Link } from "react-router-dom";



export default class Register extends Component{
    render(){
        return (
            <div>
                <h1 style={MyStyle.Titre}>Register</h1>
               <Link to='/'><img src={logo} alt="" style={MyStyle.image} />
               </Link> 
            </div>
        );
    }
}

const MyStyle = {
    Titre:{
        color:'#ff7f00',
    },
    image:{
        weight:100,
        width: 200
    }
}