import React from 'react'
import leaf from '../assets/Group114.png'
import blue from '../assets/Group205.png'
import trans from '../assets/Group207.png'
function welcome() {
    return (
        <div>
            <img src={leaf} alt=''/>
            <div>
                <h1>Welcome to Nature</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
incididunt ut labore et dolore magna aliqua.</h4>
            </div>
            <div>
                <img src={trans} alt=''/>
                <img src={blue} alt=''/>
                <img src={trans} alt=''/>
                <img src={trans} alt=''/>
            </div>
        </div>
    )
}

export default welcome
