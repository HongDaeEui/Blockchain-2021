 //Rest Parameter, 파라미터로 전달받은 데이터가 몇 개인지 모를 때 쓸 수 있음.

 // function add(x1, x2) {
 //     return x1 + x2;
 // }
 // add(2, 5, 3, 7, 43, 21); // 배열로 들어감

 function add(...nums) { // ...파라미터 
     var sum = 0;
     for (var n of nums) {
         sum += n;
     }

     return sum;
 }

 console.log(add(2, 5, 3, 7, 43, 21)); // 배열로 들어감

 //var nums = [2, 5, 3, 7, 43, 21];