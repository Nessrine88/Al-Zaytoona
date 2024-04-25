import React from 'react';
import Principal from '../Principal';
import { useState, useEffect } from 'react';

export const mantakQuestions = [
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
  },
  {
    question: "question11",
    answer:  "answer"
  },
  {
    question: "question12",
    answer:  "answer"
  },
  {
    question: "question13",
    answer:  "answer"
  },
  {
    question: "question14",
    answer:  "answer"
  },
  {
    question: "question15",
    answer:  "answer"
  },
  {
    question: "question16",
    answer:  "answer"
  },
  {
    question: "question17",
    answer:  "answer"
  },
  {
    question: "question18",
    answer:  "answer"
  },
  {
    question: "question19",
    answer:  "answer"
  },
  {
    question: "question20",
    answer:  "answer"
  }

];

const Mantak = () => {
  const [randomQuestions, setRandomQuestions] = useState([]);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (mantakQuestions.length >= 20) {
      const shuffledQuestions = shuffleArray([...mantakQuestions]);
      const selectedQuestions = shuffledQuestions.slice(0, 20);
      setRandomQuestions(selectedQuestions);
    }
  }, [mantakQuestions]);

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

export default Mantak;