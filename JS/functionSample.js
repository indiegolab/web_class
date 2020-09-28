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
// JS에서 함수는 값으로 취급된다

//**** 즉시 실행 함수: 익명 함수를 정의함과 동시에 결과 출력 */
/* 즉시 실행 함수는 같은 함수를 다시 호출할 수 없다.
    따라서 즉시 실행 함수의 이러한 특징을 이용한다면
    - 최초 한 번의 실행만을 필요로 하는 초기화 코드 부분 등에 이용할 수 있다 
    - jQuery와 같은 JS 라이브러리 소스 코드 전체가 즉시 실행 함수로 감싸져 있다
        -> 라이브러리 내의 변수들은 함수 외부에서 접근 불가능
        -> 전역네임스페이스를 더럽히지 않음. 라이브러리 간 변수 이름 충돌 방지
    */
(function (name){
    console.log('This is the immediate function -> '+name);
})('foo');
