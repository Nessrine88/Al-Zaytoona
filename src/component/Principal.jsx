import React, { useState, useEffect } from 'react';
import Card from './Card';
import { NavLink } from 'react-router-dom';

const Principal = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [totalProgress, setTotalProgress] = useState(0);
  const [showResultButton, setShowResultButton] = useState(false);

  const questionsLength = questions.length;

  useEffect(() => {
    const savedTotalProgress = localStorage.getItem('totalProgress');
    if (savedTotalProgress) {
      setTotalProgress(parseInt(savedTotalProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('totalProgress', totalProgress);
  }, [totalProgress]);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleCircleClick = (value) => {
    const nextProgress = totalProgress + value;
    setTotalProgress(nextProgress);
    const nextQuestionIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionIndex);
    if (nextQuestionIndex === questionsLength) {
      setShowResultButton(true);
    } else {
      setShowAnswer(false);
    }
  };

  const handleSeeResult = () => {
    console.log("See Result button clicked");
  };

  const cardOffset = `calc((100vw - 300px - 18rem) / 2)`;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {!showResultButton && (
        <Card
          key={currentQuestionIndex}
          question={currentQuestion.question}
          answer={currentQuestion.answer}
          showAnswer={showAnswer}
          toggleAnswer={toggleAnswer}
          currentQuestionIndex={currentQuestionIndex}
          totalProgress={totalProgress}
          handleCircleClick={handleCircleClick}
          cardOffset={cardOffset}
        />
      )}
      {showResultButton && (
        <div  style={{ width: "30vw",position:"absolute", left: "23rem", top: "16rem" }}>
          <button onClick={handleSeeResult} className="btn">
            <NavLink to="/natijah" className="nav-link p-3" style={{ backgroundImage: "linear-gradient(to bottom, #ff87b4, #ff87b4, #a0d3e6", borderRadius:"10px", fontWeight:"900", fontSize:"24px" }}>
            انظر النتيجة
            </NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default Principal;
