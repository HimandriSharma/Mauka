import React from 'react'
import './card.css'
import line from '../assets/line.png';
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
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <button style={{border:'none'}}>
                    <a>
                        Read more
                    </a>
                </button>
                <img src={line} style={{width:'80px',marginLeft:'10px'}} alt=""/>
            </div>
        </div>
    )
}

export default card
