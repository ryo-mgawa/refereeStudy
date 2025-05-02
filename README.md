# Referee Study

## 概要

このプロジェクトは、ReactとTypeScriptを使用して構築されたWebアプリケーションです。Viteをビルドツールとして使用し、Mantine UIコンポーネントライブラリを採用しています。

## 技術スタック

- React 19
- TypeScript
- Vite
- Mantine UI
- ESLint
- Prettier

## プロジェクト構成

```
├── src/
│   ├── components/     # Reactコンポーネント
│   ├── utils/         # ユーティリティ関数
│   ├── data/          # データファイル
│   ├── assets/        # 静的アセット
│   ├── App.tsx        # メインアプリケーションコンポーネント
│   ├── main.tsx       # アプリケーションエントリーポイント
│   └── index.css      # グローバルスタイル
├── public/            # 静的ファイル
├── dist/              # ビルド出力ディレクトリ
└── package.json       # プロジェクト設定と依存関係
```

## セットアップ

1. リポジトリをクローン

```bash
git clone [repository-url]
cd refereeStudy
```

2. 依存関係のインストール

```bash
npm install
```

3. 開発サーバーの起動

```bash
npm run dev
```

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルドを作成
- `npm run preview` - ビルドしたアプリケーションをプレビュー
- `npm run lint` - ESLintでコードをチェック
- `npm run format` - Prettierでコードをフォーマット
- `npm run format:check` - フォーマットチェック

## 開発環境

- Node.js
- npm
- VS Code (推奨)

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で公開されています。
