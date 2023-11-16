class Person3 {
    name: string;
    age?: number
    constructor(name: string, age?: number) {
        this.name = name; this.age = age;
    }
}
let jack3 : Person3 = new Person3('Jack', 25)
console.log(jack3) // Person3 { name: 'Jack', age: 25 }