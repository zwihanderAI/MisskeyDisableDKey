# Misskey Disable D Key

Misskeyで D キーを押したときのライトテーマとダークテーマの切り替えを無効化するTampermonkey用Userscriptです。

Misskeyには、このショートカットキーを無効化する設定がありません。本スクリプトは、ブラウザ側で D キーの入力をMisskeyより先に受け取り、Misskey側の処理を止めることで切り替えを防ぎます。

## 動作

* 対象は修飾キーを押していない小文字の d だけです
* Shift、Ctrl、Alt、Cmdと組み合わせた入力は対象外です
* 入力欄、テキストエリア、編集可能な要素にフォーカスがある場合は何もしません。通常の文字入力には影響しません
* D キー以外のショートカットキーには影響しません

## インストール

### 1. Tampermonkeyをインストールする

Chromeまたは使用しているChromium系ブラウザへTampermonkeyをインストールします。

### 2. 新しいUserscriptを作成する

Tampermonkeyのダッシュボードを開き、新規スクリプトを追加します。

### 3. スクリプトを貼り付ける

生成されたテンプレートを削除し、このリポジトリの `MisskeyDisableDKey.js` の内容を貼り付けて保存します。

### 4. 対象のMisskeyサーバーを確認する

スクリプト先頭の `@match` は `https://buicha.social/*` になっています。他のMisskeyサーバーで使う場合は、そのサーバーのURLに合わせて `@match` を変更するか、行を追加してください。

```javascript
// @match       https://example.com/*
```

保存後にMisskeyのページを再読み込みすると、スクリプトが動作します。

## 注意

* Misskey本体やフォークの仕様変更により、動作しなくなる場合があります

## ライセンス

MIT License

Copyright (c) 2026 zwihanderAI
