import React from 'react';
import flower from '../assets/Group195.png';
import back from '../assets/Group228.png';
import club from '../assets/club.png';
import './home.css';
function home() {
    return (
        <div className='ali'>
            <div className='text'>
                <h3>Healthy life with</h3>
               <h2><b> Nature Organic</b></h2>
                <h4>Vegetables are edible parts of a plant <br/>that is used in cooking or can be eaten now. </h4>
                <button className="btn"><b>Explore Now</b></button>
            </div>
            <div>
                <img src={club} className='img' alt=''/>
            </div>
        </div>
    )
}

export default home
