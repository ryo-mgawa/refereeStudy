import React from 'react';

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="score-container">
      <h1>クイズ結果</h1>
      <div className="score-card">
        <h2>あなたのスコア</h2>
        <div className="score-number">
          {score}/{totalQuestions}
        </div>
        <div className="score-percentage">
          {percentage}%
        </div>
        <button onClick={onRestart} className="restart-button">
          もう一度挑戦する
        </button>
      </div>
    </div>
  );
};

export default ScoreDisplay; 