/* 
실습5
class 가 'red'인 노드만 삭제하시오. */

// red를 모두 선택
var reds = document.querySelectorAll("li.red");

// 기준점 만들기
var parent = document.querySelector("ul");

//for문, removeChild 사용해서 모두 삭재
for(var i=0; i<reds.length; i++){
//   parent.removeChild(reds[i]);
}

/* 실습6
section 태그의 자손 중에 blue라는 클래스를 가지고 있는 노드가 있다면, 
그 하위에 있는 h2 노드를 삭제하시오. */

// for문 이용하기 - blue
var bluenode = document.querySelectorAll("section .blue");
console.log(bluenode)

for(var i=0; i<bluenode.length; i++){
  var section = bluenode[i].closest("section");
  var h2 = section.querySelector("h2");
  
  section.removeChild(h2);
  console.log(section)
}

// Array 이용하기 - green
var greennode = document.querySelectorAll("section .green");
Array.from(greennode).forEach((function(v) {
    var section2 = v.closest("section");
    var h22 = section2.querySelector("h2");
    section2.removeChild(h22);
    console.log(greennode)
    console.log(section2)
    
}))

