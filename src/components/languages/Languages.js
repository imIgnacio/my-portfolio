import React from 'react';
import PieChart from '../pie-chart/PieChart';
import './Languages.css';

function Languages() {
  return (
    <section>
    <h3>📍 Languages</h3>
    <div className='graphs'>
        <PieChart language={'Spanish'} number={100} />
        <PieChart language={'English'} number={100} />
        <PieChart language={'French'} number={15} />
    </div>
  </section>
  )
}

export default Languages