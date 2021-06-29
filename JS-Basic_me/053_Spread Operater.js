//Spread Operator
//배열, 문자열

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3]; //1, 2, 3
var arr3 = [...arr2, ...arr1]; //각각의 값으로 분해한 다음에 새롭게 배열로 만들어줌.

var cd = "CD"; //C,D
var alphabet = ["A", "B", ...cd];

console.log(alphabet);