//Arrow Function - 화살표 함수
//실무에서 정말 많이 쓰임, 코드 수가 효율적으로 줄어듬.

//함수 선언식

function add() {

}

//함수 표현식
// var add = function () {
//     var sum = x1 + x2;
//     return x1 + x2;
// };

//Arrow Function - 화살표 함수
//function 키워드가 삭제되고 파라미터 부분이 바로 온다
var add = (x1, x2) => {
    return x1 + x2
};
//return이 한 줄인 경우에 중괄호와 리턴을 생략할 수 있음
var add = (x1, x2) => x1 + x2;

//return이 한 줄이 아닌 경우 기본형
var add = function () {
    var sum = x1 + x2;
    return sum;
};

var add2 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
};

//파라미터가 하나인 경우
function say(message) {

}

var say = message => {};

//파라미터가 없을 경우
function myFunction() {

}

var myFunction = () => {};