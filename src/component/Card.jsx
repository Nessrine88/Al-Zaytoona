import React from 'react';
import Cercles from '../component/Cercles'

const Card = ({ question, answer, showAnswer, toggleAnswer, totalProgress, handleCircleClick, cardOffset }) => {
  return (
<>
<div className="vw-100" style= {{backgroundColor:"#d0b6df"}}>
<h1 className="text-center p-3">اختبر معلوماتك </h1>
</div>
<div className="d-flex flex-column align-items-center justify-content-center vh-90 m-10 -ml-40 "style={{  alignItems:"center"}}>
 
  <div className="card text-end position-relative"  style={{ display: 'flex', width: "37rem" , maxHeight:"min-content"}}>
    <div className="card-body my-3">
      <h5 className="card-title mb-4">{question}</h5>
      {!showAnswer && (
        <button onClick={toggleAnswer} className='btn mt-2' style={{ fontWeight: "900", backgroundImage: 'linear-gradient(to bottom, #ff87b4, #ff87b4, #a0d3e6)' }}>
          اكشف الجواب
        </button>
      )}
      {showAnswer && (
        <div>
          <hr />
          <pre >{answer}</pre>
          <hr />
          <p>هل اجابتك صحيحة؟كم نقطة تعطي لنفسك </p>
          <Cercles handleCircleClick={handleCircleClick} />
        </div>
      )}
    </div>
  </div>
</div>
<div className="center vw-100" style={{ backgroundColor:"#b2d4b4", marginTop: "20px",position: "absolute", bottom:"0", fontWeight:"900", fontSize:"18px" }}>
    <p style={{ marginTop: "10px", textAlign:"center" }}>الرصيد: {totalProgress}</p>
  </div>
</>
  );
}

export default Card;
