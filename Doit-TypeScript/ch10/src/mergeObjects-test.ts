import {mergeObjects} from "./mergeObjects";

type INameable = { name: string };
type IAgeable = { age: number };

const nameAndAge: INameable & IAgeable = mergeObjects({name: 'Jack'}, {age: 25});
console.log(nameAndAge);