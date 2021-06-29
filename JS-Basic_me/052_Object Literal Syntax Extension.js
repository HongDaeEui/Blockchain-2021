//Object Literal Syntax Extension
//키로 변수에 해당하는 할당 값을 넣을 수 있게 해준다

var firstName = "John";
var lastName = "Doe";

var person = {
    firstName: firstName,
    lastName: lastName
}

// person[firstName]


//키값을 동적으로 할당
var type = "student";
var socre = {
    [type]: "John Doe",
    // sutdent : "Jhon Doe"
    score: 95
}

// score.student
// score["student"]
// score[type]