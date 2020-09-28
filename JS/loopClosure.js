// 루프 안에서 클로저 사용하기 예시

// 잘못된 예시
function countSecond1(howmany) {
  for (var i = 1; i <= howmany; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
};
countSecond1(3);

//잘 된 예시
function countSecond2(howmany) {
  for (var i = 5; i <= howmany; i++) {
    (function (currentI) {              // 클로저 부분
      setTimeout(function () {
        console.log(currentI);
      }, currentI * 1000);
    })(i);                               // i를 받아서 currentI에 복사해서 사용함
  }
};
countSecond2(7);
