# リピートグロース CRM - GitHub Pages公開用

このフォルダ内のファイルをGitHubリポジトリにアップロードすると、GitHub Pagesで静的LPとして公開できます。

## 含まれるファイル

- `index.html`: トップページ
- `styles.css`: デザイン
- `script.js`: 導入事例スライダー
- `.nojekyll`: GitHub Pages用の設定ファイル

## 公開手順

1. GitHubで新しいリポジトリを作成
2. このフォルダ内のファイルをすべてアップロード
3. GitHubのリポジトリ画面で `Settings` を開く
4. 左メニューの `Pages` を開く
5. `Build and deployment` の `Source` で `Deploy from a branch` を選択
6. `Branch` で `main` / `/root` を選択
7. `Save` をクリック

数分後に、GitHub PagesのURLが表示されます。

## 問い合わせ先の変更

現在、問い合わせボタンは `mailto:hello@example.com` です。
公開前に `index.html` 内の `hello@example.com` を実際のメールアドレスに変更してください。

## 独自ドメインを使う場合

独自ドメインを使う場合は、GitHub Pagesの `Custom domain` にドメインを入力します。
必要に応じて、このフォルダに `CNAME` ファイルを追加し、中にドメイン名だけを書きます。

例:

```txt
repeat-growth-crm.jp
```
