# 🏯 古民家宿 Webサイト制作プロジェクト

> **就活ポートフォリオプロジェクト**  
> 実在する古民家宿のWebサイトをモダンな技術スタックで再現・改良したプロジェクトです。

## 📋 プロジェクト概要

### 🎯 目的
- 実際のビジネス要件に基づくWebサイト制作
- モダンなフロントエンド技術の習得・実証
- デザイン再現スキルとUI/UX改善提案力のアピール
- プロジェクト管理・Git運用スキルの実証

### 🌐 参考サイト
- **元サイト**: [宿-SHUKU- | 犬山城下町の古民家宿](https://shuku-kokon.com/)
- **制作方針**: デザイン再現 + UX改善 + パフォーマンス最適化

## 🛠 技術スタック

### フロントエンド
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Font**: Google Fonts (Noto Serif JP)

### 開発・運用
- **Package Manager**: npm
- **Code Quality**: ESLint + Prettier
- **Version Control**: Git + GitHub
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 🏗 プロジェクト構造

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # ホームページ
│   └── globals.css     # グローバルスタイル
├── components/
│   ├── ui/             # 再利用可能なUI部品
│   ├── sections/       # ページセクション
│   └── layout/         # レイアウト関連
├── lib/                # ユーティリティ関数
├── types/              # TypeScript型定義
└── public/             # 静的ファイル
```

## 🎨 デザイン・UX改善点

### 実装予定の改善
- [ ] Core Web Vitals 100点達成
- [ ] アクセシビリティ向上 (WCAG 2.1 AA準拠)
- [ ] SEO最適化 (構造化データ、meta tags)
- [ ] レスポンシブデザイン強化
- [ ] アニメーション・インタラクション改善
- [ ] PWA対応検討

## 📈 開発進行状況

### Phase 1: 基盤構築 🚧
- [x] GitHub リポジトリ作成
- [x] プロジェクト設計・技術選定
- [ ] Next.js プロジェクト初期化
- [ ] 開発環境構築

### Phase 2: UI実装 🎨
- [ ] レイアウト・コンポーネント設計
- [ ] ヒーローセクション
- [ ] ナビゲーション
- [ ] 各セクション実装

### Phase 3: 機能実装 ⚡
- [ ] アニメーション実装
- [ ] レスポンシブ対応
- [ ] パフォーマンス最適化

### Phase 4: 仕上げ・デプロイ 🚀
- [ ] テスト実装
- [ ] デプロイ設定
- [ ] ドキュメント整備

## 🔍 就活アピールポイント

### 技術力
- **モダンReact**: Server Components、Hooks活用
- **TypeScript**: 型安全な開発
- **パフォーマンス**: Lighthouse満点を目指した最適化
- **アクセシビリティ**: inclusive design の実践

### 開発プロセス
- **要件定義**: 元サイト分析からの要件抽出
- **Git運用**: feature branch戦略、適切なコミットメッセージ
- **コード品質**: linting、formatting、testing
- **プロジェクト管理**: スケジュール管理、進捗の可視化

## 📝 学習・成長記録

### 新たに習得した技術
- Next.js 14 App Router
- Framer Motion
- Tailwind CSS応用

### 課題と解決策
開発中に遭遇した課題と解決アプローチを記録予定

## 🚀 デプロイ

### 本番環境
- **URL**: 準備中
- **Platform**: Vercel

### 開発環境セットアップ
```bash
# リポジトリクローン
git clone https://github.com/kotarouuu31/ryokan-portfolio-website.git

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
```

## 📞 Contact

制作者: **あなたの名前**
- GitHub: [@kotarouuu31](https://github.com/kotarouuu31)
- Email: your-email@example.com

---

*このプロジェクトは就活ポートフォリオとして制作されました。実際のビジネス要件を想定し、現代のWeb開発のベストプラクティスを実践することを目的としています。*