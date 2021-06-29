//모든 개발자들이 가장 어려워 하는 것
//regular expression(정규식)
//전화번호와 이메일 두 가지를 보통 쓴다. 실무에서 유용하게 쓰임.
//보면 이해가 될 수 있을 정도면 됨.

var txt = "Hello World! World";

var regxp = /World/g; //g 다 찾아, 대소문자를 구분함
var regxp = /World/gi; //g 다 찾아, 대소문자를 구분없이


console.log(txt.replace(regxp, "Jeremy"));


var str = "123abc456kkk";
var regxp1 = /[0-9]/g;
var result = str.match(regxp1);
console.log(result);

var str2 = "re, green, red, gree, gen, red, yellow, blue";
var regexp2 = /(red|green)/g;
var result2 = str2.match(regexp2);
console.log(result2);

// var tel = "010-3008-9614"
// //010 숫자 - 4자리 숫자 - 4자리
// var regexp3 = /^(010)-\d{4}/-\d{4}/;
// // ^ : 시작이 ~로 시작되야 해
// console.log(regxp3.test(tel));

//seungwon.go@gmail.com
//aaa234@abc.co.kr
var regexp4 = /^\w+@\w+(\.\w{2,3})+$/;
//\w 문자, + 하나 이상, \. .이 옴. {2,3} 두자리 세자리올 수 있음, ()+ 1번이상, $ 더 이상 오면 안됨.

console.log(regexp4.test("seun@gmail.com"));