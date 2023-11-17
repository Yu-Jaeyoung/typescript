"use strict";
async function read() {
    return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json());
}
read()
    .then(result => console.log(result))
    .catch(e => console.error(e))
    .finally(() => console.log("done"));
