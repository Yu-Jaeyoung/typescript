async function read(): Promise<
  {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }> {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json());
}

read()
  .then(result => console.log(result))
  .catch(e => console.error(e))
  .finally(() => console.log("done"));