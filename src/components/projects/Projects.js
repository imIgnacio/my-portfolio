import React from 'react'
import './Projects.css';

function Projects() {
  return (
    <section className='hobbies'>
        <h3>🔎 Projects</h3>
        <div className='circles'>
          <div className='projects'>
          <h4>Warehouse Management</h4>
          <a target={'_blank'} href='https://warehouse-manager-bootcamp.herokuapp.com/'><span className='circle' id='warehouse'></span></a>
          </div>
          <div className='projects'>
          <h4>E-Commerce Platform</h4>
          <a target={'_blank'} href='https://tuna4sale.herokuapp.com/'><span className='circle' id='ecommerce'></span></a>
          </div>
          <div className='projects'>
          <h4>Crowdfunding EVM</h4>
          <a target={'_blank'} href='https://github.com/imIgnacio/solidity'><span className='circle' id='solidity'></span></a>
          </div>
          <div className='projects'>
          <h4>Search Book Engine</h4>
          <a target={'_blank'} href='https://ignacio-book-search-engine.herokuapp.com/'><span className='circle' id='books'></span></a>
          </div>
          <div className='projects'>
          <h4>Weather Dashboard</h4>
          <a target={'_blank'} href='https://imignacio.github.io/hw6-weatherDashboard/'><span className='circle' id='weather'></span></a>
          </div>
          <div className='projects'>
          <h4>Password Generator</h4>
          <a target={'_blank'} href='https://imignacio.github.io/hm3-passwordGenerator/'><span className='circle' id='password'></span></a>
          </div>
        </div>
    </section>
  )
}

export default Projects