// MovieCardコンポーネントをインポートします
// '../components/MovieCard'は、現在のファイル（pages/Home.jsx）から見て、
// 一つ上の階層（src）のcomponentsフォルダ内のMovieCard.jsxファイルを指します
import MovieCard from '../components/MovieCard'

// ReactライブラリからuseStateフックをインポートします
// useStateは、コンポーネント内で状態（state）を管理するためのReactの機能です
// フック（Hook）とは、関数コンポーネントでReactの機能を使うための特別な関数です
import { useState } from 'react'

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
    // preventDefault()で、フォーム送信時のデフォルトの動作（ページリロード）を防ぎます
    // これにより、ページがリロードされずにReactアプリケーションが動作し続けます
    e.preventDefault()
    
    // 現在の検索クエリをアラートで表示します（デバッグ用）
    // 実際のアプリケーションでは、ここでAPIを呼び出して検索結果を取得します
    alert(searchQuery)
    
    // 検索後、検索入力欄を空にするために、searchQueryのstateを空文字列にリセットします
    setSearchQuery('')
  }

  // return文で、このコンポーネントが表示するJSXを返します
  // ホームページ全体を包むdiv要素です
  // className='home'で、CSSスタイルを適用するためのクラス名を指定しています
  return (
    <div className='home'>
      {/* 
        検索フォームです
        onSubmit={handleSearch}で、フォームが送信されたときにhandleSearch関数を実行します
        className='search-form'で、フォーム専用のCSSスタイルを適用します
      */}
      <form onSubmit={handleSearch} className='search-form'>
        {/* 
          検索入力欄です
          type='text'で、テキスト入力欄であることを指定します
          placeholder='映画を検索'で、入力欄が空のときに表示されるヒントテキストを設定します
          className='search-input'で、入力欄専用のCSSスタイルを適用します
          value={searchQuery}で、入力欄の値をsearchQueryのstateと同期させます（制御コンポーネント）
          onChange={(e) => setSearchQuery(e.target.value)}で、入力値が変更されたときに
          searchQueryのstateを更新します
          e.target.valueは、入力欄の現在の値を取得します
        */}
        <input 
          type='text' 
          placeholder='映画を検索' 
          className='search-input' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* 
          検索ボタンです
          type='submit'で、このボタンをクリックするとフォームが送信されることを指定します
          className='search-button'で、ボタン専用のCSSスタイルを適用します
        */}
        <button type='submit' className='search-button'>検索</button>
      </form>

      {/* 
        映画リストを表示するグリッドコンテナです
        className='movies-grid'で、グリッドレイアウトのCSSスタイルを適用します
      */}
      <div className='movies-grid'>
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