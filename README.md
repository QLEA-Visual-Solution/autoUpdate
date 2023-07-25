## テンプレートについて<br>
情報更新日の自動更新機能を搭載したスクリプトです。<br>
<br>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー<br>

### 使用方法<br>
「autoUpdate.js」を任意のページに設置。<br>

更新日が入る箇所に下記のように、それぞれ情報更新日に「js-todayElm」、次回情報更新日（取引条件の有効期限）に「js-nextElm」のクラスを設定。
```bash=
<p>情報更新日：<span class="js-todayElm"></span></p>
<p>次回情報更新日：<span class="js-nextElm"></span></p>
<p>取引条件の有効期限：<span class="js-nextElm"></span></p>
```
これで自動更新のセットアップが完了です。以降更新日がアクセスするたびに更新されます。