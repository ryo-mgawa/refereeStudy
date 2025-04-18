import { Paper, Stack, Text, Button } from '@mantine/core';

interface QuizResultProps {
  isCorrect: boolean;
  onNext: () => void;
  isLastQuestion: boolean;
}

export function QuizResult({ isCorrect, onNext, isLastQuestion }: QuizResultProps) {
  return (
    <Paper
      p="md"
      withBorder
      bg={isCorrect ? 'var(--mantine-color-green-0)' : 'var(--mantine-color-red-0)'}
    >
      <Stack align="center" gap="sm">
        <Text fw={500} c={isCorrect ? 'green' : 'red'}>
          {isCorrect ? '正解です！' : '不正解です。'}
        </Text>
        <Button onClick={onNext}>
          {isLastQuestion ? 'クイズを終了' : '次の問題へ'}
        </Button>
      </Stack>
    </Paper>
  );
} 