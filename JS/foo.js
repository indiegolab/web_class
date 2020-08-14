// Object()를 이용해서 foo 빈 객체 생성
var foo = new Object();

// foo 객체 프로퍼티 생성: name, age, gender
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log("타입은: "+typeof foo); // (출력값) object
console.log(foo);
// CodeRuner 실행 : alt ctrl n

// 객체 리터럴 방식으로 생성하기

var foo1 = {
    name: 'foo1',
    age: 31,
    gender: 'female'
};
console.log("타입은: "+typeof foo1); // (출력값) object
console.log(foo1);


/* 객체 프로퍼티 읽기 2가지 방식 . , [] */

// 객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

// 객체 프로퍼티 갱신
foo.age = 35;
console.log(foo['age']);

// 객체 프로퍼티 동적 생성
foo.major = 'Industrial Engineering';
console.log(foo.major);

// 대괄호 표기법만을 사용해야 하는 경우
foo['full-name'] = 'foo bar';
// console.log(foo.full-name);
console.log(foo['full-name']);
