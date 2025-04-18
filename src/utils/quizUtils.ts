import { Quiz } from '../data/quizData';

/**
 * Fisher-Yatesアルゴリズムを使用して配列をシャッフルする
 * @param array シャッフルする配列
 * @returns シャッフルされた新しい配列
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * クイズの問題と回答オプションの順序をランダム化する
 * @param quizData 元のクイズデータ
 * @returns 問題とオプションがランダム化された新しい配列
 */
export function randomizeQuiz(quizData: Quiz[]): Quiz[] {
  // correctAnswer = 99の問題を除外
  const filteredQuestions = quizData.filter(quiz => quiz.correctAnswer !== 99);

  // まず問題をシャッフル
  const shuffledQuestions = shuffleArray(filteredQuestions);

  // 次に各問題のオプションをシャッフル
  return shuffledQuestions.map(quiz => {
    const shuffledOptions = shuffleArray(quiz.options);

    // 正解の新しいインデックスを見つける
    const correctAnswer = shuffledOptions.findIndex(
      option => option === quiz.options[quiz.correctAnswer]
    );

    return {
      type: quiz.type,
      category: quiz.category,
      question: quiz.question,
      options: shuffledOptions,
      correctAnswer,
      supplement: quiz.supplement,
    };
  });
}
