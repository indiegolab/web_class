/* 
for in 문: 객체에 포함된 모든 프로퍼티에 대해 루프 수행 가능 */

// 객체 리터럴을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    age: 30,
    major: 'CS'
};

// for in 문을 활용 객체 프로퍼티 출력
var prop;
for (prop in foo){
    console.log(prop, foo[prop]);
}

// delete: 객체 프로퍼티 삭제 (객체 삭제 아님)
console.log(foo.age);
delete foo.name;
console.log(foo.age);

delete foo;
console.log(foo.name);


