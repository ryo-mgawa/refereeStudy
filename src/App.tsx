import { useState } from 'react';
import { quizData } from './data/quizData';
import { randomizeQuiz } from './utils/quizUtils';
import ScoreDisplay from './components/ScoreDisplay';
import { QuizLengthSelector } from './components/QuizLengthSelector';
import { QuizQuestion } from './components/QuizQuestion';

function App() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizLength, setQuizLength] = useState<number | null>(null);
  const [randomizedQuizData, setRandomizedQuizData] = useState<typeof quizData>([]);
  const [showScore, setShowScore] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const currentQuiz = randomizedQuizData[currentQuizIndex];

  const handleQuizLengthSelect = (length: number) => {
    setQuizLength(length);
    const selectedQuestions = randomizeQuiz(quizData).slice(0, length);
    setRandomizedQuizData(selectedQuestions);
    setStartTime(new Date());
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === currentQuiz.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    if (currentQuizIndex < randomizedQuizData.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRetire = () => {
    setShowScore(true);
  };

  const handleRestart = () => {
    setQuizLength(null);
    setCurrentQuizIndex(0);
    setScore(0);
    setRandomizedQuizData([]);
    setShowScore(false);
    setStartTime(null);
  };

  if (showScore) {
    return (
      <ScoreDisplay
        score={score}
        totalQuestions={randomizedQuizData.length}
        onRestart={handleRestart}
        startTime={startTime}
      />
    );
  }

  if (!quizLength) {
    return <QuizLengthSelector onSelectLength={handleQuizLengthSelect} />;
  }

  return (
    <QuizQuestion
      currentQuiz={currentQuiz}
      currentIndex={currentQuizIndex}
      totalQuestions={randomizedQuizData.length}
      selectedAnswer={selectedAnswer}
      showResult={showResult}
      onAnswerSelect={handleAnswerSelect}
      onNextQuestion={handleNextQuestion}
      onRetire={handleRetire}
    />
  );
}

export default App;
