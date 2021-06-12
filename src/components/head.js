import React from 'react'
import './head.css';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';
import logo from '../assets/Group220.png';
const head = () => {
    return (
        <nav>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <div className='div-png'>
                <div style={{margin:'20px'}}><img src={logo} alt="Logo" /></div>
                    <div style={{marginTop:'30px'}}><b>organic</b></div>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Router>
                        <NavLink to='/'><div style={{margin:"20px",fontSize:'20px',color:'#374b5c'}}>Home</div></NavLink>
                        <NavLink to='/'><div style={{margin:"20px",fontSize:'20px',color:'#374b5c'}}>Products</div></NavLink>
                        <NavLink to='/'><div style={{margin:"20px",fontSize:'20px',color:'#374b5c'}}>Blog</div></NavLink>
                        <NavLink to='/'><div style={{margin:"20px",fontSize:'20px',color:'#374b5c'}}>About us</div></NavLink>
                    </Router>
                    <button style={{border:'solid',borderRadius:'20px',padding:'1.0rem',fontSize:'20px',margin:'20px',background:'white',borderColor:'#00dbd0',color:'#374b5c'}}>Contact</button>
                </div>
            </div>
        </nav>
    )
}

export default head;
