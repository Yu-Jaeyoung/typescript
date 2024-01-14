import * as readline from "readline";
import {menuList} from "./menuList.ts";

const log = console.log;

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function orderingSystemMainView(): void {
  log("1. 메뉴 확인");
  log("2. 메뉴 주문");
  log("3. 주문 내역 확인");
  log("4. 주문 완료하기.");
  log("5. 프로그램 종료하기.");
}

function printMenuList(): void {
  log("-- 메뉴를 확인합니다. --");
  log("-- 메뉴 --");

  for (let menu of menuList) {
    log("메뉴 이름 : " + menu.name);
    log("메뉴 카테고리 : " + menu.category);
    log("메뉴 가격 : " + menu.price);
    log("메뉴 설명 : " + menu.detail);
    log("-----------------------------------");
  }
}

function pickNumber(): Promise<string> {
  return new Promise((resolve) => {
    orderingSystemMainView();
    userInput.question("번호를 입력하세요 : ", (answer) => {
      resolve(answer);
    });
  });
}

function pickMenuNumber(): Promise<string> {
  return new Promise((resolve) => {
    userInput.question("메뉴 번호를 입력하세요 : ", (menuNumber) => {
      resolve(menuNumber);
    });
  });
}

function pickMenuCount(): Promise<string> {
  return new Promise((resolve) => {
    userInput.question("주문할 갯수를 입력하세요 : ", (menuCount) => {
      resolve(menuCount);
    });
  });
}

async function orderingSystem(): Promise<void> {
  let answer = "";

  while (answer !== "4") {
    answer = await pickNumber();

    switch (answer) {
      case "1":
        printMenuList();
        break;

      case "2":
        log("Test 2");
        break;

      case "3":
        log("Test 3");
        break;

      case "4":
        userInput.close();
        break;

      default:
        log("잘못된 입력");
        break;
    }
  }
}

orderingSystem();
