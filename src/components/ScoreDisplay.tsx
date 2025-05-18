import React from 'react';
import { Container, Title, Text, Button, Card, Stack, Group, ThemeIcon, rem } from '@mantine/core';
import { IconTrophy, IconRefresh } from '@tabler/icons-react';

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  startTime: Date | null;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, totalQuestions, onRestart, startTime }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // 経過時間を計算
  const elapsedTime = startTime ? Math.floor((new Date().getTime() - startTime.getTime()) / 1000) : 0;
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <Container size="sm" py="xl">
      <Card shadow="sm" padding="xl" radius="md" withBorder>
        <Stack align="center" gap="xl">
          <ThemeIcon size={80} radius="md" color="yellow">
            <IconTrophy style={{ width: rem(40), height: rem(40) }} />
          </ThemeIcon>

          <Title order={1} ta="center">
            クイズ結果
          </Title>

          <Group gap="xs" align="center">
            <Text size="xl" fw={700} c="dimmed">
              {score}
            </Text>
            <Text size="xl" fw={700} c="dimmed">
              /
            </Text>
            <Text size="xl" fw={700} c="dimmed">
              {totalQuestions}
            </Text>
          </Group>

          <Text size="2rem" fw={700} c="blue">
            {percentage}%
          </Text>

          <Text size="lg" fw={500} c="dimmed">
            所要時間: {minutes}分{seconds}秒
          </Text>

          <Button
            onClick={onRestart}
            size="lg"
            leftSection={<IconRefresh style={{ width: rem(20), height: rem(20) }} />}
          >
            もう一度挑戦する
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};

export default ScoreDisplay;
