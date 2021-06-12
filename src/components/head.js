import React from 'react'
import './head.css';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';
import logo from '../assets/Group220.png';
const head = () => {
    return (
        <nav>
            <div className='div-header'>
                <div className='div-png'>
                <img src={logo} alt="Logo" />
                    <h>organic</h>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Router>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/'>Products</NavLink>
                        <NavLink to='/'>Blog</NavLink>
                        <NavLink to='/'>About us</NavLink>
                    </Router>
                    <button className='button-header'>Contact</button>
                </div>
            </div>
        </nav>
    )
}

export default head;
