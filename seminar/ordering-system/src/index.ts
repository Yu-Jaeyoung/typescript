import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const log = console.log;

type WON = number;

enum FoodCategory {
  KOREAN = "KOREAN",
  JAPANESE = "JAPANESE",
  CHINESE = "CHINESE",
  WESTERN = "WESTERN",
  ITALIAN = "ITALIAN"
}

type Menu = {
  category: FoodCategory,
  name: string,
  price: WON,
  detail: string,
}

const menuList: Menu[] = [
  {
    category: FoodCategory.KOREAN,
    name: "비빔밥",
    price: 8_000,
    detail: "비빔밥입니다.",
  }, {
    category: FoodCategory.JAPANESE,
    name: "라멘",
    price: 8_000,
    detail: "라멘입니다.",
  }, {
    category: FoodCategory.CHINESE,
    name: "훠궈",
    price: 8_000,
    detail: "훠궈입니다.",
  }, {
    category: FoodCategory.WESTERN,
    name: "햄버거",
    price: 8_000,
    detail: "햄버거입니다.",
  }, {
    category: FoodCategory.ITALIAN,
    name: "피자",
    price: 8_000,
    detail: "피자입니다.",
  },
];

function orderView(): void {
  log("1. 메뉴 확인");
  log("2. 음식 주문");
  log("3. 주문 내역 확인");
  log("4. 주문 완료하기");
}

function printMenuList(): void {
  console.log("-- 메뉴 --");
  let menuNumber = 1;

  for (let menu of menuList) {
    console.log(`${menuNumber++}. `);
    console.log("메뉴 이름 : " + menu.name);
    console.log("메뉴 카테고리 : " + menu.category);
    console.log("메뉴 가격 : " + menu.price);
    console.log("메뉴 설명 : " + menu.detail);
    console.log("-----------------------------------");
  }
}

function question(): Promise<string> {
  return new Promise((resolve) => {
    orderView();
    rl.question("번호를 입력하세요 : ", (answer) => {
      resolve(answer);
    });
  });
}

async function askQuestion(): Promise<void> {
  let answer = "";

  while (answer !== "4") {
    answer = await question();

    switch (answer) {
      case "1":
        printMenuList();
        break;

      case "2":
        log("Test 2");
        break;

      case "3":
        log("Test 3")
        break;

      case "4":
        rl.close();
        break;

      default:2
        log("잘못된 입력");
        break;
    }
  }
}

askQuestion();
