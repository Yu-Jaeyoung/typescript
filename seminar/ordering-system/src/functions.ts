import readline from "readline";
import {menuList} from "./menu/menuList.ts";
import {Menu} from "./menu/types.ts";

export const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function pickNumber(question: string): Promise<string> {
  return new Promise((resolve) => {
    userInput.question(question, (number) => {
      resolve(number);
    });
  });
}

export function orderedMenu(menuNumber: number): Menu {
  return menuList[menuNumber - 1];
}
