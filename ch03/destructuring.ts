import {IPerson} from "./IPerson_ICompany";

let jack: IPerson = {name: 'Jack', age: 25};
let {name, age} = jack;
console.log(name, age); // Jack 25