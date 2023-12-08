type Id = string | number;
type Money = number;
type Url = string;
type Ratio = number;
type Integer = number;

type Rating = {
  rate: Ratio;
  count: Integer;
}

type Product = {
  "id": Id;
  "title": string;
  "price": Money;
  "description": string;
  "category": string;
  "image": Url;
  "rate": Rating;
}

async function read(): Promise<Product> {
  return await fetch("https://fakestoreapi.com/products/1").then(response => response.json());
}

read()
  .then(result => console.log(result))
  .catch(e => console.error(e))
  .finally(() => console.log("done"));