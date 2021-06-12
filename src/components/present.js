import React from 'react';
import log1 from '../assets/Group39.png';
import log2 from '../assets/Group64.png';
import log3 from '../assets/Group55.png';
import gray from '../assets/grayfilCircle.png';
import filcircle from '../assets/filCircle.png'
import './present.css';
function present() {
    return (
        <div>
            <div style={{fontSize:'40px',marginTop:'100px'}}> Proudly presented by</div>
            <div style={{fontSize:'15px',margin:'30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
incididunt ut labore et dolore magna aliqua.</div>
            <div className='group'>
                <div className='sty'><img src={log1} alt=''/></div>
                <div className='sty'><img src={log2} alt=''/></div>
                <div className='sty'><img src={log3} alt=''/></div>
                <div className='sty'><img src={log2} alt=''/></div>
                <div className='sty'><img src={log1} alt=''/></div>
            </div>
            <div style={{marginBottom:'100px'}}>
                    <img src={filcircle} alt='/' style={{height:'10px',width:'10px',margin:'6px'}}/>
                    <img src={gray} alt='/' style={{height:'10px',width:'10px',margin:'6px'}}/>
                    <img src={gray} alt='/' style={{height:'10px',width:'10px',margin:'6px'}}/>
                    <img src={gray} alt='/' style={{height:'10px',width:'10px',margin:'6px'}}/>
            </div>
        </div>
    )
}

export default present
