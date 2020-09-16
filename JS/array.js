/* 
배열
    굳이 크기 지정하지 않아도 됨.
    어떤 위치에 어느 타입의 데이터를 저장해도 에러 발생하지 않음
    - '객체'가 프로퍼티의 이름으로 대괄호나 마침표 표기법 사용
    - But, '배열'은 배열 내 인덱스값으로 접근

*/
var colorArr = ['orange', 'green', 'blue', 'purple','red'];
console.log(colorArr[0]);
console.log(colorArr[1]);
console.log(colorArr[2]);

// 배열 동적 생성: 값을 순차적으로 넣을 필요없이 아무 인덱스에나 값을 동적으로 추가 가능
var emptyArr = [];
console.log(emptyArr[0]);

emptyArr[0] = 100;
emptyArr[3] = 'good';
emptyArr[6] = true;
console.log(emptyArr)
console.log(emptyArr.length)















