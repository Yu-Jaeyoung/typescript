import {parseNumber} from "../option/parseNumber";

let value = parseNumber('1')
    .map(value => value + 1)
    .map(value => value * 2)
    .getOrElse(0)
console.log(value); // 4

value = parseNumber('hello world')
    .map(value => value + 1)     // 콜백 함수가 호출되지 않음
    .map(value => value * 2)        // 콜백 함수가 호출되지 않음
    .getOrElse(0)
console.log(value) // 0