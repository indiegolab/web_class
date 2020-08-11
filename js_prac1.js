/* 실습 1 지금 나온 DOM API를 사용해서, strawberry 아래에 새로운 과일을 하나 더 추가하시오.
추가 된 이후에는 다시 삭제하시오.
 */
var mango = document.createElement("li");
var mangoText = document.createTextNode("망고");
mango.appendChild(mangoText);

var parent = document.querySelector("ul");

parent.appendChild(mango);

//실습2: insertBefore메서드를 사용해서, orange와  banana 사이에 새로운 과일을 추가하시오.
var pine = document.createElement("li");
var pineText = document.createTextNode("파인애플");
pine.appendChild(pineText);
//pine에 pineText를 넣고

var parent = document.querySelector("ul");

var banana = document.querySelector("li:nth-child(3)");

parent.appendChild(mango);

parent.insertBefore(pine, banana);



// 실습3: 실습2를 insertAdjacentHTML메서드를  사용해서, orange와 banana 사이에 새로운 과일을 추가하시오.

var orange = document.querySelector("li:nth-child(2)");
orange.insertAdjacentHTML('afterend', "<li>오렌지</li>")


// 실습4: apple을 grape 와 strawberry 사이로 옮기시오

var strawberry = document.querySelector("li:nth-child(7)"); // strawberry 선택
var apple = document.querySelector("li:nth-child(1)")  // apple 선택

parent.insertBefore(apple, strawberry)  // apple을 strawberry 앞으로 옮겨라.
// insertBefore 특징: element를 move해줌. (copy-paste가 아니라)