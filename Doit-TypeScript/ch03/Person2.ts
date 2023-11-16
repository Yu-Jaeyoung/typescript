class Person2 {
    constructor(public name: string, public age?: number) {
    }
}
let jack2 : Person2 = new Person2('Jack', 25);
console.log(jack2) // Person2 { name: 'Jack', age: 25 }