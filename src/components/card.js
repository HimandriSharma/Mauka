import React from 'react'
import './card.css'
import Img from '../assets/card1.png'
function card({title,imageUrl,body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <button style={{border:'none'}}>
                    <a>
                        view more
                    </a>
                </button>
            </div>
        </div>
    )
}

export default card
