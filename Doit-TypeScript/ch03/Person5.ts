abstract class AbstractPerson5 {
    abstract name: string;
    constructor(public age?: number) {}
}

class Person5 extends AbstractPerson5 {
    constructor(public name: string, age?: number) {
        super(age);
    }
}
let jack5 : Person5 = new Person5('Jack',25);
console.log(jack5) // Person5 { name: 'Jack', age: 25 }