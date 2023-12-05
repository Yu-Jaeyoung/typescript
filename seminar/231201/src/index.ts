interface User {
  "id": number;
  "name": string;
  "username": string;
  "email": string;
  "address": Address;
  "phone": string;
  "website": string;
  "company": Company;
}

type Address = {
  "street": string;
  "suite": string;
  "city": string;
  "zipcode": string;
  "geo": Geo;
}

type Geo = {
  "lat": string;
  "lng": string;
}

type Company = {
  "name": string;
  "catchPhrase": string;
  "bs": string;
}


async function read(): Promise<User> {
  return await fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json());
}

read()
  .then(result => console.log(result))
  .catch(e => console.error(e))
  .finally(() => console.log("done"));