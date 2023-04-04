let jack = {name: 'Jack', age: 25};
for (let property in jack) {
    console.log(`${property}: ${jack[property]}`);
}