import React from "react";
import { NavLink } from "react-router-dom";
import './App.css'


const Navbar = () =>{
     return(
        <div className="Container">
         <NavLink exact style={{color:'white', textDecoration:'none', fontFamily:'sans-serif'}}  to={'/'}>Home</NavLink>
         <NavLink exact style={{color:'white', textDecoration:'none', fontFamily:'sans-serif'}} to={'/about'}>About US</NavLink>
         <NavLink exact style={{color:'white', textDecoration:'none', fontFamily:'sans-serif'}} to={'/rooms'}>Rooms</NavLink>
         <NavLink exact style={{color:'white', textDecoration:'none', fontFamily:'sans-serif'}} to={'/contact'}>Contact</NavLink>
         <NavLink exact style={{color:'white', textDecoration:'none', fontFamily:'sans-serif'}} to={'/login'}>Log In</NavLink>
        </div>
     )
}
export default Navbar