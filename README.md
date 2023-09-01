# クイズビルダー
vanilla JS,HTML,CSS(+Bootstrap5)で作成されたクイズアプリ


## 使用した素材
audioフォルダ内のすべての.mp3ファイルは、**OtoLogic**様の素材を使用しております。

## このアプリの仕様
- ナビゲーションバー
  - クイズ一覧・作成ページ、トップページに移動できる
  - ダークモード・ライトモードの切り替えができる(その内容をページをリロードしても保持できる)
- トップページ
  - ボタンをクリックすると、
    - クイズ一覧ページに移動できる
    - クイズ作成ページに移動できる
    - クイズをJSONファイルから読み込める


- クイズ作成ページ
  - クイズを作成できる
    - 択一(選択肢の中のどれか一つが正解)・複数回答(選択肢の中のどれか一つ**以上**が正解)・入力形式から、好きな回答形式を選ぶことができ、回答形式に選択肢がある場合は最大4つまで作成できる
    - 最大10問まで作成できる
    - クイズのオプションから、タイマーを1~600秒の間で設定することと、問題をすべて2択(回答形式は択一になる)を作成することができる
    - 各問題のオプションから、問題の解説をつけることができる
    - 必須のフォーム(クイズのタイトル、それぞれの問題では問題文、選択肢のテキスト、正解の設定)が入力されていなかったら、クイズを作成できない
  - クイズの下書きが自動的に保存される
  - 下書きが空になると、その下書きは自動的に削除される(トースト通知される)
  - クイズの下書きを一覧表示で確認できる(クイズ一覧ページと機能はほとんど同じ、不正なデータが含まれる場合、その下書きは表示されない)
    - 下書きの情報(タイトル、説明、問題数)を確認できる
    - 下書きを一つずつ選択して削除できる
    - すべての下書きを削除できる(2段階の承認が必要、2段階目の削除ボタンは約3秒待ってから押すことができる)
    - 下書きを検索できる(アルファベットは大文字小文字が関係なく検索できる)
    - 下書きからクイズ作成の続きを始められる
   

- クイズ一覧ページ
  - 保存されているすべてのクイズを一覧表示で確認できる(不正なデータが含まれる場合、そのクイズは表示されない)
  - クイズを検索できる(アルファベットは大文字小文字が関係なく検索できる)
  - それぞれのクイズの三点リーダーを押すと、
    - クイズを共有(JSON形式でダウンロード)できる
    - クイズの内容を編集できる
    - クイズを削除できる
  - クイズで遊べる(クイズページに移動)
  - クイズの情報(タイトル、説明、問題数、オプションがあるならタイマーの秒数、解説の有無)を確認できる
  - クイズをJSON形式でアップロードし保存することができる
  - クイズをすべて削除できる(2段階の承認が必要、2段階目の削除ボタンは約3秒待ってから押すことができる)
 

- クイズページ
  - いつでもクイズの音量を調節できる(その内容をページをリロードしても保持できる)
  - 保存したクイズで遊ぶことができる
  - それぞれの回答形式に合わせた問題などを表示し、オプションにタイマーがあればタイマーも表示する
  - ユーザが回答を決定した後、正誤判定を行い、問題の解説があればそれを表示する
  - クイズ終了後、円グラフとテキストで結果を表示する。全問正解であれば紙吹雪が降る。もう一度遊ぶボタンが表示され、押すともう一度同じクイズを遊ぶことができる。クイズ一覧に戻るボタンも表示され、押すとクイズ一覧に移動できる
 

- その他
  - 最後に訪れたページ(トップページ・クイズ作成ページ・クイズ一覧ページ・クイズページ)をcookieで記録し、このアプリを訪れた時、そのcookieがあれば記録されているページに遷移する
  - はじめてトップページ以外のページに訪れた時のみ、ウェルカムツアー(簡単な使い方の説明)を表示する

 
## N予備校 動くWebページコンテスト2023夏 審査員の皆様へ
応募締め切り日の9月6日まで、ソースコード等を改変する可能性があります。
