Promise.resolve(1)
    .then(value => console.log(value));

Promise.resolve('hello')
    .then(value => console.log(value));

Promise.resolve([1, 2, 3])
    .then(value => console.log(value));

Promise.resolve({name: 'Jack', age: 25})
    .then(value => console.log(value));