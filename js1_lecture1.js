//  JS 단순 배열

var a =[];
var a = [1,2,3, "hello", null, true, []];


var b= [4];
b[1000] = 3;
console.log(b.length); 
console.log(b[500]);

// push 메서드
var c = [4];
c.push(6);
console.log(c.length);

//// indexOf, join, slice, concat 활용하기

// 배열의 원소 특정 값이 들어있는지 확인
var t = [1,2,3,4];
[1,2,3,4].indexOf(3) // 2번째에 3이 있음

// join: 문자열 합치기
t1= t.join();
console.log(t1)

// concat: 배열합치기
t2= t.concat(10,20);
console.log(t2)

//배열 탐색

//forEach는 함수를 인자로 받는다.
["apple","tomato"].forEach(function(value) {
    console.log(value)
 });

// map 메서드 예제

var newArr = ["apple","tomato"].map(function(value, index){
    return index+"번째 과일은 "+value+"입니다";
});

console.log(newArr)