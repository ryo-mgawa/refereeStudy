// クイズのデータ型定義
export type Quiz = {
  question: string;
  options: string[];
  correctAnswer: number;
};

// サンプルのクイズデータ
export const quizData: Quiz[] = [
  {
    question: "2024年パリオリンピックの陸上競技の開催期間は？",
    options: [
      "7月26日〜8月11日",
      "8月1日〜8月17日",
      "8月5日〜8月21日",
      "8月10日〜8月26日"
    ],
    correctAnswer: 0
  },
  {
    question: "100m走の世界記録保持者は？",
    options: [
      "ウサイン・ボルト",
      "ユセイン・ボルト",
      "ジャスティン・ガトリン",
      "ヨハン・ブレーク"
    ],
    correctAnswer: 0
  },
  {
    question: "走り幅跳びの世界記録は？",
    options: [
      "8.95m",
      "8.90m",
      "8.85m",
      "8.80m"
    ],
    correctAnswer: 0
  }
]; 