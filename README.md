# InfoBlend / ブログコミュニケーションサービス

## サービス概要

私は個人でWebエンジニアリングを学ぶ際に、多くの技術ブログから学びを得ました。その際、「継続した学習」と「知識の共有」の文化に感銘を受けました。InfoBlendは管理者の投稿する技術ブログを閲覧できるサービスです。ユーザーは自由にコメントを投稿することができ、コミュニケーションをとることができます。


## サービスURL

[](https://info-blend.vercel.app/)  
レスポンシブデザインに対応しているので、PC、スマートフォンなどお好きなデバイスで快適にご覧いただけます。

## 使用技術一覧

**フロントエンド:** Next.js 14.2.24 / React 18.3.1 / TypeScript 5.3.3

- コード解析: ESLint
- フォーマッター: Prettier
- CSSフレームワーク: Tailwind CSS / shadcn/ui
- 主要パッケージ: prisma 6.4.1 / Zod 3.24.2 // Contentlayer2 0.5.4 / Editor.js 4.0.5

**インフラ:** vercel

**認証:** NextAuth.js 4.24.11

## 主要対応一覧

### ユーザー向け

**機能**

- Googleアカウントを利用したユーザー登録 / ログイン機能
- GitHubアカウントを利用したユーザー登録 / ログイン機能
- アカウント情報変更機能(現在は名前のみ)
- アカウント削除機能
- 管理者ブログの取得 / 閲覧
- ブログへのコメント閲覧機能
- ブログへのコメント投稿機能（ログイン時のみ利用可能）

**画面**

- トースト表示
- ローディングアイコン表示
- 404 / 500エラーのカスタム画面
- レスポンシブデザイン

### 非ユーザー向け

**システム**

- Next.jsのSSR / CSRの使い分けによるサービスの高速化、検索エンジン対策(SEO)の強化

**テスト**

- クロスブラウザテスト
    - PC
        - Windows10 / 11: Google Chrome / Firefox / Microsoft Edge
        - Mac: Google Chrome / Firefox / Safari
    - スマートフォン
        - Android: Google Chrome
        - iOS: Google Chrome / Safari
