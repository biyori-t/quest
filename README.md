# README

TODO をクエスト風に管理するアプリ。

## For Developer

### アプリの実行方法

1. Electron のインストール
   1. プロジェクトルートディレクトリ直下で `npm install` を実行する
2. Renderer Process の環境構築
   1. `cd src/renderer`
   2. `npm install` を実行する
   3. `ng serve` でレンダラー側の動作確認をする
3. アプリ起動の確認
   1. `npm run build` でビルドする
   2. `npm start` でアプリの起動が出来ることを確認する

### Storybook

開発では Storybook を使って進める。

- `cd src/renderer` を実行する
- `npm run storybook` で Storybook の環境を立ち上げる
