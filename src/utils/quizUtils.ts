import { Quiz } from '../data/quizData';

/**
 * Shuffles an array using the Fisher-Yates algorithm
 * @param array The array to shuffle
 * @returns A new shuffled array
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
 * Randomizes the order of quiz questions and answer options
 * @param quizData The original quiz data
 * @returns A new array with randomized questions and options
 */
export function randomizeQuiz(quizData: Quiz[]): Quiz[] {
  // First shuffle the questions
  const shuffledQuestions = shuffleArray(quizData);
  
  // Then shuffle the options for each question
  return shuffledQuestions.map(quiz => {
    const shuffledOptions = shuffleArray(quiz.options);
    
    // Find the new index of the correct answer
    const correctAnswer = shuffledOptions.findIndex(
      option => option === quiz.options[quiz.correctAnswer]
    );
    
    return {
      question: quiz.question,
      options: shuffledOptions,
      correctAnswer
    };
  });
} 