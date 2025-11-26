// App.cssファイルをインポートして、このコンポーネント専用のスタイルを適用します
import './css/App.css'

import { Routes, Route } from 'react-router-dom'

// Homeページコンポーネントをインポートします
// './pages/Home'は、現在のファイルから見てpagesフォルダ内のHome.jsxファイルを指します
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
/**
 * Appコンポーネント
 * 
 * このコンポーネントは、アプリケーション全体のルーティング（URLに応じたページの切り替え）を
 * 管理するメインコンポーネントです。
 * 
 * React Routerを使用して、URLパスに応じて異なるページコンポーネントを表示します。
 * - '/' (ルートパス) → Homeコンポーネントを表示
 * - '/favorites' → Favoritesコンポーネントを表示
 */
function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

// export default Appで、このコンポーネントを他のファイルからインポートできるようにします
// default exportなので、他のファイルでは import App from './App' のようにインポートできます
export default App
