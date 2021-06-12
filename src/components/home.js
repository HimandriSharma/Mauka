import React from 'react';
import flower from '../assets/Group195.png';
import back from '../assets/Group228.png'
import './home.css';
function home() {
    return (
        <div className='ali'>
            <div>
                <h3>Healthy life with</h3>
                <h2>Nature Organic</h2>
                <h4>vegetables are edible parts of a plant <br/>that is used in cooking or can be eaten now. </h4>
                <button>explore now</button>
            </div>
            <div className='flow'>
                <img src={flower}  alt=''/>
            </div>
        </div>
    )
}

export default home
