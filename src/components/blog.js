import React from 'react'
import leaf from '../assets/Group114.png'
import Card from './card';
import Img1 from '../assets/card1.png'
import Img2 from '../assets/card2.png'
import Img3 from '../assets/card3.png'
function blog() {
    return (
        <div>
            <div>
                <img src={leaf} alt=''/>
            </div>
            <div>
                <h1>
                    Read Our Blog
                </h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
incididunt ut labore et dolore magna aliqua.
                <h4>

                </h4>
            </div>
            <div style={{display:'flex',padding:'10px'}}>
                <Card
                title='Blog Post One'
                imageUrl={Img1}
                body='Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed
                 do eiusmod.'
                />
                 <Card
                title='Blog Post One'
                imageUrl={Img2}
                body='Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed
                 do eiusmod.'
                />
                 <Card
                title='Blog Post One'
                imageUrl={Img3}
                body='Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed
                 do eiusmod.'
                />
            </div>
        </div>
    )
}

export default blog
