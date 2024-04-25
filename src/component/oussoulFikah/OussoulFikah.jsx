
import './OssoulFikah.css';
import Principal from '../Principal';

export const ossoulQuestions = [

  {
    question: "This is the question2.",
    answer: "This is the answer2."
  },
  {
    question: "This is the question3.",
    answer: "This is the answer23"
  },
];

const OussoulFikah = () => {
  return(
<div>
  <Principal questions={ossoulQuestions} />
</div>
  )
}

export default OussoulFikah;
