interface INameable {
    name: string;
}

function getName(o: INameable) {
    return o != undefined ? o.name : 'unknown name';
}

let n = getName(undefined);
console.log(n);                             // unknown name
console.log(getName({name: 'Jack'}));    // Jack