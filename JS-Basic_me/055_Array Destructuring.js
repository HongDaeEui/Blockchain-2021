//Array Destructuring

function getScores() {
    return [70, 21, 100];
}

var scores = getScores();
scores[0];
scores[1];
scores[2];
//원래는 이렇게 빼서 쓴다. 하지만 지리정보를 외부 라이브러리에서 배열 형태로 위도, 경도를 갖고 올 수 있다.

function getCoordinates() {
    return [12.32222, 34.2333];

}

//[경도, 위도];
var coodinates = getCoordinates(); //[경도, 위도]
coodinates[0]; //경도
coodinates[1]; //위도 
//이 경우 각각 뭐를 가리키는지 알아보기 쉽지 않음.

//이 때 변수명을 지어줘서 인지하기 쉽게 만들어줌.
var [longititue, latitude] = getCoordinates(); //[경도, 위도]
console.log(longititue);; //경도
console.log(latitude); //위도

//배열로 리턴
function getPerson() {
    return [
        "John", "Doe", ["Red", "Green", "Blue"]
    ];
}

var [firstName, lastName, favoritecolor] = getPerson();
console.log(favoritecolor);

var [firstName, lastName, [color1, color2, color3]] = getPerson();
console.log(color1);