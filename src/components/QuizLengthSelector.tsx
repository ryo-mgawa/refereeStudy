import { Container, Card, Stack, Group, Button, Title } from '@mantine/core';
import { QuizTitle } from './QuizTitle';

interface QuizLengthSelectorProps {
  onSelectLength: (length: number) => void;
}

export function QuizLengthSelector({ onSelectLength }: QuizLengthSelectorProps) {
  return (
    <Container size="sm" py="xl">
      <QuizTitle color="white" />
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack align="center" gap="md">
          <Title order={2}>問題数を選択してください</Title>
          <Group>
            <Button variant="light" onClick={() => onSelectLength(10)}>
              10問
            </Button>
            <Button variant="light" onClick={() => onSelectLength(30)}>
              30問
            </Button>
          </Group>
        </Stack>
      </Card>
    </Container>
  );
} 