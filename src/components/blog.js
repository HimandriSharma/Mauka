import React from 'react'
import leaf from '../assets/Group114.png'
import Card from './card';
import Img1 from '../assets/card1.png'
import Img2 from '../assets/card2.png'
import Img3 from '../assets/card3.png'
function blog() {
    return (
        <div>
            <div style={{marginTop:'100px'}}>
                <img src={leaf} alt=''/>
            </div>
            <div>
                <div style={{fontSize:'35px',margin:'20px'}}>
                    Read Our Blog
                </div>
                <div style={{fontSize:'15px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div style={{display:'flex',padding:'10px',justifyContent:'center',alignItems:'center',marginTop:'50px',marginBottom:'50px'}}>
                <div style={{margin:'30px'}}><Card
                title='Blog Post One'
                imageUrl={Img1}
                body='Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed
                 do eiusmod.'
                /></div>
                <div style={{margin:'30px'}}> <Card
                title='Blog Post One'
                imageUrl={Img2}
                body='Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed
                 do eiusmod.'
                /></div>
                 <div style={{margin:'30px'}}><Card
                title='Blog Post One'
                imageUrl={Img3}
                body='Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed
                 do eiusmod.'
                /></div>
            </div>
        </div>
    )
}

export default blog
