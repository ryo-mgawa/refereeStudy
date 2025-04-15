import { useState, useEffect } from 'react'
import './App.css'
import { quizData } from './data/quizData'
import { randomizeQuiz } from './utils/quizUtils'

function App() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [randomizedQuizData, setRandomizedQuizData] = useState(randomizeQuiz(quizData));

  const currentQuiz = randomizedQuizData[currentQuizIndex];

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
      // クイズ終了時の処理
      alert(`クイズ終了！ あなたのスコアは ${score}/${randomizedQuizData.length} です！`);
      // クイズをリセットして新しいランダム順序で再開
      setRandomizedQuizData(randomizeQuiz(quizData));
      setCurrentQuizIndex(0);
      setScore(0);
    }
  };

  // コンポーネントがマウントされたときにクイズをランダム化
  useEffect(() => {
    setRandomizedQuizData(randomizeQuiz(quizData));
  }, []);

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
              {selectedAnswer === currentQuiz.correctAnswer
                ? '正解です！'
                : '不正解です。'}
            </p>
            <button onClick={handleNextQuestion}>
              {currentQuizIndex < randomizedQuizData.length - 1 ? '次の問題へ' : 'クイズを終了'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
