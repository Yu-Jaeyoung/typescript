import {range} from "./range";

let squres: number[] = range(1, 5 + 1)
    .map((val: number) => val * val);
console.log(squres);