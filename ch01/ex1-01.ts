let person = {nickname: "Jack", age: 25};
let {nickname, age} = person; // name = "Jack", age = 25

let array = [1, 2, 3, 4];
let [head, ...rest] = array; // head = 1, res = [2, 3, 4]

let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1