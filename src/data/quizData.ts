// クイズのデータ型定義
export type Quiz = {
  type: '風力計測' | '短距離' | '三段跳' | '走高跳' | '未定';
  question: string;
  options: string[];
  correctAnswer: number;
};

// NARクイズデータ
export const quizData: Quiz[] = [
  {
    type: '三段跳',
    question: `C2.1 正しい判定・対応は何ですか？
三段跳において、競技者は助走を開始直後、助走路を示すラインの外側に踏み出る。`,
    options: [
      "白旗",
      "赤旗",
    ],
    correctAnswer: 0
  },
  {
    type: '風力計測',
    question: `C13.1.1 風力計測員は、女子100mハードル3組の風力情報は以下のように示していることを確認した。情報はどのように公式に発表されるべきですか？
+0.16m／秒`,
    options: [
      "-0.1m／秒",
      "-0.16m／秒",
    ],
    correctAnswer: 0
  },
  {
    type: '風力計測',
    question: `C13.1 風力計測員は、女子100mハードル3組の風力情報は以下のように示していることを確認した。情報はどのように公式に発表されるべきですか？
    +2.03m／秒`,
    options: [
      "+2.1m／秒",
      "+2.03m／秒",
    ],
    correctAnswer: 0
  },
  {
    type: '未定',
    question: `A9.3 競技中に競技者が所持している場合、助力とみなされないものはどれですか？`,
    options: [
      "ビデオレコーダー",
      "無線送信機",
      "携帯電話",
      "リストクーラー",
    ],
    correctAnswer: 3,
  },
  {
    type: '未定',
    question: `B13.3 200メートルの場合、風向風速計は、トラックから最大____ メートル離して設置されるべきである。`,
    options: [
      "2",
      "50",
      "20",
    ],
    correctAnswer: 0,
  },
  {
    type: '走高跳',
    question: `B10.2 走高跳の競技者が、助走路におけるマーカーの最大数は、何個ですか？`,
    options: [
      "2",
      "1",
      "0",
    ],
    correctAnswer: 0,
  }
]; 