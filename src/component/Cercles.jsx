import React from 'react';

const Cercles = ({ handleCircleClick }) => {
  return (
    <div style= {{cursor:"pointer", marginLeft:"3rem"}}>
      <svg width="600" height="100"> 
        <circle cx="50" cy="50" r="20" fill="red" onClick={() => handleCircleClick(0)} />
        <text x="50" y="55" textAnchor="middle" fill="white">0</text>

        <circle cx="150" cy="50" r="20" fill="green" onClick={() => handleCircleClick(1)} />
        <text x="150" y="55" textAnchor="middle" fill="white">1</text>

        <circle cx="250" cy="50" r="20" fill="blue" onClick={() => handleCircleClick(2)} />
        <text x="250" y="55" textAnchor="middle" fill="white">2</text>

        <circle cx="350" cy="50" r="20" fill="brown" onClick={() => handleCircleClick(5)} />
        <text x="350" y="55" textAnchor="middle" fill="white">3</text>

        <circle cx="450" cy="50" r="20" fill="orange" onClick={() => handleCircleClick(6)} />
        <text x="450" y="55" textAnchor="middle" fill="white">4</text>
      </svg>
    </div>
  );
}

export default Cercles;
