
//// apply 함수를 활용한 명시적인 this 바인딩
/* Person('foo', 30,'man') 함수를 호출하면서
    this를 foo 객체에 '명시적'으로 바인딩하는 것을 의미함 */
// 생성자 함수
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
// foo 빈 객체 생성
var foo = {};
// apply 메서드 호출
Person.apply(foo,['foo', 30, 'man']);
console.log(foo);

/* 
    apply()나 call() 메서드는 this를 원하는 값으로 명시적으로 매핑해서
    특정 함수나 메서드를 호출할 수 있다는 장점이 있다.
    - 이들의 대표적 용도: arguments 객체와 같은 유사 배열 객체에서 배열 메서드를 사용하는 경우
    arguments 객체는 실제 배열이 아니므로, pop(), shift() 같은 표준 배열 메서드 사용 불가능
    but, apply() 메서드를 이용하면 가능하다.
    
*/