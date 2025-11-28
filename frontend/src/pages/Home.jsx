import MovieCard from '../components/MovieCard'
import { useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/api'

/**
 * Homeコンポーネント
 * 
 * このコンポーネントは、映画検索機能と映画リストを表示するホームページです。
 * 主な機能：
 * - 検索フォームで映画タイトルを検索
 * - 検索クエリに一致する映画のみを表示
 * - 各映画をMovieCardコンポーネントで表示
 */
function Home() {
  // useStateフックを使用して、検索クエリ（検索入力欄の値）を管理するstateを定義します
  // useState('')は、初期値を空文字列''として設定します
  // searchQuery: 現在の検索クエリの値を保持する変数（読み取り専用）
  // setSearchQuery: 検索クエリの値を更新する関数
  // 配列の分割代入という構文で、useStateの戻り値から2つの値を取得しています
  const [searchQuery, setSearchQuery] = useState('')
  
  // 映画データを格納する配列です
  // 各映画オブジェクトは、id（一意の識別子）、title（タイトル）、
  // release_date（公開年）、url（画像URL）のプロパティを持ちます
  // 実際のアプリケーションでは、このデータはAPIから取得することが多いです
  const movies = [
    { id: 1, title: 'The Dark Knight', release_date: '2008', url: '' },
    { id: 2, title: 'Joes', release_date: '1994', url: '' },
    { id: 3, title: 'バタフライ・エフェクト', release_date: '2002', url: '' },
    { id: 4, title: '白夜行', release_date: '2000', url: '' },
  ]

  /**
   * handleSearch関数
   * 
   * 検索フォームが送信されたときに実行されるイベントハンドラー関数です。
   * @param {Event} e - フォーム送信イベントオブジェクト
   */
  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery('')
  }

  // return文で、このコンポーネントが表示するJSXを返します
  // ホームページ全体を包むdiv要素です
  // className='home'で、CSSスタイルを適用するためのクラス名を指定しています
  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form mb-8 flex gap-4 max-w-2xl mx-auto'>
        <input 
          type='text' 
          placeholder='映画を検索' 
          className='search-input flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type='submit' className='search-button px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium'>
          検索
        </button>
      </form>

      {/* 
        映画リストを表示するグリッドコンテナです
        className='movies-grid'で、グリッドレイアウトのCSSスタイルを適用します
      */}
      <div className='movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {/* 
          movies配列をmapメソッドでループ処理して、各映画をMovieCardコンポーネントで表示します
          
          movies.map((movie) => ...)は、配列の各要素に対して処理を実行し、
          新しい配列（JSX要素の配列）を返します
          
          movie.title.toLowerCase().startsWith(searchQuery)は、条件レンダリングです：
          - movie.title.toLowerCase(): 映画タイトルを小文字に変換
          - .startsWith(searchQuery): 検索クエリで始まるかどうかをチェック
          - &&演算子: 左側の条件がtrueの場合のみ、右側のJSXを表示します
          
          <MovieCard movie={movie} key={movie.id} />は：
          - movie={movie}: MovieCardコンポーネントにmovieオブジェクトをpropsとして渡します
          - key={movie.id}: Reactがリストの各要素を識別するための一意のキーを指定します
            これは、Reactが効率的に再レンダリングを行うために必要です
        */}
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

// export default Homeで、このコンポーネントを他のファイルからインポートできるようにします
// 例えば、App.jsxで import Home from './pages/Home' のようにインポートできます
export default Home;