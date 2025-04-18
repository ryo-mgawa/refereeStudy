import { Button, Stack, ThemeIcon, rem } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

interface QuizOptionsProps {
  options: string[];
  correctAnswer: number;
  selectedAnswer: number | null;
  showResult: boolean;
  onSelect: (index: number) => void;
}

export function QuizOptions({
  options,
  correctAnswer,
  selectedAnswer,
  showResult,
  onSelect,
}: QuizOptionsProps) {
  return (
    <Stack gap="sm">
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={() => onSelect(index)}
          disabled={showResult}
          variant={
            showResult
              ? index === correctAnswer
                ? 'light'
                : selectedAnswer === index
                  ? 'light'
                  : 'default'
              : 'default'
          }
          color={
            showResult
              ? index === correctAnswer
                ? 'green'
                : selectedAnswer === index
                  ? 'red'
                  : 'gray'
              : 'blue'
          }
          fullWidth
          styles={{
            inner: {
              whiteSpace: 'normal',
              height: 'auto',
              minHeight: '2.25rem',
            },
            label: {
              whiteSpace: 'pre-wrap',
              textAlign: 'center',
            },
          }}
          leftSection={
            showResult && index === correctAnswer ? (
              <ThemeIcon color="green" size="sm">
                <IconCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            ) : showResult && selectedAnswer === index && index !== correctAnswer ? (
              <ThemeIcon color="red" size="sm">
                <IconX style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            ) : null
          }
        >
          {option}
        </Button>
      ))}
    </Stack>
  );
} 