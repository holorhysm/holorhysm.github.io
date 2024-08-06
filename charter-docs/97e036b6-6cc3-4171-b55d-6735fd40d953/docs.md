holorhysm developer teamにようこそ！
このファイルは、新しく譜面制作者としてholorhysm developer teamに加入した人向けの、制作準備の手順を示したドキュメントです。
まずはこのドキュメントの手順に従って譜面制作環境を整えてください。

## 注意

- わからないことがあったときは、Discordサーバーの「\#雑90_婆さんや飯はまだか」まで。なるべく回答します

## Visual Studio Codeのインストールと設定

Visual Studio Codeは、プログラムを編集したりするための「コードエディター」です。
譜面制作においても、譜面の保存やテストプレイなどのために使用します。

### Windows (VSCode設定)

1. VSCode本体と"Japanese Language Pack for Visual Studio Code"をインストールします。
	- [龍谷大学 理工学研究科の授業資料](https://www602.math.ryukoku.ac.jp/Prog1/vscode-win.html)を参考にしてください。
2. 以下の拡張機能をインストールします。
	- "Japanese Language Pack for Visual Studio Code" (Microsoft)
		- `ms-ceintl.vscode-language-pack-ja`で検索
		- 上記参考資料を最後まで進めるとインストールされているはずです。
	- "EditorConfig for VS Code" (EditorConfig.org)
		- `EditorConfig.EditorConfig`で検索
	- "Live Server" (Ritwick Dey)
		- `ritwickdey.LiveServer`で検索

### macOS (VSCode設定)

1. VSCode本体と"Japanse Language Pack for Visual Studio Code"をインストールします。
	- [龍谷大学 理工学研究科の授業資料](https://www602.math.ryukoku.ac.jp/Prog1/vscode-mac.html)を参考にしてください。
2. 以下の拡張機能をインストールします。
	- "Japanese Language Pack for Visual Studio Code" (Microsoft)
		- `ms-ceintl.vscode-language-pack-ja`で検索
		- 上記参考資料を最後まで進めるとインストールされているはずです。
	- "EditorConfig for VS Code" (EditorConfig.org)
		- `EditorConfig.EditorConfig`で検索
	- "Live Server" (Ritwick Dey)
		- `ritwickdey.LiveServer`で検索

## GitHubアカウントの作成と設定

1. 普段使っているブラウザーで、[https://github.com/](https://github.com/)にアクセスします。
2. ページ右上の「サインアップ」をクリックします。
3. なんか始まるので画面の指示通り入力して進めていきます。
	- 英語が読めない？そんなあなたに[Google翻訳](https://translate.google.co.jp/)
		- enter : (動)入力する
		- receive : (動)受け取る
		- verify : (動)検証する
	- ユーザーネームは覚えておいてください。
4. ユーザーネームを綾坂ことに伝えます。
	- Discord鯖でメンションしてください。(`@綾坂こと ユーザーネーム〇〇です、GitHub招待お願いします`など)
5. 綾坂側の作業を待ちます。
6. 登録に使ったメールアドレスに届いているメールを確認します。
	- "invited you to"みたいな文言が入ってると思います
	- そのメールの"join holorhysm"的なボタンを押してください。
7. [https://github.com/holorhysm](https://github.com/holorhysm)が開けることを確認してください。
	- 404 Not Found もしくは 403 Forbidden といったエラーが出たら「\#雑90_婆さんや飯はまだか」まで。

## Gitをインストール

### Windows (Gitインストール)

1. [https://git-scm.com/downloads](https://git-scm.com/download/win)にアクセスします。
2. 「**64**-bit Git for Windows **Setup**」をクリックします。
3. ダウンロードされたファイルを開いて、画面の指示に従ってインストールを進めます。
	- "Choosing the default editor used by Git"はVisual Studio Codeを探して選択してください。
	- "Adjusting the name of the initial branch in new repositories"は"Let Git Decide"でいいです。
4. Gitのインストールが終了したら、Visual Studio Codeを再起動します。

### macOS (Gitインストール)

1. homebrewをインストールします。
	- [https://brew.sh/ja/](https://brew.sh/ja/)を開きます。
	- "インストール"の下にあるコマンドをコピーして、ターミナル.appで実行します。
	- "y/n"みたいなことを聞かれると思いますが、"y"を入力しないと進まないと思います。
2. ターミナル.appで`brew install git`を実行します。
3. Gitのインストールが終了したら、Visual Studio Codeを再起動します。

## VSCodeでGitHubにログイン

1. Visual Studio Code左下の歯車マークの直上にある人マークをクリックします。
2. 「サインインして設定を同期する」をクリックします。
	- 「バックアップと同期の設定」かも。その場合は全部チェックして「サインイン」をクリック。
	- GitHubとMicrosoftのどちらでサインインするかを聞かれたら「GitHubでサインイン」をクリック。
3. たぶんブラウザでGitHubのログイン画面が開くので、ログインします。
	- リダイレクトを許可するか聞かれたら許可します。
4. (1)でクリックした人マークをクリックし、「\[GitHubのユーザー名\] (GitHub)」という選択肢があることを確認します。
5. Visual Studio Codeで「ターミナル」を開きます。
	- Windowsなら`Ctrl`+`Shift`+`@`、macOSなら`control`+`⇧shift`+`^(へ)`で開けます。
	- ウィンドウ上部の「ターミナル(T)」をクリックして、「新しいタイミなる」をクリックすると開けます。
6. 開いたターミナルで、`git config --global user.email "メールアドレス"`を実行します。
	- メールアドレスの部分には、GitHubアカウントの登録で使ったアドレスを入力します。
	- 例 : GitHubの登録に`test@example.com`を使ったなら、`git config --global user.email "test@example.com"`を実行
7. 同様に、`git config --global user.name "ユーザー名"`を実行します。
	- ユーザー名の部分には、GitHubアカウントのユーザー名を入力します。
	- 例 : ユーザー名が`octocat`なら、`git config --global user.name "octocat"`を実行
	- ここまで終わったらターミナル画面は閉じてOKです。
		- ターミナル画面右上の「×」をクリックすると閉じます。

## リポジトリのクローン

1. Visual Studio Codeで「ソース管理」画面を開きます。
	- 画面左に並んでいるいくつかのアイコンのうち、小さい丸3つを線が繋いでるアイコンをクリックすると開けます。
	- Windowsなら`Ctrl` + `Shift` + `G`、macOSなら`control` + `⇧shift` + `G`のショートカットでも開けます。
2. 「リポジトリの複製」をクリックします。
3. 「GitHubから複製」をクリックします。
	- "拡張機能 'GitHub' が GitHub を使用してサインインしようとしています。"が出たら「許可」をクリック。
4. 「holorhysm/core」をクリックします。
5. フォルダ選択画面が出るので、任意のフォルダを選択します。
	- 何もわからなければ、デスクトップフォルダを選択しておけば困り果てることはないと思います。 
6. 少し待つと、「クローンしたリポジトリを開きますか？」と出るので、「開く」をクリックします。
7. 「このフォルダー内のファイルの作成者を信頼しますか？」と出たら、「はい、作成者を信頼します」をクリックします。
8. なんかいっぱいファイルがあること、左下の方に「main」と書かれていることを確認します。

## 譜面制作をはじめるとき(ファイルの作成)

1. 左下の「main」をクリックします。
2. 「origin/song_(その楽曲を表す文字列)」をクリックします。
	- (その楽曲を表す文字列) : Shiny Smily Story (2022 ver.)なら "SSStory2022_IdolPJ" など。
3. 左下の表示が「song_(その楽曲を表す文字列)」になったことを確認して、そこをもう一度クリックします。
4. 「新しいブランチの作成…」をクリックします。
5. 「chart_(その楽曲を表す文字列)-(譜面難易度)」を入力してEnterを押します。
	- (譜面難易度) : Normal、Hardなど。
6. 左下の表示が「chart_(その楽曲を表す文字列)-(譜面難易度)」になったことを確認します。
7. Visual Studio Codeで「ソース管理」画面を開きます。
8. 「ブランチの発行」をクリックします。
	- クリックして数秒後、Discordの「\#程22_github-notify」に通知が来るはずです。
9. Visual Studio Codeで「エクスプローラー」画面を開きます。
	- 画面左に並んでいるいくつかのアイコンのうち、2枚の書類が重なったアイコンをクリックすると開けます。
	- Windowsなら、`Ctrl` + `Shift` + `E`のショートカットでも開けます。
	- macOSなら、`⌘command` + `⇧shift` + `E`のショートカットでも開けます。
10. chartsフォルダの中の(その楽曲を表す文字列)フォルダを右クリックします。
11. 「新しいファイル…」をクリックします。
12. 「(譜面難易度).jsonc」と入力してEnterを押します。
	- この"(譜面難易度).jsonc"が譜面ファイルになります。
13. 後述するテキスト(譜面ファイルのテンプレート)をコピーして、開いているエディタに貼り付けます。
14. ファイルを保存します。
	- Windowsなら`Ctrl`+`S`、macOSなら`⌘command`+`S`で保存できます。ショートカットキーに慣れると便利です。
15. Visual Studio Codeで「ソース管理」画面を開きます。
16. メッセージ欄に適当な文言を入力します。("とりあえずファイル作成"など)
17. 「コミット」の右側にある「∨」をクリックします。
18. 「コミットして同期」をクリックします。
	- なんかでてきたら「Don't show again」みたいなやつを押しておくと良いと思います。

### 譜面ファイルのテンプレート

```json
{
    "bpm": "120",
    "beats": "[4, 4]",
    "soflan": "1.00",
    "offset": 0.00,
    "notes": [
        { "type":    "push", "where": [-3.00,  3.00], "when": [  1,  0, 16], "speed": 1.00, },
    ],
    "decorator": [
        {
            "color": "pseudolong",
            "start": { "where": [-3.00,  3.00], "when": [ 1,  0,  16], },
            "end": { "where": [ 0.00,  0.00], "when": [ 2,  0,  16], },
            "easing": { "left": "Linear_InOut", "right": "Linear_InOut", }, "speed": 1.00,
        },
    ],
    "function": [],
}
```

## 譜面を確認する

- holorhysmの譜面は専用のビューワーがあります。譜面の確認などに使ってください。
	- [holorhysm editor (JSONC直接入力ver.)](https://editor-holorhysm.pages.dev/)
	- ページ左側の入力欄に譜面ファイル(.jsonc)の内容をコピペすると譜面が確認できます。
	- \[♫\]をクリックして楽曲の音声ファイルを選択すると、譜面が音楽に合わせて自動スクロールします。
	- その右にある4つのアイコンは譜面編集の便利ツールへのリンクです。
		- 2024-08-04現在、リンク先のツールはバグがあるので使用非推奨。
	- 1世代前のeditorも一応残しています。こちらは各項目の入力欄があります。
		- [holorhysm editor (各項目入力ver.)](https://feature-24.editor-holorhysm.pages.dev/)
		- こちらはバグの修正以外触らないつもりです。
		- ノーツ数が増えてくると重くなるので非推奨です。

## 譜面を編集する

holorhysmの譜面は、拡張子こそ`.jsonc`ですが中身はテキストファイルです。
お好きなテキストエディタで編集できます。
別紙「譜面ファイルの仕様」「譜面レギュレーション(暫定)」を参考に自由に編集してください。

- Visual Studio Code上で編集すると、タイプミスなどが見つけやすいので便利です。
- holorhysm editor上で編集すると、見た目を確認しながら編集できるので便利です。

### 譜面編集用便利ツール

譜面編集の省力化のために、よくやる操作を拙作「JS_magic-circle」でできるようにしています。

> JS_magic-circle
> > 『プログラミングは現代の魔法なので、呪文詠唱する魔法円的なものがあってもいいと思うんだ』
> 綾坂こと制作のJavaScript魔法詠唱ツールです(？)
> *(https://github.com/AyaExpTech/JS_magic-circle)*

使い方は「\#雑90_婆さんや飯はまだか」とかで聞いてください
とりあえずリンクだけ置いときます

- <a href="https://ayaexptech.github.io/JS_magic-circle/?t=%5B%0A%0A%5D&p=let%20a%3Dp%3D%3E%60%E4%BD%95%24%7Bp%7D%E3%81%9A%E3%82%89%E3%81%99%EF%BC%9F%60%2Cb%3D%2Bprompt(a%60%E5%B0%8F%E7%AF%80%60)%2Cc%3D%2Bprompt(a%60%E6%8B%8D%60)%2Cp%3D(s%2Cd)%3D%3Es.padStart(d)%2Cx%3D(n%2Ct%2Cd)%3D%3Ep(n.toFixed(t)%2Cd)%2Co%3DFunction(%60return%20%24%7Binput%7D%60)()%3Bo.some(n%3D%3E%7Bn.when%5B0%5D%2B%3Db%3Bn.when%5B1%5D%2B%3Dc*n.when%5B2%5D%2F4%3B%7D)%3Breturn%20%60%5B%5Cn%60%2Bo.map(n%3D%3E%60%20%20%20%20%20%20%20%20%7B%20%22type%22%3A%20%24%7Bp(%60%22%24%7Bn.type%7D%60%2C8)%7D%22%2C%20%22where%22%3A%20%5B%24%7Bx(n.where%5B0%5D%2C2%2C5)%7D%2C%20%24%7Bx(n.where%5B1%5D%2C2%2C5)%7D%5D%2C%20%22when%22%3A%20%5B%24%7Bx(n.when%5B0%5D%2C0%2C3)%7D%2C%20%24%7Bx(n.when%5B1%5D%2C0%2C2)%7D%2C%20%24%7Bx(n.when%5B2%5D%2C0%2C2)%7D%5D%2C%20%22speed%22%3A%20%24%7Bx(n.speed%2C2%2C4)%7D%2C%20%7D%2C%60).join(%22%5Cn%22)%20%2B%20%60%5Cn%5D%60%3B">ノーツずらしコピー</a>
- <a href="https://ayaexptech.github.io/JS_magic-circle/?t=%5B%0A%0A%5D&p=let%20p%3D(s%2Cd)%3D%3Es.padStart(d)%2Cx%3D(n%2Ct%2Cd)%3D%3Ep(n.toFixed(t)%2Cd)%2Co%3DFunction(%60return%20%24%7Binput%7D%60)()%3Bo.some(n%3D%3E%7Bn.where%3D%5B-n.where%5B1%5D%2C-n.where%5B0%5D%5D%7D)%3Breturn%20%60%5B%5Cn%60%2Bo.map(n%3D%3E%60%20%20%20%20%20%20%20%20%7B%20%22type%22%3A%20%24%7Bp(%60%22%24%7Bn.type%7D%60%2C8)%7D%22%2C%20%22where%22%3A%20%5B%24%7Bx(n.where%5B0%5D%2C2%2C5)%7D%2C%20%24%7Bx(n.where%5B1%5D%2C2%2C5)%7D%5D%2C%20%22when%22%3A%20%5B%24%7Bx(n.when%5B0%5D%2C0%2C3)%7D%2C%20%24%7Bx(n.when%5B1%5D%2C0%2C2)%7D%2C%20%24%7Bx(n.when%5B2%5D%2C0%2C2)%7D%5D%2C%20%22speed%22%3A%20%24%7Bx(n.speed%2C2%2C4)%7D%2C%20%7D%2C%60).join(%22%5Cn%22)%20%2B%20%60%5Cn%5D%60%3B">ノーツ左右反転</a>
- <a href="https://ayaexptech.github.io/JS_magic-circle/?t=%5B%0A%0A%5D&p=let%20a%3Dp%3D%3E%60%E4%BD%95%24%7Bp%7D%E3%81%9A%E3%82%89%E3%81%99%EF%BC%9F%60%2Cb%3D%2Bprompt(a%60%E5%B0%8F%E7%AF%80%60)%2Cc%3D%2Bprompt(a%60%E6%8B%8D%60)%2Cp%3D(s%2Cd)%3D%3Es.padStart(d)%2Cx%3D(n%2Ct%2Cd)%3D%3Ep(n.toFixed(t)%2Cd)%2Co%3DFunction(%60return%20%24%7Binput%7D%60)()%3Bo.some(n%3D%3E%7Bn.start.when%5B0%5D%2B%3Db%3Bn.start.when%5B1%5D%2B%3Dc*n.start.when%5B2%5D%2F4%3Bn.end.when%5B0%5D%2B%3Db%3Bn.end.when%5B1%5D%2B%3Dc*n.end.when%5B2%5D%2F4%3B%7D)%3Breturn%20%60%5B%5Cn%60%2Bo.map(n%3D%3E%60%5C%0A%20%20%20%20%20%20%20%20%7B%0A%24%7Bp(%22%22%2C12)%7D%22color%22%20%3A%20%24%7BJSON.stringify(n.color).replace(%2F%2C%2Fg%2C%22%2C%20%22)%7D%2C%0A%24%7Bp(%22%22%2C12)%7D%22start%22%20%3A%20%7B%20%22where%22%3A%20%5B%24%7Bx(n.start.where%5B0%5D%2C2%2C5)%7D%2C%20%20%24%7Bx(n.start.where%5B1%5D%2C2%2C5)%7D%5D%2C%20%22when%22%3A%20%5B%24%7Bx(n.start.when%5B0%5D%2C0%2C3)%7D%2C%20%24%7Bx(n.start.when%5B1%5D%2C0%2C2)%7D%2C%20%24%7Bx(n.start.when%5B2%5D%2C0%2C2)%7D%5D%2C%20%7D%2C%0A%24%7Bp(%22%22%2C12)%7D%22end%22%20%20%20%3A%20%7B%20%22where%22%3A%20%5B%24%7Bx(n.end.where%5B0%5D%2C2%2C5)%7D%2C%20%20%24%7Bx(n.end.where%5B1%5D%2C2%2C5)%7D%5D%2C%20%22when%22%3A%20%5B%24%7Bx(n.end.when%5B0%5D%2C0%2C3)%7D%2C%20%24%7Bx(n.end.when%5B1%5D%2C0%2C2)%7D%2C%20%24%7Bx(n.end.when%5B2%5D%2C0%2C2)%7D%5D%2C%20%7D%2C%0A%24%7Bp(%22%22%2C12)%7D%22easing%22%3A%20%7B%20%22left%22%3A%20%22%24%7Bn.easing.left%7D%22%2C%20%22right%22%3A%20%22%24%7Bn.easing.right%7D%22%2C%20%7D%2C%20%22speed%22%3A%20%24%7Bx(n.speed%2C2%2C1)%7D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%60).join(%22%22)%20%2B%20%60%5Cn%5D%60%3B">デコレーターずらしコピー</a>
- <a href="https://ayaexptech.github.io/JS_magic-circle/?t=%5B%0A%0A%5D&p=let%20p%3D(s%2Cd)%3D%3Es.padStart(d)%2Cx%3D(n%2Ct%2Cd)%3D%3Ep(n.toFixed(t)%2Cd)%2Co%3DFunction(%60return%20%24%7Binput%7D%60)()%3Bo.some(n%3D%3E%7Bn.start.where%3D%5B-n.start.where%5B1%5D%2C-n.start.where%5B0%5D%5D%3Bn.end.where%3D%5B-n.end.where%5B1%5D%2C-n.end.where%5B0%5D%5D%7D)%3B%0Areturn%20%60%5B%5Cn%60%2Bo.map(n%3D%3E%60%5C%0A%20%20%20%20%20%20%20%20%7B%0A%24%7Bp(%22%22%2C12)%7D%22color%22%20%3A%20%24%7BJSON.stringify(n.color).replace(%2F%2C%2Fg%2C%22%2C%20%22)%7D%2C%0A%24%7Bp(%22%22%2C12)%7D%22start%22%20%3A%20%7B%20%22where%22%3A%20%5B%24%7Bx(n.start.where%5B0%5D%2C2%2C5)%7D%2C%20%20%24%7Bx(n.start.where%5B1%5D%2C2%2C5)%7D%5D%2C%20%22when%22%3A%20%5B%24%7Bx(n.start.when%5B0%5D%2C0%2C3)%7D%2C%20%24%7Bx(n.start.when%5B1%5D%2C0%2C2)%7D%2C%20%24%7Bx(n.start.when%5B2%5D%2C0%2C2)%7D%5D%2C%20%7D%2C%0A%24%7Bp(%22%22%2C12)%7D%22end%22%20%20%20%3A%20%7B%20%22where%22%3A%20%5B%24%7Bx(n.end.where%5B0%5D%2C2%2C5)%7D%2C%20%20%24%7Bx(n.end.where%5B1%5D%2C2%2C5)%7D%5D%2C%20%22when%22%3A%20%5B%24%7Bx(n.end.when%5B0%5D%2C0%2C3)%7D%2C%20%24%7Bx(n.end.when%5B1%5D%2C0%2C2)%7D%2C%20%24%7Bx(n.end.when%5B2%5D%2C0%2C2)%7D%5D%2C%20%7D%2C%0A%24%7Bp(%22%22%2C12)%7D%22easing%22%3A%20%7B%20%22left%22%3A%20%22%24%7Bn.easing.left%7D%22%2C%20%22right%22%3A%20%22%24%7Bn.easing.right%7D%22%2C%20%7D%2C%20%22speed%22%3A%20%24%7Bx(n.speed%2C2%2C1)%7D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%60).join(%22%22)%20%2B%20%60%5Cn%5D%60%3B">デコレーター左右反転</a>
- <a href="https://ayaexptech.github.io/JS_magic-circle/?t=%E3%81%93%E3%81%A3%E3%81%A1%E3%81%AF**%E5%A7%8B%E7%82%B9%E3%81%8B%E3%82%89**16%E5%88%86%E9%96%93%E9%9A%94%E3%81%A7%E9%85%8D%E7%BD%AE%0A%E2%91%A01%E3%81%A4%E3%81%AEdecorator%E3%82%92%E8%A1%A8%E3%81%99Object%E3%82%92%E3%82%B3%E3%83%94%E3%83%BC%E3%81%97%E3%81%A6%E3%81%93%E3%81%AE%E6%AC%84%E3%81%AB%E5%85%A5%E5%8A%9B%0A%E2%91%A1chart.beats%E3%81%AE%E5%80%A4%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%83%97%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AB%E7%94%A8%E6%84%8F(%E4%BA%8C%E9%87%8D%E5%BC%95%E7%94%A8%E7%AC%A6%E3%81%AF%E4%B8%8D%E8%A6%81)%0A%E2%91%A2%E5%91%AA%E6%96%87%E3%82%92%E5%AE%9F%E8%A1%8C&p=let%20p%3DMath.PI%2Ch%3D.5%2Co%3D_%3D%3E_**h%2Cu%3D_%3D%3E1-_%2Cc%3D1%2F3%2Cq%3D%22In%22%2Cw%3D%22Out%22%2CS%3D%22Sine_%22%2CQ%3D%22Quad_%22%2CC%3D%22Cubic_%22%2CU%3D%22Quart_%22%2CX%3D%22Expo_%22%2CI%3D%22Circ_%22%2Cg%3Dq%2Bw%2Ca%2Cs%2Ct%2Cm%2Cr%2Cx%2Cn%3D(e%2Cy)%3D%3E(a%3Du(y)%2Cs%3Dy**2%2Ct%3D2*y%2Cm%3Du(t)%2Cr%3Do(y-s)%2Cx%3D_%3D%3Ee%3D%3D_%2Cx(S%2Bq)%3F2*Math.acos(a)%2Fp%3Ax(S%2Bw)%3F2*Math.asin(y)%2Fp%3Ax(S%2Bg)%3FMath.acos(m)%2Fp%3Ax(Q%2Bq)%3Fo(y)%3Ax(Q%2Bw)%3Fu(o(a))%3Ax(Q%2Bg)%3Fy%3Ch%3Fo(y*h)%3Au(o(m))*h%3Ax(C%2Bq)%3Fy**c%3Ax(C%2Bw)%3Fu(a**c)%3Ax(C%2Bg)%3Fy%3Ch%3F(y*.25)**c%3Au(m**c*h)%3Ax(U%2Bq)%3Fo(o(y))%3Ax(U%2Bw)%3Fu(o(o(a)))%3Ax(U%2Bg)%3Fy%3Ch%3Fo(o(y%2F8))%3Au(o(o(m))*h)%3Ax(X%2Bq)%3FMath.log2(y)*.1%2B1%3Ax(X%2Bw)%3F0-Math.log2(a)*.1%3Ax(X%2Bg)%3Fy%3Ch%3FMath.log2(t)*.05%2Bh%3Ah-Math.log2(2-t)*.05%3Ax(I%2Bq)%3Fo(t-s)%3Ax(I%2Bw)%3Fu(o(u(s)))%3Ax(I%2Bg)%3Fy%3Ch%3Fr%3Au(r)%3Ay)%2Cf%3DFunction(%22x%22%2C%60return%20%24%7Bprompt(%60%E8%AD%9C%E9%9D%A2%E3%81%AE%20beats%20%E3%81%AE%E5%80%A4%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%20(%22%E3%81%AF%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84)%60)%7D%60)%2Cd%3DFunction(%60return%20%24%7Binput%7D%60)()%2Cz%3D%5B%2C0%5D%3Bfor%20(let%20_%3D2%3B_%3Cd.end.when%5B0%5D%2B10%3B_%2B%2B)z%5B_%5D%3Dz%5B_-1%5D%2Bf(_-1)%5B0%5D*4%2Ff(_-1)%5B1%5D%3Blet%20v%3D%22%22%2Cj%3Dz%5Bd.start.when%5B0%5D%5D%2Bd.start.when%5B1%5D*4%2Fd.start.when%5B2%5D%2Ck%3Dz%5Bd.end.when%5B0%5D%5D%2Bd.end.when%5B1%5D*4%2Fd.end.when%5B2%5D%3Bfor%20(let%20_%3Dj%3B_%3C%3Dk%3B_%2B%3D.25)%7Blet%20b%3Dz.findIndex(t%3D%3Et%3E_)-1%2Co%3D(_-j)%2F(k-j)%2Cl%3Dd.start.where%5B0%5D%2B(d.end.where%5B0%5D-d.start.where%5B0%5D)*n(d.easing.left%2Co)%2Cr%3Dd.start.where%5B1%5D%2B(d.end.where%5B1%5D-d.start.where%5B1%5D)*n(d.easing.right%2Co)%2Cm%3D%22%20%22%3Bl%3D%3Dr%3Fl%3C0%3Fl-%3D.01%3Ar%2B%3D.01%3A0%3Bv%2B%3D%60%20%20%20%20%20%20%20%20%7B%20%22type%22%3A%20%20%20%22hover%22%2C%20%22where%22%3A%20%5B%24%7Bl.toFixed(2).padStart(5)%7D%2C%20%24%7Br.toFixed(2).padStart(5)%7D%5D%2C%20%22when%22%3A%20%5B%24%7B(%22%22%2Bb).padStart(3%2Cm)%7D%2C%24%7B((_-z%5Bb%5D)*4%2B%22%22).padStart(3%2Cm)%7D%2C%2016%5D%2C%20%22speed%22%3A%201.00%2C%20%7D%2C%5Cn%60%3B%7Dreturn%20v%3B">疑似ロング生成(始点基準)</a>
- <a href="https://ayaexptech.github.io/JS_magic-circle/?t=%E3%81%93%E3%81%A3%E3%81%A1%E3%81%AF**%E6%A5%BD%E6%9B%B2%E3%82%92%E5%9F%BA%E6%BA%96%E3%81%AB**16%E5%88%86%E9%96%93%E9%9A%94%E3%81%A7%E9%85%8D%E7%BD%AE%0A%E2%91%A01%E3%81%A4%E3%81%AEdecorator%E3%82%92%E8%A1%A8%E3%81%99Object%E3%82%92%E3%82%B3%E3%83%94%E3%83%BC%E3%81%97%E3%81%A6%E3%81%93%E3%81%AE%E6%AC%84%E3%81%AB%E5%85%A5%E5%8A%9B%0A%E2%91%A1chart.beats%E3%81%AE%E5%80%A4%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%83%97%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AB%E7%94%A8%E6%84%8F(%E4%BA%8C%E9%87%8D%E5%BC%95%E7%94%A8%E7%AC%A6%E3%81%AF%E4%B8%8D%E8%A6%81)%0A%E2%91%A2%E5%91%AA%E6%96%87%E3%82%92%E5%AE%9F%E8%A1%8C&p=let%20p%3DMath.PI%2Ch%3D.5%2Co%3D_%3D%3E_**h%2Cu%3D_%3D%3E1-_%2Cc%3D1%2F3%2Cq%3D%22In%22%2Cw%3D%22Out%22%2CS%3D%22Sine_%22%2CQ%3D%22Quad_%22%2CC%3D%22Cubic_%22%2CU%3D%22Quart_%22%2CX%3D%22Expo_%22%2CI%3D%22Circ_%22%2Cg%3Dq%2Bw%2Ca%2Cs%2Ct%2Cm%2Cr%2Cx%2Cn%3D(e%2Cy)%3D%3E(a%3Du(y)%2Cs%3Dy**2%2Ct%3D2*y%2Cm%3Du(t)%2Cr%3Do(y-s)%2Cx%3D_%3D%3Ee%3D%3D_%2Cx(S%2Bq)%3F2*Math.acos(a)%2Fp%3Ax(S%2Bw)%3F2*Math.asin(y)%2Fp%3Ax(S%2Bg)%3FMath.acos(m)%2Fp%3Ax(Q%2Bq)%3Fo(y)%3Ax(Q%2Bw)%3Fu(o(a))%3Ax(Q%2Bg)%3Fy%3Ch%3Fo(y*h)%3Au(o(m))*h%3Ax(C%2Bq)%3Fy**c%3Ax(C%2Bw)%3Fu(a**c)%3Ax(C%2Bg)%3Fy%3Ch%3F(y*.25)**c%3Au(m**c*h)%3Ax(U%2Bq)%3Fo(o(y))%3Ax(U%2Bw)%3Fu(o(o(a)))%3Ax(U%2Bg)%3Fy%3Ch%3Fo(o(y%2F8))%3Au(o(o(m))*h)%3Ax(X%2Bq)%3FMath.log2(y)*.1%2B1%3Ax(X%2Bw)%3F0-Math.log2(a)*.1%3Ax(X%2Bg)%3Fy%3Ch%3FMath.log2(t)*.05%2Bh%3Ah-Math.log2(2-t)*.05%3Ax(I%2Bq)%3Fo(t-s)%3Ax(I%2Bw)%3Fu(o(u(s)))%3Ax(I%2Bg)%3Fy%3Ch%3Fr%3Au(r)%3Ay)%2Cf%3DFunction(%22x%22%2C%60return%20%24%7Bprompt(%60%E8%AD%9C%E9%9D%A2%E3%81%AE%20beats%20%E3%81%AE%E5%80%A4%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%20(%22%E3%81%AF%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84)%60)%7D%60)%2Cd%3DFunction(%60return%20%24%7Binput%7D%60)()%2Cz%3D%5B%2C0%5D%3Bfor%20(let%20_%3D2%3B_%3Cd.end.when%5B0%5D%2B10%3B_%2B%2B)z%5B_%5D%3Dz%5B_-1%5D%2Bf(_-1)%5B0%5D*4%2Ff(_-1)%5B1%5D%3Blet%20v%3D%22%22%2Cj%3Dz%5Bd.start.when%5B0%5D%5D%2Bd.start.when%5B1%5D*4%2Fd.start.when%5B2%5D%2Ck%3Dz%5Bd.end.when%5B0%5D%5D%2Bd.end.when%5B1%5D*4%2Fd.end.when%5B2%5D%3Bfor%20(let%20_%3DMath.ceil(j*4)*.25%3B_%3C%3Dk%3B_%2B%3D.25)%7Blet%20b%3Dz.findIndex(t%3D%3Et%3E_)-1%2Co%3D(_-j)%2F(k-j)%2Cl%3Dd.start.where%5B0%5D%2B(d.end.where%5B0%5D-d.start.where%5B0%5D)*n(d.easing.left%2Co)%2Cr%3Dd.start.where%5B1%5D%2B(d.end.where%5B1%5D-d.start.where%5B1%5D)*n(d.easing.right%2Co)%2Cm%3D%22%20%22%3Bl%3D%3Dr%3Fl%3C0%3Fl-%3D.01%3Ar%2B%3D.01%3A0%3Bv%2B%3D%60%20%20%20%20%20%20%20%20%7B%20%22type%22%3A%20%20%20%22hover%22%2C%20%22where%22%3A%20%5B%24%7Bl.toFixed(2).padStart(5)%7D%2C%20%24%7Br.toFixed(2).padStart(5)%7D%5D%2C%20%22when%22%3A%20%5B%24%7B(%22%22%2Bb).padStart(3%2Cm)%7D%2C%24%7B((_-z%5Bb%5D)*4%2B%22%22).padStart(3%2Cm)%7D%2C%2016%5D%2C%20%22speed%22%3A%201.00%2C%20%7D%2C%5Cn%60%3B%7Dreturn%20v%3B">疑似ロング生成(楽曲基準)</a>

## テストプレイ

VSCodeの拡張機能「Live Server」を使うと、PCや実機で譜面のテストプレイができます。

> 手順の説明が面倒なのでとりあえず流れだけ書いておきます。
> ヘルプは「\#雑90_婆さんや飯はまだか」などで受け付けます！！

### ファイルを準備する

- 本体プログラムを最新の状態に更新します
	- mainブランチからchartブランチにpullすればいいはず
- 譜面DBファイル(`/charts/_list.jsonc`)に楽曲・譜面の記載があることを確認します
	- たぶん譜面制作を開始する前に綾坂が用意してるはず……
- 楽曲音声ファイルがあることを確認します
	- たぶん譜面制作を開始する前に綾坂が用意してるはず……

### PCでテストする

- VSCode右下にある「Go Live」を押します
- ちょっと待つとデフォルト設定しているブラウザでテスト画面が開きます
- 楽曲一覧の中に制作中の楽曲・譜面の選択肢が入ってるはずです
- Chrome DevToolsはスマホ画面のエミュレートができるので、それを使うとより実機に近い形で確認できるはずです
	- [これ](https://atmarkit.itmedia.co.jp/ait/articles/1403/20/news050.html)

### スマホでテストする

たぶんテストプレイは実機でやりたいと思うので、その流れも一応。

- (両方) PCとスマホを同じネットワークに接続します
	- Wi-Fi環境なら同じルーターに接続
	- 有線LAN環境の人は知らねぇ！がんばれ！！
- (PC) PCのローカルIPアドレスを確認します
	- ほとんどの人は`192.168.xxx.xxx`の形のはずです
		- `192.168.xxx.xxx`の他に、`10.xxx.xxx.xxx`、`172.(16~31).xxx.xxx`も正しいローカルIPアドレスです
	- Windowsならipconfigコマンド、macOSは設定画面から確認できると思います
	- 参考 : [CMAN.jpの記事](https://www.cman.jp/network/term/ip/p2/)
	- ローカルIPアドレス固定しないと厄介かも。固定方法はルーターの機種によってまちまち。
- (PC) Live ServerのHTTPS設定を有効にします
	- [@ma2shita氏の記事](https://qiita.com/ma2shita/items/297c812a6cd09b5e82c8)などを参考に……
		- macOSの人は証明書はmkcertで作りましょう、[こちらの記事](https://parashuto.com/rriver/tools/mkcert-for-local-ssl-dev-env)参照
			- `brew install mkcert`, `mkcert -install`, `cd ./Desktop/`, `mkcert (ローカルIPアドレス)`
				- 4コマンド目は記事内では`mkcert localhost`ですが`mkcert (ローカルIPアドレス)`に読み替えてください
			- **`key.pem`で終わる方のファイルは流出すると悪者が攻撃し放題になるので要注意**
	- この手順いらないかもしれないけど、必要だった気がするので書くだけ書いておきます
- (PC) VSCode右下にある「Go Live」を押します
- (PC) ちょっと待つとデフォルト設定しているブラウザでテスト画面が開きます
- (スマホ) holorhysm推奨環境に指定されているブラウザで、そのIPアドレスの5500番ポートにアクセスします
	- ローカルIPアドレスが`192.168.0.128`なら、アドレスバーに`https://192.168.0.128:5500/`と入力します
	- なんか危険とか言われるかもしれませんが、「詳細を表示」→「〇〇にアクセス」とかを押してください
	- おそらくこれでテスト画面が開くので、あとはPCでのテストと同様に。