'use strict';
function fib(n) {// 0 の時は 0 を返す処理
    if (n === 0) {
      return 0;

    } else if (n === 1) {// 1 の時は 1 を返す処理
        return 1;
    }
    return fib(n - 1) + fib(n - 2);// それ以外の時は、前と、前の前のフィボナッチ数を足し合わせた数を返す
}

// 40 番目まで出力
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}