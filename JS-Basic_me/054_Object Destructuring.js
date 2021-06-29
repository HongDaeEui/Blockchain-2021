//Object Destructuring
//실무에서 많이 쓰임. 오브젝트가 복잡한 경우가 많은데 내가 필요로 하는 오브젝트로 구성해서 쓸 수 있음.

function getPerson() {
    return {
        firstName: "John",
        lastNmame: "Doe",
        age: 37,
        email: "john@gmail.com"
    }

};

var person = getPerson();
console.log(person.firstName);
console.log(person.lastNmame);

var {
    firstName,
    lastName
} = getPerson(); //포함하고자 하는 키값의 밸류만 담김.
console.log(firstName);
console.log(lastName);