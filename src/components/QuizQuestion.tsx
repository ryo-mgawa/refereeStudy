import { Container, Card, Stack, Text, Button } from '@mantine/core';
import { QuizProgress } from './QuizProgress';
import { QuizOptions } from './QuizOptions';
import { QuizResult } from './QuizResult';
import { QuizTitle } from './QuizTitle';

interface QuizQuestionProps {
  currentQuiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswerSelect: (index: number) => void;
  onNextQuestion: () => void;
  onRetire: () => void;
}

export function QuizQuestion({
  currentQuiz,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  showResult,
  onAnswerSelect,
  onNextQuestion,
  onRetire,
}: QuizQuestionProps) {
  return (
    <Container size="sm" py="xl">
      <QuizTitle />
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack gap="md">
          <QuizProgress currentIndex={currentIndex} totalQuestions={totalQuestions} />
          <Text size="lg" ta="center" fw={500}>
            {currentQuiz.question}
          </Text>
          <QuizOptions
            options={currentQuiz.options}
            correctAnswer={currentQuiz.correctAnswer}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            onSelect={onAnswerSelect}
          />
          {showResult && (
            <QuizResult
              isCorrect={selectedAnswer === currentQuiz.correctAnswer}
              onNext={onNextQuestion}
              isLastQuestion={currentIndex === totalQuestions - 1}
            />
          )}
          <Button onClick={onRetire} variant="subtle" color="gray" disabled={showResult}>
            リタイア
          </Button>
        </Stack>
      </Card>
    </Container>
  );
} 