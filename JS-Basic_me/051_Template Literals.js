//Template Literals, 실무에서 많이 쓰임
//Hello Jeremy. Welcome!
function hello(name) {
    console.log("Hello" + name + ". Welcome!");
}

//backtick
function hello2(name1, name2 = "Jeremy") {
    console.log(`Hello ${name1}. Welcome ${name2}`); // 한줄에 변수를 같이 표현할 수 있다.
}

hello2("Jeremy");