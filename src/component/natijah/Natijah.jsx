import React, { useEffect, useState } from 'react';
import "./natijah.css"

const Natijah = () => {
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    const savedTotalProgress = localStorage.getItem('totalProgress');
    if (savedTotalProgress) {
      setTotalProgress(parseInt(savedTotalProgress));
    }
  }, []);

  function score(totalProgress) {
    const sum = 10 * 6;
    if (sum === 0) return 0;
    return (totalProgress / sum) * 100;
  }
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === totalProgress) return;
    const timeout = setTimeout(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 10);
    return () => clearTimeout(timeout);
  }, [counter, totalProgress]);

  const circumference = 440;
  const dashOffset = circumference - (circumference * score(totalProgress) / 100);

  return (
    <div className="d-flex justify-content-center vh-50" style={{ position: "relative", marginTop: "200px" }}>
      <div className="card text-center position-relative" style={{ width: "23rem", left: "23rem" }}>
        <h5>النتيجة </h5>
      </div>
      <div className="skill" style={{ width: "160px", height: "160px", marginTop: "50px", marginLeft: "100px", position: "absolute", left: "23rem" }}>
        <div className="outer" style={{ width: "160px", height: "160px", borderRadius: "50%", padding: "20px", boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)" }}>
          <div className="inner" style={{ width: "120px", height: "120px", boxShadow: "inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px 4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255, 255, 255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div id="number" style={{ fontWeight: "600", fontSize: "23px" }}>
              {score(totalProgress).toFixed(2)}%
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" style={{ position: "absolute", top: 0, left: 0 }}>
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{ fill: "none", stroke: "url(#GradientColor)", strokeWidth: "20px", strokeDasharray: "440", strokeDashoffset: "440", animation: "progress-animation 3s forwards" }} />
          <style>
            {`
              @keyframes progress-animation {
                from {
                  stroke-dashoffset: 0;
                }
                to {
                  stroke-dashoffset: ${dashOffset};
                }
              }
            `}
          </style>
        </svg>
      </div>
    </div>
  );
};

export default Natijah;
