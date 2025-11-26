// ReactライブラリからStrictModeコンポーネントをインポートします
// StrictModeは、開発中に潜在的な問題を検出するための開発用ツールです
// 本番環境では何も表示しませんが、開発中に警告を表示してくれます
import { StrictMode } from 'react'

// react-dom/clientからcreateRoot関数をインポートします
// createRootは、React 18で導入された新しいAPIで、アプリケーションのルートを作成します
// これにより、ReactアプリケーションをDOMにレンダリング（表示）できます
import { createRoot } from 'react-dom/client'

// react-router-domからBrowserRouterコンポーネントをインポートします
// BrowserRouterは、ブラウザのURLを使ってルーティング（ページ遷移）を管理するコンポーネントです
// これにより、App.jsx内で定義したRoutesとRouteが正しく動作します
import { BrowserRouter } from 'react-router-dom'

import './css/index.css'

// Appコンポーネントをインポートします
// './App.jsx'は、現在のファイルから見て同じ階層にあるApp.jsxファイルを指します
// .jsxの拡張子は省略することもできますが、明示的に書くことで分かりやすくなります
import App from './App.jsx'

/**
 * アプリケーションのエントリーポイント
 * 
 * このファイルは、Reactアプリケーションが最初に実行される場所です。
 * 以下の処理を行います：
 * 1. HTMLのroot要素を取得
 * 2. createRootでReactのルートを作成
 * 3. Appコンポーネントをレンダリング（画面に表示）
 * 
 * document.getElementById('root')は、index.html内のid="root"の要素を取得します
 * この要素が、Reactアプリケーション全体のコンテナとなります
 */
// StrictModeコンポーネントは、開発中に以下のような問題を検出して警告を表示します：
// - 非推奨のAPIの使用
// - 予期しない副作用
// - レガシーなライフサイクルメソッドの使用
// 本番環境では何も表示されませんが、開発中は問題を早期に発見するのに役立ちます
// BrowserRouterコンポーネントは、React Routerを使用するために必要です
// このコンポーネントでAppコンポーネントを包むことで、App.jsx内で定義したRoutesとRouteが正しく動作します
// BrowserRouterは、ブラウザのURL（例：http://localhost:3000/favorites）を監視し、それに応じて適切なコンポーネントを表示します
// Appコンポーネントを表示します。これが、アプリケーション全体のメインコンポーネントです
// Appコンポーネント内で、ルーティングや各ページの表示が管理されます
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
