import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'London', 'Paris', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Which language is used for web apps?',
    options: ['Python', 'Java', 'PHP', 'All'],
    answer: 'All',
  },
  {
    question: 'Who is the founder of Microsoft?',
    options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Elon Musk'],
    answer: 'Bill Gates',
  },
];

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    const isCorrect = selected === quizData[currentQ].answer;
    if (isCorrect) setScore(score + 1);

    const nextQ = currentQ + 1;
    if (nextQ < quizData.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      <h1>Quiz Game</h1>
      {showResult ? (
        <div>
          <h2>Your Score: {score} / {quizData.length}</h2>
        </div>
      ) : (
        <QuestionCard
          question={quizData[currentQ].question}
          options={quizData[currentQ].options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
