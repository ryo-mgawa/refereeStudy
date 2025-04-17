import { useState } from 'react'
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Card, 
  Stack,
  Paper,
  ThemeIcon,
  rem,
  Progress
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import './App.css'
import { quizData } from './data/quizData'
import { randomizeQuiz } from './utils/quizUtils'
import ScoreDisplay from './components/ScoreDisplay'

function App() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizLength, setQuizLength] = useState<number | null>(null);
  const [randomizedQuizData, setRandomizedQuizData] = useState<typeof quizData>([]);
  const [showScore, setShowScore] = useState(false);

  const currentQuiz = randomizedQuizData[currentQuizIndex];

  const handleQuizLengthSelect = (length: number) => {
    setQuizLength(length);
    const selectedQuestions = randomizeQuiz(quizData).slice(0, length);
    setRandomizedQuizData(selectedQuestions);
  };

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
      setShowScore(true);
    }
  };

  const handleRetire = () => {
    setShowScore(true);
  };

  const handleRestart = () => {
    setQuizLength(null);
    setCurrentQuizIndex(0);
    setScore(0);
    setRandomizedQuizData([]);
    setShowScore(false);
  };

  if (showScore) {
    return (
      <ScoreDisplay
        score={score}
        totalQuestions={randomizedQuizData.length}
        onRestart={handleRestart}
      />
    );
  }

  if (!quizLength) {
    return (
      <Container size="sm" py="xl">
        <Title order={1} ta="center" mb="xl">NARクイズ</Title>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack align="center" gap="md">
            <Title order={2}>問題数を選択してください</Title>
            <Group>
              <Button variant="light" onClick={() => handleQuizLengthSelect(10)}>10問</Button>
              <Button variant="light" onClick={() => handleQuizLengthSelect(30)}>30問</Button>
              <Button variant="light" onClick={() => handleQuizLengthSelect(50)}>50問</Button>
            </Group>
          </Stack>
        </Card>
      </Container>
    );
  }

  return (
    <Container size="sm" py="xl">
      <Title order={1} ta="center" mb="xl">NARクイズ</Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack gap="md">
          <Title order={2} ta="center">問題 {currentQuizIndex + 1}/{randomizedQuizData.length}</Title>
          <Progress 
            value={(currentQuizIndex + 1) / randomizedQuizData.length * 100} 
            size="xl" 
            radius="xl"
            color="blue"
          />
          <Text size="lg" ta="center" fw={500}>{currentQuiz.question}</Text>
          <Stack gap="sm">
            {currentQuiz.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                variant={showResult 
                  ? index === currentQuiz.correctAnswer 
                    ? 'light' 
                    : selectedAnswer === index 
                    ? 'light' 
                    : 'default'
                  : 'default'
                }
                color={showResult 
                  ? index === currentQuiz.correctAnswer 
                    ? 'green' 
                    : selectedAnswer === index 
                    ? 'red' 
                    : 'gray'
                  : 'blue'
                }
                fullWidth
                leftSection={showResult && index === currentQuiz.correctAnswer ? (
                  <ThemeIcon color="green" size="sm">
                    <IconCheck style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                ) : showResult && selectedAnswer === index && index !== currentQuiz.correctAnswer ? (
                  <ThemeIcon color="red" size="sm">
                    <IconX style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                ) : null}
              >
                {option}
              </Button>
            ))}
          </Stack>
          {showResult && (
            <Paper p="md" withBorder bg={selectedAnswer === currentQuiz.correctAnswer ? 'var(--mantine-color-green-0)' : 'var(--mantine-color-red-0)'}>
              <Stack align="center" gap="sm">
                <Text fw={500} c={selectedAnswer === currentQuiz.correctAnswer ? 'green' : 'red'}>
                  {selectedAnswer === currentQuiz.correctAnswer ? '正解です！' : '不正解です。'}
                </Text>
                <Button onClick={handleNextQuestion}>
                  {currentQuizIndex < randomizedQuizData.length - 1 ? '次の問題へ' : 'クイズを終了'}
                </Button>
              </Stack>
            </Paper>
          )}
          <Button 
            onClick={handleRetire}
            variant="subtle"
            color="gray"
            disabled={showResult}
          >
            リタイア
          </Button>
        </Stack>
      </Card>
    </Container>
  )
}

export default App
