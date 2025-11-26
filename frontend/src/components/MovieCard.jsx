/**
 * MovieCardコンポーネント
 * 
 * このコンポーネントは、1つの映画の情報を表示するカード形式のUIコンポーネントです。
 * 
 * @param {Object} props - コンポーネントに渡されるプロパティ（props）
 * @param {Object} props.movie - 映画の情報を格納したオブジェクト
 * @param {number} props.movie.id - 映画の一意の識別子
 * @param {string} props.movie.title - 映画のタイトル
 * @param {string} props.movie.release_date - 映画の公開年
 * @param {string} props.movie.url - 映画のポスター画像のURL
 * 
 * Props（プロパティ）とは：
 * - 親コンポーネントから子コンポーネントにデータを渡すための仕組みです
 * - このコンポーネントは、Homeコンポーネントから映画データを受け取ります
 * - propsは読み取り専用で、コンポーネント内で変更することはできません
 */
function MovieCard({movie}) {
  // console.logは、開発中にデータを確認するためのデバッグ用の関数です
  // ブラウザの開発者ツール（F12キー）のコンソールに、movieオブジェクトの内容が表示されます
  // 本番環境では、このようなデバッグ用のコードは削除することが一般的です
  console.log(movie);

  /**
   * onFavoriteClick関数
   * 
   * お気に入りボタンがクリックされたときに実行されるイベントハンドラー関数です。
   * 現在は、クリック時にアラートを表示するだけですが、
   * 実際のアプリケーションでは、お気に入りリストに追加する処理を実装します。
   */
  function onFavoriteClick() {
    // alert関数で、ブラウザにアラートダイアログを表示します
    // これは、ユーザーに何かしらの通知を表示するための簡単な方法です
    alert('Favorite clicked');
  }
  
  // return文で、このコンポーネントが表示するJSXを返します
  // 映画カード全体を包むdiv要素です
  // className='movie-card'で、カード全体のCSSスタイルを適用します
  return (
    <div className='movie-card'>
      {/* 
        映画のポスター画像を表示する領域です
        className='movie-poster'で、ポスター専用のCSSスタイルを適用します
      */}
      <div className='movie-poster'>
        {/* 
          imgタグで、映画のポスター画像を表示します
          src={movie.url}で、画像のURLを指定します（movieオブジェクトのurlプロパティを使用）
          alt={movie.title}で、画像が表示できない場合やスクリーンリーダーで読み上げる際の
          代替テキストとして、映画のタイトルを指定します
          {}で囲むことで、JavaScriptの式（変数やプロパティ）をJSX内で使用できます
        */}
        <img src={movie.url} alt={movie.title} />
        
        {/* 
          ポスター画像の上に重ねて表示されるオーバーレイ領域です
          className='movie-overlay'で、オーバーレイ専用のCSSスタイルを適用します
          通常、このようなオーバーレイは、ホバー時（マウスを乗せたとき）に表示されます
        */}
        <div className='movie-overlay'>
          {/* 
            お気に入りボタンです
            className='favorite-btn'で、ボタン専用のCSSスタイルを適用します
            onClick={onFavoriteClick}で、ボタンがクリックされたときにonFavoriteClick関数を実行します
            ♥は、ハートマークの絵文字で、お気に入りを表すアイコンとして使用されています
          */}
          <button className='favorite-btn' onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      
      {/* 
        映画の情報（タイトルと公開年）を表示する領域です
        className='movie-info'で、情報表示領域専用のCSSスタイルを適用します
      */}
      <div className='movie-info'>
        {/* 
          h3タグで、映画のタイトルを表示します
          {movie.title}で、movieオブジェクトのtitleプロパティの値を表示します
          {}で囲むことで、JSX内でJavaScriptの式を評価できます
        */}
        <h3>{movie.title}</h3>
        
        {/* 
          pタグで、映画の公開年を表示します
          {movie.release_date}で、movieオブジェクトのrelease_dateプロパティの値を表示します
        */}
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

// export default MovieCardで、このコンポーネントを他のファイルからインポートできるようにします
// 例えば、Home.jsxで import MovieCard from '../components/MovieCard' のようにインポートできます
export default MovieCard;