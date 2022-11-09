'use strict';

/*このコードで memo という名前の Map を作っています。キーには順番を、値には答えを格納します。
ここで変数名を memo としているのは、 このように一度計算した結果を保存しておく方法を「メモ化」というためです。*/
const memo = new Map();

memo.set(0, 0);// 0 の時は 0 を返す処理
memo.set(1, 1);// 1 の時は 1 を返す処理

function fib(n) {
    if (memo.has(n)) {
      return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);// 前と、前の前のフィボナッチ数を足し合わせた数を返す
    memo.set(n, value);
    return value;
}

// 40 番目まで出力
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}