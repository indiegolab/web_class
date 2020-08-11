////----- 1. AJAX와 비동기

function ajax(){
    var oReq = new XMLHttpRequest();

    oReq.addEventListener("load", function(){
        console.log(this.responseText);
    });

    oReq.open("GET","http://www.example.org/example.txt");
    oReq.send();
}

/* 4라인의 익명함수는 8라인, 9라인보다 더 늦게 실행되는 함수입니다.

이 익명 함수는 비동기로 실행되며, 이벤트큐에 보관되다가 load이벤트가 발생하면(서버로부터 데이터를 브라우저가 받으면) 그때 call stack 에 실행되고 있는 함수가 없어서 비어있다면 stack에 올라와서 실행됩니다.
 */

////----- 2. Ajax 응답처리 - JSON.parse 활용

var oReq2 = new XMLHttpRequest();
oReq2.addEventListener("load", function(){
    console.log(this.responseText);
    console.log(typeof this.responseText);
    var jsonobj = JSON.parse(this.responseText);
    
    console.log(jsonobj.favorites[1]);
});

oReq2.open("GET","./json.txt");
oReq2.send();

// 브라우저에서는 JSON객체를 제공하며, 이를 활용해서 자바스크립트 객체로 변환할 수 있음

