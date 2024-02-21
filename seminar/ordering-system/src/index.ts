import {
  orderedMenu,
  pickNumber,
  userInput,
} from "./functions.ts";

import {
  close,
  log,
  mainView,
  menuListView,
  menuListWithNumberView,
  orderedAmount,
  orderedMenuListView,
  orderNumberView,
} from "./view/view.ts";

import {
  Menu,
} from "./menu/types.ts";

async function orderingSystem(): Promise<void> {
  let answer = "";
  let orderedMenus: Menu[] = [];
  let orderedMenusCount: number[] = [];

  while (answer !== "5") {
    mainView();
    answer = await pickNumber("번호를 입력하시오 : ");

    switch (answer) {
      case "1":
        menuListView();
        break;

      case "2":
        menuListWithNumberView();
        orderedMenus.push(orderedMenu(parseInt(await pickNumber("주문할 음식의 번호 : "))));
        orderedMenusCount.push(parseInt(await pickNumber("주문할 음식의 갯수 : ")));
        break;

      case "3":
        orderedMenuListView(orderedMenus, orderedMenusCount);
        break;

      case "4":
        orderedAmount();
        orderNumberView();
        orderedMenus = [];
        orderedMenusCount = [];
        break;

      case "5":
        close();
        userInput.close();
        break;

      default:
        log("잘못된 입력");
        break;
    }
  }
}

orderingSystem();
