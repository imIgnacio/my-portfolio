import React from 'react';
import './PieChart.css';

function PieChart(props) {

    return (<div className='container'>
        <h3 className='language'>{props.language}</h3>
        <div className={`pie lan-${props.language}`}>{props.number}%</div>
    </div>)
}

export default PieChart