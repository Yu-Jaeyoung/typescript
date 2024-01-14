import {menuList} from "./menuList.ts";

const log = console.log;

function orderMenu() {
  let menuNum = 1;
  for (let menus of menuList) {
    log("메뉴 번호 : ", menuNum++, " 메뉴 이름 : ", menus.name , " 메뉴 가격 : ", menus.price, "원");
  }
}

export {orderMenu};