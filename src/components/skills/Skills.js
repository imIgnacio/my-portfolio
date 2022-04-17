import React from 'react'
import './Skills.css';

function Skills() {
  return (
    <section>
        <h3>🔥 Technical Skills</h3>
        <div className='skill-container'>
            <h4 className='skill'>HTML & CSS</h4>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
        <div className='skill-container'>
            <h4 className='skill'>JavaScript</h4>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
        <div className='skill-container'>
            <h4 className='skill'>ReactJS & Redux</h4>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot" id='transparent'></span>
        </div>
        <div className='skill-container'>
            <h4 className='skill'>NodeJS</h4>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot" id='transparent'></span>
        </div>
        <div className='skill-container'>
            <h4 className='skill'>Solidity</h4>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot" id='transparent'></span>
            <span className="dot" id='transparent'></span>
        </div>
        <div className='skill-container'>
            <h4 className='skill'>Python</h4>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot" id='transparent'></span>
            <span className="dot" id='transparent'></span>
        </div>
    </section>
  )
}

export default Skills