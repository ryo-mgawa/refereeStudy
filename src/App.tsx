import { useState } from 'react'
import './App.css'
import { quizData } from './data/quizData'
import { randomizeQuiz } from './utils/quizUtils'
import ScoreDisplay from './components/ScoreDisplay'

function App() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizLength, setQuizLength] = useState<number | null>(null);
  const [randomizedQuizData, setRandomizedQuizData] = useState<typeof quizData>([]);
  const [showScore, setShowScore] = useState(false);

  const currentQuiz = randomizedQuizData[currentQuizIndex];

  const handleQuizLengthSelect = (length: number) => {
    setQuizLength(length);
    const selectedQuestions = randomizeQuiz(quizData).slice(0, length);
    setRandomizedQuizData(selectedQuestions);
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (currentQuiz.correctAnswer === 99) {
      // Don't update score for unknown answers
      return;
    }
    
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
  };

  if (showScore) {
    return (
      <ScoreDisplay
        score={score}
        totalQuestions={randomizedQuizData.length}
        onRestart={handleRestart}
      />
    );
  }

  if (!quizLength) {
    return (
      <div className="quiz-container">
        <h1>NARクイズ</h1>
        <div className="quiz-length-selection">
          <h2>問題数を選択してください</h2>
          <div className="length-buttons">
            <button onClick={() => handleQuizLengthSelect(10)}>10問</button>
            <button onClick={() => handleQuizLengthSelect(30)}>30問</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>NARクイズ</h1>
      <div className="quiz-card">
        <h2>問題 {currentQuizIndex + 1}/{randomizedQuizData.length}</h2>
        <p className="question">{currentQuiz.question}</p>
        <div className="options">
          {currentQuiz.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`option-button ${
                showResult
                  ? index === currentQuiz.correctAnswer
                    ? 'correct'
                    : selectedAnswer === index
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {showResult && (
          <div className="result">
            <p>
              {currentQuiz.correctAnswer === 99 
                ? 'この問題の正解は未定です。'
                : selectedAnswer === currentQuiz.correctAnswer
                ? '正解です！'
                : '不正解です。'}
            </p>
            <button onClick={handleNextQuestion}>
              {currentQuizIndex < randomizedQuizData.length - 1 ? '次の問題へ' : 'クイズを終了'}
            </button>
          </div>
        )}
        <button 
          onClick={handleRetire}
          className="retire-button"
          disabled={showResult}
        >
          リタイア
        </button>
      </div>
    </div>
  )
}

export default App
