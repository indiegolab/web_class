/* 
    클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 말한다.
    클로저는 JS를 이용한 고난도 테크닉을 구사하는데 필수적인 개념이다.
*/
var getCompletedStr = (function () {
  var buffAr = ["I am ", "", ". I live in ", "", ". I'am ", "", " years old."];
  return function (name, city, age) {
    // 이 부분이 클로저
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join("");
  };
})();

var str = getCompletedStr("Tom", "Dublin", 30);
console.log(str);
