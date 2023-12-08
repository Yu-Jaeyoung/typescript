enum logLevel1 {
  Debug = "한글로 입력한 여러가지 경우에 대해서 transpile 결과 값이 어떻게 되는지 한번 볼까 ?",
  Info = "한글로 입력한 여러가지 경우에 대해서 transpile 결과 값이 어떻게 되는지 한번 볼까 ?",
  Error = "한글로 입력한 여러가지 경우에 대해서 transpile 결과 값이 어떻게 되는지 한번 볼까 ?",
}

console.log(logLevel1.Error);

const enum logLevel2 {
  Debug = "한글로 입력한 경우에 대해서 transpile 결과 값이 어떻게 되는지 한번 볼까 ?",
  Info = "한글로 입력한 여러가지 경우에 transpile 파일된 결과 값이 어떻게 되는지 한번 볼까 ?",
  Error = "한글로 입력한 여러가지 경우에 transpile 파일된 결과 값이 어떻게 되는지 한번 볼까 ?",
}

console.log(logLevel2.Error);

const logLevel3 = {
  Debug: "한글로 입력한 경우에 대해서 transpile 결과 값이 어떻게 되는지 한번 볼까 ?",
  Info: "한글로 입력한 여러가지 경우에 transpile 파일된 결과 값이 어떻게 되는지 한번 볼까 ?",
  Error: "한글로 입력한 여러가지 경우에 transpile 파일된 결과 값이 어떻게 되는지 한번 볼까 ?",
} as const;

type loglevel3 = typeof logLevel3[keyof typeof logLevel3]; // Union 으로 변환하는 역할

const test: loglevel3 = logLevel3.Error;

console.log(logLevel3);
console.log(test);

