import {menuList} from "../menu/menuList.ts";
import {Menu} from "../menu/types.ts";

export const log = console.log;

let count = 1;
let amount = 0;

export function mainView(): void {
  log("1. 메뉴 확인");
  log("2. 메뉴 주문");
  log("3. 주문 내역 확인");
  log("4. 주문 완료");
  log("5. 프로그램 종료\n");
}

export function menuListView(): void {
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

export function menuListWithNumberView() {
  let menuNum = 1;
  for (let menu of menuList) {
    log("메뉴 번호 : " + menuNum++);
    log("메뉴 이름 : " + menu.name);
    log("메뉴 가격 : " + menu.price);
  }
}

export function orderedMenuListView(orderedMenus: Menu[], orderedMenusCount: number[]) {
  amount = 0;

  for (let i = 0; i < orderedMenus.length; i++) {
    log("메뉴 이름 : " + orderedMenus[i].name);
    log("메뉴 개수 : " + orderedMenusCount[i]);
    amount += orderedMenus[i].price * orderedMenusCount[i];
    log("-----------------------------------");
  }

  log(`총 주문 가격 : ${amount}원`);
}

export function close() {
  log("프로그램을 종료합니다.");
}

export function orderedAmount() {
  log(`총 주문 가격 : ${amount}`);
}

export function orderNumberView() {
  // 주문 내역이 없는 경우에도 count가 증가하고있음
  log(`번호표: ${count++}`);
}
