/* 
자바스크립트에서 함수를 선언하는 방법 3가지
- 함수 선언문(function statement)
- 함수 표현식(function expression)
- Function() 생성자 함수
*/

// 함수 선언문: 함수 이름 설정
function add(x,y){
    return x+y;
}

// 함수 표현식: 함수 이름은 optional. 보통 설정하지 않음
// - 함수 이름이 없으므로 익명함수(anonymous function)
var add1 = function(x,y){
    return x+y;
}

var plus = add1;

console.log(add(1,2));
console.log(add1(2,3));
console.log(plus(3,4));

var add2 = function sum(x,y){
    return x + y;
}

console.log(add2(10,20));




