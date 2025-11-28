/**
 * Favoritesコンポーネント
 * 
 * このコンポーネントは、ユーザーがお気に入りに登録した映画のリストを表示するページです。
 * 
 * 現在の実装では、お気に入りの映画がない場合の空の状態（Empty State）のみを表示しています。
 * 実際のアプリケーションでは、以下のような機能を実装することが一般的です：
 * - お気に入りに登録した映画のリストを表示
 * - お気に入りから削除する機能
 * - お気に入りが0件の場合の空の状態メッセージの表示（現在の実装）
 * 
 * このコンポーネントは、App.jsxで定義されたルーティングにより、
 * '/favorites'というURLパスでアクセスできます。
 */
function Favorites() {
  // return文で、このコンポーネントが表示するJSXを返します
  // この場合、1行で記述することもできますが、複数行に分けることも可能です
  // お気に入りページ全体を包むdiv要素です
  // className="favorites-empty"で、空の状態専用のCSSスタイルを適用します
  // このクラス名は、お気に入りが0件の場合のスタイリングに使用されます
  return (
    <div className="
      favorites-empty
      flex flex-col 
      justify-center 
      min-h-[60vh] 
      text-center
      bg-gray-300
      rounded-lg
      "
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        お気に入りの映画はありません
      </h2>
      <p className="text-gray-500">
        映画をお気に入りに追加すると、ここに表示されます
      </p>
    </div>
  )
}

// export default Favoritesで、このコンポーネントを他のファイルからインポートできるようにします
// 例えば、App.jsxで import Favorites from './pages/Favorites' のようにインポートできます
export default Favorites;