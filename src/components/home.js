import React from 'react';
import flower from '../assets/Group195.png';
import back from '../assets/Group228.png';
import club from '../assets/club.png';
import './home.css';
function home() {
    return (
        <div className='ali'>
            <div className='text'>
                <div style={{fontSize:'30px'}}>Healthy life with</div>
               <div style={{fontSize:'38px',margin:'5px'}}><b> Nature Organic</b></div>
                <div style={{fontSize:'15px',marginTop:'40px'}}>Vegetables are edible parts of a plant <br/>that is used in cooking or can be eaten now. </div>
                <button style={{backgroundColor:'#00dbd0',fontSize:'20px',borderRadius:'15px',border:'none',color:'white',paddingLeft:'3.0rem',paddingRight:'3.0rem',paddingTop:'1.0rem',paddingBottom:'1.0rem',margin:'20px'}}><b>Explore Now</b></button>
            </div>
            <div>
                <img src={club} className='img' alt=''/>
            </div>
        </div>
    )
}

export default home
