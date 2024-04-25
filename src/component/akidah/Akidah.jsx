import React from 'react';
import Principal from '../Principal';
import { useState, useEffect } from 'react';

export const AkidahQuestions = [
  {
    question: "question1",
    answer:  "answer"
  },
  {
    question: "question11",
    answer:  "answer"
  },
  {
    question: "question2",
    answer:  "answer"
  },
  {
    question: "question3",
    answer:  "answer"
  },
  {
    question: "question4",
    answer:  "answer"
  },
  {
    question: "question5",
    answer:  "answer"
  },
  {
    question: "question6",
    answer:  "answer"
  },
  {
    question: "question7",
    answer:  "answer"
  },
  {
    question: "question8",
    answer:  "answer"
  },
  {
    question: "question9",
    answer:  "answer"
  },
  {
    question: "question10",
    answer:  "answer"
  }

];

const Akidah = () => {
  const [randomQuestions, setRandomQuestions] = useState([]);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    if (AkidahQuestions.length >= 10) {
      const shuffledQuestions = shuffleArray([...AkidahQuestions]);
      const selectedQuestions = shuffledQuestions.slice(0, 10);
      setRandomQuestions(selectedQuestions);
    }
  }, [AkidahQuestions]);

  return (
    <div>
      {randomQuestions.length > 0 ? (
        <Principal questions={randomQuestions} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Akidah;