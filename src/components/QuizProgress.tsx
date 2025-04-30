import { Title, Progress } from '@mantine/core';

interface QuizProgressProps {
  currentIndex: number;
  totalQuestions: number;
}

export function QuizProgress({ currentIndex, totalQuestions }: QuizProgressProps) {
  return (
    <>
      <Title order={2} ta="center">
        問題 {currentIndex + 1}/{totalQuestions}
      </Title>
      <Progress
        value={((currentIndex + 1) / totalQuestions) * 100}
        size="xl"
        radius="xl"
        color="blue"
      />
    </>
  );
}
